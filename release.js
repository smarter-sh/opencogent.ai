/*---------------------------------------------------------
 * usage:      deploy production build of smarter.sh ReactJ
 *             app to AWS S3 bucket.
 *
 *             https://gist.github.com/kellyrmilligan/e242d3dc743105fe91a83cc933ee1314
 *
 *             1. Build the React application
 *             2. Upload to AWS S3
 *             3. Invalidate all items in the AWS Cloudfront CDN.
 *
 * Note: requires node v24 or later.
 *---------------------------------------------------------*/

import { execSync } from 'child_process'
import { APP_CONFIG } from './src/shared/constants.js'

console.log(`Domain Name: ${APP_CONFIG.root_domain}`)

const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
console.log(`Releasing branch: ${branch}`)

let s3Path = 's3://reactjs.' + branch + '.' + APP_CONFIG.root_domain + '/'
console.log(`S3 Path: ${s3Path}`)

let cloudfrontPaths = '/*'
let distributionID = 'EK9P7FVG98DOT'

if (branch === 'alpha') {
  distributionID = 'EK9P7FVG98DOT'
} else if (branch === 'beta') {
  distributionID = 'ADD-ME-PLEASE'
} else if (branch === 'main') {
  distributionID = 'EGHXVGILDI0ZZ'
} else {
  throw new Error(`Unknown branch: ${branch}`)
}

execSync('yarn build', { stdio: 'inherit' })
execSync(`aws s3 sync ./dist/ ${s3Path} --acl public-read --delete`, {
  stdio: 'inherit',
})
execSync(
  `aws cloudfront create-invalidation --distribution-id ${distributionID} --paths "${cloudfrontPaths}"`,
  { stdio: 'inherit' }
)
