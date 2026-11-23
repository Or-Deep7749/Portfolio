export default function Contact(){
    return(
        <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
            <div className="space-y-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-emerald-400">// Entre em contato</h2>
                <p className="text-slate-400 font-sans text-base">Aberto a projetos freelancer e oportunidades CLT.</p>
            </div>
            <div className="flex flex-col space-y-3 font-mono text-sm text-slate-300">
                <a href="mailto:souza01pedro04@gmail.com" className="hover:text-emerald-400 transition-colors cursor-pointer w-fit">souza01pedro04@gmail.com</a>
                <a href="https://github.com/Or-Deep7749" className="hover:text-emerald-400 transition-colors cursor-pointer w-fit">Github.com/</a>
                <a  href="https://www.linkedin.com/in/pedro-henrique-souza-silva-67a552314/" className="hover:text-emerald-400 transition-colors cursor-pointer w-fit">Linkedin.com/</a>
            </div>
            </div>
        </div>
    )
}