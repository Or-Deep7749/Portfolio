import Image from "next/image";
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen font-sans selection:bg-emerald-400 selection:text-slate-950">
      <main className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-24 pb-16 px-6 gap-12">
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="border-2 border-emerald-400/30 rounded-full overflow-hidden bg-slate-900 relative z-10 p-1">
            <Image
              className="transition-all duration-500 object-cover rounded-full group-hover:scale-105"
              src="/foto.jpeg"
              alt="foto perfil"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>

        <div className="max-w-xl space-y-6 bg-slate-900/80 backdrop-blur-md p-8 border border-slate-800 rounded-2xl shadow-2xl shadow-emerald-950/20">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="text-xs font-mono text-slate-500 ml-2">terminal.exe</span>
          </div>

          <h3 className="text-xs uppercase tracking-[0.2em] bg-emerald-500/10 text-emerald-400 font-mono font-semibold px-3 py-1.5 inline-block border border-emerald-500/30 rounded-md">
            DESENVOLVEDOR BANCO DE DADOS
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Pedro Henrique
          </h1>
          
          <p className="text-slate-400 text-base font-sans leading-relaxed">
            Construo produtos web do zero — desde a API até a interface. 
            Foco em código limpo, UX que faz sentido e entregas que não travam.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#contato" 
               className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold font-mono rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5">
              [ Falar comigo ]
            </a>
            <a href="#projetos" 
               className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold font-mono border border-slate-700 rounded-lg transition-all duration-200 hover:-translate-y-0.5">
              Ver projetos _
            </a>
          </div>
        </div>
      </main>

      <section className="max-w-6xl mx-auto px-6 py-16" id="projetos">
        <div className="border-b border-slate-800 mb-10 flex justify-between items-end pb-4">
          <h2 className="text-3xl font-bold font-mono uppercase tracking-tight text-emerald-400">
            // Projetos
          </h2>
          <span className="text-sm font-mono text-slate-500 hidden sm:inline">SELECT * FROM projects;</span>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300">
              <ProjectCard 
                title={project.title}
                description={project.description}
                techs={project.techs}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16" id="skills">
        <div className="border-b border-slate-800 mb-10 pb-4">
          <h2 className="text-3xl font-bold font-mono uppercase tracking-tight text-emerald-400 inline-block">
            // Habilidades
          </h2>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-xl">
          <Skills />
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
        <Experience />
      </section>

      <section id="contato" className="max-w-6xl mx-auto px-6 py-16">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}