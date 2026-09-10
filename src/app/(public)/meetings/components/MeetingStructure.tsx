import Circle from "@/components/ui/Circle";

import SectionHeading from "../../shared/SectionHeading";
import { meetingStructure } from "../data/meeting-structure";

export default function MeetingStructure() {
  return (
    <div className="bg-primary/5 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <SectionHeading>A Typical Meeting</SectionHeading>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {meetingStructure.map((item, index) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-3 mt-8"
            >
              <Circle>{index + 1}</Circle>
              <h3 className="font-bold text-base md:text-xl text-primary">
                {item.title}
              </h3>
              <p className="text-center text-sm md:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
