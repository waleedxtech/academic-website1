
import Section from '@/components/ui/Section';
import Image from 'next/image';

interface HighlightItem {
  value: string;
  label: string;
  gradient: string;
  textClass: string;
  darkGradient: string;
  darkTextClass: string;
}

const highlightData: HighlightItem[] = [
  {
    value: "1st",
    label: "Class Rank",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    textClass: "text-blue-600",
    darkGradient: "dark:from-blue-900/80 dark:to-blue-950/80",
    darkTextClass: "dark:text-blue-400",
  },
  {
    value: "3.91",
    label: "GPA/4.00",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    textClass: "text-green-600",
    darkGradient: "dark:from-green-900/80 dark:to-green-950/80",
    darkTextClass: "dark:text-green-400",
  },
  {
    value: "2",
    label: "Publications",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    textClass: "text-purple-600",
    darkGradient: "dark:from-purple-900/80 dark:to-purple-950/80",
    darkTextClass: "dark:text-purple-400",
  },
];

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <Section id="about" title="About Me" subtitle="Driven by Curiosity and a Passion for Innovation" className={className}>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left Column: Text */}
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            I am a Gold Medalist Electrical Engineer with a strong academic
            background, complemented by professional and research
            experience. I graduated first out of 200+ students with a GPA of
            3.91/4.00 from the University of Lahore.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            I am highly motivated and driven by curiosity, bringing passion for
            solving complex problems along with energy, enthusiasm,
            innovative thinking, and a mindset of continuous improvement. I
            am a registered engineer with PEC under the Washington Accord.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            Beyond engineering, I manage a YouTube channel with 38K+
            subscribers and am passionate about emerging technologies like
            Agentic AI, Smart Grids, and Grid-Forming Inverters, along with
            sustainability, entrepreneurship, and personal development.
          </p>
        </div>
        {/* Right Column: Highlight Blocks & Image */}
        <div className="space-y-8">
          <div className="flex justify-center gap-4 sm:gap-6">
            {highlightData.map((item, index) => (
              <div
                key={index}
                className={`${item.gradient} ${item.darkGradient} rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-1 flex-col justify-center items-center p-2 text-center aspect-square max-w-28`}
              >
                <div className={`text-xl sm:text-2xl font-bold ${item.textClass} ${item.darkTextClass}`}>
                  {item.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-xs leading-tight mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://res.cloudinary.com/dcajabot9/image/upload/w_0.25,c_scale/v1750581915/Gold_Medal_1_square_dstekz.jpg"
                alt="Receiving gold medal at convocation"
                data-ai-hint="award ceremony"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://res.cloudinary.com/dcajabot9/image/upload/w_0.25,c_scale/v1750581916/Gold_Medal_2_square_gcg2ja.jpg"
                alt="Waleed Abdullah with gold medal"
                data-ai-hint="gold medal"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
