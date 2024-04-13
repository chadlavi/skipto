export const Header = () => {
  return (
    <div className="flex justify-between mb-4 flex-col gap-y-2 items-start sm:flex-row sm:items-center">
      <div className="flex gap-2 h-min">
        <img alt="" className="aspect-square" srcSet="./favicon.png 8x"></img>
        <h1>SKipTo</h1>
      </div>
      <a
        href="https://github.com/chadlavi/skipto/issues/new"
        target="_blank"
        className="button"
        rel="noreferrer"
      >
        Submit a podcast
      </a>
    </div>
  );
};