import React from "react"
import Layout from "@/components/Layout"
import MarkdownContent from "@/components/MarkdownContent"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AyurvedaService() {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 font-poppins text-center">
          Authentic Ayurvedic Excellence in India
        </h1>

        <Card className="max-w-4xl mx-auto p-6 shadow-card">
          <div className="relative h-80 md:h-[420px] mb-6 overflow-hidden rounded-lg">
            <img
              src="/images/Ayurveda.png"
              alt="Ayurvedic herbs and treatments"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">Our Ayurvedic Services</h2>
              <p className="mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>  
              
              
            </section>

            <MarkdownContent contentPath="/content/ayurveda.md" />

            <div className="mt-8 text-center">
              <Button
                className="bg-primary text-white hover:bg-primary/90 px-6 py-3"
                onClick={() => window.location.href = '#consultation'}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
