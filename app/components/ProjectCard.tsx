import { FaGithub } from "react-icons/fa"

type ProjectProps = {
    title: string
    description: string
    techs: string[]
    github?: string
}

export default function ProjectCard({title,description,techs,github}:ProjectProps){
    return(
    <div className="min-w-0 bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:bg-slate-800/40 transition duration-300 space-y-4 flex flex-col justify-between h-full">
        <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed break-words">{description}</p>
        </div>
        <div className="space-y-4 pt-2">
            <div className="flex flex-wrap gap-2">{techs.map((tech,index)=>(
                <span key={index} className="text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                    {tech}
                </span>
            ))}</div>
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-emerald-400 transition-colors pt-2 border-t border-slate-800/80 w-full">
                    <FaGithub className="text-base"/>
                    <span>GitHub Repository</span>
                </a>
            )}
        </div>
    </div>
    )
}