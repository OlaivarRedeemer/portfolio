import ClosingObjects from "@/components/closing-objects";
import ContactSection from "@/components/contact-section";
import { ArrowRight, Play } from "@/components/icons";
import Pic from "@/components/pic";
import Words from "@/components/words";
import { history, contact } from "@/contents/projects";

export default function Story() {
  return (
    <>
      <section className="hero">
        <h1 className="display"><Words>I turn complex ideas into</Words><br className="only-d" /><Words start={21}>clear products, so people</Words><br className="only-d" /><Words start={42}>always know what to do next</Words></h1>
        <a className="btn" href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">Start a project with me <Play /></a>
      </section>
      <section className="story-grid sec">
        <div>
          <h2 className="story-h r">How I got here</h2>
          <p className="r">Growing up in the Philippines, my design journey started in high school, where I won first place in poster making every year. In my senior year I moved to digital posters and competed against other schools across our province.</p>
          <p className="r">In college I took up IT, and that’s where I found UI/UX. It was only taught for one year, but I loved it and kept exploring on my own. I was accepted as a UI/UX intern at Brooky Technologies, and after graduation they brought me on full-time. I’ve mostly worked as a solo designer, and at Blazesoft I’m now part of a team of designers.</p>
          <ul className="history">
            {history.map(([mono, role, at, when]) => (
              <li className="r" key={role + when}>
                <span className="mono" aria-hidden="true">{mono}</span>
                <span><b>{role}</b><span className="at">{at}</span></span>
                <span className="when">{when}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Pic name="story-photos" alt="Three photos: my desk, me off the screen on a hike, and me on the road with a motorcycle." className="photos r-frame" />
          <h2 className="story-h r">Where I stand</h2>
          <p className="r">For 4+ years I’ve collaborated with founders, developers and teams to design tech products across real estate, venue marketplaces and social gaming, for clients in the Philippines, Singapore and Canada.</p>
          <p className="r">My mission is to make complex products feel clear, so the people using them always know what to do next, and the teams behind them can build with confidence.</p>
          <a className="btn story-cv r" href="/Redeemer_Olaivar_CV_2026.pdf" target="_blank" rel="noopener noreferrer">View my CV <ArrowRight /></a>
        </div>
      </section>
      <section className="closing sec">
        <h2 className="display r-words"><Words>Ready for</Words><br /><Words start={8}>what’s next</Words></h2>
        <ClosingObjects />
      </section>
      <ContactSection />
    </>
  );
}
