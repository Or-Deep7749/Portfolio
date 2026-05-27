import Image from "next/image";
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f4f4f5] text-zinc-900 min-h-screen font-sans selection:bg-lime-400">
      <main className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-24 pb-16 px-6 gap-12">
        
        <div className="max-w-xl space-y-6 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 border-b-2 border-black pb-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
            <span className="text-xs font-mono text-zinc-400 ml-2">terminal.exe</span>
          </div>

          <h3 className="text-xs uppercase tracking-[0.2em] bg-lime-400 text-black font-mono font-bold px-2 py-1 inline-block border border-black">
            DESENVOLVEDOR BANCO DE DADOS
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-black font-serif tracking-tight text-black">
            Pedro Henrique
          </h1>
          
          <p className="text-zinc-700 text-base font-mono leading-relaxed text-justify">
            Construo produtos web do zero — desde a API até a interface. 
            Foco em código limpo, UX que faz sentido e entregas que não travam.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#contato" 
               className="px-6 py-3 bg-lime-400 text-black font-bold font-mono border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              [ Falar comigo ]
            </a>
            <a href="#projetos" 
               className="px-6 py-3 bg-white text-black font-bold font-mono border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              Ver projetos _
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-black rounded-full translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
          <div className="border-4 border-black rounded-full overflow-hidden bg-lime-400 relative z-10">
            <Image
              className="transition-all duration-300 object-cover"
              src="/foto.jpeg"
              alt="foto perfil"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>
      </main>

      <section className="max-w-6xl mx-auto px-6 py-16" id="projetos">
        <div className="border-b-4 border-black mb-10 flex justify-between items-end">
          <h2 className="text-3xl font-black font-mono uppercase tracking-tight bg-black text-white px-4 py-1">
            // Projetos
          </h2>
          <span className="text-sm font-mono text-zinc-500 hidden sm:inline">SELECT * FROM projects;</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
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
        <div className="border-b-4 border-black mb-10">
          <h2 className="text-3xl font-black font-mono uppercase tracking-tight bg-black text-white px-4 py-1 inline-block">
            // Habilidades
          </h2>
        </div>
        <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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