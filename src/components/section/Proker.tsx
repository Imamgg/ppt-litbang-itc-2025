import { Flex } from "@radix-ui/themes";
import InfiniteMenu from "../ui/InfiniteMenu";

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Website',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Fasilitator Study Club',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Lomba Penelitian',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Lomba dan Gemastik',
    description: 'This is pretty cool, right?'
  }
];

export default function Proker() {
  return (
    <Flex className="w-full h-screen overflow-hidden relative snap-start">
      <InfiniteMenu items={items}/>
    </Flex>
  )
}