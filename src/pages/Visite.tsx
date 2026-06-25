import {
  Accessibility,
  Baby,
  Bike,
  Camera,
  CigaretteOff,
  ClipboardList,
  Clock,
  Dog,
  HelpCircle,
  Languages,
  MapPin,
  ParkingSquare,
  PhoneOff,
  Sticker,
  Ticket,
  Users,
  UtensilsCrossed,
} from "lucide-react";
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

const rules = [
  {
    icon: Sticker,
    text: "Uso obrigatório do adesivo de identificação durante a visita",
  },
  {
    icon: Languages,
    text: "Acessibilidade comunicacional bilíngue/trilíngue nas exposições",
  },
  {
    icon: Accessibility,
    text: "Acesso preferencial a idosos, PCD, gestantes e pais com crianças de colo",
  },
  {
    icon: Baby,
    text: "Crianças menores de 12 anos devem estar acompanhadas pelos responsáveis",
  },
  {
    icon: UtensilsCrossed,
    text: "Proibido comer, beber ou mascar chicletes e balas dentro do museu",
  },
  {
    icon: Camera,
    text: "Permitido fotografar sem flash, somente para uso particular",
  },
  {
    icon: Dog,
    text: "Cães-guia liberados em todo o museu; pets apenas no jardim, na coleira",
  },
  {
    icon: CigaretteOff,
    text: "Proibido fumar dentro do museu",
  },
  {
    icon: PhoneOff,
    text: "Evite falar ao celular durante a visitação",
  },
  {
    icon: Users,
    text: "Capacidade interna de 20 pessoas por grupo",
  },
  {
    icon: ParkingSquare,
    text: "Estacionamento no entorno da Praça Candido Portinari",
  },
  {
    icon: Bike,
    text: "Museu com bicicletário e serviço de guarda-volumes",
  },
];

function Visite() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar />

      <div className="px-12 py-14 text-lg">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb>
            <BreadcrumbList className="text-lg text-gray-600">
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

          <div className="mt-10 grid grid-cols-[45%_55%] gap-20">
            <div>
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8" />
                <h2 className="text-2xl font-bold">
                  Horários de funcionamento
                </h2>
              </div>
              <div className="mt-3 space-y-1 text-lg text-gray-700">
                <p>Terça a domingo das 09h às 18h</p>
                <p>*Nas quartas-feiras aberto até 20h</p>
              </div>

              <div className="my-10 border-t border-dashed border-border" />

              <div className="flex items-center gap-3">
                <Ticket className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Ingresso voluntário</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-6 w-6 text-gray-700" />
                    </TooltipTrigger>
                    <TooltipContent className="text-sm">
                      O valor da entrada é livre, pague o que considerar
                      justo.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="mt-3 text-lg text-gray-700">
                Não é necessário agendamento
              </p>
            </div>

            <div className="pr-16">
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Localização</h2>
              </div>

              <div className="mt-4 overflow-hidden rounded-lg border">
                <iframe
                  title="Mapa de localização do Museu Casa de Portinari"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    address
                  )}&output=embed`}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 space-y-1 text-lg text-gray-700">
                <p>Praça Candido Portinari, 298 - Centro,</p>
                <p>Brodowski - SP, 14340-019</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-3">
              <ClipboardList className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Regras e orientações</h2>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              {rules.map((rule) => {
                const Icon = rule.icon

                return (
                  <div
                    key={rule.text}
                    className="flex aspect-square flex-col items-center justify-center gap-3 rounded-lg border p-6 text-center"
                  >
                    <Icon className="h-9 w-9" />
                    <p className="text-base text-gray-700">{rule.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visite;
