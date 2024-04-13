export const Header = () => {
  return (
    <div className="flex justify-between mb-4 gap-y-2 items-center">
      <div className="flex gap-2 h-min">
        <img alt="" className="aspect-square" srcSet="./logo64.png 2x"></img>
        <h1>SKipTo</h1>
      </div>
      <a
        href="https://github.com/chadlavi/skipto/issues/new?labels=submission&template=add-podcast.md&title=Add+podcast%3A+TITLE"
        target="_blank"
        className="button"
        rel="noreferrer"
      >
        Submit a podcast
      </a>
    </div>
  );
};
