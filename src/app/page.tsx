import { Header } from "@/components/header";
import { About, Contact, Footer, Hero, ReviewsSection, Services } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ReviewsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
