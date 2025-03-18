import Link from 'next/link'
import Image from 'next/image'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
          Jeets.Fi
        </Link>
        <nav className="flex gap-6 sm:gap-8">
          <Link href="https://console.jeets.fi" className="text-lg sm:text-xl hover:opacity-80">
            Console
          </Link>
          <Link href="/pricing" className="text-lg sm:text-xl hover:opacity-80">
            Pricing
          </Link>
          <Link href="/" className="text-lg sm:text-xl hover:opacity-80 underline">
            About
          </Link>
        </nav>
      </header>

      <main className="px-8 py-16 max-w-7xl mx-auto">
        <Alert className="mb-8 border-[#931E1F]">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Jeets.Fi is not launched yet. You need to wait for a couple of days more.
          </AlertDescription>
        </Alert>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>Monthly Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">$10<span className="text-lg font-normal text-gray-600">/month</span></div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Full access to Jeet Agent
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Real-time market analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Trading insights
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#931E1F] hover:bg-[#931E1F]/90" disabled>
                Coming Soon
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>Yearly Plan</CardTitle>
              <CardDescription>Best value for committed traders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">$30<span className="text-lg font-normal text-gray-600">/year</span></div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Everything in Monthly
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Early access to new features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  75% savings vs monthly
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#931E1F] hover:bg-[#931E1F]/90" disabled>
                Coming Soon
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <div className="w-full h-px bg-black/10 mt-32" />

      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <p className="text-lg">
            Copyright 2025, <span className="text-[#931E1F]">Jeets.Fi</span> (All Rights Reserved)
          </p>
          <div className="relative w-12 h-12">
            <Image
              src="https://raw.githubusercontent.com/TnsaAi/jeets-urls-images/refs/heads/main/image1.png"
              alt="Daruma doll icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

