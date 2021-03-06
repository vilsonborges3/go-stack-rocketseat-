const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const projects = [];

function logRequest(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}

function validationProjectId (request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'invalid project ID' });
  }

  return next();
}

app.use(logRequest);
app.use('/projects/:id', validationProjectId);

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title ? 
    projects.filter(project => project.title.includes(title)) : 
    projects;
  
  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner} = request.body;

  const project = { id: uuid(), title, owner}

  projects.push(project);

  console.log(title, owner);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner} = request.body;
  const projectIndex = projects.findIndex(project => project.id === id);

  if( projectIndex < 0 ) {
    console.log(projectIndex);
    return response.status(400).json({ error: "project not found"});
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return response.json( project );
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex(project => project.id === id);

  if( projectIndex < 0 ) {
    console.log(projectIndex);
    return response.status(400).json({ error: "project not found"});
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
}); 