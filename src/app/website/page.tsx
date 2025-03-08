import DaftarWeb from "@/components/section/DaftarWeb";
import { IntroductionSection } from "@/components/section/IntroductionSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { Table } from "@radix-ui/themes";
import { BookOpen, Calendar, PiggyBank, Target, Users } from "lucide-react";

export default function WebsitePage() {
  return (
    <section className="w-full pt-20 snap-y snap-mandatory">
      <DaftarWeb />
      <IntroductionSection data={dataWebsiteITC} />
      <IntroductionSection data={dataWebsiteTecno} />
      <IntroductionSection data={dataWebsiteEcommerce} />
      <WebTimelineSection />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </section>
  );
}

const items = [
  { link: "/", text: "Home", image: "https://picsum.photos/600/400?random=1" },
  { link: "/perlombaan", text: "Perlombaan", image: "https://picsum.photos/600/400?random=2" },
  { link: "/fasilitator", text: "Fasilitator", image: "https://picsum.photos/600/400?random=3" },
  { link: "/penelitian", text: "Penelitian", image: "https://picsum.photos/600/400?random=4" },
];

const dataWebsiteITC = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Website UKMFT-ITC",
    description: "Pengembangan Website ITC berupa web interaktif, modern dan memiliki banyak fitur. Web tersebut diharapkan bisa menjadi identitas UKMFT-ITC di dunia internet ",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["UKMFT-ITC mempunyai website yang modern, interaktif, dan responsif serta bisa membawa UKMFT-ITC agar bisa lebih dikenal didunia internet", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `April - Agustus
                  21 hari membahas fitur dan teknologi yang digunakan
                  2 bulan pembelajaran teknologi
                  2 bulan eksekusi
                  9 hari testing`,
    isList: true,
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    isTable: true,
    tableData: (
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nama Anggaran</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nominal</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Hosting (1 Tahun)</Table.RowHeaderCell>
            <Table.Cell>Rp531.000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Total</Table.RowHeaderCell>
            <Table.Cell>Rp531.000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
];

const dataWebsiteTecno = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Website Technotaiment",
    description: "Pengembangan Website TECHNOTAIMENT berupa web interaktif, modern dan memiliki fitur untuk mempermudah akses pendaftaran perlombaan serta bisa memperluas jangkauan audience lewat internet",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["Proker TECHNOTAIMENT mempunyai website yang memudahkan peserta untuk menjangkau dan berpartisipasi", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `Maret - April
                  7 hari membahas fitur dan teknologi yang digunakan
                  7 hari pembelajaran teknologi
                  9 hari eksekusi
                  5 hari testing
                  Menggunakan Laravel 11 & Mysql`,
    isList: true,
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    isTable: true,
    tableData: (
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nama Anggaran</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nominal</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Hosting (2 Bulan)</Table.RowHeaderCell>
            <Table.Cell>Rp25.000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
];

const dataWebsiteEcommerce = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Website E-Commerce",
    description: "Pembuatan Website E-COMMERCE dengan fitur yang mempermudah pelanggan untuk navigasi dan melakukan pembelian produk dari UKMFT-ITC ",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["UKMFT-ITC mempunyai website penjualan yang bisa mempermudah UKMFT-ITC meningkatkan produktivitas dalam hal penjuala produk", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `Agustus - Oktober
                  7 hari membahas fitur dan
                  teknologi yang digunakan
                  14 hari pembelajaran teknologi
                  33 hari eksekusi
                  6 hari testing`,
    isList: true,
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    isTable: true,
    tableData: (
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nama Anggaran</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nominal</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Hosting</Table.RowHeaderCell>
            <Table.Cell>Disatuin sama Web ITC</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Hosting</Table.RowHeaderCell>
            <Table.Cell>Disatuin sama Web ITC</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
];
