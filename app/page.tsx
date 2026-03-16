"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import IntroOverlay from "./components/IntroOverlay";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const skillGroups = [
    {
      title: "Languages",
      icon: "01",
      items: [
        "Java",
        "Python",
        "SQL",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
      ],
    },
    {
      title: "Development",
      icon: "02",
      items: [
        "Android Development",
        "Android Studio",
        "Firebase",
        "React",
        "Next.js",
        "Git",
        "Testing",
        "OOP",
        "Software Architecture",
      ],
    },
    {
      title: "Design",
      icon: "03",
      items: [
        "Wireframing",
        "Prototyping",
        "UX Research",
        "Usability Testing",
        "Heuristic Evaluation",
        "Interaction Design",
        "User Flows",
        "HCI",
      ],
    },
    {
      title: "Analytics",
      icon: "04",
      items: [
        "Excel",
        "Tableau",
        "Data Analysis",
        "Data Cleaning",
        "Data Visualization",
        "Statistics",
        "Trend Analysis",
        "Reporting",
        "Documentation",
        "Insights Communication",
      ],
    },
  ];

  const leadershipSkills = [
    "Team Coordination",
    "Program Planning",
    "Resident Support",
    "Conflict Navigation",
    "Mentorship",
    "Event Execution",
    "Communication",
    "Documentation",
    "Decision-Making",
    "Community Building",
    "Accountability",
    "Cross-Functional Collaboration",
  ];

  const computingCourses = [
    {
      course: "CMPUT 301",
      title: "Introduction to Software Engineering",
      desc: "Team-based software development, testing, architecture, design decisions, and documentation.",
    },
    {
      course: "CMPUT 302",
      title: "Introduction to Human-Computer Interaction",
      desc: "User-centered design, prototyping, usability evaluation, and interface thinking.",
    },
    {
      course: "CMPUT 467",
      title: "Machine Learning II",
      desc: "Advanced machine learning methods, model understanding, and data-driven reasoning.",
    },
    {
      course: "CMPUT 204",
      title: "Algorithms I",
      desc: "Core algorithmic thinking, efficiency, complexity, and problem-solving foundations.",
    },
  ];

  const dataCourses = [
    {
      course: "STAT 252",
      title: "Introduction to Applied Statistics II",
      desc: "Applied statistical reasoning, inference, and data interpretation for real-world analysis.",
    },
    {
      course: "OM 252",
      title: "Operations Management",
      desc: "Operational analysis, structured decision-making, process thinking, and quantitative business reasoning.",
    },
    {
      course: "CMPUT 291",
      title: "File and Database Management",
      desc: "SQL, relational databases, schema design, normalization, and data querying.",
    },
    {
      course: "CMPUT 200",
      title: "Ethics in Data Science & AI",
      desc: "Ethical reasoning for technology, AI systems, and responsible data use.",
    },
  ];

  const leadershipCourses = [
    {
      course: "INT D 207",
      title: "Inspired to Lead: Skills Need",
      desc: "Leadership development, communication, teamwork, and practical decision-making.",
    },
    {
      course: "SPH 200",
      title: "Introduction to Public Health",
      desc: "Public health foundations, population-level thinking, prevention, and evidence-based understanding of health systems and communities.",
    },
    {
      course: "PSYCH 241",
      title: "Social Psychology",
      desc: "Human behavior, interaction, and social influences that support stronger user and team understanding.",
    },
    {
      course: "NS 201",
      title: "Introduction to Indigenous Studies",
      desc: "Indigenous histories and perspectives that strengthen social awareness and people-centered thinking.",
    },
  ];

  const fairChanceTags = [
    "Java",
    "Android Studio",
    "Firebase",
    "Testing",
    "User Flows",
    "UI Design",
  ];

  const dreamscapeTags = [
    "Heuristic Evaluation",
    "UX Analysis",
    "Usability Review",
    "Documentation",
  ];

  const advisingTags = [
    "Wireframing",
    "Paper Prototyping",
    "User Flows",
    "Interaction Design",
  ];

  const careerFlowTags = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Dashboard UI",
    "LocalStorage",
  ];

  const whiteButton =
    "rounded-[1.65rem] border border-white/20 bg-white text-slate-900 px-6 py-3 font-medium shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white/90 hover:shadow-[0_14px_38px_rgba(255,255,255,0.22)]";

  const sectionCard =
    "h-full rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.08)]";

  return (
    <>
      {showIntro && <IntroOverlay />}

      <main
        className={`min-h-screen overflow-x-hidden bg-[#050816] text-white transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.10),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_24%),linear-gradient(to_bottom,#02040f,#050816,#081227)]" />
        <div className="fixed inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />

        <section className="mx-auto max-w-7xl px-6 py-6">
          <nav className="sticky top-4 z-50 mx-auto mb-10 flex w-fit items-center justify-center rounded-full border border-white/10 bg-black/40 px-5 py-2.5 shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="hidden flex-wrap items-center justify-center gap-2 md:flex">
              {[
                ["#about", "About"],
                ["#education", "Education"],
                ["#experience", "Experience"],
                ["#skills", "Skills"],
                ["#projects", "Projects"],
                ["#coursework", "Courses"],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full px-3 py-2 text-sm text-white/70 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <section className="relative min-h-[88vh] overflow-hidden rounded-[2.5rem] border border-white/8 bg-black/20 px-8 py-12 md:px-12 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_60%_20%,rgba(59,130,246,0.14),transparent_26%),linear-gradient(120deg,rgba(255,255,255,0.05),transparent_28%,transparent_65%,rgba(59,130,246,0.05))]" />
            <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-white/6 blur-[120px]" />
            <div className="absolute right-[14%] top-[18%] h-[360px] w-[360px] rounded-full bg-blue-500/12 blur-[130px]" />
            <div className="absolute bottom-20 left-12 h-px w-[40%] bg-gradient-to-r from-cyan-400/80 via-blue-500/40 to-transparent" />
            <div className="absolute bottom-16 left-12 h-24 w-[42%] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_58%)]" />

            <div className="relative z-10 grid min-h-[72vh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-4xl">
                <p className="fade-up text-sm uppercase tracking-[0.42em] text-white/55">
                  Computer Science Student • Software • UX • Analytics
                </p>

                <h1 className="mt-8 text-7xl font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-8xl md:text-[7rem]">
                  <span className="hero-word block">Shivanshi</span>
                  <span className="hero-word block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                    Makkar
                  </span>
                </h1>

                <p className="fade-up fade-delay-1 mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                  Building thoughtful software, data-informed solutions, and
                  user-centered experiences.
                </p>

                <div className="fade-up fade-delay-2 mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/shivanshi-makkar"
                    target="_blank"
                    rel="noreferrer"
                    className={whiteButton}
                  >
                    LinkedIn
                  </a>

                  <a
                    href="/resume_swe.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={whiteButton}
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="code-window relative mx-auto w-full max-w-xl">
                <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0b1120]/95 shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/90" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
                      <span className="h-3 w-3 rounded-full bg-green-400/90" />
                    </div>
                    <p className="text-sm text-white/50">developer.ts</p>
                    <div className="w-12" />
                  </div>

                  <div className="overflow-x-auto p-6 md:p-8">
                    <pre className="text-sm leading-8 text-white/80 md:text-[15px]">
                      <code>
                        <span className="text-purple-300">const</span>{" "}
                        <span className="text-blue-200">developer</span>{" "}
                        <span className="text-white/70">=</span>{" "}
                        <span className="text-white/80">{"{"}</span>
                        {"\n  "}
                        <span className="text-cyan-300">name</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-emerald-300">
                          "Shivanshi Makkar"
                        </span>
                        ,
                        {"\n  "}
                        <span className="text-cyan-300">role</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-emerald-300">
                          "Computer Science Student"
                        </span>
                        ,
                        {"\n  "}
                        <span className="text-cyan-300">university</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-emerald-300">
                          "University of Alberta"
                        </span>
                        ,
                        {"\n  "}
                        <span className="text-cyan-300">interests</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-white/80">[</span>
                        <span className="text-emerald-300">"Software"</span>,{" "}
                        <span className="text-emerald-300">"UX"</span>,{" "}
                        <span className="text-emerald-300">"Analytics"</span>
                        <span className="text-white/80">]</span>,
                        {"\n  "}
                        <span className="text-cyan-300">graduation</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-orange-300">2027</span>,
                        {"\n  "}
                        <span className="text-cyan-300">building</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-emerald-300">
                          "Thoughtful digital experiences"
                        </span>
                        ,
                        {"\n  "}
                        <span className="text-cyan-300">status</span>
                        <span className="text-white/70">:</span>{" "}
                        <span className="text-emerald-300">
                          "Open to opportunities"
                        </span>
                        {"\n"}
                        <span className="text-white/80">{"}"}</span>
                        <span className="text-white/70">;</span>
                        <span className="cursor text-blue-200">|</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-24">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                  About Me
                </p>

                <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                  Building at the intersection of software, design, and impact.
                </h2>

                <p className="mt-8 max-w-3xl whitespace-pre-line text-lg leading-9 text-white/65">
                  {`I am a Computer Science student at the University of Alberta with a strong interest in UI/UX design, data analysis, and leadership.

Through my work in software projects and collaborative teams, I focus on designing user-centered digital experiences and using data to better understand problems and inform decisions.

I enjoy combining technical development with thoughtful design and strong collaboration, creating systems that are both functional and intuitive while contributing meaningfully within teams.`}
                </p>

                <p className="mt-6 max-w-3xl text-lg leading-9 text-white/65">
                  I care about creating thoughtful systems and digital
                  experiences, whether that means building an app, improving a
                  user flow, or translating technical ideas into stronger
                  product decisions.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(37,99,235,0.10)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/shivanshi.png"
                      alt="Portrait of Shivanshi Makkar"
                      fill
                      className="object-cover object-center contrast-110 brightness-95"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.34),rgba(2,6,23,0.02))]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="py-24">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                Education
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                Academic background
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
                My academic foundation in computing, analytics, and
                user-centered thinking.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.05] p-8 shadow-[0_0_55px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/20">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                    2023 — 2027
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="mt-2 text-lg text-white/60">
                    University of Alberta
                  </p>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    Studying computer science with coursework in software
                    development, databases, machine learning, human-computer
                    interaction, statistics, and analytical decision-making.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-5 md:items-end">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/75">
                    Edmonton, Alberta
                  </div>

                  <div className="relative h-16 w-40 overflow-hidden">
                    <Image
                      src="/uofa-logo.png"
                      alt="University of Alberta logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="py-24">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                Experience
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                Timeline & impact
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
                Experience across student leadership, analytics, and technical
                work where structure, communication, and execution matter.
              </p>
            </div>

            <div className="grid items-stretch gap-8 md:grid-cols-2">
              <article
                className={`${sectionCard} from-white/[0.03] to-blue-500/[0.05]`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                      Aug 2025 — Present
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white">
                      Senior Resident Assistant
                    </h3>
                    <p className="mt-2 text-white/55">University of Alberta</p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                    Leadership
                  </span>
                </div>

                <div className="mt-6 space-y-3 text-white/65">
                  <p>
                    Coordinate residence programming and support student
                    community engagement in a high-responsibility campus
                    environment.
                  </p>
                  <p>
                    Mentor resident assistants and support operational
                    communication, documentation, and team coordination.
                  </p>
                  <p>
                    Use community trends and resident needs to inform
                    programming decisions and follow-through.
                  </p>
                  <p>
                    Handle time-sensitive situations with professionalism,
                    prioritization, and calm decision-making.
                  </p>
                </div>
              </article>

              <article className="h-full rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.08)]">
                <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                  Leadership Skills
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white">
                  Beyond technical work
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {leadershipSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>

              <article
                className={`${sectionCard} from-white/[0.03] to-blue-500/[0.03]`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                      May 2024 — Aug 2024
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white">
                      Data Analyst Intern
                    </h3>
                    <p className="mt-2 text-white/55">
                      Reliance Jio • Delhi, India
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                    Industry
                  </span>
                </div>

                <div className="mt-6 space-y-3 text-white/65">
                  <p>
                    Analyzed operational and customer datasets to identify
                    reporting needs, trends, and workflow inefficiencies.
                  </p>
                  <p>
                    Cleaned, validated, and organized structured data to improve
                    reporting quality and clarity.
                  </p>
                  <p>
                    Contributed to Excel-based reporting workflows and
                    communicated findings for better business decisions.
                  </p>
                  <p>
                    Collaborated across teams in a fast-paced environment using
                    quantitative and analytical thinking.
                  </p>
                </div>
              </article>

              <article className="h-full rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.05] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.08)]">
                <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                  Highlights
                </p>

                <div className="mt-5 space-y-4 text-white/65 leading-8">
                  <p>
                    I combine technical development, user-centered design, and
                    data analysis to build thoughtful and practical digital
                    solutions.
                  </p>
                  <p>
                    My work spans software projects, analytics, and student
                    leadership, where collaboration, structure, and
                    communication drive meaningful outcomes.
                  </p>
                  <p>
                    I enjoy solving problems where technology, people, and
                    design intersect, especially when the goal is to make an
                    experience more intuitive, useful, and impactful.
                  </p>
                  <p>
                    Across academic projects, internships, and leadership roles,
                    I bring a balanced approach that values execution,
                    organization, empathy, and strong attention to detail.
                  </p>
                  <p>
                    I am especially interested in opportunities where I can
                    contribute to software, product, or analytics work while
                    continuing to grow as a thoughtful builder and collaborator.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="skills" className="py-24">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                Skills
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                Technical toolkit
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
                A blend of software, design, and analytical skills I use to
                build thoughtful digital experiences.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="group rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-[0.2em] text-blue-200/60">
                      {group.icon}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-300/70 shadow-[0_0_20px_rgba(147,197,253,0.8)]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition group-hover:border-blue-300/20 group-hover:text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="py-24">
  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.34em] text-white/40">
      Projects
    </p>
    <h2 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
      Selected work
    </h2>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
      Technical, research, and design work focused on usability,
      fairness, and structured problem-solving.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    <article className="flex h-full flex-col rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-blue-500/[0.05] p-8 shadow-[0_0_60px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_65px_rgba(37,99,235,0.14)]">
      <div className="flex items-start justify-between gap-5">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70">
          Android • Firebase
        </span>
      </div>

      <h3 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white">
        FairChance Event Lottery System
      </h3>

      <p className="mt-5 text-lg leading-8 text-white/65">
        An Android application designed to make event registration more fair
        through lottery-based participant selection, waitlist logic, and
        Firebase-backed workflows.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {fairChanceTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="mb-3 font-semibold text-white">Highlights</p>
        <ul className="space-y-2 text-sm leading-7 text-white/65">
          <li>• Implemented lottery-based participant selection logic</li>
          <li>• Built Firebase-backed event and user data workflows</li>
          <li>• Developed waitlist and role-based management flows</li>
          <li>• Contributed to Android UI structure and user experience</li>
          <li>• Supported testing and software design decisions</li>
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-8">
        <a
          href="https://github.com/CMPUT301F25binary1/binary1"
          target="_blank"
          rel="noreferrer"
          className={whiteButton}
        >
          GitHub Repo
        </a>

        <a
          href="https://github.com/CMPUT301F25binary1/binary1/wiki/Final-UI-Mockup-Storyboard"
          target="_blank"
          rel="noreferrer"
          className={whiteButton}
        >
          Look at UI Mockup
        </a>
      </div>
    </article>

    <article className="flex h-full flex-col rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.10)]">
      <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70">
        Web App • Product Design
      </span>

      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-white">
        CareerFlow Job Application Tracker
      </h3>

      <p className="mt-4 text-lg leading-8 text-white/65">
        A modern job application and networking tracker built to help users
        organize recruiting workflows, monitor pipeline stages, manage
        contacts, and view dashboard insights in one place.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {careerFlowTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="mb-3 font-semibold text-white">Highlights</p>
        <ul className="space-y-2 text-sm leading-7 text-white/65">
          <li>• Built a dashboard-first experience for tracking recruiting progress</li>
          <li>• Added application, contact, and recent activity management flows</li>
          <li>• Developed a modular component architecture using React, Next.js, and reusable UI components</li>
          <li>• Implemented application pipeline tracking across stages like Applied, Interview, Offer, and Rejected</li>
          <li>• Built dashboard analytics including interview rate, offer rate, and activity insights</li>
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-8">
        <a
          href="https://github.com/Shivanshi0705/careerflow.git"
          target="_blank"
          rel="noreferrer"
          className={whiteButton}
        >
          GitHub Repo
        </a>

        <a
          href="https://careerflow-app.vercel.app/login"
          target="_blank"
          rel="noreferrer"
          className={whiteButton}
        >
          Live Project
        </a>
      </div>
    </article>

    <article className="flex h-full flex-col rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.10)]">
      <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70">
        HCI • UX Evaluation
      </span>

      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-white">
        Dreamscape Heuristic Evaluation
      </h3>

      <p className="mt-4 text-lg leading-8 text-white/65">
        Evaluated a game-based literacy platform using Nielsen heuristics and
        interface analysis to identify usability issues and recommend clearer
        interaction improvements.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {dreamscapeTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-8">
        <a
          href="https://drive.google.com/drive/folders/1uxMgcphiJcaLTWjhZku5qYoBCMOx9bVW"
          target="_blank"
          rel="noreferrer"
          className={whiteButton}
        >
          View Evaluation
        </a>
      </div>
    </article>

    <article className="flex h-full flex-col rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.10)]">
      <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70">
        Product Design • Prototyping
      </span>

      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-white">
        Academic Advising Prototype
      </h3>

      <p className="mt-4 text-lg leading-8 text-white/65">
        Designed a low-fidelity planning system to help students and advisors
        better understand academic standing, progress, and multi-year course
        planning decisions.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {advisingTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-8">
        <a
          href="https://drive.google.com/drive/folders/1Kt_g-DT6uV6WLnP5BFmZvK3WQq_H1j57"
          target="_blank"
          rel="noreferrer"
          className={whiteButton}
        >
          View Paper Prototype
        </a>
      </div>
    </article>
  </div>
</section>

          <section id="coursework" className="py-24">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">
                Courses
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                Relevant courses
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
                Coursework supporting my background in software, databases,
                machine learning, analytics, and product thinking.
              </p>
            </div>

            <div className="grid items-start gap-6 xl:grid-cols-3">
              <article className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.08)]">
                <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                  Computing
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white">
                  Software & systems
                </h3>

                <div className="mt-6 space-y-4">
                  {computingCourses.map((item) => (
                    <div
                      key={item.course}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:bg-white/[0.05]"
                    >
                      <p className="text-lg font-semibold text-white">
                        {item.course} — {item.title}
                      </p>
                      <p className="mt-2 leading-7 text-white/65">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.08)]">
                <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                  Data & Analytics
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white">
                  Quantitative foundation
                </h3>

                <div className="mt-6 space-y-4">
                  {dataCourses.map((item) => (
                    <div
                      key={item.course}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:bg-white/[0.05]"
                    >
                      <p className="text-lg font-semibold text-white">
                        {item.course} — {item.title}
                      </p>
                      <p className="mt-2 leading-7 text-white/65">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-blue-500/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:shadow-[0_0_55px_rgba(37,99,235,0.08)]">
                <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                  Leadership & Behaviour
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white">
                  People & Systems
                </h3>

                <div className="mt-6 space-y-4">
                  {leadershipCourses.map((item) => (
                    <div
                      key={item.course}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:bg-white/[0.05]"
                    >
                      <p className="text-lg font-semibold text-white">
                        {item.course} — {item.title}
                      </p>
                      <p className="mt-2 leading-7 text-white/65">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}