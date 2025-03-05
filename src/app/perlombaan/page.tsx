import { IntroductionSection } from "@/components/section/IntroductionSection";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-28">
      <IntroductionSection data={dataPerlombaan} />
    </section>
  );
}

const dataPerlombaan = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description:
      "Untuk Memberikan Informasi lomba kepada Seluruh anggota muda UKMFT-ITC dalam bidang teknologi. Serta memberikan bimbingan dan arahan kepada seluruh anggota lomba",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description:
      "Bisa menciptakan prestasi-prestasi bagi UKMFT-ITC dan pengalaman lomba bagi yang mengikuti lomba",
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Muhammad Ainul Fuady",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: "selama satu periode kepengurusan dan lomba gemastik",
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];
