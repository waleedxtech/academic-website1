import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha: IoT Sensor Network',
    shortDescription: 'A scalable IoT sensor network for environmental monitoring.',
    longDescription: 'Project Alpha involved designing and deploying a network of custom-built sensor nodes communicating over LoRaWAN. The system collects real-time data on temperature, humidity, and air quality, displayed on a web dashboard. Key challenges included power optimization for sensor nodes and robust data transmission in varied environments.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'circuit board',
    technologies: ['ESP32', 'LoRaWAN', 'Python', 'React', 'InfluxDB'],
    details: 'The sensor nodes utilize ESP32 microcontrollers with custom firmware. Data is aggregated by a gateway and processed by a Python backend before being stored in InfluxDB. The frontend dashboard is built with React.',
    repoUrl: 'https://github.com/example/project-alpha',
    liveUrl: 'https://example.com/project-alpha-live',
  },
  {
    slug: 'project-beta',
    title: 'Project Beta: Embedded Control System',
    shortDescription: 'An embedded control system for an autonomous robotic arm.',
    longDescription: 'Developed the control software for a 6-DOF robotic arm. This project focused on real-time kinematics, trajectory planning, and computer vision for object detection and manipulation. Implemented using C++ on an ARM-based microcontroller.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robotic arm',
    technologies: ['C++', 'ROS', 'OpenCV', 'ARM Cortex-M'],
    details: 'Utilized Robot Operating System (ROS) for modularity and communication. OpenCV was employed for image processing tasks. The control algorithms were optimized for real-time performance on the embedded platform.',
  },
  {
    slug: 'project-gamma',
    title: 'Project Gamma: Power Electronics Simulator',
    shortDescription: 'A web-based simulator for common power electronics circuits.',
    longDescription: 'Designed and built an interactive web application that allows users to simulate various power electronics converters (buck, boost, buck-boost). Users can adjust parameters and observe waveforms and performance metrics.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'waveform graph',
    technologies: ['JavaScript', 'HTML5 Canvas', 'Node.js', 'Math.js'],
    details: 'The simulation engine is built in JavaScript, leveraging Math.js for numerical computations. HTML5 Canvas is used for rendering waveforms. A Node.js backend handles user accounts and saved simulations (conceptual, not fully implemented for this mock).',
    liveUrl: 'https://example.com/project-gamma-live',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
}
