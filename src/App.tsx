import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <div className="min-h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App;