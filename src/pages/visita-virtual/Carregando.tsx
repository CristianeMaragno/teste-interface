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
      <div className="flex items-center gap-3">
        <span className="text-lg font-medium">Carregando...</span>
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    </div>
  );
}

export default Carregando;
