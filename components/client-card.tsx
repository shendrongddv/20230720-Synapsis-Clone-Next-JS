import Image from "next/image";

const clients = [
  {
    id: 1,
    title: "kominfo",
    img: "1.jpg",
  },
  {
    id: 2,
    title: "bmkg",
    img: "2.jpg",
  },
  {
    id: 3,
    title: "peruri",
    img: "3.jpg",
  },
  {
    id: 4,
    title: "dprd",
    img: "4.jpg",
  },
  {
    id: 5,
    title: "madhani",
    img: "5.jpg",
  },
  {
    id: 6,
    title: "bku",
    img: "6.jpg",
  },
  {
    id: 7,
    title: "yiqun",
    img: "7.jpg",
  },
  {
    id: 8,
    title: "ast",
    img: "8.jpg",
  },
  {
    id: 9,
    title: "metranet",
    img: "9.jpg",
  },
  {
    id: 10,
    title: "blue-arcus",
    img: "10.jpg",
  },
  {
    id: 11,
    title: "akti",
    img: "11.jpg",
  },
  {
    id: 12,
    title: "bsi-farm",
    img: "12.jpg",
  },
  {
    id: 13,
    title: "universitas-siliwangi",
    img: "13.jpg",
  },
  {
    id: 14,
    title: "politeknik-negeri-jakarta",
    img: "14.jpg",
  },
  {
    id: 15,
    title: "r",
    img: "15.jpg",
  },
  {
    id: 16,
    title: "client-16",
    img: "16.jpg",
  },
  {
    id: 17,
    title: "sdm9",
    img: "17.jpg",
  },
  {
    id: 18,
    title: "client-18",
    img: "18.jpg",
  },
  {
    id: 19,
    title: "safira",
    img: "19.jpg",
  },
  {
    id: 20,
    title: "daily-roast",
    img: "20.jpg",
  },
];
export const ClientCardAlpha = () => {
  const items = clients;

  return (
    <div className="w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex opacity-75 transition duration-200 ease-linear hover:opacity-100 group justify-center items-center p-2 sm:p-4 scale-100"
        >
          <Image
            src={`/${item.img}`}
            alt={item.title}
            width={128}
            height={128}
            className="h-14 transition duration-200 ease-linear sm:h-24 md:h-24 w-auto group-hover:scale-95"
          />
        </div>
      ))}
    </div>
  );
};
