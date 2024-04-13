import { RefObject, useEffect, useState } from "react";
import { Podcast, Timestamp } from "../types";

export const formatTimestamp = (timestamp?: Timestamp): string => {
  if (timestamp) {
    return `${timestamp?.minute || "00"}:${timestamp?.second || "00"}`;
  }
  return "-";
};

export const useRefDimensions = (
  ref: RefObject<Element>,
): { boundingRect: DOMRect; scrollLeft: number } | undefined => {
  const [dimensions, setDimensions] = useState<{
    boundingRect: DOMRect;
    scrollLeft: number;
  }>();
  useEffect(() => {
    const { current } = ref;
    const handleResize = () => {
      if (ref.current) {
        const { current } = ref;
        const boundingRect = current.getBoundingClientRect();
        const { scrollLeft } = current;
        setDimensions({ boundingRect, scrollLeft });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    current?.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      current?.removeEventListener("scroll", handleResize);
    };
  }, [ref]);
  return dimensions;
};

export const sortPodcasts =
  (aToZ: boolean = true) =>
  (a: Podcast, b: Podcast): number => {
    const multiplyer = aToZ ? 1 : -1;
    return a.title.toUpperCase() < b.title.toUpperCase()
      ? -1 * multiplyer
      : 1 * multiplyer;
  };
