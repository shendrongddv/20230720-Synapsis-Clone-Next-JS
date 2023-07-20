import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { ProductCardAplha } from "@/components/product-card";
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
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            {/* Col */}
            <div className="sm:w-1/2 md:w-1/4 max-md:text-center">
              <div className="rounded-xl p-6 md:p-8 h-full flex flex-col bg-gradient-to-br from-sky-800 via-sky-600 to-sky-300">
                <span className="subheading text-white">Our Services</span>
                <h2 className="h2 mt-3 text-white">
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

      {/* About */}
      <section id="about" className="px-4 py-16 bg-slate-50">
        <div className="container">
          {/* Wrapper */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-16 gap-10">
            {/* Col */}
            <div className="md:w-5/12">
              <Image
                src="/about.png"
                alt="Image"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Col */}
            <div className="md:w-5/12 max-md:text-center">
              <span className="subheading text-[#346BB3]">Our Company</span>
              <h2 className="h2 text-slate-800 mt-2">
                Top leading Indonesian IoT provider
              </h2>
              <p className="mt-6 md:text-lg leading-normal">
                Synapsis.id is a tech start-up that was founded in 2019 in
                Indonesia and focused on Internet of Things solutions. We
                provide end-to-end IoT solutions to help our clients create,
                digitalize, enhance and upgrade their systems to maximize
                business operations. Since started, we have worked on many
                projects from various industrial sectors ranging from
                telecommunications, solar power generation mining, green
                building, agriculture, hospitality, education, and
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ./ About */}

      {/* Products */}
      <section id="products" className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col max-md:text-center gap-12">
            {/* # */}
            <div className="flex flex-col">
              <span className="subheading text-[#346BB3]">Our Products</span>
              <h2 className="h2 mt-3 text-slate-800">
                CONNEX for connect everything
              </h2>
            </div>

            {/* # */}
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-10">
              {/* ## */}
              <div className="flex flex-col md:w-6/12 space-y-8">
                {/* ### */}
                <ProductCardAplha />
              </div>

              {/* ## */}
              <div className="md:w-5/12">
                <Image
                  src="/connex-node.png"
                  alt="Image"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* # */}
            <div className="flex justify-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "px-6 rounded-full",
                  })
                )}
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Products */}

      {/* Projects */}
      <section id="projects" className="px-4 py-16 bg-slate-50">
        <div className="container">
          <div className="flex flex-col gap-12">
            {/* # */}
            <div className="flex flex-col text-center">
              <span className="subheading text-[#346BB3]">Our Projects</span>
              <h2 className="h2 mt-3 text-slate-800">
                Projects We&apos;ve Done
              </h2>
            </div>

            {/* # */}
            <div className="w-full"></div>

            {/* # */}
            <div className="flex justify-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "px-6 rounded-full",
                  })
                )}
              >
                View all recent projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Projects */}

      {/* Partner & Clients */}
      <section id="clients" className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col gap-12">
            {/* # */}
            <div className="flex flex-col text-center">
              <span className="subheading text-[#346BB3]">Our Valuable</span>
              <h2 className="h2 mt-3 text-slate-800">Partners & Clients</h2>
            </div>

            {/* # */}
            <div className="w-full"></div>

            {/* # */}
            <div className="flex justify-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "px-6 rounded-full",
                  })
                )}
              >
                View all
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Partners & Clients */}
    </>
  );
};

export default Homepage;
