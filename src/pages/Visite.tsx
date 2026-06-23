import { Clock, HelpCircle, MapPin, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

import { Toolbar } from "@/components/Toolbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const address = "Praça Candido Portinari, 298 - Centro, Brodowski - SP, 14340-019";

function Visite() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar />

      <div className="px-16 py-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Visite</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8 grid grid-cols-[45%_55%] gap-20">
          <div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5" />
              <h2 className="font-bold">Horários de funcionamento</h2>
            </div>
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              <p>Terça a domingo das 09h às 18h</p>
              <p>*Nas quartas-feiras aberto até 20h</p>
            </div>

            <div className="my-8 border-t border-dashed border-border" />

            <div className="flex items-center gap-3">
              <Ticket className="h-5 w-5" />
              <h2 className="font-bold">Ingresso voluntário</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    O valor da entrada é livre, pague o que considerar justo.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Não é necessário agendamento
            </p>
          </div>

          <div className="pr-16">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              <h2 className="font-bold">Localização</h2>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border">
              <iframe
                title="Mapa de localização do Museu Casa de Portinari"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>Praça Candido Portinari, 298 - Centro,</p>
              <p>Brodowski - SP, 14340-019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visite;
