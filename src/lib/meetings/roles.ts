// src/lib/meetings/roles.ts

import "server-only";

import { sheets } from "@/lib/google/sheets";

export type MeetingRole = {
  role: string;
  memberName: string | null;
};

export async function getMeetingRoles(
  meetingDate: string,
): Promise<MeetingRole[]> {
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
    range: "Schedule!A:Q",
    valueRenderOption: "FORMATTED_VALUE",
  });

  const [headers = [], ...rows] = data.values ?? [];

  const meetingRow = rows.find((row) => row[0]?.trim() === meetingDate);

  if (!meetingRow) {
    return [];
  }

  return headers.slice(3).map((role, index) => ({
    role,
    memberName: meetingRow[index + 3]?.trim() || null,
  }));
}
