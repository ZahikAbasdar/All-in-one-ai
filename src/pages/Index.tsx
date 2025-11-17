import { ChatInterface } from "@/components/ChatInterface";
import { AboutModal } from "@/components/AboutModal";

const Index = () => {
  return (
    <div className="relative">
      <AboutModal />
      <ChatInterface />
    </div>
  );
};

export default Index;
