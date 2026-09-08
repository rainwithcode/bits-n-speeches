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
    <article className="flex flex-col items-center justify-center gap-2 text-center md:gap-3">
      {src ? (
        <Image
          src={`/members/${src}`}
          alt={name}
          width={150}
          height={150}
          className="mb-1 size-16 rounded-full object-cover md:mb-2 md:size-[150px]"
        />
      ) : (
        <AvatarFallback className="mb-1 size-16 text-base md:mb-2 md:size-[150px] md:text-2xl">
          {initials}
        </AvatarFallback>
      )}

      <h3 className="text-sm font-heading font-bold text-primary md:text-base">
        {name}
      </h3>

      <p className="text-xs font-medium md:text-sm">{role}</p>
    </article>
  );
}
