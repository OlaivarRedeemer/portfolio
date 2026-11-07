import Pic from "./pic";

const skills = ["UI design", "UX research", "User flows", "Prototyping", "Design systems"];

const Tick = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M2.5 10.2c1.5 1.3 2.7 3 3.7 5 2.300-5.300 5.200-9.400 9.300-12.800" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** A few things off the desk: real elements, so they stay crisp and sit solidly on the grid. */
export default function ClosingObjects() {
  return (
    <div className="objects">
      <div className="obj sticky-note r">
        <p className="sr-only">What I do:</p>
        <ul>{skills.map((s) => <li key={s}><Tick />{s}</li>)}</ul>
      </div>
      <figure className="obj polaroid r">
        <span className="tape" aria-hidden="true" />
        <span className="polaroid-photo"><Pic name="nala" mobile={false} alt="A close-up selfie of me with my cat Nala leaning over my head." /></span>
        <figcaption>Nala has notes</figcaption>
      </figure>
      <div className="obj tag-card r">
        <span className="tag-hole" aria-hidden="true" />
        <span className="tag-from">Hello from</span>
        <span className="tag-city">Cagayan de<br />Oro City</span>
        <span className="tag-coords">8.45° N, 124.63° E</span>
      </div>
    </div>
  );
}
