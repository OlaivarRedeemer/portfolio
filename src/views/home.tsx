import ContactSection from "@/components/contact-section";
import { FindMark, Play, PolishMark, TangibleMark } from "@/components/icons";
import Pic from "@/components/pic";
import ProjectCard from "@/components/project-card";
import Words from "@/components/words";
import { bySlug, principles, contact } from "@/contents/projects";

const clients = [
  ["logo-brooky", "Brooky Technologies"],
  ["logo-softcode", "SoftCode 365"],
  ["logo-blazesoft", "Blazesoft"],
];

const marks = [FindMark, TangibleMark, PolishMark];

const card = (slug: string) => <ProjectCard project={bySlug(slug)!} />;

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="display"><Words>Hi! I’m Redeemer Olaivar, a designer who makes digital products feel obvious in hindsight</Words></h1>
        <a className="btn" href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">Start a project with me <Play /></a>
      </section>
      <p className="intro sec note"><span className="r">4+ years designing for clients in the Philippines, Singapore and Canada. Based in Cagayan de Oro City.</span></p>

      <section id="work" className="cells rule" aria-label="Work">
        {card("brooky")}
        {card("venue4use")}
        {card("blazesoft")}
        <div className="more"><p className="r">More projects<br />coming soon</p></div>
      </section>

      <p className="label-row rule note"><span className="r">Clients I’ve helped:</span></p>
      <ul className="clients rule">
        {clients.map(([logo, name]) => (
          <li className="client" key={name}><Pic name={logo} mobile={false} alt={name} className={`${logo} r`} /></li>
        ))}
      </ul>

      <h2 className="approach-title sec display r-words"><Words>Clarity over cleverness.</Words><br /><Words start={22}>People over pixels.</Words></h2>
      <section className="approach rule" aria-label="How I work">
        {principles.map(([t, d], i) => {
          const Mark = marks[i];
          return (
            <div className="principle" key={t}>
              <div className="r">
                <Mark />
                <h3 className="t-30">{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          );
        })}
      </section>
      <h2 id="personal" className="personal-title sec display r-words"><Words>Personal projects</Words></h2>
      <section className="cells rule" aria-labelledby="personal">{card("kuhit")}{card("homure")}</section>
      <ContactSection />
    </>
  );
}
