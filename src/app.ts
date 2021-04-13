import { envConstants } from 'core/constants';
import { createApp } from 'core/servers';
import { connectToDB } from 'core/database';
import { characterApi } from 'pods/character';
import { episodeApi } from 'pods/episode';

const app = createApp();

app.use('/characters', characterApi)
app.use('/episodes', episodeApi)


app.listen(envConstants.PORT, async () => {
  await connectToDB(envConstants.MONGODB_URI);
  console.log(`Server ready at PORT ${envConstants.PORT}`);
});
