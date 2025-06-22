
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-[#4FC3F7]">Sree Reddy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#FF9800] mb-6">
            Computer Science Engineering Student
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Specializing in AI & ML with a passion for Python, Java, and web development. 
            Currently pursuing B.Tech at Kalasalingam Academy of Research and Education.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#4FC3F7] hover:bg-[#4FC3F7]/80 text-black font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#FF9800] text-[#FF9800] hover:bg-[#FF9800] hover:text-black"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
