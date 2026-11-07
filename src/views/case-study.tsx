import ContactSection from "@/components/contact-section";
import FlowViewer from "@/components/flow-viewer";
import Pic from "@/components/pic";
import ProjectCard from "@/components/project-card";
import Words from "@/components/words";
import { Project, Section, covers, projects } from "@/contents/projects";

const Sub = ({ s }: { s: Section }) => {
  if (!s.sub) return null;
  if (!s.subM) return <p className="lede r">{s.sub}</p>;
  return (<><p className="lede only-d r">{s.sub}</p><p className="lede only-m r">{s.subM}</p></>);
};

function Body({ s }: { s: Section }) {
  switch (s.kind) {
    case "flow":
      return (
        <div className="case-section">
          <Pic name={s.img} alt={s.alt} className="panel-img" />
          <FlowViewer img={s.img} title={s.title} alt={s.alt} width={s.width} />
        </div>
      );
    case "panel":
      return <div className="case-section"><Pic name={s.img} alt={s.alt} className="panel-img" /></div>;
    case "two":
      return (
        <div className="case-section stack">
          {s.images.map((i) => <Pic key={i.img} name={i.img} alt={i.alt} className="panel-img" />)}
        </div>
      );
    case "phones":
      return (
        <div className="case-section">
          <div className="only-d stack">{s.imgs.map((img) => <Pic key={img} name={img} mobile={false} alt={s.alt} className="panel-img" />)}</div>
          <div className="carousel-wrap r">
            <div className="carousel" tabIndex={0} role="group" aria-label={`${s.title} screens`}>
              {s.phones.map((p) => <Pic key={p.img} name={p.img} mobile={false} alt={p.alt} />)}
            </div>
            <p className="swipe">Swipe to see {s.phones.length} screens</p>
          </div>
        </div>
      );
    case "pairs":
      return (
        <div className="case-section ba">
          {s.pairs.map((p) => (
            <div key={p.title}>
              <div className="ba-head r"><h3 className="t-30">{p.title}</h3><p className="note">{p.sub}</p></div>
              <div className="grid-2">
                <Pic name={p.shipped} alt={`Shipped screen: ${p.title}.`} className="panel-img" />
                <Pic name={p.concept} alt={`2026 concept: ${p.title}.`} className="panel-img" />
              </div>
            </div>
          ))}
        </div>
      );
    case "triple":
      return (
        <div className="case-section ba-3">
          {s.items.map((i) => (
            <div className="r" key={i.title}>
              <Pic name={i.img} alt={`Shipped screen beside the 2026 concept: ${i.title}.`} className="panel-img" />
              <h3 className="t-26">{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      );
    case "gallery":
      return (
        <div className={`gallery cols-${s.cols ?? 4}`}>
          {s.items.map((i) => (
            <div className="r" key={i.name}>
              <Pic name={i.img} alt={`${i.name}: ${i.label}.`} />
              <h3 className="t-26">{i.name}</h3>
              <p className="sub">{i.label}</p>
              <p className="desc">{i.text}</p>
            </div>
          ))}
        </div>
      );
  }
}

export default function CaseStudy({ project: p }: { project: Project }) {
  // Client work and personal projects stay separate here too.
  const group = projects.filter((x) => !x.personal === !p.personal);
  const others = group.filter((x) => x.slug !== p.slug);

  return (
    <>
      <section className="case-title">
        <h1 className="display"><Words>{p.name}</Words></h1>
        <p className="lede">{p.summary}</p>
        {p.concept && <div className="tags"><span className="tag">Redesign concept</span></div>}
      </section>
      <div className="case-hero"><Pic name={covers[p.slug]} mobile={false} alt={p.cardAlt} className="panel-img" eager /></div>
      <section className="case-story sec">
        <div className="case-story-main r">
          <h2 className="t-36">Long story short</h2>
          {p.story.map((t) => <p key={t}>{t}</p>)}
        </div>
        <dl className="case-details">
          {[{ label: "Services", items: p.cardTags }, ...p.details].map((d) => (
            <div key={d.label} className="detail r">
              <dt>{d.label}</dt>
              <dd className="tags">{d.items.map((t) => <span className="tag" key={t}>{t}</span>)}</dd>
            </div>
          ))}
        </dl>
      </section>
      {p.sections.map((s) => (
        <section className="sec" key={s.title}>
          <div className="case-head"><h2 className="display r-words"><Words>{s.title}</Words></h2><Sub s={s} /></div>
          <Body s={s} />
        </section>
      ))}
      {p.measures && (
        <section className="measures sec">
          <h2 className="t-44 r">How I’d judge it</h2>
          <ul>{p.measures.map((m) => <li key={m}><span className="r">{m}</span></li>)}</ul>
          <p className="note r">These are measures to track after launch, not results.</p>
        </section>
      )}
      <section className="others sec" aria-labelledby="other-projects">
        <div className="case-head"><h2 id="other-projects" className="display r-words"><Words>Other projects</Words></h2></div>
        <div className="cells">
          {others.map((x) => <ProjectCard key={x.slug} project={x} />)}
          {others.length % 2 === 1 && <div className="more"><p className="r">More projects<br />coming soon</p></div>}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
