import { Video } from "lucide-react";
import { Link } from "react-router-dom";

import fachada from "@/assets/fachada.jpg";
import { Toolbar } from "@/components/Toolbar";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar />
      <div className="relative flex-1">
        <img
          src={fachada}
          alt="Fachada do Museu Casa de Portinari"
          className="h-[calc(100vh-5rem)] w-full object-cover"
        />
        <Button
          asChild
          size="lg"
          className="absolute right-10 top-10 gap-3 rounded-full bg-orange-600 px-8 py-7 text-lg font-semibold text-white shadow-xl shadow-black/30 hover:bg-orange-700 hover:shadow-2xl"
        >
          <Link to="/visita-virtual/carregando">
            <Video className="h-6 w-6" />
            Faça uma visita ao museu virtual
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
