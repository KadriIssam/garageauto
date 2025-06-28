import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo Garage de la Mairie"
                width={40}
                height={40}
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <span className="font-montserrat text-lg font-bold">Garage de la Mairie</span>
            </div>
            <p className="mt-4 font-open-sans text-sm text-gray-300">
              Votre garage automobile de confiance à Gennevilliers depuis 2007.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:contact@garagedelamairie-kadri.com" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat text-base font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 font-open-sans">
              <li>
                <Link href="/services/mecanique" className="text-gray-300 hover:text-white">
                  Mécanique générale
                </Link>
              </li>
              <li>
                <Link href="/services/entretien" className="text-gray-300 hover:text-white">
                  Entretien régulier
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostic" className="text-gray-300 hover:text-white">
                  Diagnostic électronique
                </Link>
              </li>
              <li>
                <Link href="/services/carrosserie" className="text-gray-300 hover:text-white">
                  Carrosserie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat text-base font-semibold">Liens utiles</h3>
            <ul className="mt-4 space-y-2 font-open-sans">
              <li>
                <Link href="/rendez-vous" className="text-gray-300 hover:text-white">
                  Prendre rendez-vous
                </Link>
              </li>
              <li>
                <Link href="/vehicules" className="text-gray-300 hover:text-white">
                  Véhicules à vendre
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat text-base font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4 font-open-sans">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-gray-300" />
                <span className="text-gray-300">
                  4 RUE DU PUITS GUYON
                  <br />
                  92230 GENNEVILLIERS
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-gray-300" />
                <span className="text-gray-300">01 46 85 13 91 / 06 74 06 69 92</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-gray-300" />
                <span className="text-gray-300">contact@garagedelamairie-kadri.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-300">
            &copy; {new Date().getFullYear()} GARAGE DE LA MAIRIE SARL KADRI - AUTOMOBILE. Tous droits réservés.
            <Link href="/mentions-legales" className="ml-4 hover:text-white">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="ml-4 hover:text-white">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
