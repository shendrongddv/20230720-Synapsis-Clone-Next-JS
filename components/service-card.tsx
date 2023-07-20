import Image from "next/image";

const services = [
  {
    id: 1,
    title: "End-to-End IoT Solutions",
    desc: "We provide end-to-end integrated IoT solutions for you. Start from requirements analysis, system design, prototyping, testing, and manufacturing.",
    img: "service-1.png",
  },
  {
    id: 2,
    title: "Business Tailored System",
    desc: "We are here to support you to make your ideas come to reality! Web Application, Mobile Apps, Hardware, Data Logger.",
    img: "service-2.png",
  },
  {
    id: 3,
    title: "Renewable Energy",
    desc: "Another service that we can provide such as solar power plants by using the sun's rays to produce electricity.",
    img: "service-3.png",
  },
];

export const ServiceCardAlpha = () => {
  const items = services;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="px-6 py-8 max-md:text-center md:p-8 flex flex-col items-center md:items-start gap-4 sm:w-1/2 md:w-1/4 bg-white border rounded-xl border-slate-100 hover:shadow-2xl shadow-slate-50/50 transition duration-300 ease-linear"
        >
          <Image
            src={`/${item.img}`}
            alt={item.title}
            width={100}
            height={100}
            className="h-16 md:h-20 w-auto"
          />
          <h3 className="font-semibold text-slate-800 text-2xl md:text-3xl">
            {item.title}
          </h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </>
  );
};
