export default function Experience(){
    return(
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold font-mono uppercase tracking-tight text-emerald-400 mb-12 border-b border-slate-800 pb-4">
            // Experiências
          </h2>
            <div className="space-y-12">
                {/*Item 1*/}
                <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
                <span className="text-slate-500 font-mono text-sm pt-1">2025</span>
                <div className="transition duration-300 p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/40">
                    <h3 className="text-xl font-bold text-white">Aprendiz</h3>
                    <p className="text-slate-400 font-sans mt-3 leading-relaxed">Desenvolvimento de pequenos projetos na duração do curso técnico.</p>
                </div>
            </div>
            </div>
        </section>
    )
}