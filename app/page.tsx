import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, InstagramIcon as TiktokIcon, PhoneIcon as WhatsApp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ProductSlider } from "@/components/product-slider"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { DeliveryPlatforms } from "@/components/delivery-platforms"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* BLACK SECTION - Gambar Produk & Logo (Slider) */}
      <section className="w-full bg-black py-16 px-4 flex flex-col items-center justify-center">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10 flex justify-center">
            <Image
              src="/placeholder.svg?height=120&width=300"
              alt="Teh Tarik Al-Farid Logo"
              width={300}
              height={120}
              className="mb-8"
            />
          </div>
          <ProductSlider />
        </div>
      </section>

      {/* WHITE SECTION - Deskripsi Bisnis & Sejarah Brand */}
      <section className="w-full bg-white py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Tentang Al-Farid</h2>
          <p className="text-lg mb-8">
            Al-Farid adalah brand lokal yang menghadirkan pengalaman teh tarik otentik dengan sentuhan rasa masa kini.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Sejarah Singkat</h3>
          <p className="text-lg mb-8">
            Nama "Al-Farid" berarti "yang unik" dalam Bahasa Arab — menggambarkan keunikan rasa dan penyajian teh kami.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Varian Rasa</h3>
          <ul className="text-lg mb-10 flex flex-col md:flex-row justify-center gap-6">
            <li className="font-medium">Teh Tarik Original</li>
            <li className="font-medium">Strawberry</li>
            <li className="font-medium">Mangga</li>
            <li className="font-medium">Melon</li>
          </ul>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Media Sosial</h3>
            <div className="flex justify-center gap-6">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Instagram className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <TiktokIcon className="h-8 w-8" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <WhatsApp className="h-8 w-8" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Facebook className="h-8 w-8" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GRAY SECTION - Video Produk */}
      <section className="w-full bg-gray-200 py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Lihat Proses Pembuatan Kami</h2>
          <div className="aspect-video bg-gray-300 mx-auto rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-600">Video Proses Pembuatan Teh Tarik Al-Farid</p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Saksikan proses tuang-teh-tinggi khas teh tarik dan momen pelanggan menikmatinya
          </p>
        </div>
      </section>

      {/* RED SECTION - Penjelasan Tiap Rasa */}
      <section className="w-full bg-red-50 py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-800">Varian Rasa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-red-200 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 h-40 bg-amber-100 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Teh Tarik Original"
                    width={120}
                    height={120}
                    className="rounded-md"
                  />
                </div>
                <CardTitle className="text-red-800">Original</CardTitle>
                <CardDescription className="mt-2">Rasa klasik, creamy, lembut di lidah</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 h-40 bg-pink-100 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Teh Tarik Strawberry"
                    width={120}
                    height={120}
                    className="rounded-md"
                  />
                </div>
                <CardTitle className="text-red-800">Strawberry</CardTitle>
                <CardDescription className="mt-2">Segar dan manis, cocok dinikmati dingin</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 h-40 bg-yellow-100 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Teh Tarik Mangga"
                    width={120}
                    height={120}
                    className="rounded-md"
                  />
                </div>
                <CardTitle className="text-red-800">Mangga</CardTitle>
                <CardDescription className="mt-2">Rasa tropis dengan aroma buah yang kuat</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 h-40 bg-green-100 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Teh Tarik Melon"
                    width={120}
                    height={120}
                    className="rounded-md"
                  />
                </div>
                <CardTitle className="text-red-800">Melon</CardTitle>
                <CardDescription className="mt-2">Ringan dan menyegarkan, cocok sore hari</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* YELLOW SECTION - Platform Penjualan */}
      <section className="w-full bg-yellow-50 py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-800">Pesan Sekarang</h2>
          <p className="text-lg mb-8 text-yellow-700">Nikmati Teh Tarik Al-Farid melalui platform favorit Anda</p>
          <DeliveryPlatforms />
        </div>
      </section>

      {/* GREEN SECTION - Apa yang Membuat Unik? */}
      <section className="w-full bg-green-50 py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Apa yang Membuat Kami Unik?</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Behind the scenes"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6 text-green-700">
                Teh Tarik Al-Farid dibuat dari bahan-bahan pilihan seperti susu premium, daun teh berkualitas, dan tanpa
                pengawet.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-green-800">Keunggulan:</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Diseduh secara tradisional (tuang-teh tinggi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Menggunakan bahan alami</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Tidak terlalu manis, seimbang</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Cocok untuk semua kalangan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE SECTION - Testimoni Pelanggan */}
      <section className="w-full bg-blue-50 py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Apa Kata Pelanggan Kami</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* PURPLE SECTION - Ajakan Membeli & Kontak */}
      <section className="w-full bg-purple-50 py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            Sudah waktunya kamu merasakan teh tarik yang sesungguhnya!
          </h2>

          <div className="mb-8">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-6 text-lg rounded-full">
              <WhatsApp className="mr-2 h-5 w-5" />
              Order via WhatsApp
            </Button>
          </div>

          <p className="text-lg text-purple-700 mb-6">Juga tersedia di platform favoritmu</p>

          <div className="flex justify-center gap-4 mb-8">
            <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/placeholder.svg?height=40&width=120" alt="GrabFood" width={120} height={40} />
            </Link>
            <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/placeholder.svg?height=40&width=120" alt="GoFood" width={120} height={40} />
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Ikuti Kami</h3>
            <div className="flex justify-center gap-6">
              <Link href="#" className="text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform">
                <Instagram className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform">
                <TiktokIcon className="h-8 w-8" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#" className="text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform">
                <WhatsApp className="h-8 w-8" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="#" className="text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform">
                <Facebook className="h-8 w-8" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PINK SECTION - Kutipan Inspiratif */}
      <section className="w-full bg-pink-50 py-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic font-serif text-pink-800 mb-4">
            "Dalam setiap tegukan, ada kehangatan, kenangan, dan kebahagiaan."
          </blockquote>
          <div className="text-pink-600 font-medium">- Teh Tarik Al-Farid -</div>
        </div>
      </section>
    </main>
  )
}
