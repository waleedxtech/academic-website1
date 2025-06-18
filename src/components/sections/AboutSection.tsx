
import Section from '@/components/ui/Section';

const highlightData = [
  {
    value: "1st",
    label: "Class Rank",
    bgColor: "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800/80 dark:to-blue-950/80",
    textColor: "text-sky-600 dark:text-sky-300",
  },
  {
    value: "3.91",
    label: "GPA/4.00",
    bgColor: "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800/80 dark:to-blue-950/80",
    textColor: "text-emerald-600 dark:text-emerald-300",
  },
  {
    value: "38K+",
    label: "YouTube Subscribers",
    bgColor: "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800/80 dark:to-blue-950/80",
    textColor: "text-violet-600 dark:text-violet-300",
  },
  {
    value: "2",
    label: "Publications",
    bgColor: "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800/80 dark:to-blue-950/80",
    textColor: "text-amber-600 dark:text-amber-300",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Driven by Curiosity and a Passion for Innovation">
      <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left Column: Text */}
        <div className="md:col-span-3 space-y-5">
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
        {/* Right Column: Highlight Blocks */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {highlightData.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-5 rounded-xl text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              <p className={`text-4xl font-bold ${item.textColor}`}>
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
