import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    rating: number
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="mb-6 text-gray-600">"{testimonial.content}"</p>
        <div>
          <p className="font-montserrat font-semibold text-navy-blue">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
