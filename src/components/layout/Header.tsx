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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)]" : "bg-transparent"}`}>
      <div className={`max-w-[1400px] mx-auto px-6 transition-all duration-500 ease-in-out flex items-center justify-between ${isScrolled ? "py-2" : "py-4"}`}>
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer group">
          <img src={logo} alt="GenBright Logo" className={`w-auto object-contain transition-all duration-500 ease-in-out mix-blend-multiply ${isScrolled ? "h-10 md:h-12 translate-y-0" : "h-14 md:h-16 -translate-y-2"}`} />
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 lg:gap-10 transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : "-translate-y-2.5"}`}>
          {["LEARNING", "CAMPUS", "LIFE AT GENBRIGHT", "ADMISSIONS", "ABOUT US"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-primary hover:text-[#0066cc] text-[12px] font-semibold tracking-widest transition-colors relative"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className={`flex items-center gap-4 transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : "-translate-y-2.5"}`}>
          <button className={`hidden md:inline-flex items-center justify-center px-6 lg:px-8 rounded-full bg-primary text-white text-[13px] font-semibold tracking-wider hover:bg-[#000000] transition-all duration-500 ease-in-out ${isScrolled ? "py-2.5" : "py-3"}`}>
            BOOK A CAMPUS TOUR
          </button>
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl border-b border-[#d2d2d7]/50 py-6 px-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {["LEARNING", "CAMPUS", "LIFE AT GENBRIGHT", "ADMISSIONS", "ABOUT US"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-primary hover:text-[#0066cc] text-lg font-semibold tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-4 rounded-full bg-primary text-white text-center font-semibold tracking-wider hover:bg-[#000000] transition-colors">
            BOOK A CAMPUS TOUR
          </button>
        </div>
      )}
    </header>
  );
}
