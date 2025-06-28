import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    href: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">{service.icon}</div>
        <h3 className="mb-2 text-center font-montserrat text-xl font-semibold text-navy-blue">{service.title}</h3>
        <p className="text-center text-gray-600">{service.description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href={service.href}>
            En savoir plus
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
