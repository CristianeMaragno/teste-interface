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
          className="h-[calc(100vh-4rem)] w-full object-cover"
        />
        <Button
          asChild
          size="lg"
          className="absolute right-6 top-6 gap-2 rounded-full bg-orange-600 px-6 py-6 text-base font-semibold text-white shadow-xl shadow-black/30 hover:bg-orange-700 hover:shadow-2xl"
        >
          <Link to="/visita-virtual/carregando">
            <Video className="h-5 w-5" />
            Faça uma visita ao museu virtual
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
