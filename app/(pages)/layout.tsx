import { CTAFooter } from "@/components/cta";
import FooterMain from "@/components/footer/footer-main";
import NavbarMain from "@/components/navbar/navbar-main";

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <NavbarMain />
      <main>{children}</main>
      <CTAFooter />
      <FooterMain />
    </>
  );
}
