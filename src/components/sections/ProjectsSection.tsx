
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Brain Tumor Detection",
      description: "Built a Brain Tumor Detection system using CNNs to classify MRI images into glioma, meningioma, pituitary tumor, and no tumor categories with Flask web interface",
      technologies: ["Python", "CNN", "Flask", "Machine Learning"]
    },
    {
      title: "Smart Drowsiness Detection and Alert System",
      description: "Developed a real-time drowsiness detection system using computer vision to monitor facial features and send automated email notifications",
      technologies: ["Python", "OpenCV", "Computer Vision", "Email Integration"]
    },
    {
      title: "Bed Wet Monitoring System",
      description: "Developed an IoT-based Smart Bed Wet Monitoring System using moisture sensors with instant mobile alerts to caregivers",
      technologies: ["IoT", "Sensors", "Mobile Notifications", "Arduino"]
    },
    {
      title: "Health & Fitness Calculator",
      description: "A responsive web that calculates BMI, BMR, and 1-Rep Max for quick fitness insights. Built with HTML, CSS, and JavaScript, featuring responsive design, real-time form handling, and fitness formula integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
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
