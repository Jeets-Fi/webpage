import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-4 sm:px-8">
          <div className="w-full sm:max-w-2xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-8 sm:mb-12">
              <span className="text-black block sm:inline">Welcome to </span>
              <span className="text-[#931E1F] block sm:inline">Jeet Agent: Your</span>
              <span className="text-[#931E1F] block sm:inline">Resilient Trading Partner!</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link
                href="https://console.jeets.fi"
                className="inline-flex px-8 py-4 bg-black text-white rounded-full text-xl hover:bg-black/90 transition-colors"
              >
                Try Jeets
              </Link>
              <Link
                href="#story"
                className="inline-flex px-8 py-4 border-2 border-black rounded-full text-xl hover:bg-black/5 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] mx-auto sm:mx-0">
            <Image
              src="https://raw.githubusercontent.com/TnsaAi/jeets-urls-images/refs/heads/main/image1.png"
              alt="Daruma doll illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full h-px bg-black/10 my-32" />

        <section id="story" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-black">The </span>
            <span className="text-[#931E1F]">Odd-Looking Doll of Power</span>
          </h2>

          <div className="rounded-[40px] border-2 border-black p-12">
            <h3 className="text-2xl font-bold mb-4 text-left">The Odd-Looking Doll of Power</h3>
            <p className="text-xl leading-relaxed text-left">
              In a world where 60% of crypto traders are Jeets, characterized by heavy speculation and volatility, having an AI agent like Jeet is crucial. We embody the spirit of the <span className="font-bold">Dharuma Doll</span>, a symbol of resilience and unwavering determination. No matter which direction the crypto market volatile swings, Jeet Agent gets right back up to support your journey toward victory!
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-black/10 my-32" />

        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-[40px] border-2 border-black p-8">
              <p className="text-xl leading-relaxed">
                Fall Down Seven, Get Up Eight, with Jeet Agent, you'll learn to navigate the crypto landscape confidently, ensuring that no market dip keeps you down for long.
              </p>
            </div>
            <div className="rounded-[40px] border-2 border-black p-8">
              <p className="text-xl leading-relaxed">
                Iron Willed Determination, being bottom heavy is a sign of strength! Our agent embodies Iron willed resolve, dedicated to ensuring Jeets achieve their trading aspirations.
              </p>
            </div>
          </div>
          <div className="relative w-full sm:w-[600px] h-[400px] sm:h-[600px] mx-auto">
            <Image
              src="https://raw.githubusercontent.com/TnsaAi/jeets-urls-images/refs/heads/main/image3.png"
              alt="Three Daruma dolls"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        <div className="w-full h-px bg-black/10 my-32" />

        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-black">Why Jeet Agent is </span>
            <span className="text-[#931E1F]">Your Winning Edge</span>
          </h2>
          <div className="relative">
            <div className="text-[180px] font-bold text-[#931E1F]/10 leading-none">JEETS.FI</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
                {["On-Chain Insights", "Sentiment Scraping", "Market Volume", "Trend Analysis", "Visual Insights"].map((feature) => (
                  <div
                    key={feature}
                    className="bg-white border-2 border-black rounded-full px-6 py-3 text-lg font-medium"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-black/10 my-32" />

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-black">Let's </span>
            <span className="text-[#931E1F]">Rise Together</span>
          </h2>
          <p className="text-xl mb-16">It's time to transform volatility into opportunity!</p>
          
          <h3 className="text-2xl mb-8">Our AI equips you to:</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square rounded-full border-2 border-black p-12 flex items-center justify-center">
              <p className="text-2xl font-bold leading-tight">
                Win Fearlessly: Don't let FUD dictate your trading decisions!
              </p>
            </div>
            <div className="aspect-square rounded-full border-2 border-black p-12 flex items-center justify-center">
              <p className="text-2xl font-bold leading-tight">
                Stay True: Keep your focus sharp, even when the market gets turbulent.
              </p>
            </div>
          </div>
        </section>
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

