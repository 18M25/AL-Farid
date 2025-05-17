import Image from "next/image"
import Link from "next/link"

export function DeliveryPlatforms() {
  const platforms = [
    {
      id: 1,
      name: "GrabFood",
      logo: "/placeholder.svg?height=80&width=160",
      link: "#",
    },
    {
      id: 2,
      name: "GoFood",
      logo: "/placeholder.svg?height=80&width=160",
      link: "#",
    },
    {
      id: 3,
      name: "ShopeeFood",
      logo: "/placeholder.svg?height=80&width=160",
      link: "#",
    },
    {
      id: 4,
      name: "Tokopedia Now",
      logo: "/placeholder.svg?height=80&width=160",
      link: "#",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
      {platforms.map((platform) => (
        <Link
          key={platform.id}
          href={platform.link}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[160px] flex items-center justify-center"
        >
          <Image
            src={platform.logo || "/placeholder.svg"}
            alt={platform.name}
            width={160}
            height={80}
            className="h-auto"
          />
        </Link>
      ))}
    </div>
  )
}
