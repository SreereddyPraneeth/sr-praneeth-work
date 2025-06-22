import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const { toast } = useToast();
  
  const animatedTexts = ["Java Developer", "Python Enthusiast", "AI/ML Student", "Tech Explorer"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF9800]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4FC3F7]/10 to-[#FF9800]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0A0F]/80 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#4FC3F7] to-[#FF9800] bg-clip-text text-transparent">
              SPRK
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-white/80 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4FC3F7] to-[#FF9800] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Image with Enhanced Styling */}
            <div className="relative mx-auto mb-8 w-40 h-40 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] via-[#FF9800] to-[#4FC3F7] rounded-full animate-spin-slow opacity-75 blur-sm"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/ae05a337-1186-4edf-b749-15375496380c.png" 
                  alt="Sree Reddy Praneeth Kumar Reddy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#4FC3F7] to-[#FF9800] rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Enhanced Typography */}
            <div className="mb-6">
              <p className="text-lg md:text-xl text-white/60 mb-2 font-light tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-8xl font-black mb-2 leading-none">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Sree
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#00BCD4] to-[#FF9800] bg-clip-text text-transparent animate-pulse">
                  Reddy
                </span>
              </h1>
            </div>

            {/* Animated Role Text */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7]/20 to-[#FF9800]/20 blur-xl rounded-full"></div>
                <h2 className="relative text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#4FC3F7] to-[#FF9800] bg-clip-text text-transparent">
                  {animatedTexts[currentText]}
                </h2>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/70 leading-relaxed font-light">
              Exploring the future of{" "}
              <span className="text-[#4FC3F7] font-semibold">AI & ML</span>{" "}
              through code, creativity, and collaboration. Building tomorrow's solutions today.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={() => scrollToSection('about')}
                className="group relative bg-gradient-to-r from-[#4FC3F7] to-[#00BCD4] hover:from-[#00BCD4] hover:to-[#4FC3F7] text-black font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-[#4FC3F7]/25 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] to-[#00BCD4] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                className="group relative border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-[#4FC3F7]/50 px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://linkedin.com/in/spraneethkumar" 
                className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#4FC3F7]/50 hover:bg-[#4FC3F7]/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white/70 group-hover:text-[#4FC3F7] transition-colors duration-300" />
                <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://github.com/SreereddyPraneeth" 
                className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF9800]/50 hover:bg-[#FF9800]/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white/70 group-hover:text-[#FF9800] transition-colors duration-300" />
                <div className="absolute inset-0 bg-[#FF9800]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] to-[#FF9800] rounded-full blur opacity-50 animate-pulse"></div>
            <div className="relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 group-hover:border-[#4FC3F7]/50 transition-all duration-300">
              <ArrowDown className="text-white w-6 h-6 animate-bounce group-hover:text-[#4FC3F7] transition-colors duration-300" />
            </div>
          </div>
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#0A0A0F] to-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#4FC3F7]">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm a passionate Computer Science Engineering student specializing in AI & ML with experience in Python, Java, and HTML. 
              I enjoy exploring new tech, solving real-world problems through code, and contributing to open-source projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">B.Tech AI & ML</CardTitle>
                <CardDescription className="text-gray-300">2022 - 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Kalasalingam Academy of Research and Education</p>
                <p className="text-[#FF9800] font-semibold">CGPA: 8.06</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Intermediate (MPC)</CardTitle>
                <CardDescription className="text-gray-300">2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Narayana Junior College</p>
                <p className="text-[#FF9800] font-semibold">75%</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">SSC</CardTitle>
                <CardDescription className="text-gray-300">2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Uday Kiran EM High School</p>
                <p className="text-[#FF9800] font-semibold">99%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#4FC3F7]">Skills & Expertise</h2>
            <p className="text-lg text-gray-300">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: 'Python', level: 85 },
                  { skill: 'Java', level: 80 },
                  { skill: 'HTML/CSS', level: 75 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span>{item.skill}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#4FC3F7] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Team Collaboration', 'Learning Agility', 'Communication', 'Problem Solving', 'Open Source'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-[#4FC3F7]/20 text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-black">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#252540]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#4FC3F7]">Featured Projects</h2>
            <p className="text-lg text-gray-300">Some of my recent work and contributions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Smart Bed Wet Monitoring System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  IoT prototype using Arduino, sensors, and mobile alerts for real-time monitoring
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">Arduino</Badge>
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">IoT</Badge>
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">Sensors</Badge>
                </div>
                <Button variant="outline" className="border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-black">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Smart Drowsiness Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Python-based system using OpenCV and CNN for real-time eye tracking and alerts
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">Python</Badge>
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">OpenCV</Badge>
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">CNN</Badge>
                </div>
                <Button variant="outline" className="border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-black">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Health Fitness Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Static HTML-based application for client-side BMI and BMR calculations
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">HTML</Badge>
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">CSS</Badge>
                  <Badge variant="outline" className="border-[#FF9800] text-[#FF9800]">JavaScript</Badge>
                </div>
                <Button variant="outline" className="border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-black">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#4FC3F7]">Let's Connect</h2>
            <p className="text-lg text-gray-300">Let's build something impactful together!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#4FC3F7]">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#4FC3F7] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">sreereddypraneeth@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#4FC3F7] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">#</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91 7702595538</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="https://linkedin.com/in/spraneethkumar" className="text-[#4FC3F7] hover:text-[#FF9800] transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/SreereddyPraneeth" className="text-[#4FC3F7] hover:text-[#FF9800] transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="bg-[#1E1E2F] border-[#4FC3F7]/20">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-[#252540] border-[#4FC3F7]/20 text-white placeholder:text-gray-400"
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-[#252540] border-[#4FC3F7]/20 text-white placeholder:text-gray-400"
                    required
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="bg-[#252540] border-[#4FC3F7]/20 text-white placeholder:text-gray-400"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#4FC3F7] hover:bg-[#4FC3F7]/80 text-black font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1E1E2F] border-t border-[#4FC3F7]/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Sree Reddy Praneeth Kumar Reddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
