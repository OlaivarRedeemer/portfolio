export default function Footer() {
  return (
    <footer className="footer sec r-cats">
      <div className="footer-clip">
        <picture>
          <source media="(max-width: 760px)" srcSet="/img/cats-mobile.webp" />
          <img src="/img/cats.webp" width={2400} height={280} alt="A row of illustrated cats." loading="lazy" />
        </picture>
      </div>
    </footer>
  );
}
