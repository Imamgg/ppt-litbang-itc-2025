import { cn } from "@/lib/utils";
import { Marquee } from "@/components/registry/magicui/Marquee";

const reviews = [
  {
    name: "Elon Musk",
    username: "@elonmusk",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  },
  {
    name: "Bill Gates",
    username: "@billgates",
    body: "Technology is best when it brings people together.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
  },
  {
    name: "Sundar Pichai",
    username: "@sundarpichai",
    body: "AI is one of the most important things humanity is working on.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Sundar_Pichai_%28cropped%29.jpg",
  },
  {
    name: "Mark Zuckerberg",
    username: "@zuck",
    body: "The biggest risk is not taking any risk.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mark_Zuckerberg_F8_2019_Keynote_%2847717188282%29.jpg",
  },
  {
    name: "Tim Cook",
    username: "@tim_cook",
    body: "We believe that privacy is a fundamental human right.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Tim_Cook_%282017%29.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ThanksSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 -left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 -right-40 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
