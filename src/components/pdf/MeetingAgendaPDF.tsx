import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { agenda, meetingInfo } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";
import type { MeetingRole } from "@/lib/meetings/roles";

Font.registerHyphenationCallback((word) => [word]);

type MeetingAgendaPDFProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  roles: MeetingRole[];
};

const roleAliases: Record<string, string> = {
  Grammarian: "Grammarian/Ah Counter",
  "Ah Counter": "Grammarian/Ah Counter",
};

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#253044",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#772432",
    paddingBottom: 16,
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 8,
    color: "#772432",
    marginBottom: 6,
  },
  clubName: {
    fontSize: 23,
    fontFamily: "Helvetica-Bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    marginBottom: 12,
  },
  detail: {
    fontSize: 9,
    color: "#596579",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F1F3F6",
    paddingVertical: 9,
    paddingHorizontal: 8,
    fontFamily: "Helvetica-Bold",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E2E5E9",
  },
  time: {
    width: "23%",
  },
  role: {
    width: "18.5%",
  },
  presenter: {
    width: "18.5%",
  },
  activity: {
    width: "30%",
  },
  duration: {
    width: "10%",
    textAlign: "right",
  },
  footer: {
    marginTop: 24,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#E2E5E9",
    fontSize: 8,
    color: "#596579",
    textAlign: "center",
  },
});

export default function MeetingAgendaPDF({
  title,
  date,
  time,
  location,
  roles,
}: MeetingAgendaPDFProps) {
  const roleMap = new Map(
    roles.map(({ role, memberName }) => [
      role.toLowerCase().trim(),
      memberName,
    ]),
  );

  function getPresenter(role: string): string {
    const mappedRole = roleAliases[role] ?? role;

    return roleMap.get(mappedRole.toLowerCase().trim()) ?? "—";
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>
            {siteConfig.organization.toUpperCase()} · CLUB{" "}
            {siteConfig.clubNumber}
          </Text>

          <Text style={styles.clubName}>{siteConfig.name}</Text>

          <Text style={styles.subtitle}>Meeting Agenda</Text>

          <Text style={styles.detail}>{title}</Text>
          <Text style={styles.detail}>
            {date} · {time}
          </Text>
          <Text style={styles.detail}>{location}</Text>
        </View>

        <Text style={styles.sectionTitle}>Program Schedule</Text>

        <View style={styles.tableHeader}>
          <Text style={styles.time}>Time</Text>
          <Text style={styles.role}>Role</Text>
          <Text style={styles.presenter}>Presenter</Text>
          <Text style={styles.activity}>Activity</Text>
          <Text style={styles.duration}>Duration</Text>
        </View>

        {agenda.map((item, index) => (
          <View key={`${item.role}-${index}`} style={styles.row} wrap={false}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.role}>{item.role}</Text>
            <Text style={styles.presenter}>{getPresenter(item.role)}</Text>
            <Text style={styles.activity}>{item.activity}</Text>
            <Text style={styles.duration}>{item.duration || "—"}</Text>
          </View>
        ))}

        <Text style={styles.footer}>
          {siteConfig.name} · {meetingInfo.schedule.day} at{" "}
          {meetingInfo.schedule.time}
        </Text>
      </Page>
    </Document>
  );
}
