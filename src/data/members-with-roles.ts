import { members } from "./members";
import { officers } from "./officers";

export const memberWithRoles = officers.flatMap((officer) => {
  const member = members.find((member) => member.name === officer.name);

  if (!member) return [];

  return [
    {
      ...member,
      officerRole: officer.role,
    },
  ];
});
