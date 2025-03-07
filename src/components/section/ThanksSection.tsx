import { cn } from "@/lib/utils";
import { Marquee } from "@/components/registry/magicui/Marquee";

const reviews = [
  {
    name: "Elon Musk",
    username: "@elonmusk",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://tse1.mm.bing.net/th?id=OIP.rOyRdmkq1AifowuTffpKAQHaKR&w=474&h=474&c=7",
  },
  {
    name: "Bill Gates",
    username: "@billgates",
    body: "Technology is best when it brings people together.",
    img: "https://tse3.mm.bing.net/th?id=OIP.xXXL0qKobDF3letak9XA3wHaE7&w=315&h=315&c=7",
  },
  {
    name: "Sundar Pichai",
    username: "@sundarpichai",
    body: "AI is one of the most important things humanity is working on.",
    img: "https://studio.mrngroup.co/storage/app/media/Prambors/Editorial/bos-google-sundar-pichai-20210927123309.jpg?tr=w-600",
  },
  {
    name: "Mark Zuckerberg",
    username: "@zuck",
    body: "The biggest risk is not taking any risk.",
    img: "https://tse3.mm.bing.net/th?id=OIP.DmkY_bhMgcSsgcuRSC1_8QHaE7&w=315&h=315&c=7",
  },
  {
    name: "Tim Cook",
    username: "@tim_cook",
    body: "We believe that privacy is a fundamental human right.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg",
  },
  {
    name: "Jeff Bezos",
    username: "@jeffbezos",
    body: "Your brand is what other people say about you when you're not in the room.",
    img: "https://cdn0-production-images-kly.akamaized.net/noKpmymnWrBc0Kt67bDZJ_bodCk=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2221139/original/003715300_1526879898-05-jeff-bezos.jpg",
  },
  {
    name: "Satya Nadella",
    username: "@satyanadella",
    body: "Our industry does not respect tradition; it only respects innovation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
  },
  {
    "name": "Steve Jobs",
    "username": "@stevejobs",
    "body": "Teknologi bukanlah apa-apa. Yang penting adalah Anda memiliki keyakinan terhadap orang lain, bahwa mereka pada dasarnya baik dan pintar, dan jika Anda memberikan mereka peralatan, mereka akan melakukan hal yang menakjubkan dengan alat-alat itu.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/1200px-Steve_Jobs_Headshot_2010-CROP2.jpg"
  },
  {
    "name": "Larry Page",
    "username": "@larrypage",
    "body": "Selalu memberikan sedikit lebih banyak dari yang diharapkan pelanggan.",
    "img": "https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg?format=jpg&crop=1795,1795,x227,y22,safe&height=416&width=416&fit=bounds"
  },
  {
    "name": "Sergey Brin",
    "username": "@sergeybrin",
    "body": "Kami ingin Google menjadi otak buatan yang lebih baik dalam memahami dan mengekstraksi informasi dari dunia.",
    "img": "https://images.bisnis.com//upload/img/sergey_brin3.jpg"
  },
  {
    "name": "Jack Ma",
    "username": "@jackma",
    "body": "Jika Anda tidak menyerah, Anda masih memiliki kesempatan. Menyerah adalah kegagalan terbesar.",
    "img": "https://mmc.tirto.id/image/2016/09/03/jackmaalibaba--621x414_square.JPG"
  },
  {
    "name": "Sheryl Sandberg",
    "username": "@sherylsandberg",
    "body": "Jika Anda ditawari tempat di sebuah roket, jangan tanya kursi mana. Naik saja.",
    "img": "https://awsimages.detik.net.id/community/media/visual/2021/03/05/sheryl-sandberg.jpeg?w=600&q=90"
  },
  {
    "name": "Marissa Mayer",
    "username": "@marissamayer",
    "body": "Saya selalu melakukan sesuatu yang sedikit di luar zona nyaman saya. Ketika Anda memiliki momen 'Wow, saya tidak yakin apakah saya bisa melakukan ini', dan Anda mendorong melalui momen-momen itu, itulah saat Anda memiliki terobosan.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Marissa_Mayer%2C_World_Economic_Forum_2013_III.jpg/1200px-Marissa_Mayer%2C_World_Economic_Forum_2013_III.jpg"
  },
  {
    "name": "Susan Wojcicki",
    "username": "@susanwojcicki",
    "body": "Segalanya mungkin jika Anda memiliki cukup keberanian.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Susan_Wojcicki_%2829393944130%29_%28cropped%29.jpg"
  },
  {
    "name": "Reed Hastings",
    "username": "@reedhastings",
    "body": "Jangan pernah puas dengan apa yang Anda miliki; selalu berusaha untuk lebih.",
    "img": "https://static01.nyt.com/images/2020/09/06/fashion/06WITH-REEDHASTINGS01/06WITH-REEDHASTINGS01-mediumSquareAt3X.jpg"
  },
  {
    "name": "Ginni Rometty",
    "username": "@ginnirometty",
    "body": "Jangan pernah meremehkan kekuatan ketakutan untuk mendorong tindakan, baik positif maupun negatif.",
    "img": "https://itchanneloxygen.com/wp-content/uploads/2024/08/Ginni-Rometty-square-1-e1722881162634.png"
  },
  {
    "name": "Satya Nadella",
    "username": "@satyanadella",
    "body": "Budaya makan strategi untuk sarapan.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg"
  }
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
        <img className="rounded-full w-8 h-8 object-cover" alt="" src={img} />
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
