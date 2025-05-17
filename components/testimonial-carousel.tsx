"use client"

import { MessageCircle, Star } from "lucide-react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Rina",
      message: "Enak banget! Kaya rasa, tapi tetap ringan!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmad",
      message: "Strawberry-nya bikin ketagihan. Anak saya suka banget!",
      rating: 5,
    },
    {
      id: 3,
      name: "Budi",
      message: "Teh tarik terenak yang pernah saya coba. Rasanya pas!",
      rating: 5,
    },
    {
      id: 4,
      name: "Siti",
      message: "Varian mangga favorit saya. Segar dan tidak terlalu manis.",
      rating: 4,
    },
  ]

  return (
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <Card className="border-blue-200 bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <div className="flex items-start mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-500 mr-2 shrink-0 mt-1" />
                  <p className="text-lg italic text-blue-800">"{testimonial.message}"</p>
                </div>
                <p className="text-right text-blue-600 font-medium">- {testimonial.name}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6">
        <CarouselPrevious className="relative static mr-2" />
        <CarouselNext className="relative static ml-2" />
      </div>
    </Carousel>
  )
}
