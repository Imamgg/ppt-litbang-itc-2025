import DaftarWeb from "@/components/section/DaftarWeb";
import { IntroductionSection } from "@/components/section/IntroductionSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import { Lock } from "lucide-react";

export default function WebsitePage() {
  return (
    <section className="w-full py-20">
      <DaftarWeb />
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
    description:
      "Pengembangan Website ITC berupa web interaktif, modern dan memiliki banyak fitur, sebagai identitas UKMFT-ITC di dunia internet",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description:
      "UKMFT-ITC mempunyai website yang modern, interaktif, dan responsif",
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
                  9 hari testing`,
    isList: true,
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];

const dataWebsiteTecno = [
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description:
      "Pengembangan Website TECHNOTAIMENT berupa web interaktif, modern dan memiliki  fitur untuk mempermudah akses pendaftaran perlombaan",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Output",
    description:
      "Proker TECHNOTAIMENT mempunyai website yang memudahkan peserta untuk daftar",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `7 hari membahas fitur dan teknologi yang digunakan
                  7 hari pembelajaran teknologi
                  9 hari eksekusi
                  5 hari testing
                  Menggunakan Laravel 11 & Mysql`,
    isList: true,
  },
  {
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];
