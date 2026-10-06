import PublicLayout from "../(public)/layout";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PublicLayout>{children}</PublicLayout>;
}
