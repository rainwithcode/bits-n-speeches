import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { siteConfig } from "@/data/site-config";
import type { MeetingRole } from "@/lib/meetings/roles";

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#003b5c",
  },
  subtitle: {
    marginBottom: 6,
  },
  section: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 13,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingVertical: 8,
  },
  role: {
    width: "50%",
  },
  member: {
    width: "50%",
  },
});

type MeetingAgendaPDFProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  roles: MeetingRole[];
};

export default function MeetingAgendaPDF({
  title,
  date,
  time,
  location,
  roles,
}: MeetingAgendaPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{siteConfig.name}</Text>

        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.subtitle}>{date}</Text>
        <Text style={styles.subtitle}>{time}</Text>
        <Text style={styles.subtitle}>{location}</Text>

        <Text style={styles.section}>Meeting Roles</Text>

        <View style={styles.row}>
          <Text style={styles.role}>Role</Text>
          <Text style={styles.member}>Member</Text>
        </View>

        {roles.map(({ role, memberName }) => (
          <View key={role} style={styles.row} wrap={false}>
            <Text style={styles.role}>{role}</Text>
            <Text style={styles.member}>{memberName ?? "Open"}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
