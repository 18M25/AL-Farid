"use client"
import Image from "next/image"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ProductSlider() {
  const products = [
    {
      id: 1,
      name: "Teh Tarik Original",
      color: "bg-amber-800",
      textColor: "text-amber-100",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      name: "Teh Tarik Strawberry",
      color: "bg-pink-600",
      textColor: "text-pink-100",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      name: "Teh Tarik Mangga",
      color: "bg-yellow-500",
      textColor: "text-yellow-100",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 4,
      name: "Teh Tarik Melon",
      color: "bg-green-500",
      textColor: "text-green-100",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <Carousel className="w-full max-w-3xl mx-auto">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="flex flex-col items-center p-6">
              <div className={`${product.color} p-1 rounded-full mb-6 shadow-lg`}>
                <div className="bg-black rounded-full p-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="rounded-lg object-cover h-[400px] w-auto mx-auto"
                  />
                </div>
              </div>
              <h3 className={`text-2xl font-bold ${product.textColor}`}>{product.name}</h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative static mr-2 bg-white/20 hover:bg-white/30" />
        <CarouselNext className="relative static ml-2 bg-white/20 hover:bg-white/30" />
      </div>
    </Carousel>
  )
}
