import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarClock } from "lucide-react"

export default function AppointmentCTA() {
  return (
    <section className="bg-navy-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-montserrat text-3xl font-bold md:text-4xl">Besoin d'un rendez-vous rapidement ?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Prenez rendez-vous en ligne en quelques clics pour l'entretien ou la réparation de votre véhicule
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-white text-navy-blue hover:bg-gray-100" asChild>
            <Link href="/rendez-vous">
              <CalendarClock className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
