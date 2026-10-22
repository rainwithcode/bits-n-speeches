import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type { AgendaItem } from "@/data/meetings";
import { agenda, meetingInfo } from "@/data/meetings";
import { memberWithRoles } from "@/data/members-with-roles";
import { siteConfig } from "@/data/site-config";
import type { MeetingRole } from "@/lib/meetings/roles";
import { toTitleCase } from "@/utils/to-title-case";
Font.registerHyphenationCallback((word) => [word]);

type MeetingAgendaPDFProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  roles: MeetingRole[];
};

type AgendaSection = Extract<AgendaItem, { type: "section" }>;
type AgendaActivity = Extract<AgendaItem, { type: "activity" }>;

type AgendaGroup = {
  section: AgendaSection;
  activities: AgendaActivity[];
};

const roleAliases: Record<string, string> = {
  Grammarian: "Grammarian/Ah Counter",
  "Ah Counter": "Grammarian/Ah Counter",
};

function groupAgenda(items: readonly AgendaItem[]): AgendaGroup[] {
  const groups: AgendaGroup[] = [];

  for (const item of items) {
    if (item.type === "section") {
      groups.push({
        section: item,
        activities: [],
      });
    } else {
      const currentGroup = groups[groups.length - 1];

      if (currentGroup) {
        currentGroup.activities.push(item);
      }
    }
  }

  return groups;
}

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#253044",
  },

  // Document header
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#772432",
    paddingBottom: 16,
  },
  eyebrow: {
    fontSize: 8,
    color: "#772432",
    marginBottom: 6,
  },
  clubName: {
    fontSize: 23,
    fontFamily: "Helvetica-Bold",
    color: "#004165",
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

  // Shared table styles
  tableTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#004165",
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontFamily: "Helvetica-Bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E2E5E9",
  },
  rowWithOpenRole: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    backgroundColor: "#F9FAFB99",
    borderBottomColor: "#E2E5E9",
  },

  // Meeting Roles
  rolesTable: {
    width: "65%",
    marginTop: 22,
  },
  meetingRole: {
    width: "45%",
    paddingRight: 8,
  },
  name: {
    width: "55%",
  },
  openRole: {
    width: "55%",
    fontStyle: "italic",
    color: "#6B7280",
  },

  // Meeting Schedule
  scheduleTable: {
    marginTop: 24,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#772432",
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#FFFFFF",
  },
  sectionTime: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#FFFFFF",
  },
  activityTime: {
    fontFamily: "Helvetica-Bold",
    color: "#475569",
  },

  // Schedule columns (100% total)
  role: {
    width: "22%",
    paddingRight: 8,
  },
  presenter: {
    width: "22%",
    paddingRight: 8,
  },
  activity: {
    width: "44%",
    paddingRight: 8,
  },
  duration: {
    width: "12%",
    textAlign: "right",
  },

  footer: {
    marginTop: 28,
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

  const agendaGroups = groupAgenda(agenda);

  function getPresenter(role: string): string {
    const mappedRole = roleAliases[role] ?? role;

    const officer = memberWithRoles.find(
      (officer) =>
        officer.officerRole.toLowerCase() === mappedRole.toLowerCase(),
    );

    return officer
      ? officer.name
      : (roleMap.get(mappedRole.toLowerCase().trim()) ?? "—");
  }

  function renderActivity(item: AgendaActivity, index: number) {
    return (
      <View key={`activity-${index}`} style={styles.row} wrap={false}>
        <Text style={styles.role}>{item.role}</Text>

        <Text style={styles.presenter}>{getPresenter(item.role)}</Text>

        <Text style={styles.activity}>
          {item.time ? (
            <Text style={styles.activityTime}>{item.time} · </Text>
          ) : null}
          {item.activity}
        </Text>

        <Text style={styles.duration}>{item.duration || "—"}</Text>
      </View>
    );
  }

  function renderTableHeader() {
    return (
      <View style={styles.tableHeader}>
        <Text style={styles.role}>Role</Text>
        <Text style={styles.presenter}>Presenter</Text>
        <Text style={styles.activity}>Activity</Text>
        <Text style={styles.duration}>Duration</Text>
      </View>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Document header */}
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

        {/* Meeting Roles */}
        <View style={styles.rolesTable}>
          <Text style={styles.tableTitle}>Meeting Roles</Text>

          <View style={styles.tableHeader} wrap={false}>
            <Text style={styles.meetingRole}>Role</Text>
            <Text style={styles.name}>Name</Text>
          </View>

          {Array.from(roleMap).map(([role, member]) => (
            <View
              key={role}
              style={member ? styles.row : styles.rowWithOpenRole}
              wrap={false}
            >
              <Text style={styles.meetingRole}>{toTitleCase(role)}</Text>

              <Text style={member ? styles.name : styles.openRole}>
                {member ? toTitleCase(member) : "Open"}
              </Text>
            </View>
          ))}
        </View>

        {/* Meeting Schedule */}
        <View style={styles.scheduleTable}>
          <Text style={styles.tableTitle}>Meeting Schedule</Text>

          {agendaGroups.map(({ section, activities }, index) => (
            <View key={`section-${index}`}>
              {/* Keep section heading, column headers,
                  and first activity on the same page */}
              <View wrap={false}>
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>

                  <Text style={styles.sectionTime}>{section.time}</Text>
                </View>

                {renderTableHeader()}

                {activities[0] && renderActivity(activities[0], 0)}
              </View>

              {/* Remaining activities can flow across pages */}
              {activities
                .slice(1)
                .map((item, activityIndex) =>
                  renderActivity(item, activityIndex + 1),
                )}
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          {siteConfig.name} · {meetingInfo.schedule.day} at{" "}
          {meetingInfo.schedule.time}
        </Text>
      </Page>
    </Document>
  );
}
