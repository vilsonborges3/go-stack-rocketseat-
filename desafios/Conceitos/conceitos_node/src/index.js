const express = require('express');
const cors = require('cors');

const { uuid, isUuid } = require('uuidv4');
const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validationRepositoryId (request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'invalid repository ID' });
  }

  return next();
}

app.use('/repository/:id', validationRepositoryId);

app.get('/repositories', (request, response) => {
  return response.json(repositories);
});

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(repository);

  return response.json(repository);
});

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'repository not found'});
  }

  const likes = repositories[repositoryIndex].likes;
  const repository = {
    id,
    title,
    url,
    techs,
    likes,
  };

  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'repository not found'});
  }

  const repository = repositories.splice(repositoryIndex, 1);

  return response.json(repository);
});

app.post('/repositories/:id/likes', (request, response) => {
  const { id } = request.params;
  console.log(id);

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < -1 ) {
    return response.status(400).json({ error: 'repository not found'});
  }

  repositories[repositoryIndex].likes = repositories[repositoryIndex].likes + 1;

  return response.json(repositories[repositoryIndex]);
});

app.listen(3333, () => {
  console.log('???? Back-end started - Desafio conceitos node')
});