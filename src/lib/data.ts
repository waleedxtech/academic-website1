import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'resistance-butt-welding',
    title: 'Designed a high-current transformer, validated through simulations and Finite Element Analysis (FEA), developed mechanical components, and built a functional hardware prototype.',
    shortDescription: 'Designed a high-current transformer, validated through simulations and Finite Element Analysis (FEA), developed mechanical components, and built a functional hardware prototype.',
    longDescription: "The Resistance Butt Welding Machine was designed as a simplified and cost-effective solution tailored for local bulk production in cost-sensitive manufacturing environments. The aim was to introduce an economical alternative to complex commercial welding systems without compromising core functionality.\n\nTo ensure relevance and practicality, market research and an extensive literature review were conducted. This analysis helped identify the limitations of existing solutions, such as high cost, complexity, and limited adaptability for local manufacturing needs. Based on these insights, a new design approach was formulated that prioritized efficiency, affordability, and ease of fabrication.\n\nAt the heart of the system is a high-current transformer, which was custom-designed to deliver the required welding current. Its performance was validated through computer-based simulations and Finite Element Analysis (FEA), ensuring thermal and magnetic stability under operational conditions. The transformer was engineered to be compact yet powerful enough to support the resistance welding process reliably.\n\nIn addition to the electrical design, the mechanical structure of the machine was developed from the ground up. This included designing the frame, electrode holders, and the actuation mechanism necessary for the welding operation. Emphasis was placed on structural integrity and operational repeatability to ensure consistent weld quality across multiple uses.\n\nA functional prototype of the complete system was fabricated and tested, successfully demonstrating its capability to perform resistance butt welding operations. The project not only showcased the technical feasibility of a low-cost welding solution but also provided hands-on experience in transformer design, mechanical engineering, and practical system integration. The resulting machine serves as a viable option for small-scale industries and local manufacturers seeking affordable welding equipment for mass production.",
    imageUrl: 'https://res.cloudinary.com/dcajabot9/image/upload/v1750576104/Project_10_FYP_zfamz3.jpg',
    imageHint: 'welding machine industrial',
    technologies: ['FEA (ANSYS Maxwell)', 'Transformer Design', 'Mechanical Design', 'Prototyping', 'Circuit Simulation'],
    details: 'The project involved comprehensive market research and literature review to identify gaps in existing technologies. A key component was the design of a high current transformer, meticulously validated through computer simulations including Finite Element Analysis. The mechanical structure and operational mechanism for welding were also designed and developed as part of this project. The findings and development were presented at an international conference.',
    // repoUrl: 'https://github.com/yourusername/resistance-butt-welding', // Add actual link if available
  },
  {
    slug: 'solid-state-dc-breaker',
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    shortDescription: 'Proposed and implemented a fast, low-loss solid-state DC circuit breaker with reclosing and rebreaking capabilities.',
    longDescription: 'Proposed a novel solid-state DC circuit breaker addressing control and stability challenges in DC power systems. It features low conduction loss, quick reclosing, and rebreaking capability. Operating modes and performance were verified through Simulink/MATLAB simulations. The breaker is designed to interrupt and clear faults within approximately 200 µs, significantly reducing potential damage. It also incorporated a recharging mechanism for the commutation capacitor, enabling rebreaking capability. This work was presented at an international conference.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'circuit breaker electronics',
    technologies: ['Simulink/MATLAB', 'Power Electronics', 'Circuit Design', 'Fault Interruption', 'Control Systems'],
    details: 'The solid-state DC circuit breaker was designed for fast operation to improve system protection, enabling the use of lower-specification components and minimizing electrical losses. The design included a recharging mechanism for the commutation capacitor, a feature absent in conventional DC circuit breakers, allowing for rebreaking capabilities. Performance was validated through extensive simulations.',
    // repoUrl: 'https://github.com/yourusername/solid-state-dc-breaker', // Add actual link if available
  },
  {
    slug: 'dc-ac-inverter',
    title: 'DC to AC Converter (Inverter)',
    shortDescription: 'Designed, simulated, and implemented a PCB-based inverter for DC to AC power conversion with variable-frequency output.',
    longDescription: 'This project involved the complete lifecycle of a DC to AC inverter, from design and simulation to PCB implementation. The inverter provides variable-frequency AC output, suitable for various applications requiring controlled power conversion.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'inverter circuit pcb',
    technologies: ['PCB Design', 'Power Electronics', 'Simulation (Multisim/Proteus)', 'Inverter Design', 'Circuit Implementation'],
    details: 'The focus was on creating an efficient and reliable inverter. The design was simulated extensively before fabricating a PCB and implementing the hardware for testing and validation of variable-frequency output capabilities.',
  },
  {
    slug: 'magnetic-levitation-system',
    title: 'Magnetic Levitation System',
    shortDescription: 'Developed an analog PID controller circuit and levitation system, achieving stable levitation of a metallic object.',
    longDescription: 'A hands-on project to understand and implement control systems principles. An analog PID controller circuit was designed and built to control electromagnets, successfully achieving stable levitation of a metallic object by precisely managing magnetic fields.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'levitating object magnet',
    technologies: ['Analog PID Control', 'Control Systems', 'Electromagnetism', 'Circuit Design', 'Sensors'],
    details: 'The core of the system is an analog PID controller that adjusts current to an electromagnet based on feedback from a sensor detecting the object\'s position. Fine-tuning the PID parameters was crucial for achieving stable levitation.',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
}
