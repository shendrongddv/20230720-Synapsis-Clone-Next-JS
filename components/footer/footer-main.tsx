import Image from "next/image";
import Link from "next/link";

import {
  Building,
  ChevronsRight,
  LucideIcon,
  Mail,
  Warehouse,
} from "lucide-react";
import { title } from "process";

const menus = [
  {
    id: 1,
    title: "Contact",
    links: [
      {
        id: 1,
        label: "info@synapsis.id",
        icon: Mail,
        href: "/",
      },
      {
        id: 2,
        label: "Halim, East Jakarta",
        icon: Building,
        href: "/",
      },
      {
        id: 3,
        label: "Special Region of Yogyakarta",
        icon: Warehouse,
        href: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Others Menu",
    links: [
      {
        id: 1,
        label: "Terms & Conditions",
        icon: ChevronsRight,
        href: "/",
      },
      {
        id: 2,
        label: "Privacy Policy",
        icon: ChevronsRight,
        href: "/",
      },
      {
        id: 3,
        label: "Trademark",
        icon: ChevronsRight,
        href: "/",
      },
      {
        id: 4,
        label: "Contact",
        icon: ChevronsRight,
        href: "/",
      },
      {
        id: 5,
        label: "Clients",
        icon: ChevronsRight,
        href: "/",
      },
      {
        id: 6,
        label: "Article",
        icon: ChevronsRight,
        href: "/",
      },
    ],
  },
];

const FooterMain = () => {
  const items = menus;

  return (
    <footer>
      {/* Footer Main */}
      <div className="px-6 bg-slate-100 pb-16">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Col */}
            <div className="md:w-2/5 space-y-4">
              <div className="flex flex-col items-center md:items-start text-center md:text-start">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="PT. Synapsis Sinergi Digital"
                    width={250}
                    height={75.5}
                    className="h-14 w-auto"
                  />
                </Link>
                <p className="text-slate-800 mt-4">
                  PT. Synapsis Sinergi Digital, company that working on system
                  prototyping especially Internet of Things systems and devices.
                  We provide an effective and efficient solution to help our.
                </p>
              </div>
            </div>

            {/* Col */}
            {items.map((item) => (
              <div key={item.id} className="md:w-1/4 w-full">
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="h4 text-primary-foreground font-bold">
                    {item.title}
                  </h4>
                  <ul className="mt-4 w-full grid grid-cols-2 gap-3 md:flex md:flex-col">
                    {item.links.map((subitem) => (
                      <li key={subitem.id}>
                        <ListItem
                          label={subitem.label}
                          href={subitem.href}
                          icon={subitem.icon}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;

// ListItem
interface ListItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ label, icon: Icon, href }) => {
  return (
    <Link
      href={href}
      aria-label={title}
      className="flex items-center hover:underline group"
    >
      <Icon className="h-4 w-4 mr-2 text-primary-foreground" />{" "}
      <span className="text-sm text-slate-800 group-hover:font-semibold group-hover:text-primary-foreground">
        {label}
      </span>
    </Link>
  );
};
