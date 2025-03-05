import { IntroductionSection } from "@/components/section/IntroductionSection";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-28">
      <IntroductionSection data={dataFasilitator} />
    </section>
  );
}

const dataFasilitator = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description:
      "Litbang berposisi sebagai fasilitator untuk keberhasilan dari keberlangsungan acara dari study club itu sendiri",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description:
      "Membantu dalam hal teknis pada saat acara dan menciptakan kurikulum yang relevan bagi peserta Study Club.",
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Imam Syafii",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: "Menyesuaikan proker Study Club",
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];
