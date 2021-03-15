import React, { useState } from 'react';

import Header from './componets/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app',  'Front-end web']);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    );
}

export default App;