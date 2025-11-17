import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Info, Code2, Clock, Lightbulb, Target, Zap } from "lucide-react";

export const AboutModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 rounded-full border-primary/50 hover:border-primary hover:shadow-glow transition-all"
        >
          <Info className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            About This Project
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            Advanced AI Chat Assistant - Built with Modern Tech Stack
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Developer Info */}
          <Card className="p-6 bg-card/50 border-primary/30 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Developer</h3>
                <p className="text-lg font-medium text-primary">Zahik Abas Dar</p>
                <p className="text-muted-foreground">B.Tech CSE Student</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Designer & Full Stack Developer
                </p>
              </div>
            </div>
          </Card>

          {/* Development Time */}
          <Card className="p-6 bg-card/50 border-primary/30 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Development Timeline</h3>
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">2-3 weeks</span> of intensive development
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Including research, design, development, testing, and optimization
                </p>
              </div>
            </div>
          </Card>

          {/* Technologies Used */}
          <Card className="p-6 bg-card/50 border-primary/30 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Technologies & Tools</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">React + TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Lovable Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Lovable AI Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Supabase Functions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Google Gemini 2.5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Vite Build Tool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">shadcn/ui Components</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Challenges */}
          <Card className="p-6 bg-card/50 border-primary/30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Challenges Faced</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implementing real-time streaming responses with proper error handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Optimizing UI animations for smooth 60fps performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Creating a responsive design system with glassmorphism effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrating multiple backend services seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Managing rate limits and error states gracefully</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Purpose & Vision */}
          <Card className="p-6 bg-card/50 border-primary/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Purpose & Vision</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Present Solutions:</h4>
                    <p>
                      Providing developers with instant access to AI-powered assistance for coding,
                      debugging, and technical problem-solving. Fast, accurate responses optimized
                      for technical queries.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Future Goals:</h4>
                    <p>
                      Expanding to include code generation, project scaffolding, documentation
                      generation, and multi-language support. Integration with popular IDEs and
                      development tools for seamless workflow enhancement.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Innovation:</h4>
                    <p>
                      Combining cutting-edge AI with modern web technologies to create an
                      accessible, fast, and reliable development assistant that adapts to
                      individual coding styles and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
          <p className="text-sm text-center text-muted-foreground">
            Built with 💙 by <span className="text-primary font-semibold">Zahik Abas Dar</span> as
            a demonstration of modern full-stack development capabilities
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
