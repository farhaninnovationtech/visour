export const ISSUE_TYPES = [
  "Bug Report",
  "Broken Image",
  "Prompt Issue",
  "Copy Button Problem",
  "Incorrect Information",
  "General Feedback",
  "Other",
] as const;

export type IssueType = (typeof ISSUE_TYPES)[number];
