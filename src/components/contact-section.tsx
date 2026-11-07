import CopyEmail from "./copy-email";
import ContactLinks from "./contact-links";

export default function ContactSection() {
  return (
    <section id="contact" className="contact sec" aria-label="Contact">
      <div className="r">
        <h2 className="contact-label">Currently open to collaborations</h2>
        <CopyEmail />
      </div>
      <div className="r">
        <h2 className="contact-label">Connect</h2>
        <ContactLinks />
      </div>
    </section>
  );
}
