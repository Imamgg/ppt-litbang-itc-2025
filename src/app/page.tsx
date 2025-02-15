import LanyardCard from "@/components/3D/LanyardCard";
import CardDetail from "@/components/team/CardDetail";
import { Box, Container, Flex } from "@radix-ui/themes";

export default function HomePage() {
  const teams = [
    {
      name: "Ahmad Mufid Risqi",
      role: "Sekertaris Divisi Litbang",
      email: "risqimufid50@gmail.com",
      github: "https://github.com/Mufid-031",
      location: "Indonesia, East Java, Bangkalan",
      phone: "0877-1556-7904",
      joinDate: "2025-01-01",
    },
  ];

  return (
    <Container>
      <Flex align="center">
        <Box className="w-1/3">
          <LanyardCard />
        </Box>
        <Flex direction="column" className="w-1/2">
          {teams.map((team, index) => (
            <CardDetail key={index} {...team} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
