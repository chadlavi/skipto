import classNames from "classnames";
import podcasts from "../data/podcasts";
import { formatTimestamp, sortPodcasts, useRefDimensions } from "../utils";
import { useRef, useState } from "react";
import { SortButton } from "./SortButton";
import { IconSortAscending, IconSortDescending } from "./icons";

export const Table = () => {
  const [sort, setSort] = useState(true);

  const toggleSort = () => setSort((s) => !s);
  const containerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  const containerRect = useRefDimensions(containerRef);
  const tableRect = useRefDimensions(tableRef);

  const fadeRight =
    containerRect?.boundingRect.width !== tableRect?.boundingRect.width &&
    containerRect &&
    tableRect &&
    containerRect?.scrollLeft + containerRect?.boundingRect.width !==
      tableRect?.boundingRect.width;

  const fadeLeft =
    containerRect?.boundingRect.width !== tableRect?.boundingRect.width &&
    containerRect?.scrollLeft !== 0;

  return (
    <div
      className={classNames({
        "fade-right": fadeRight,
      })}
    >
      <div
        ref={containerRef}
        className={classNames("overflow-x-auto", {
          "fade-left": fadeLeft,
        })}
      >
        <table ref={tableRef}>
          <thead>
            <tr>
              <th className="w-full">
                <button
                  className="flex items-center gap-1"
                  onClick={toggleSort}
                  title={sort ? "Sort Z-A" : "Sort A-Z"}
                >
                  Title {sort ? <IconSortAscending /> : <IconSortDescending />}
                </button>
              </th>
              <th className="text-nowrap">Skip intro</th>
              <th className="text-nowrap">Skip outro</th>
            </tr>
          </thead>
          <tbody>
            {podcasts
              .sort(sortPodcasts(sort))
              .map(({ title, skipIntro, skipOutro, url }) => (
                <tr key={url}>
                  <td>
                    <a href={url} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  </td>
                  <td>{formatTimestamp(skipIntro)}</td>
                  <td>{formatTimestamp(skipOutro)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
