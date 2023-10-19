import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-gray-800 text-white h-16">
          <nav className="flex flex-row justify-around">
            <Link className="block xl:my-5 sm:my-2 md:my-5" href="/produtos/estaticas/tenis">TÊNIS</Link>
            <Link className="block xl:my-5 sm:my-2 md:my-5" href="/produtos/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link>
            <Link className="block xl:my-5 sm:my-2 md:my-5" href="/produtos/dinamicas/vestuario/camisa-xadrez">CAMISA-X</Link>
          </nav>
        </header>
  )
}
