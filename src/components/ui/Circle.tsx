export default function Circle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit px-5 py-3 rounded-full bg-primary font-bold text-primary-foreground">
      {children}
    </div>
  );
}
