import PageMetaData from '@/components/PageMetaData'
import Background1 from '@/components/Background1'
import TopNavbar from '@/components/TopNavbar'
import Footer from '@/components/Footer'
import Hero from './components/Hero'
import TeamGrid from './components/TeamGrid'

const Team = () => {
  return (
    <>
      <PageMetaData title="Team" />
      <Background1 />
      <TopNavbar />
      <main>
        <Hero />
        <TeamGrid />
      </main>
      <Footer />
    </>
  )
}

export default Team
