type MeetingRoles = {
  role: string;
  description: string;
};

export const meetingRoles: MeetingRoles[] = [
  // Meeting Leadership
  {
    role: "Toastmaster of the Day",
    description: "Acts as emcee, keeps the meeting flowing smoothly.",
  },
  {
    role: "General Evaluator",
    description: "Evaluates the entire meeting, including evaluators.",
  },
  {
    role: "Table Topics Master",
    description: "Leads impromptu speaking with surprise questions.",
  },

  // Speaking
  
  {
    role: "Speaker",
    description: "Gives a prepared speech from a Pathways project.",
  },
  {
    role: "Table Topics Speaker",
    description: "Answers a question on the spot (1–2 minutes).",
  },
  {
    role: "Educational Minute Speaker",
    description: "Shares a brief lesson or useful tip with the members.",
  },
  {
    role: "Humorist",
    description: "Adds humor and a few laughs to the meeting.",
  },

  // Meeting Support
  {
    role: "Timer",
    description: "Tracks time and signals speakers with green/yellow/red cues.",
  },
  {
    role: "Grammarian",
    description: "Shares the Word of the Day and observes language use.",
  },
  {
    role: "Ah-Counter",
    description: 'Counts filler words like "um," "ah," etc.',
  },
  {
    role: "Listener",
    description:
      "Pays close attention and reports on what was heard during the meeting.",
  },

  // Recognition
  {
    role: "Awards Master",
    description: "Presents awards and recognizes members' achievements.",
  },
];
