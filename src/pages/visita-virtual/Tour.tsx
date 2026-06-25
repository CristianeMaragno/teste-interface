import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import visitaVirtual from "@/assets/visita-virtual.png";

function Tour() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-20 items-center border-b bg-background px-8">
        <Link
          to="/"
          className="flex h-12 w-12 items-center justify-center rounded-full border hover:bg-accent"
          aria-label="Voltar para a página inicial"
        >
          <Home className="h-6 w-6" />
        </Link>
      </header>

      <img
        src={visitaVirtual}
        alt="Tour virtual do Museu Casa de Portinari"
        className="h-[calc(100vh-5rem)] w-full object-cover"
      />
    </div>
  );
}

export default Tour;
