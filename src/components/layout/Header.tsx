import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/GenBrightSchoolLogo.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer group">
          <img src={logo} alt="GenBright Logo" className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Admissions", "Learning", "Campus", "Banyare"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-black text-base uppercase font-medium tracking-wider transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-black after:transition-all after:duration-300 pb-1"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-300 text-gray-800 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
            Visit
          </button>
          <button 
            className="md:hidden text-gray-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white backdrop-blur-xl border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {["Admissions", "Learning", "Campus", "Banyare"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-black text-xl uppercase font-medium tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 rounded-full border border-gray-300 text-gray-800 text-center font-medium hover:bg-black hover:text-white transition-all">
            Visit
          </button>
        </div>
      )}
    </header>
  );
}
