import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <Card className="bg-black text-white w-full py-16 md:py-24 relative overflow-hidden border-0 rounded-none shadow-none">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0 mb-12 md:mb-16 relative z-10">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Linear is a purpose-built tool for planning and building products
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl md:mx-0 mx-auto">
            Meet the system for modern software development.
            <br />
            Streamline issues, projects, and product roadmaps.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-200 rounded-md text-sm font-medium px-6 py-5 h-auto"
            >
              Start building
            </Button>
            <Button variant="link" asChild className="text-sm text-gray-300 hover:text-white p-0">
              <Link href="/sub-teams" className="flex items-center">
                Introducing Sub-teams <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* App illustration/screenshot using SVG instead of image */}
        <div className="Hero_heroImageContainer__E6x90 Bleed_root__EzNZN">
          <div 
            className="HeroIllustration_root__K98Vh" 
            aria-label="A screenshot of the Linear app showing the inbox and an issue that's currently in progress"
          >
            <div className="HeroIllustration_perspective__JLJ9c" aria-hidden="true">
              <div className="HeroIllustration_3d__JMg8B HeroIllustration_base__H6lR">
                <div className="HeroIllustration_3d__JMg8B HeroIllustration_sidebar__kBXAb"></div>
                <div className="HeroIllustration_inbox__yftxS" style={{opacity: 1, filter: "blur(0px)", transform: "translateZ(0px) translateX(0px)"}}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1399" 
                    height="884" 
                    fill="none" 
                    viewBox="0 0 1399 884"
                    className="w-full h-auto"
                  >
                    {/* SVG content for app illustration */}
                    <rect width="1399" height="884" fill="#1A1A1A" rx="8"/>
                    <rect width="1399" height="48" fill="#1A1A1A" rx="8"/>
                    <rect width="220" height="884" fill="#0E0E0E" rx="8"/>
                    <rect width="220" height="48" fill="#0E0E0E" rx="8"/>
                    <rect x="74" y="24" width="72" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="80" width="72" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="116" width="40" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="152" width="89" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="188" width="61" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="224" width="56" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="260" width="61" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="296" width="82" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="332" width="89" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="368" width="45" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="404" width="72" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="440" width="61" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="476" width="56" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="512" width="31" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="548" width="89" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="584" width="40" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="620" width="82" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="656" width="89" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="692" width="45" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="728" width="56" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="764" width="72" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="800" width="61" height="8" fill="#393939" rx="4"/>
                    <rect x="14" y="836" width="31" height="8" fill="#393939" rx="4"/>
                    <rect x="248" y="24" width="72" height="8" fill="#393939" rx="4"/>
                    <rect x="340" y="24" width="40" height="8" fill="#393939" rx="4"/>
                    <rect x="400" y="24" width="89" height="8" fill="#393939" rx="4"/>
                    <rect x="509" y="24" width="61" height="8" fill="#393939" rx="4"/>
                    <rect x="590" y="24" width="56" height="8" fill="#393939" rx="4"/>
                    <rect x="666" y="24" width="61" height="8" fill="#393939" rx="4"/>
                    <rect x="747" y="24" width="82" height="8" fill="#393939" rx="4"/>
                    <rect x="326" y="96" width="100" height="32" fill="#2C2C2C" rx="6"/>
                    <rect x="342" y="110" width="64" height="6" fill="#505050" rx="3"/>
                    <rect x="1111" y="96" width="32" height="32" fill="#2C2C2C" rx="6"/>
                    <rect x="1123" y="110" width="8" height="4" fill="#505050" rx="2"/>
                    <rect x="1163" y="96" width="32" height="32" fill="#2C2C2C" rx="6"/>
                    <rect x="1175" y="110" width="8" height="4" fill="#505050" rx="2"/>
                    <rect x="1215" y="96" width="32" height="32" fill="#2C2C2C" rx="6"/>
                    <rect x="1227" y="110" width="8" height="4" fill="#505050" rx="2"/>
                    <rect x="1267" y="96" width="32" height="32" fill="#2C2C2C" rx="6"/>
                    <rect x="1279" y="110" width="8" height="4" fill="#505050" rx="2"/>
                    <rect x="1319" y="96" width="32" height="32" fill="#2C2C2C" rx="6"/>
                    <rect x="1331" y="110" width="8" height="4" fill="#505050" rx="2"/>
                    {/* More SVG elements would go here */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}