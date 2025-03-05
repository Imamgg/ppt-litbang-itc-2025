import { IntroductionSection } from "@/components/section/IntroductionSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import { Lock } from "lucide-react";

export default function WebsitePage() {
  return (
    <section className="w-full my-28">
      <IntroductionSection data={dataWebsiteITC} />
      <IntroductionSection data={dataWebsiteTecno} />
      <WebTimelineSection />
    </section>
  );
}

const dataWebsiteITC = [
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description: "Pengembangan Website ITC berupa web interaktif, modern dan memiliki banyak fitur, sebagai identitas UKMFT-ITC di dunia internet",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description: "UKMFT-ITC mempunyai website yang modern, interaktif, dan responsif",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `April - Agustus
                  21 hari membahas fitur dan teknologi yang digunakan
                  2 bulan pembelajaran teknologi
                  2 bulan eksekusi
                  9 hari testing
    `,
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 0",
  }
];

const dataWebsiteTecno = [
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description: "Pengembangan Website TECHNOTAIMENT berupa web interaktif, modern dan memiliki banyak fitur untuk mempermudah akses pendaftaran perlombaan",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description: "Proker TECHNOTAIMENT mempunyai website yang memudahkan peserta untuk daftar",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `April - Agustus
                  21 hari membahas fitur dan teknologi yang digunakan
                  2 bulan pembelajaran teknologi
                  2 bulan eksekusi
                  9 hari testing
    `,
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 0",
  }
];
