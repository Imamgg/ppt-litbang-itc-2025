import { IntroductionSection } from "@/components/section/IntroductionSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full pt-28 snap-y snap-mandatory">
      <IntroductionSection data={dataPerlombaan} />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </section>
  );
}

const items = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/website', text: 'Website', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/fasilitator', text: 'Fasilitator', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/penelitian', text: 'Penelitian', image: 'https://picsum.photos/600/400?random=4' }
];

const dataPerlombaan = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description: "Untuk Memberikan Informasi lomba kepada Seluruh anggota muda UKMFT-ITC dalam bidang teknologi. Serta memberikan bimbingan dan arahan kepada seluruh anggota lomba",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["Bisa menciptakan prestasi-prestasi bagi UKMFT-ITC dan pengalaman lomba bagi yang mengikuti lomba", "Seluruh anggota UKMFT-ITC"],
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
