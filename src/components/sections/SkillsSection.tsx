import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircuitBoard, Cpu, Code, Zap, Wrench, Lightbulb } from 'lucide-react'; // Using Wrench as a generic tools icon

const skillsData = [
  {
    category: "Hardware & Circuit Design",
    icon: <CircuitBoard className="h-8 w-8 text-primary mb-2" />,
    skills: ["Analog Circuits", "Digital Circuits", "PCB Design (Altium, Eagle)", "Signal Processing", "Power Electronics"]
  },
  {
    category: "Embedded Systems",
    icon: <Cpu className="h-8 w-8 text-primary mb-2" />,
    skills: ["Microcontrollers (ARM, AVR, ESP32)", "RTOS", "Firmware Development (C/C++)", "Sensor Integration", "IoT Protocols (MQTT, LoRaWAN)"]
  },
  {
    category: "Software & Programming",
    icon: <Code className="h-8 w-8 text-primary mb-2" />,
    skills: ["Python", "C/C++", "MATLAB", "LabVIEW", "Version Control (Git)"]
  },
  {
    category: "Tools & Technologies",
    icon: <Wrench className="h-8 w-8 text-primary mb-2" />,
    skills: ["Oscilloscope", "Spectrum Analyzer", "Soldering & Prototyping", "SPICE Simulation", "CAD Tools"]
  }
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="My Engineering Toolbox" className="bg-muted/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skillCategory) => (
          <Card key={skillCategory.category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="items-center text-center">
              {skillCategory.icon}
              <CardTitle className="font-headline text-xl">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap justify-center gap-2">
                {skillCategory.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary-foreground hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
