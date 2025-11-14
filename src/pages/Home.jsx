
import { Navbar, HeroSection, AboutSection, ContactSection, Footer } from "../components"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <Navbar />
      <main>
        <HeroSection/>
        {/* <AboutSection/>
        <ContactSection/> */}
      </main>

      <Footer />
    </div>
  )
}
