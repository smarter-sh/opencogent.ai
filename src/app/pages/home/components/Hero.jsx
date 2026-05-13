import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Hero = () => {
  return (
    <>
      <style>
        {`
        .glightbox-clean .gdesc-inner {
          padding: 5px;
        }
        .glightbox-clean .gslide-title {
          margin-bottom: 0px;
        }
      `}
      </style>
      <section
        id="home"
        className="relative overflow-hidden pb-20 pt-40"
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration={1000}
      >
        <div className="-z-1 absolute start-80 top-1/2 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none bg-primary/10" />
        <div className="-z-1 absolute end-80 top-1/2 h-14 w-14 animate-ping rounded-full bg-primary/20" />
        <div className="conainer">
          <div className="text-center">
            <div className="mt-6 flex justify-center">
              <div className="max-w-6xl">
                <h1 className="mb-6 text-5xl/tight font-medium text-default-100">
                  OpenCogent LLC
                </h1>
                <h2 className="mb-6 text-5xl/tight font-medium text-default-100">
                  AI consulting for educational institutions and business.
                </h2>
                <p className="mx-auto text-base font-medium text-default-300 lg:max-w-xl">
                  <bl className="text-left">
                  <li>
                    We're the lead developers of smarter.sh, an open source, no-code AI authoring platform
                    designed to streamline workflows and enhance productivity and data security.
                  </li>
                  <li>
                    We are consultants to business leaders on securing their deployment of AI within their organizations.
                  </li>
                  <li>
                    We develop AI-for-business training courses for universities and Fortune 500 companies.
                  </li>
                  <li>
                    Our two founders have 60+ years of AI software development experience.
                  </li>
                  </bl>
                </p>
                <div className="readthedocs flex flex-wrap justify-center gap-2 mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.smarter.sh/"
                  >
                    <img
                      src="https://img.shields.io/badge/Read%20the%20Docs-Smarter-blue?logo=readthedocs"
                      alt="Read the Docs"
                      style={{ maxWidth: '100%' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <GlightBox
                href="https://youtu.be/bfePkGzKAvw?si=HleMgMYnZMz_wuX2"
                title="Smarter LLM Tool Integrations for SQL"
                autoplayVideos={true}
                type="video"
                description="Smarter is an open-source, Docker-based extensible open-source AI resource management platform and application development framework that runs natively in Kubernetes."
              >
                <button
                  data-hs-overlay="#watchvideomodal"
                  className="relative mx-auto mt-10 flex items-center justify-center gap-2.5 rounded-full bg-primary/40 px-6 py-3.5 text-base font-medium text-white ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                >
                  <IconifyIcon icon="lucide:play" className="h-6 w-6" />
                  Watch Video
                </button>
              </GlightBox>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
