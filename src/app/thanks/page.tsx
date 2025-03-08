import { MorphingText } from "@/components/registry/magicui/MorphingText";
import { ThanksSection } from "@/components/section/ThanksSection";

export default function ThanksPage() {

  return (
    <div className="w-full h-screen flex flex-col items-center justify-around pt-60 gap-40">
      <MorphingText texts={texts} />
      <ThanksSection />
    </div>
  );
}

const texts = ["Thank You", "Terima Kasih", "ありがとうございます", "danke schön", "谢谢", "Bedankt", "شكرًا لك"];
