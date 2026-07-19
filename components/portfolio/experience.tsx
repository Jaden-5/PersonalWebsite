import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "May 2026 — August 2026",
    title: "Software Engineer Intern",
    company: "Graphenix Development Inc.",
    companyUrl: "https://www.gdinrg.com/",
    description: "Reduced anode defect-detection pipeline runtime by 20%, modeling detection accuracy vs. resource constraints and defining team input SOP. Engineered automated multi-format data extraction ingesting 1,500+ electrode entries for electrochemical analysis.",
    technologies: ["Professional", "Data Engineering", "Software Development"],
  },
  {
    period: "September 2024 — March 2026",
    title: "Fire Direction Specialist",
    company: "Republic of Korea Army Artillery School",
    companyUrl: "#",
    description: "Trained 600+ officers annually in analyzing meteorological and artillery-performance data to optimize artillery fire models. Managed data validation and analysis process in the battalion command system.",
    technologies: ["Professional", "Data Analysis", "Military"],
  },
  {
    period: "June 2025 — December 2025",
    title: "Head Translator",
    company: "Republic of Korea Army Artillery School",
    companyUrl: "#",
    description: "Delivered translations on Tactics and Maintenance for 50+ officers from 5 countries at Korea-Army International Course. Led 8 translators in producing course materials and organizing rehearsals, ensuring structured course execution.",
    technologies: ["Presentation", "Translation", "Leadership"],
  },
  {
    period: "May 2024 — August 2024",
    title: "Research Assistant",
    company: "CMU Summer Undergraduate Research Apprenticeship",
    companyUrl: "#",
    description: "Co-developed an excel dataset on child literature, streamlining analysis process and improving data integrity 33%. Performed EDA on R to visualize bulletin data, analyzing shifts in reviewer behaviors and price across decades",
    technologies: ["Research", "Python", "Data Mining"],
  },
  {
    period: "December 2023 — May 2024",
    title: "Support and Outreach Assistant",
    company: "Carnegie Mellon University CS Academy",
    companyUrl: "https://academy.cs.cmu.edu/",
    description: "Analyzed support queries from 6000+ educators, identifying trends to guide improvements in Python curriculum. Facilitated curriculum onboarding process with Media Kits, reducing the potential user’s approval effort by 60%",
    technologies: ["Professional", "Python", "Education"],
  },
  {
    period: "June 2023 — August 2023",
    title: "Web-Development Intern",
    company: "Cedarstone",
    companyUrl: "https://cedarstone.co.kr",
    description: "Facilitated website development for a start-up business consulting firm, integrating design and functionality. Collaborated with the CI designer to construct and embed a cohesive brand identity.",
    technologies: ["Professional", "Web Development", "UI/UX"],
  },
  {
    period: "March 2022 — August 2023",
    title: "President/Founder",
    company: "Students Against Energy Poverty (SAEP)",
    companyUrl: "#",
    description: "Analyzed 4 towns in Seoul with energy poverty and submitted energy reform proposals to the City Hall. Provided 100+ servings of meals to victims of energy poverty in slum areas.",
    technologies: ["Professional", "Leadership", "Public Policy"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-4 lg:hidden">
        <span className="h-px w-8 bg-muted-foreground" />
        Experience
      </h2>

      <div className="space-y-12">
        <h3 className="text-xl font-semibold text-foreground">Work Experience</h3>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
}: {
  period: string
  title: string
  company: string
  companyUrl: string
  description: string
  technologies: string[]
}) {
  return (
    <div className="group relative grid md:grid-cols-[140px_1fr] gap-4 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground pt-1">
        {period}
      </p>
      <div className="space-y-3">
        <h3 className="font-medium leading-tight">
          {companyUrl !== "#" ? (
            <Link
              href={companyUrl}
              target="_blank"
              className="inline-flex items-baseline gap-1 text-foreground group-hover:text-primary transition-colors"
            >
              {title} · {company}
              <ArrowUpRight className="h-3.5 w-3.5 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <span className="text-foreground">
              {title} · {company}
            </span>
          )}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
