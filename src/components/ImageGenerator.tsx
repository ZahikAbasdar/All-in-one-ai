import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Image as ImageIcon, Download } from "lucide-react";
import { toast } from "sonner";

export const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    setImageUrl(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        if (response.status === 429) {
          toast.error("Rate limit exceeded. Please try again later.");
        } else if (response.status === 402) {
          toast.error("Payment required. Please add credits.");
        } else {
          toast.error(error.error || "Failed to generate image");
        }
        return;
      }

      const data = await response.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
        toast.success("Image generated successfully!");
      } else {
        toast.error("No image returned");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate image");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `generated-${Date.now()}.png`;
    link.click();
  };

  return (
    <Card className="p-6 bg-card/50 border-primary/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-gradient-primary">
          <ImageIcon className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold">AI Image Generator</h3>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            onKeyDown={(e) => e.key === "Enter" && !isGenerating && generateImage()}
            className="flex-1 bg-background border-border focus:border-primary"
            disabled={isGenerating}
          />
          <Button
            onClick={generateImage}
            disabled={isGenerating || !prompt.trim()}
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Generate"
            )}
          </Button>
        </div>

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/30 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <p className="text-muted-foreground animate-pulse">Generating your image...</p>
          </div>
        )}

        {imageUrl && !isGenerating && (
          <div className="space-y-3 animate-slide-up">
            <div className="relative rounded-lg overflow-hidden border-2 border-primary/30 shadow-glow">
              <img
                src={imageUrl}
                alt="Generated"
                className="w-full h-auto"
              />
            </div>
            <Button
              onClick={downloadImage}
              variant="outline"
              className="w-full border-primary/50 hover:border-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Image
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
