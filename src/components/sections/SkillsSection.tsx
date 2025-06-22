
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const programmingSkills = [
    { skill: 'Python', level: 85 },
    { skill: 'Java', level: 80 },
    { skill: 'HTML/CSS', level: 75 }
  ];

  const softSkills = [
    'Team Collaboration', 
    'Learning Agility', 
    'Communication', 
    'Problem Solving', 
    'Open Source'
  ];

  return (
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
              {programmingSkills.map((item) => (
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
                {softSkills.map((skill) => (
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
  );
};

export default SkillsSection;
