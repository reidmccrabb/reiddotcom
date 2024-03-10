import React from "react";

function About({ content }) {
  const { paragraphs } = content;
  return (
    <div>
      <h2>Reid McCrabb</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <hr />
      <br />
      Find me on:
      <br />
      <a
        href="https://twitter.com/reidmccrabb"
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/reidmccrabb//"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <br />
      <a
        href="https://github.com/reidmccrabb?tab=overview&from=2024-03-01&to=2024-03-09"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <br />
    </div>
  );
}

export default About;
