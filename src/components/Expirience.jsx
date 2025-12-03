const experiences = [
  {
    company: "CRUD SpA",
    role: "Backend Developer / Full Stack Dev",
    date: "MAR 2023 – PRESENT",
    stack: ["Python", "Django", "Flask", "JavaScript", "Docker", "SQL", "React", "PostgreSQL", "Sockets"],
  },
  {
    company: "Delpa Group",
    role: "Backend Developer",
    date: "NOV 2022 – JAN 2023",
    stack: ["Python", "Laravel", "PHP", "Flask", "MySQL"],
  },
  {
    company: "No Country",
    role: "Backend Developer",
    date: "JUL 2022 – NOV 2022",
    stack: ["Python", "Django", "REST API", "PostgreSQL"],
  },
  {
    company: "F8Network",
    role: "Backend Developer / Strategy Advisor",
    date: "JAN 2020 – NOV 2022",
    stack: ["JavaScript", "Flask", "Bootstrap", "Discord API"],
  },
];

const ExperienceCard = ({ company, role, date, stack }) => {
  return (
    <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition hover:border-white/20 hover:bg-white/10">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">{company}</h2>
        <span className="text-sm text-gray-300">{date}</span>
      </div>

      <h3 className="text-lg text-teal-300 mb-4">{role}</h3>

      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-white/10 text-white border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="min-h-screen w-full px-6 md:px-20 py-24 text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-3xl md:text-4xl font-semibold mb-12 tracking-wide">
        PROFESSIONAL EXPERIENCES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
