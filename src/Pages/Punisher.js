// src/pages/Punish.js
import React from 'react';

const Punish = () => (
  <div>
    <h1>Punish Page</h1>
    {[...Array(4)].map((_, i) => (
      <section key={i}>
        <h2>Section {i + 1}</h2>
        <p>Content for section {i + 1}</p>
      </section>
    ))}
  </div>
);

export default Punish;
