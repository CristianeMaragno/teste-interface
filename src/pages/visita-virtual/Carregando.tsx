import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Carregando() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/visita-virtual/idioma");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-medium">Carregando...</span>
        <Loader2 className="h-7 w-7 animate-spin" />
      </div>
    </div>
  );
}

export default Carregando;
