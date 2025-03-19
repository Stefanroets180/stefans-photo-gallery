import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center justify-center text-center space-y-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">A Moment in Time</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Explore a collections of photography across various categories. All images are
          optimized for the best viewing experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/nature">Nature Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/urban">Urban Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/portraits">Portrait Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/abstract-expressions-and-artistry">Abstract Expressions and Artistry</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/coffebay1.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Nature</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Breathtaking landscapes, wildlife, and natural wonders from around the world.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/nature">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/placeholder.svg?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Urban</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              City skylines, street photography, and urban architecture from metropolises worldwide.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/urban">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://stefanpix.imgix.net/eye2.webp?height=400&width=600')",
                }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Abstract Expressions and Artistry</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Encompass abstract photos, like close-ups of objects eg,
              Macro or Light paintings, Fine art, Composite photography etc.
              Something a bit more creative different and out there.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/abstract-expressions-and-artistry">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/placeholder.svg?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Portraits</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Captivating portraits showcasing the diversity and beauty of people from different cultures.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/portraits">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

