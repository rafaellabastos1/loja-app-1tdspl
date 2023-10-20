import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-gray-800 text-white h-16">
          <nav className="flex flex-row justify-around">
            <Link className="" href="/produtos/estaticas/tenis">TÊNIS</Link>
            <Link className="" href="/produtos/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link>
            <Link className="" href="/produtos/dinamicas/vestuario/camisa-xadrez">CAMISA-X</Link>
          </nav>
        </header>
  )
}
