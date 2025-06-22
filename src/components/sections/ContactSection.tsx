
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  return (
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
  );
};

export default ContactSection;
