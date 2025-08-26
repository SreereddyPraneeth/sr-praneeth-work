import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="pt-4 pb-20 bg-gradient-to-b from-[#0A0A0F] to-[#1A1A2E]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-[#4FC3F7] text-2xl">About Me</h2>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-[#4FC3F7]">
              <AvatarImage src="https://i.postimg.cc/7LhWMzsP/My-Photo.jpg" alt="Sree Reddy Profile Photo" className="object-cover" />
              <AvatarFallback className="bg-[#1E1E2F] text-[#4FC3F7] text-2xl font-bold">
                SR
              </AvatarFallback>
            </Avatar>
          </div>
          
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
  );
};

export default AboutSection;
