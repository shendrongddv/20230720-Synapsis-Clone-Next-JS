const productValues = [
  {
    id: 1,
    title: "Designed for IoT Device Monitoring",
    desc: "This device provides the basic features needed by an IoT monitoring device, starting from power supply, connection to sensors and internet networks, delivery protocols and also interconnection with CONNEX Dashboard.",
  },
  {
    id: 2,
    title: "Realtime Monitoring",
    desc: "Telemetry data from the monitored device can be used for short-term or long-term analysis. This monitoring refers to using a set of tools and processes to detect, debug, and resolve problems.",
  },
  {
    id: 3,
    title: "Cloud Based Application",
    desc: "Involves collecting and analyzing monitoring information from remote locations using cloud resources. This application can facilitate monitoring in various remote locations in Indonesia.",
  },
];

export const ProductCardAplha = () => {
  const items = productValues;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex group items-center flex-col item md:flex-row md:items-start gap-4"
        >
          <div className="flex justify-center items-center aspect-square md:h-20 h-10 bg-slate-100 rounded-lg transition duration-200 ease-linear  group-hover:text-white group-hover:bg-[#346BB3] text-[#346BB3]">
            <span className="md:text-5xl font-semibold text-2xl leading-none transition duration-200 scale-90 ease-linear group-hover:scale-100">
              0{item.id}.
            </span>
          </div>
          <div className="flex flex-col max-md:text-center">
            <h3 className="h3 text-slate-800">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};
