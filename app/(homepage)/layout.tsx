import NavbarMain from "@/components/navbar/navbar-main";
import FooterMain from "@/components/footer/footer-main";
import { CTAFooter } from "@/components/cta";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <>
      <NavbarMain />
      <main>{children}</main>
      <CTAFooter />
      <FooterMain />
    </>
  );
}
