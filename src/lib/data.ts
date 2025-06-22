import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'resistance-butt-welding',
    title: 'Design and Development of Resistance Butt Welding Machine',
    shortDescription: 'Designed a high-current transformer, validated through simulations and Finite Element Analysis (FEA), developed mechanical components, and built a functional hardware prototype.',
    longDescription: `The Resistance Butt Welding Machine was designed as a simplified and cost-effective solution tailored for local bulk production in cost-sensitive manufacturing environments. The aim was to introduce an economical alternative to complex commercial welding systems without compromising core functionality.\n\nTo ensure relevance and practicality, market research and an extensive literature review were conducted. This analysis helped identify the limitations of existing solutions, such as high cost, complexity, and limited adaptability for local manufacturing needs. Based on these insights, a new design approach was formulated that prioritized efficiency, affordability, and ease of fabrication.\n\nAt the heart of the system is a high-current transformer, which was custom-designed to deliver the required welding current. Its performance was validated through computer-based simulations and Finite Element Analysis (FEA), ensuring thermal and magnetic stability under operational conditions. The transformer was engineered to be compact yet powerful enough to support the resistance welding process reliably.\n\nIn addition to the electrical design, the mechanical structure of the machine was developed from the ground up. This included designing the frame, electrode holders, and the actuation mechanism necessary for the welding operation. Emphasis was placed on structural integrity and operational repeatability to ensure consistent weld quality across multiple uses.\n\nA functional prototype of the complete system was fabricated and tested, successfully demonstrating its capability to perform resistance butt welding operations. The project not only showcased the technical feasibility of a low-cost welding solution but also provided hands-on experience in transformer design, mechanical engineering, and practical system integration. The resulting machine serves as a viable option for small-scale industries and local manufacturers seeking affordable welding equipment for mass production.`,
    imageUrls: [],
    imageHints: ['welding machine industrial'],
    technologies: ['FEA (ANSYS Maxwell)', 'Transformer Design', 'Mechanical Design', 'Prototyping', 'Circuit Simulation'],
  },
  {
    slug: 'solid-state-dc-breaker',
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    shortDescription: 'Designed and developed a fast, low-loss solid-state DC circuit breaker with reclosing and rebreaking capabilities, validated through simulations and hardware testing.',
    longDescription: [
      'Developed a fast, low-loss solid-state DC circuit breaker with quick reclosing and rebreaking capabilities.',
      'Achieves low conduction loss and fast fault interruption using solid-state components.',
      'Operating modes and breaker characteristics are validated through detailed Simulink/MATLAB simulations.',
      'Hardware implementation of the circuit breaker has been successfully carried out.',
      'The breaker not only interrupts fault current but also recharges the commutation capacitor to enable rebreaking.',
      'Demonstrates rebreaking capability not available in existing DC circuit breakers.',
    ],
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576112/Project_11_SSDCCB_fieuiy.jpg'],
    imageHints: ['circuit breaker diagram'],
    technologies: ['Simulink/MATLAB', 'Power Electronics', 'Circuit Design', 'Fault Interruption', 'Control Systems'],
  },
  {
    slug: 'smart-grid-load-forecasting',
    title: 'Smart Grid Load Forecasting using Machine Learning',
    shortDescription: 'Developed a Random Forest Regressor achieving 8.16 MW MAE (4.1%) and 10.23 MW RMSE (5.1%) on 200MW load data. Engineered 5 temporal features (hour/day/month/year/holidays) and visualized predictions vs. actuals with embedded metrics. Tools: Python (scikit-learn, pandas, matplotlib).',
    longDescription: [
      'Built a Random Forest model to forecast hourly electricity demand using synthetic smart grid data',
      'Used 21,900 hourly data points (2.5 years) with seasonality and noise on a 200 MW baseline',
      'Engineered key temporal features: hour, day, month, year, and holiday indicators',
      'Model Performance: MAE of 8.16 MW (4.1%) and RMSE of 10.23 MW (5.1%)',
      'Visualized predicted vs. actual loads with performance metrics for interpretability',
      'Practical, hands-on application of core ML skills: data simulation, feature engineering, model training, and evaluation'
    ],
    imageUrls: [],
    imageHints: ['load forecast graph', 'feature importance chart'],
    technologies: ['Python', 'scikit-learn', 'pandas', 'matplotlib', 'Machine Learning'],
    repoUrl: 'https://github.com/waleedx1/Smart-Grid-Load-Forecasting-using-Machine-Learning',
  },
  {
    slug: 'dc-ac-inverter',
    title: 'DC to AC Converter (Inverter)',
    shortDescription: 'Designed, simulated, and implemented a PCB-based inverter for DC to AC power conversion with variable-frequency output.',
    longDescription: 'This project involved the complete lifecycle of a DC to AC inverter, from design and simulation to PCB implementation. The inverter provides variable-frequency AC output, suitable for various applications requiring controlled power conversion.',
    imageUrls: [],
    imageHints: ['inverter circuit pcb'],
    technologies: ['PCB Design', 'Power Electronics', 'Simulation (Multisim/Proteus)', 'Inverter Design', 'Circuit Implementation'],
  },
  {
    slug: 'magnetic-levitation-system',
    title: 'Magnetic Levitation System',
    shortDescription: 'Developed an analog PID controller circuit and levitation system, achieving stable levitation of a metallic object.',
    longDescription: 'A hands-on project to understand and implement control systems principles. An analog PID controller circuit was designed and built to control electromagnets, successfully achieving stable levitation of a metallic object by precisely managing magnetic fields.',
    imageUrls: [],
    imageHints: ['levitating object magnet'],
    technologies: ['Analog PID Control', 'Control Systems', 'Electromagnetism', 'Circuit Design', 'Sensors'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
}
