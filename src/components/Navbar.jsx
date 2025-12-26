import {cn} from "@/lib/utils";
import {Menu, X} from "lucide-react";
import {useEffect, useState} from "react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {offsetTop, offsetHeight} = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-lg shadow-lg border-b border-gray-800/50"
          : "py-5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        <a
          className="text-xl font-bold text-primary flex items-center group"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-white font-semibold">
              Full Stack
            </span>
            <span className="text-primary font-bold ml-1">
              Software Engineer
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-foreground/90 hover:text-primary transition-all duration-300 font-semibold",
                activeSection === item.href.replace("#", "") && "text-primary"
              )}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({behavior: "smooth"});
                }
              }}
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 hover:bg-gray-800/50 rounded-lg transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        {/* mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-medium">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-white/90 hover:text-primary transition-all duration-300 px-6 py-3 rounded-lg",
                  activeSection === item.href.replace("#", "") &&
                    "text-primary bg-gray-800/50"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({behavior: "smooth"});
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu footer */}
          <div className="absolute bottom-10 text-gray-400 text-sm">
            Full Stack Developer
          </div>
        </div>
      </div>
    </nav>
  );
};
