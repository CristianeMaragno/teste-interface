import { Search } from "lucide-react"
import { Link } from "react-router-dom"

import logo from "@/assets/logo-2024-mcp.png"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Institucional", href: "/institucional" },
  { label: "Portinari", href: "/portinari" },
  { label: "Visite", href: "/visite" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Acervo", href: "/acervo" },
  { label: "Apoie", href: "/apoie" },
]

export function Toolbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between gap-4 px-8 md:px-8">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Museu Casa de Portinari"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "font-normal")}
                >
                  <Link to={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="outline"
          size="icon"
          className="shrink-0 rounded-full"
          aria-label="Buscar"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
