import CallToAction from "./components/layout/CallToAction";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

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
