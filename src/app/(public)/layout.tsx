import CallToAction from "./shared/CallToAction";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
}
