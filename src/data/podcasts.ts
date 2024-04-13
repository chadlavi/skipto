import { Podcast } from "../types";

const podcasts: Podcast[] = [
  {
    title: "Victory Light with The Kid Mero",
    skipIntro: {
      minute: 1,
      second: 30,
    },
    url: "https://www.iheart.com/podcast/1119-victory-light-with-the-ki-126511956/",
  },
  {
    title: "My Brother, My Brother and Me",
    skipIntro: {
      minute: 1,
      second: 10,
    },
    skipOutro: {
      minute: 0,
      second: 30,
    },
    url: "https://www.themcelroy.family/mbmbam",
  },
  {
    title: "Threedom",
    skipIntro: {
      minute: 1,
    },
    url: "https://lemonadamedia.com/show/threedom/",
  },
  {
    title: "Comedy Bang Bang: The Podcast",
    skipIntro: {
      minute: 2,
    },
    url: "https://www.earwolf.com/show/comedy-bang-bang/",
  },
];

export default podcasts;
