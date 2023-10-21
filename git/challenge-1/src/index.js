import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data"></div>
      <Intro />
      {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="photo\peep.jpg" alt="peep"></img>
    </div>
  );
}
function Intro() {
  return (
    <h1 className="data">
      Gustav Elijah Åhr (November 1, 1996 – November 15, 2017), better known by
      his stage name Lil Peep, was an American rapper and singer-songwriter from
      Long Beach, Long Island, New York.
    </h1>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} lever={skill.level} color={skill.color} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill">
      <p style={{ background: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
