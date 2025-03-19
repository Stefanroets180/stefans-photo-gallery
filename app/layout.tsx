import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stefan's Photo Gallery",
  description: "A beautiful photo gallery with masonry grid and light-gallery",
}

export default function RootLayout({
  children,
  nature,
  urban,
  portraits,
  abstract_expressions_and_artistry,  

}: {
  children: React.ReactNode
  nature: React.ReactNode
  urban: React.ReactNode
  portraits: React.ReactNode
  abstract_expressions_and_artistry: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
              {nature}
              {urban}
              {portraits}
              {abstract_expressions_and_artistry}
            </main>
            <footer className="py-6 border-t">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                © {new Date().getFullYear()} Stefan Roets Photography. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'