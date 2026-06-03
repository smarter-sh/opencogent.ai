import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { teamMembers } from '../data'

const INITIALS_BG_COLORS = [
  'bg-primary/20 text-primary',
  'bg-orange-500/20 text-orange-400',
  'bg-teal-500/20 text-teal-400',
  'bg-pink-500/20 text-pink-400',
  'bg-purple-500/20 text-purple-400',
  'bg-sky-500/20 text-sky-400',
]

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const TeamCard = ({ member, index }) => {
  const colorClass = INITIALS_BG_COLORS[index % INITIALS_BG_COLORS.length]

  return (
    <div
      className="flex flex-col rounded-2xl border border-white/5 bg-default-950/40 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
      data-aos="zoom-in"
      data-aos-easing="ease"
      data-aos-duration={600}
      data-aos-delay={index * 100}
    >
      {/* Headshot */}
      <div className="flex justify-center pt-8">
        <div className="relative h-28 w-28">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-28 w-28 rounded-full object-cover ring-2 ring-white/10 ring-offset-2 ring-offset-default-950"
            />
          ) : (
            <div
              className={`flex h-28 w-28 items-center justify-center rounded-full text-3xl font-semibold ring-2 ring-white/10 ring-offset-2 ring-offset-default-950 ${colorClass}`}
            >
              {getInitials(member.name)}
            </div>
          )}
          {/* Online / active indicator dot — subtle touch */}
          <span className="absolute bottom-1 end-1 h-3.5 w-3.5 rounded-full border-2 border-default-950 bg-emerald-500" />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6 pt-4 text-center">
        <h3 className="mb-1 text-xl font-semibold text-default-100">{member.name}</h3>
        <p className="mb-4 text-sm font-medium text-primary">{member.title}</p>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-default-400">{member.bio}</p>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3">
          {/* LinkedIn */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-default-300 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <IconifyIcon icon="fa-brands:linkedin-in" className="h-4 w-4" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-default-300 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <IconifyIcon icon="lucide:mail" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

const TeamGrid = () => {
  return (
    <section className="pb-24">
      <div className="container">
        {/* 4-column grid — 4 cards show above the fold */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.name} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGrid
