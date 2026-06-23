import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo-2024-mcp.png";
import { Button } from "@/components/ui/button";

function BoasVindas() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white px-12 py-8">
      <Link
        to="/"
        className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border hover:bg-accent"
        aria-label="Voltar para a página inicial"
      >
        <Home className="h-5 w-5" />
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
        <img src={logo} alt="Museu Casa de Portinari" className="h-16 w-auto object-contain" />

        <h1 className="text-4xl font-bold">Bem-vindo ao Tour Virtual</h1>

        <div>
          <p className="font-semibold">Orientações:</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>Clique nas setas para mudar de ambiente</li>
            <li>Arraste o mouse na tela para mover a visão</li>
            <li>Clique nos ícones para mais detalhes</li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Button asChild size="lg">
            <Link to="/visita-virtual/tour">Ok, Continuar</Link>
          </Button>
          <Link
            to="/portinari"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Saiba mais sobre o museu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BoasVindas;
