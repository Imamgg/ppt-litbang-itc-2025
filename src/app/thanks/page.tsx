import { MorphingText } from "@/components/registry/magicui/MorphingText";

export default function ThanksPage() {

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <MorphingText texts={texts} />
    </div>
  );
}

const texts = ["Thank You", "Terima Kasih", "ありがとうございます", "danke schön", "谢谢", "Bedankt", "شكرًا لك"];
