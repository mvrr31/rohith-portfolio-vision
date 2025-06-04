
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary p-1">
            <div className="w-full h-full rounded-full bg-portfolio-card flex items-center justify-center text-4xl font-bold text-primary">
              R
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-portfolio-heading mb-4">
          Mudiam Veera <span className="text-accent">Rohith Reddy</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-portfolio-subtext mb-8 max-w-3xl mx-auto">
          Aspiring Data Scientist | Turning Code into Solutions
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/rohithredddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-portfolio-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-white"
          >
            <Github className="h-6 w-6" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/rohithredddy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-portfolio-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-white"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
