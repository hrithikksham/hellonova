import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Survey from "./components/Survey";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Hero />
      <Problem />
      <Survey />
      <Footer />
    </main>
  );
}