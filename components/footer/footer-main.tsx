import Image from "next/image";
import Link from "next/link";

const FooterMain = () => {
  return (
    <footer>
      {/* Footer Main */}
      <div className="px-6 bg-[#ECF8FD] pb-16">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Col */}
            <div className="md:w-2/5 space-y-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="PT. Synapsis Sinergi Digital"
                  width={250}
                  height={75.5}
                  className="h-14 w-auto"
                />
              </Link>
              <p>
                PT. Synapsis Sinergi Digital, company that working on system
                prototyping especially Internet of Things systems and devices.
                We provide an effective and efficient solution to help our.
              </p>
            </div>

            {/* Col */}
            <div className="flex-1 space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos eos sequi, possimus numquam nobis, laboriosam optio
                dolorem aliquam perferendis fugiat, placeat aut. Aspernatur,
                ratione?
              </p>
            </div>

            {/* Col */}
            <div className="flex-1 space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos eos sequi, possimus numquam nobis, laboriosam optio
                dolorem aliquam perferendis fugiat, placeat aut. Aspernatur,
                ratione?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-6 bg-[#356BB4]">
        <div className="container py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 items-center max-md:text-center">
          <span className="text-sm text-white/90">
            Copyright © 2023 <Link href="/">PT. Synapsis Sinergi Digital</Link>
            . All Rights Reserved
          </span>
          <span className="text-sm text-white/90">Lorem</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
