import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [count, setCount] = useState(0);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, []);

  console.log(count);
  console.log(repo);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Sum</button>
    </>
  );
};

export default Projects;
