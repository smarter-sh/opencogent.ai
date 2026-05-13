import { currentYear } from '@/common/constants'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="border-t border-white/10 py-6">
      <div className="container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between md:text-start lg:px-20">
        <p className="text-sm font-mono font-medium text-default-400">
          2023 - {currentYear} © <a href="https://opencogent.ai" target="_blank" rel="noopener noreferrer">OpenCogent LLC</a>
        </p>
      </div>
    </div>
  )
}
export default Footer
