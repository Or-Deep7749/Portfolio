import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <span className="font-mono text-sm tracking-wide text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
          ph.sql
        </span>

        <ul className="flex gap-6 sm:gap-8 text-xs sm:text-sm font-mono tracking-wide">
          <li>
            <Link
              href="#projetos"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              projetos
            </Link>
          </li>

          <li>
            <Link
              href="#skills"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              skills
            </Link>
          </li>

          <li>
            <Link
              href="#experience"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              experiência
            </Link>
          </li>

          <li>
            <Link
              href="#contato"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              contato
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}