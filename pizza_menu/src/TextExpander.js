import React, { useState } from "react";
import "./styles.css";

// Reusable TextExpand Component
function TextExpand({
  children,
  collapsedNumWords = 30,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#007bff",
  expanded = false,
  className = ""
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const words = children.split(" ");
  const shouldTruncate = words.length > collapsedNumWords;
  const displayText = isExpanded || !shouldTruncate
    ? children
    : words.slice(0, collapsedNumWords).join(" ") + "...";

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className={className}>
      <p>{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={toggleExpand}
          style={{ color: buttonColor, border: "none", background: "none", cursor: "pointer" }}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      )}
    </div>
  );
}

export default function TextExpander() {
  return (
    <div>
      <TextExpand>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpand>

      <TextExpand
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpand>

      <TextExpand expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpand>
    </div>
  );
}
