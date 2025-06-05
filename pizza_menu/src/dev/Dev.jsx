import React from "react";
import "./dec.css";
import Skill from "./Skill";
function SkillList() {
  return (
    <div className="skill-grid">
      <Skill skill="React" emoji="⚛️" />
      <Skill skill="Redux" emoji="🔄" />
      <Skill skill="JavaScript" emoji="🟨" />
      <Skill skill="HTML" emoji="📄" />
    </div>
  );
}
const Dev = () => {
  return (
    <>
      <div className="dev-container">
        <img src="/photos/_MG_8400.jpg" alt="pizza" />
        <p>
          <h2>Harikrishna</h2>A dedicated and detail-oriented Frontend Developer
          with 1.8 years of professional experience specializing in building
          interactive and scalable web applications using React.js and Redux.
          Proven ability to develop user-friendly and high-performing interfaces
          that enhance user experience and achieve business objectives.
          Demonstrates strong expertise in modern JavaScript libraries and
          frameworks and a keen interest in staying updated with industry trends
          and best practices.
        </p>
        <h2>Skills</h2>
        <SkillList />
      </div>
    </>
  );
};
export default Dev;
