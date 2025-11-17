import { Button } from "@/components/ui/button";
import {
  Code2,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Apple,
  Dumbbell,
  Heart,
  Palette,
  Book,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

interface CategoryButtonsProps {
  onSelectCategory: (prompt: string) => void;
}

const categories = [
  {
    icon: Code2,
    label: "Coding Help",
    prompt: "I need help with coding. Can you assist me with programming questions, debug code, or explain concepts?",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    label: "Study Assistant",
    prompt: "I need help with studying. Can you help me understand topics, create study plans, or explain concepts?",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Briefcase,
    label: "Business Ideas",
    prompt: "I want to explore business ideas. Can you help me brainstorm, validate ideas, or create business strategies?",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    label: "Trading & Finance",
    prompt: "I need guidance on trading and financial planning. Can you help me understand markets, strategies, or investment basics?",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Apple,
    label: "Diet Planning",
    prompt: "I need help with diet and nutrition. Can you suggest meal plans, explain nutritional concepts, or help with healthy eating?",
    gradient: "from-lime-500 to-green-500",
  },
  {
    icon: Dumbbell,
    label: "Workout Plans",
    prompt: "I want to create a workout routine. Can you help me design exercise plans, explain techniques, or suggest fitness goals?",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Heart,
    label: "Mental Health",
    prompt: "I need support with mental wellness. Can you provide stress management tips, mindfulness techniques, or emotional support?",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Palette,
    label: "Creative Projects",
    prompt: "I want to work on creative projects. Can you help with design ideas, creative writing, or artistic concepts?",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Book,
    label: "Learning Path",
    prompt: "I want to learn something new. Can you create a learning roadmap, suggest resources, or guide my learning journey?",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Target,
    label: "Goal Setting",
    prompt: "I need help setting and achieving goals. Can you help me create actionable plans, track progress, or stay motivated?",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    label: "Productivity",
    prompt: "I want to improve my productivity. Can you suggest time management techniques, productivity tools, or efficiency hacks?",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: Sparkles,
    label: "General Help",
    prompt: "I have a general question or need assistance with various topics. Can you help me?",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export const CategoryButtons = ({ onSelectCategory }: CategoryButtonsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-w-6xl mx-auto">
      {categories.map((category, idx) => (
        <Button
          key={idx}
          onClick={() => onSelectCategory(category.prompt)}
          variant="outline"
          className="h-auto flex-col gap-3 p-6 border-2 border-border hover:border-primary transition-all duration-300 group hover:shadow-glow animate-fade-in bg-card/50 backdrop-blur-sm"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          <div
            className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            <category.icon className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm font-semibold text-center group-hover:text-primary transition-colors">
            {category.label}
          </span>
        </Button>
      ))}
    </div>
  );
};
