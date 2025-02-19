import { Flex, Section } from "@radix-ui/themes";
import BlurText from "../Text/BlurText";
import Hyperspeed from "../background/HyperSpeed";

const Jumbotron: React.FC = () => {
  return (
    <Section className="w-full h-screen overflow-hidden relative snap-start">
      <Flex direction="column" align="center" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BlurText delay={50} animateBy="letters" className="text-[5em] font-semibold text-white text-center" text="We Are Litbang" />
        <BlurText animateBy="letters" delay={200} className="text-[5em] font-semibold text-white text-center" text="UKM-FT ITC 2025" />
      </Flex>
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />
    </Section>
  );
};

export default Jumbotron;