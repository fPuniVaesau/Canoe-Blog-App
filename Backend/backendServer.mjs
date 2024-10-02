import express from 'express';
import cors from 'cors';
import AllRoutesRouter from './Routing/AllRoutes.mjs';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: ['http://localhost:8000'] }));

app.use(AllRoutesRouter);

app.get('/', (req, res) => {
  res.send({ welcome: 'Filo Vaesau | Backend Development Server' });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is now running on PORT : ${PORT}.`);
});
