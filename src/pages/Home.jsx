
import { Navbar, HeroSection, AboutSection, ContactSection, Footer, FaqSection, ServicesSecion } from "../components"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <Navbar />
      <main>
        <HeroSection/>
        <ServicesSecion/>
        {/* <AboutSection/>
        <ContactSection/> */}
        <FaqSection/>
      </main>

      <Footer />
    </div>
  )
}
