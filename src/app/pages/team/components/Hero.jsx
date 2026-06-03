const Hero = () => {
  return (
    <section
      id="team-hero"
      className="relative overflow-hidden pb-16 pt-40"
      data-aos="zoom-out"
      data-aos-easing="ease"
      data-aos-duration={1000}
    >
      <div className="-z-1 absolute start-80 top-1/2 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none bg-primary/10" />
      <div className="-z-1 absolute end-80 top-1/2 h-14 w-14 animate-ping rounded-full bg-primary/20" />
      <div className="container">
        <div className="text-center">
          <div className="mt-6 flex justify-center">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-5xl/tight font-medium text-default-100">
                Our Team
              </h1>
              <p className="text-lg text-gray-400">
                Meet the people behind OpenCogent — experienced engineers, educators, and
                AI strategists united by a mission to make AI accessible, secure, and
                impactful for every organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
