import { FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

import { Toolbar } from "@/components/Toolbar";
import { Button } from "@/components/ui/button";

function PaginaNaoPrototipada() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar />

      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
        <FileQuestion className="h-20 w-20 text-muted-foreground" />
        <h1 className="text-4xl font-bold">Página em construção</h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Esta página não está sendo prototipada.
        </p>
        <Button asChild size="lg" className="mt-4 px-8 py-6 text-base">
          <Link to="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  );
}

export default PaginaNaoPrototipada;
