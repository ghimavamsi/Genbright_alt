import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Questions } from "./components/sections/Questions";
import { Philosophy } from "./components/sections/Philosophy";
import { Foundations } from "./components/sections/Foundations";
import { Storytelling } from "./components/sections/Storytelling";
import { LearningCentres } from "./components/sections/LearningCentres";
import { EmotionalHorizon } from "./components/sections/EmotionalHorizon";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Campus } from "./components/sections/Campus";
import { FounderMessage } from "./components/sections/FounderMessage";
import { FinalCTA } from "./components/sections/FinalCTA";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-white selection:bg-white/20">
      <Header />
      <main>
        <Hero />
        <Questions />
        <Philosophy />
        <Foundations />
        <Storytelling />
        <LearningCentres />
        <EmotionalHorizon />
        <WhyChooseUs />
        <Campus />
        <FounderMessage />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
