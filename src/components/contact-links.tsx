import { contact } from "@/contents/projects";
import { LinkedIn, Phone } from "./icons";

export default function ContactLinks() {
  return (
    <div className="links">
      <a className="icon-btn icon-ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <LinkedIn />
      </a>
      <a className="icon-btn icon-ghost" href={`tel:${contact.phone}`} aria-label={`Call ${contact.phoneLabel}`}>
        <Phone />
      </a>
    </div>
  );
}
