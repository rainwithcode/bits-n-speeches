import { members } from "./members";
import { officers } from "./officers";

export const memberWithRoles = officers.map((officer) => {
  const member = members.find((member) => member.name === officer.name);
  
  return {
    ...member,
    officerRole: officer?.role ?? null,
  };
});
