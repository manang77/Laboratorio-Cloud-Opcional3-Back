import express from 'express';
import cors from 'cors';
import { envConstants } from 'core/constants';

export const createApp = () => {
  const app = express();
  app.use(cors({ origin: envConstants.CORS_ORIGIN }));

  //app.use(express.static('public'));

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  return app;
};
