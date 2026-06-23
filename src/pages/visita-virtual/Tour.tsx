import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import visitaVirtual from "@/assets/visita-virtual.png";

function Tour() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center border-b bg-background px-6">
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-accent"
          aria-label="Voltar para a página inicial"
        >
          <Home className="h-5 w-5" />
        </Link>
      </header>

      <img
        src={visitaVirtual}
        alt="Tour virtual do Museu Casa de Portinari"
        className="h-[calc(100vh-4rem)] w-full object-cover"
      />
    </div>
  );
}

export default Tour;
