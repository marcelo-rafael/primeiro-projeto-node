import express from 'express';
// src/server.ts
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
