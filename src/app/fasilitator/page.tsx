import { IntroductionSection } from "@/components/section/IntroductionSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { Table } from "@radix-ui/themes";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full pt-28 snap-y snap-mandatory">
      <IntroductionSection data={dataFasilitator} />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </section>
  );
}

const items = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/website', text: 'Website', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/perlombaan', text: 'Perlombaan', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/penelitian', text: 'Penelitian', image: 'https://picsum.photos/600/400?random=4' }
];

const dataFasilitator = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description: "Litbang berposisi sebagai fasilitator untuk keberhasilan dari keberlangsungan acara dari study club itu sendiri",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["Membantu dalam hal teknis pada saat acara dan menciptakan kurikulum yang relevan bagi peserta Study Club.", "Seluruh anggota UKMFT-ITC"],
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
    isTable: true,
        tableData: (
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
    
              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
    
              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        ),
  },
];
