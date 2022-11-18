import Lists from "../Components/Lists";

let front = ["HTML", "CSS", "JavaScript"];
let back = ["LARAVEL (PHP framework)", "React Js"];
let mobile = ["Flutter"];
let development = [
  "Web Apps",
  "Static Website",
  "Dynamic Website",
  "Games",
  "Softwares",
  "Expert advisors (Robot)",
  "Trading indicators",
  "Scripts",
  "Trading Dashboard",
  "etc.",
];

export let datas = [
  {
    header: "",
    cardContent: (
      <>
        <div>
          ArchIntel Tutors are ready to take you through a systematic arranged
          topics on our selected programming languages.
        </div>
        <br />{" "}
        <h4>
          <span>Front-End Languages</span>
        </h4>
        <Lists listArray={front} />
        <br />{" "}
        <h4>
          <span>Back-End Languages</span>
        </h4>
        <Lists listArray={back} />
        <br />{" "}
        <h4>
          <span>Mobile Languages</span>
        </h4>{" "}
        <Lists listArray={mobile} />
      </>
    ),
    cardIcon: "fa fa-signal",
    iconText: "Forex",
    topMargin: "60px",
  },
  {
    header: "",
    cardContent: (
      <>
        <div>
          We are fully equiped with certified full stack developers who can
          design your applications/softwares very fast and still meet the
          desired quality.
          <br />
          <br />
        </div>
        <h4>
          <span> We develop:</span>
        </h4>
        <Lists listArray={development} />
      </>
    ),

    cardIcon: "fa fa-code",
    iconText: "Coding",
    topMargin: "30px",
  },
  {
    header: "",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
    cardIcon: "fa fa-empire",
    iconText: "Advanced",
    topMargin: "5px",
  },
];
