import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
