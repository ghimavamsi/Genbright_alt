import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Questions } from "./components/sections/Questions";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-white selection:bg-white/20">
      <Header />
      <main>
        <Hero />
        <Questions />
        {/* Spacer section to allow scrolling past the questions */}
        <div className="h-[50vh] bg-white"></div>
      </main>
    </div>
  );
}

export default App;
