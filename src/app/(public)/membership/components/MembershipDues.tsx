import TextLink from "@/components/ui/TexLink";

import SectionHeading from "../../shared/SectionHeading";
import { membershipDues, membershipDuesContent } from "../data/membership-dues";

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
          {membershipDues.map((due, index) => (
            <div
              key={due.title}
              className={`flex justify-between ${index === 0 && "pb-4 border-b border-border"}`}
            >
              <div>
                <h3 className="font-bold text-primary text-base md:text-lg">
                  {due.title}
                </h3>
                <p className="text-base">{due.description}</p>
              </div>
              <p className="font-bold text-primary text-lg md:text-xl">
                ${due.amount.toFixed(2)}
              </p>
            </div>
          ))}
          <div className="pb-4 border-b border-border">
            <div className="rounded-md bg-primary/10 p-4">
              <p className="text-sm">
                <strong>{membershipDuesContent.proration.title}</strong>{" "}
                {membershipDuesContent.proration.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between pb-4 mb-4 border-b border-border">
            <div>
              <h3 className="font-bold text-primary text-base md:text-lg">
                {membershipDuesContent.firstPayment.title}
              </h3>
              <p className="text-base">
                {membershipDuesContent.firstPayment.description}
              </p>
            </div>
            <p className="font-bold text-primary text-lg md:text-xl">
              ${firstPaymentTotal.toFixed(2)}
            </p>
          </div>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              {membershipDuesContent.callToAction.text}{" "}
              <TextLink href={membershipDuesContent.callToAction.href}>
                {membershipDuesContent.callToAction.linkText}
              </TextLink>{" "}
              {membershipDuesContent.callToAction.suffix}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
