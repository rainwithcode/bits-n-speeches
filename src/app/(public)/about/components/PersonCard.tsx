import Image from "next/image";

import AvatarFallback from "@/components/ui/AvatarFallback";
import getInitials from "@/utils/get-initials";
export default function PersonCard({
  src,
  name,
  role,
  description,
  className,
}: {
  src?: string;
  name: string;
  role?: string;
  description?: string;
  className?: string;
}) {
  const initials = getInitials(name);

  return (
    <article className="flex flex-col justify-center items-center gap-3">
      {src ? (
        <Image
          src={`/members/${src}`}
          alt={name}
          width="150"
          height="150"
          className="rounded-full mb-2"
        ></Image>
      ) : (
        <AvatarFallback className="w-40 h-40 mb-2 text-2xl">
          {initials}
        </AvatarFallback>
      )}

      <h3 className="font-heading font-bold text-primary">{name}</h3>
      <p className="text-sm text-primary font-medium">{role}</p>
    </article>
  );
}
