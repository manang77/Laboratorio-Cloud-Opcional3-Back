import { envConstants } from 'core/constants';
import { createApp } from 'core/servers';
import { connectToDB } from 'core/database';
import { characterApi } from 'pods/character';
import { episodeApi } from 'pods/episode';
import path from 'path';
import express from 'express';

const app = createApp();

//const staticFilesPath = path.resolve(__dirname, '../public');
const staticFilesPath = path.resolve(__dirname, process.env.STATIC_FILES_PATH);
app.use('/', express.static(staticFilesPath));

app.use('/characters', characterApi)
app.use('/episodes', episodeApi)

app.listen(envConstants.PORT, async () => {
  await connectToDB(envConstants.MONGODB_URI);
  console.log(`Server ready at PORT ${envConstants.PORT}`);
});
