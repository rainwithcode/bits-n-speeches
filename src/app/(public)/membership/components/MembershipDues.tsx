import TextLink from "@/components/ui/Link";

import SectionHeading from "../../shared/SectionHeading";
import { membershipDues } from "../data/membership-dues";

export default function MembershipDues() {
  const firstPaymentTotal = membershipDues.reduce(
    (total, due) => total + due.amount,
    0,
  );

  return (
    <section
      role="tabpanel"
      id="panel-dues"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-4 md:pb-8"
    >
      <div className="mx-auto max-w-lg p-6 border border-border rounded-md">
        <SectionHeading className="mb-6">Membership Dues</SectionHeading>
        <div className="space-y-4">
          {membershipDues.map((due) => (
            <div
              key={due.title}
              className="flex justify-between pb-4 border-b border-border"
            >
              <div>
                <h3 className="font-bold text-primary text-base md:text-lg">
                  {due.title}
                </h3>
                <p className="text-sm md:text-base">{due.description}</p>
              </div>
              <p className="font-bold text-primary text-lg md:text-xl">
                ${due.amount.toFixed(2)}
              </p>
            </div>
          ))}
          <div className="flex justify-between pb-4 mb-4 border-b border-border">
            <div>
              <h3 className="font-bold text-primary text-base md:text-lg">
                First Payment Total
              </h3>
              <p className="text-sm md:text-base">
                Total amount due when you first join the club.
              </p>
            </div>
            <p className="font-bold text-primary text-lg md:text-xl">
              ${firstPaymentTotal.toFixed(2)}
            </p>
          </div>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Ready to join? Visit a{" "}
              <TextLink href="/meetings">meeting</TextLink> and speak with our
              VP of Membership to get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
