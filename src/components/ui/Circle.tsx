export default function Circle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit px-3 py-1 md:px-5 md:py-3 rounded-full bg-primary font-bold text-primary-foreground">
      {children}
    </div>
  );
}
