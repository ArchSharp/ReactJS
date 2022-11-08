import List from "../Components/Lists";

let xdata = [
  "To educate people on attaining financial freedom through technology.",
  "To equip people with the psychology and tools needed for long term profitability in trading the financial market.",
  "To optimize peoples business, strategies, etc.",
];
let xdata2 = [
  "To create a world environment where more than 70% of the population can comfortably live with or without white collar jobs",
];
let xdata3 = [
  "ArchIntel is a technological company was founded in 2009. We observed two major problems in the world" +
    " lack of skils and umemployment. Lack of huge fees to acquire these skills has been a major drawback to acquiring these skills.",
  "Thus, We saddled upon ourselves with the responsibility of providing solutions to these problems.",
  "We have also observed that Technology and the Financial market have more than enough capacity to solve these problems ",
];

export let aboutUs = [
  {
    header: "History",
    cardContent: <List listArray={xdata3} />,
    cardBottom: "ArchIntel",
  },
  {
    header: "Mission",
    cardContent: <List listArray={xdata} />,
    cardBottom: "ArchIntel",
  },
  {
    header: "Vision",
    cardContent: <List listArray={xdata2} />,
    cardBottom: "ArchIntel",
  },
];
