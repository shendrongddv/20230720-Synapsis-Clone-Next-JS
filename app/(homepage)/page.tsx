import { ServiceCardAlpha } from "@/components/service-card";

const Homepage = () => {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="container md:min-h-screen flex flex-col justify-center">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-[#346BB3] text-xl md:text-2xl font-medium">
              INTERNET OF THINGS SOLUTION
            </h1>
            <h2 className="font-bold font-display text-slate-800 md:text-5xl text-4xl">
              We provide an effective and efficient solution to help our
              partners & clients
            </h2>
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Services */}
      <section className="px-6 py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Col */}
            <div className="sm:w-1/2 md:w-1/4">
              <div className="rounded-xl p-6 md:pb-16 flex flex-col space-y-4 text-white bg-gradient-to-br from-sky-800 via-sky-600 to-sky-300">
                <span className="font-medium text-xl md:text-2xl">
                  OUR SERVICES
                </span>
                <h2 className="font-bold text-3xl font-display md:text-4xl">
                  We Will Help Your Business Growing
                </h2>
              </div>
            </div>

            {/* Col */}
            <ServiceCardAlpha />
          </div>
        </div>
      </section>
      {/* ./ Services */}
    </>
  );
};

export default Homepage;
