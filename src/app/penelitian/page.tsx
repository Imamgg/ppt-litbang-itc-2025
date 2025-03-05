import { IntroductionSection } from "@/components/section/IntroductionSection";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-28">
      <IntroductionSection data={dataPenelitian} />
    </section>
  );
}

const dataPenelitian = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description:
      "Litbang mengikuti perlombaan karya tulis ilmiah yang nantinya akan dipublikasi sebagai bentuk publikasi akademik guna mendorong inovasi dan pengembangan keilmuan di lingkungan mahasiswa.",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description:
      "Publikasi karya tulis ilmiah, peningkatan budaya riset, dan pengembangan keterampilan menulis mahasiswa.",
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Wildan Haydar Amru",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: "Selama satu periode kepengurusan UKMFT-ITC",
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];
