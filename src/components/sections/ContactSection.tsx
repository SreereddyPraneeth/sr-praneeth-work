
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Praneeth', // Your name
      };

      await emailjs.send(
        'service_idekzkh', // Your service ID
        'template_mu4gsgy', // Your template ID
        templateParams,
        'ksq50eDnV0TTyXxzM' // Your public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className="bg-[#252540] border-[#4FC3F7]/20 text-white placeholder:text-gray-400"
                  required
                />
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  className="bg-[#252540] border-[#4FC3F7]/20 text-white placeholder:text-gray-400"
                  required
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-[#252540] border-[#4FC3F7]/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#4FC3F7] hover:bg-[#4FC3F7]/80 text-black font-semibold disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
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
