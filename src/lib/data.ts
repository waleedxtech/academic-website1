import type { Project, BlogPost } from '@/types';

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

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-op-amps',
    title: 'Understanding Operational Amplifiers',
    date: '2023-10-26T10:00:00Z',
    summary: 'A deep dive into the fundamentals of operational amplifiers, their ideal characteristics, and common applications in circuit design.',
    content: `
      <p>Operational amplifiers (op-amps) are fundamental building blocks in analog electronics. This post explores their core principles.</p>
      <h3 class="font-headline text-xl mt-4 mb-2">Ideal Op-Amp Characteristics</h3>
      <ul>
        <li>Infinite open-loop gain</li>
        <li>Infinite input impedance</li>
        <li>Zero output impedance</li>
        <li>Infinite bandwidth</li>
        <li>Zero offset voltage</li>
      </ul>
      <p class="mt-2">While real op-amps deviate from these ideals, they provide a good starting point for analysis and design.</p>
      <h3 class="font-headline text-xl mt-4 mb-2">Common Applications</h3>
      <p>Op-amps are used in a vast array of applications, including:</p>
      <ul>
        <li>Amplifiers (inverting, non-inverting)</li>
        <li>Filters (low-pass, high-pass, band-pass)</li>
        <li>Comparators</li>
        <li>Integrators and Differentiators</li>
        <li>Voltage followers</li>
      </ul>
      <p class="mt-2">Understanding these basic configurations is key to leveraging the power of op-amps in your designs.</p>
    `,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'circuit diagram',
    tags: ['Analog Electronics', 'Op-Amps', 'Circuit Design'],
  },
  {
    slug: 'introduction-to-microcontrollers',
    title: 'An Introduction to Microcontrollers',
    date: '2023-11-15T14:30:00Z',
    summary: 'Exploring the world of microcontrollers: what they are, how they work, and their ubiquitous role in modern electronics.',
    content: `
      <p>Microcontrollers (MCUs) are small computers on a single integrated circuit. They contain a processor core, memory, and programmable input/output peripherals.</p>
      <h3 class="font-headline text-xl mt-4 mb-2">Key Components of an MCU</h3>
      <ul>
        <li>CPU (Central Processing Unit)</li>
        <li>Memory (RAM, ROM, Flash)</li>
        <li>I/O Ports (GPIOs)</li>
        <li>Timers and Counters</li>
        <li>Communication Interfaces (UART, SPI, I2C)</li>
        <li>Analog-to-Digital Converters (ADCs)</li>
      </ul>
      <p class="mt-2">MCUs are programmed to perform specific tasks, making them ideal for embedded systems. Popular families include AVR (Arduino), PIC, ARM Cortex-M (STM32, ESP32), and more.</p>
      <p class="mt-2">Their low cost, versatility, and low power consumption have led to their adoption in countless devices, from home appliances to industrial control systems.</p>
    `,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'microcontroller chip',
    tags: ['Embedded Systems', 'Microcontrollers', 'Electronics'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(b => b.slug === slug);
}
