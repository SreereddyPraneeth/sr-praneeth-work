import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    href: "#about",
    label: "About"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-sm border-b border-[#4FC3F7]/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-[#4FC3F7]">Praneeth </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-gray-300 hover:text-[#4FC3F7] transition-colors">
                {item.label}
              </a>)}
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-[#4FC3F7]/20">
            {navItems.map(item => <a key={item.href} href={item.href} className="block py-2 text-gray-300 hover:text-[#4FC3F7] transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;