export default function Skills(){
    const skills = [
        "Next.js",
        "Nest.js",
        "TypeScript",
        "MySQL",
        "Git / Github",
        "GML",
        "HTML",
        "React",
        "Docker",
        "Tailwind",
        "Python"
    ]
    return(
        <section className="mt-4">
            <h2 className="text-3xl font-semibold mb-8"></h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill)=>(
                    <div key={skill} className="px-4 py-2 bg-slate-900/80 text-slate-200 font-mono text-sm rounded-lg border border-slate-700/60 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-slate-800/80 transition-all duration-200 shadow-sm">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}