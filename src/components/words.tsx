import { CSSProperties, Fragment } from "react";

/**
 * Splits a heading into letters that blur into place one after another.
 * Words stay unbroken so lines wrap normally. `start` continues the stagger across line breaks.
 */
export default function Words({ children, start = 0 }: { children: string; start?: number }) {
  let at = start;
  return (
    <>
      <span className="sr">{children}</span>
      <span aria-hidden="true">
        {children.split(" ").map((word, w) => (
          <Fragment key={w}>
            <span className="w">
              {Array.from(word).map((letter, l) => (
                <span className="l" key={l} style={{ "--i": at++ } as CSSProperties}>{letter}</span>
              ))}
            </span>{" "}
          </Fragment>
        ))}
      </span>
    </>
  );
}
