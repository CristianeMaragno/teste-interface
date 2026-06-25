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
        className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-accent"
        aria-label="Voltar para a página inicial"
      >
        <Home className="h-6 w-6" />
      </Link>

      <div className="text-center">
        <h1 className="text-3xl font-bold">Selecione o idioma</h1>
        <h1 className="text-3xl font-bold">Selección de idioma</h1>
        <h1 className="text-3xl font-bold">Selezione della lingua</h1>
        <h1 className="text-3xl font-bold">Select the language</h1>
      </div>

      <div className="mt-16 flex gap-12">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => navigate("/visita-virtual/boas-vindas")}
            className="flex flex-col items-center gap-4"
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full border text-5xl">
              {language.flag}
            </span>
            <span className="rounded-md border bg-background px-5 py-3 text-base font-medium hover:bg-accent">
              {language.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelecaoIdioma;
