import ProfileBlock from "./ProfileBlock";
import SkillsPanel from "./SkillsPanel";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="md:sticky md:top-10 md:h-fit flex flex-col gap-8">
      <div className="relative">
        <ThemeToggle className="absolute right-0 top-0" />
        <ProfileBlock />
      </div>
      <div className="h-px bg-line" />
      <SkillsPanel />
    </aside>
  );
}
