import { useState } from "react";
import { Link } from "react-router-dom";

import portinari from "@/assets/portinari.jpg";
import { Toolbar } from "@/components/Toolbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

const sections = [
  { key: "identidade", label: "Identidade" },
  { key: "biografia", label: "Biografia" },
  { key: "linha-do-tempo", label: "Linha do tempo" },
  { key: "fotos", label: "Fotos" },
] as const;

function PortinariProfile() {
  const [activeSection, setActiveSection] = useState<string>("identidade");

  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar />

      <div className="grid grid-cols-[80%_20%] gap-16 px-16 py-12">
        <div className="min-w-0 p-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Portinari</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Accordion
            type="single"
            collapsible
            value={activeSection}
            onValueChange={(value) => value && setActiveSection(value)}
            className="mt-4"
          >
            <AccordionItem value="identidade">
              <AccordionTrigger>Identidade</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-muted-foreground">
                  {placeholderText}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="biografia">
              <AccordionTrigger>Biografia</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-muted-foreground">
                  {placeholderText}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="linha-do-tempo">
              <AccordionTrigger>Linha do tempo</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-muted-foreground">
                  {placeholderText}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fotos">
              <AccordionTrigger>Fotos</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-muted-foreground">
                  {placeholderText}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <aside className="flex flex-col gap-6 border-l p-16">
          <div>
            <div className="aspect-square w-full overflow-hidden rounded-md border bg-muted">
              <img
                src={portinari}
                alt="Retrato de Portinari"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-sm font-bold">Nome completo</p>
              <p className="text-sm font-bold">Nascimento</p>
              <p className="text-sm font-bold">Informação</p>
            </div>
          </div>

          <nav>
            <ul className="mt-2 space-y-2">
              {sections.map((section) => (
                <li key={section.key}>
                  <button
                    type="button"
                    onClick={() => setActiveSection(section.key)}
                    className={cn(
                      "text-left text-sm text-muted-foreground transition-colors hover:text-foreground",
                      activeSection === section.key &&
                        "font-semibold text-foreground"
                    )}
                  >
                    {"> "}
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default PortinariProfile;
