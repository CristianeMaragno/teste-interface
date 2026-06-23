import { Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const languages = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

function SelecaoIdioma() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white px-8">
      <Link
        to="/"
        className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border hover:bg-accent"
        aria-label="Voltar para a página inicial"
      >
        <Home className="h-5 w-5" />
      </Link>

      <div className="text-center">
        <h1 className="text-2xl font-bold">Selecione o idioma</h1>
        <h1 className="text-2xl font-bold">Selección de idioma</h1>
        <h1 className="text-2xl font-bold">Selezione della lingua</h1>
        <h1 className="text-2xl font-bold">Select the language</h1>
      </div>

      <div className="mt-12 flex gap-8">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => navigate("/visita-virtual/boas-vindas")}
            className="flex flex-col items-center gap-3"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border text-3xl">
              {language.flag}
            </span>
            <span className="rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
              {language.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelecaoIdioma;
