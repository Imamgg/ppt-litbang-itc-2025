import LanyardCard from "@/components/3D/LanyardCard";
import { IntroductionSection } from "@/components/section/IntroductionSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { Table } from "@radix-ui/themes";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full pt-20 snap-y snap-mandatory">
      <IntroductionSection data={dataPenelitian} />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </section>
  );
}

const items = [
  { link: '/website', text: 'Website', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/perlombaan', text: 'Perlombaan', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/fasilitator', text: 'Fasilitator', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/thanks', text: 'Terima Kasih', image: 'https://picsum.photos/600/400?random=4' }
];

const dataPenelitian = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengembangan Karya Tulis Ilmiah",
    description: "Litbang mengikuti perlombaan karya tulis ilmiah yang nantinya akan dipublikasi sebagai bentuk publikasi akademik guna mendorong inovasi dan pengembangan kepenulisan dan keilmuan mahasiswa",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["Publikasi karya tulis ilmiah, peningkatan budaya riset, dan pengembangan keterampilan menulis mahasiswa", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    lanyard: (
      <LanyardCard gltf="/glb/Wildan.glb" position={[0, 0, 25]} fov={14} />
    )
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `Selama satu periode
                  kepengurusan UKMFT-ITC
                  Minggu 1-2 Pemilihan Topik & Riset Awal
                  Minggu 3-5 Penulisan Draf Utama
                  Minggu 6-7 Revisi & Penyempurnaan
                  Minggu 8   Finalisasi & Pengumpulan`,
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
                <Table.RowHeaderCell>Biaya Daftar Lomba</Table.RowHeaderCell>
                <Table.Cell>Rp120.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Biaya riset</Table.RowHeaderCell>
                <Table.Cell>Menyesuaikan jenis lomba</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Total</Table.RowHeaderCell>
                <Table.Cell>+Rp120.000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        ),
  },
];
