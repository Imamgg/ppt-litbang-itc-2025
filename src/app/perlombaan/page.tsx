import LanyardCard from "@/components/3D/LanyardCard";
import { IntroductionSection } from "@/components/section/IntroductionSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { Table } from "@radix-ui/themes";
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
  { link: "/", text: "Home", image: "https://picsum.photos/600/400?random=1" },
  { link: "/website", text: "Website", image: "https://picsum.photos/600/400?random=2" },
  { link: "/fasilitator", text: "Fasilitator", image: "https://picsum.photos/600/400?random=3" },
  { link: "/penelitian", text: "Penelitian", image: "https://picsum.photos/600/400?random=4" },
];

const dataPerlombaan = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Info Lomba dan Bimbingan Lomba",
    description: "Untuk Memberikan Informasi lomba yang valid dan menarik kepada Seluruh anggota muda UKMFT-ITC dalam bidang teknologi. Serta memberikan bimbingan dan arahan pendaftaran kepada seluruh anggota lomba",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["Bisa menciptakan prestasi-prestasi bagi UKMFT-ITC dan pengalaman lomba bagi yang mengikuti lomba", "Seluruh anggota UKMFT-ITC"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    lanyard: (
      <LanyardCard gltf="/glb/Fuad.glb" position={[0, 0, 25]} fov={14} />
    )
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: "selama satu periode kepengurusan dan lomba Gemastik",
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
            <Table.RowHeaderCell>Pemateri (per 1 orang)</Table.RowHeaderCell>
            <Table.Cell>Rp100.000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Total</Table.RowHeaderCell>
            <Table.Cell>+Rp100.000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
];
