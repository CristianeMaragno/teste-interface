import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo-2024-mcp.png";
import { Button } from "@/components/ui/button";

function BoasVindas() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white px-12 py-8">
      <Link
        to="/"
        className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-accent"
        aria-label="Voltar para a página inicial"
      >
        <Home className="h-6 w-6" />
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center gap-12 text-center">
        <img src={logo} alt="Museu Casa de Portinari" className="h-20 w-auto object-contain" />

        <h1 className="text-5xl font-bold">Bem-vindo ao Tour Virtual</h1>

        <div className="text-lg">
          <p className="font-semibold">Orientações:</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Clique nas setas para mudar de ambiente</li>
            <li>Arraste o mouse na tela para mover a visão</li>
            <li>Clique nos ícones para mais detalhes</li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button asChild size="lg" className="px-10 py-7 text-lg">
            <Link to="/visita-virtual/tour">Ok, Continuar</Link>
          </Button>
          <Link
            to="/portinari"
            className="text-base text-muted-foreground underline-offset-4 hover:underline"
          >
            Saiba mais sobre o museu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BoasVindas;
