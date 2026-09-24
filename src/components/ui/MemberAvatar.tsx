"use client";

import Image from "next/image";
import { useState } from "react";

import getInitials from "@/utils/get-initials";

import AvatarFallback from "./AvatarFallback";

type MemberAvatarProps = {
  name: string;
  image?: string;
};

export default function MemberAvatar({ name, image }: MemberAvatarProps) {
  const [error, setError] = useState(false);
  const initials = getInitials(name);

  if (!image || error) {
    return (
      <div className="size-8 shrink-0 md:size-12">
        <AvatarFallback className="size-full">{initials}</AvatarFallback>;
      </div>
    );
  }
  return (
    <div className="size-8 shrink-0 md:size-12">
      <Image
        src={`/members/${image}`}
        alt=""
        width={128}
        height={128}
        onError={() => setError(true)}
        className="size-full rounded-full object-cover"
      />
    </div>
  );
}
