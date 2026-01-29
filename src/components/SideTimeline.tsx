import "../styles/timeline.css";
import { useActiveSection } from "../hooks/useActiveSection";

interface Props {
  consoles: { id: string; name: string }[];
}

const shortNames: { [key: string]: string } = {
  ps1: "PS1",
  ps2: "PS2",
  psp: "PSP",
  ps3: "PS3",
  psvita: "PS Vita",
  ps4: "PS4",
  ps4pro: "PS4 Pro",
  ps5: "PS5",
  ps5pro: "PS5 Pro",
};

export default function SideTimeline({ consoles }: Props) {
  const activeId = useActiveSection();

  return (
    <div className="timeline">
      {consoles.map((c) => (
        <a 
          key={c.id} 
          href={`#${c.id}`} 
          title={c.name}
          className={activeId === c.id ? "timeline-link active" : "timeline-link"}
        >
          <span className="short-name">{shortNames[c.id] || c.name}</span>
          <span className="full-name">{c.name}</span>
        </a>
      ))}
    </div>
  );
}
