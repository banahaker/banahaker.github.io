import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function CompetitionExpBlock() {
  return (
    <Section label="Competition">
      <TimelineItem
        title="Competition Experience"
        contents={[
          "2024 全國資安金盾獎 高中組，全國第三名 (數位發展部資通安全署)",
          "2024 應用程式效能優化競賽 (HiPAC)，第三名 (國研院國網中心)",
          "2023 g0v 零時小學校專案孵化競賽，獲選種子團隊",
        ]}
      />
    </Section>
  );
}
