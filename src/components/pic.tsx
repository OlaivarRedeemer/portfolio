import images from "@/contents/images.json";

const sizes = images as Record<string, number[]>;

type Props = {
  name: string;
  /** Mobile art-directed version. Defaults to `m-<name>` when that export exists. */
  mobile?: string | false;
  alt: string;
  className?: string;
  eager?: boolean;
};

export default function Pic({ name, mobile, alt, className, eager }: Props) {
  const m = mobile === false ? undefined : mobile ?? (sizes[`m-${name}`] ? `m-${name}` : undefined);
  const [w, h] = sizes[name];
  return (
    <picture>
      {m && <source media="(max-width: 760px)" srcSet={`/img/${m}.webp`} width={sizes[m][0]} height={sizes[m][1]} />}
      <img src={`/img/${name}.webp`} width={w} height={h} alt={alt} className={className} loading={eager ? "eager" : "lazy"} decoding="async" />
    </picture>
  );
}
