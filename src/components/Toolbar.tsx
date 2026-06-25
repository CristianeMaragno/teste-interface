import { Search } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

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
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-20 items-center justify-between gap-6 px-10 md:px-10">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Museu Casa de Portinari"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {menuItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                location.pathname.startsWith(`${item.href}/`)

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    active={isActive}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "h-11 px-5 text-base font-normal",
                      isActive && "font-semibold text-primary"
                    )}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 shrink-0 rounded-full"
          aria-label="Buscar"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
