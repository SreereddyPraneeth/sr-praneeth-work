
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Bed Wet Monitoring System",
      description: "IoT prototype using Arduino, sensors, and mobile alerts for real-time monitoring",
      technologies: ["Arduino", "IoT", "Sensors"]
    },
    {
      title: "Smart Drowsiness Detection",
      description: "Python-based system using OpenCV and CNN for real-time eye tracking and alerts",
      technologies: ["Python", "OpenCV", "CNN"]
    },
    {
      title: "Health Fitness Calculator",
      description: "Static HTML-based application for client-side BMI and BMR calculations",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#252540]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#4FC3F7]">Featured Projects</h2>
          <p className="text-lg text-gray-300">Some of my recent work and contributions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-[#1E1E2F] border-[#4FC3F7]/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#4FC3F7]">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-[#FF9800] text-[#FF9800]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-black">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
