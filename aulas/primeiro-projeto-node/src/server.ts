import express from 'express';
import 'reflect-metadata';
import appointmentsRouter from './routes/appointments.routes';
import './database';

const app = express();

app.use(express.json());
app.use(appointmentsRouter);
app.listen(3333, () => {
  console.log('Server started on port 3333');
});
