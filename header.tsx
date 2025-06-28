"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Mettre à jour les liens de navigation pour correspondre au site original
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Entretien", href: "/services/entretien" },
    { name: "Mécanique", href: "/services/mecanique" },
    { name: "Freinage", href: "/services/freinage" },
    { name: "Véhicule", href: "/vehicules" },
    { name: "Contact", href: "/contact" },
    { name: "Espace Client", href: "/espace-client/connexion" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo Garage de la Mairie"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-montserrat text-lg font-bold text-navy-blue">Garage de la Mairie</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-montserrat text-sm font-medium text-gray-700 transition-colors hover:text-navy-blue"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 bg-transparent"
            onClick={() => {
              // Utiliser window.location.href pour la compatibilité avec l'environnement de développement
              window.open("tel:0146851391", "_self")
            }}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">01 46 85 13 91</span>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="mr-2 bg-transparent"
            onClick={() => {
              window.open("tel:0146851391", "_self")
            }}
          >
            <Phone className="h-4 w-4" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-montserrat text-base font-medium text-gray-700 transition-colors hover:text-navy-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
