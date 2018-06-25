import express from 'express';
import { Request, Response } from 'express';
const bodyParser = require('body-parser');
import  { peoples }from './controllers';

let app = express();
app.use(bodyParser.json());
app.get('/page', (req, res) => {
  res.status(200).send( {
    title: 'Hello, Express!',
    content: '...'
  });
});

// app.get('/data', (req: Request, res: Response) => peoples.get);

app.get('/peoples', (req: Request, res: Response) => 
  peoples.get()
    .then(people => res.status(200).send(people)))
app.post('/peoples', (req: Request, res: Response) => {
  return peoples.create(req.body)
    .then(people => res.status(200).send(people));
  });

export default app;
