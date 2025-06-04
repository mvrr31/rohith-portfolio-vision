
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-portfolio-subtext leading-relaxed">
              Highly motivated 3rd year Computer Science Student specializing in Data Science with strong programming and machine learning skills, eager to contribute to innovative projects and learn from industry leaders.
            </p>
            
            <p className="text-lg text-portfolio-subtext leading-relaxed">
              I'm passionate about leveraging technology to solve real-world problems and am constantly exploring new ways to apply machine learning and data science in meaningful applications.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-portfolio-heading font-medium">Andhra Pradesh, India</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a 
                    href="mailto:rohithreddymudiam@gmail.com" 
                    className="text-portfolio-heading hover:text-accent transition-colors"
                  >
                    rohithreddymudiam@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-portfolio-heading">+91 9063315015</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
