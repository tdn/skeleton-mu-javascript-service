require('dotenv').config();
import { app, errorHandler } from 'mu';

app.get('/', (req, res) => {
  res.send('Service is running!')
});

app.use(errorHandler);
