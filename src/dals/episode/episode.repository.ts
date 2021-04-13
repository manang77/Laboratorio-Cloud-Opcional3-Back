import { EpisodeModel } from './episode.model';
import { EpisodeContext } from './episode.context';

export const getEpisodeList = async (name: string): Promise<EpisodeModel[]> => {

  const filter = (name) ? { "name": { '$regex': `.*${name.trim()}.*`, '$options': 'i' } } : {};
  return await EpisodeContext.find(filter)
  .select({
    _id: 1,
    id: 1,
    name: 1,
    air_date: 1,
    episode: 1,
    characters: 1,
    url: 1,
    created: 1,
  })
  .lean();
}

export const getEpisode = async (id: string): Promise<EpisodeModel> => {
  const result: EpisodeModel[] = await EpisodeContext.find({ 'id': parseInt(id) })
    .select({
      _id: 1,
      id: 1,
      name: 1,
      air_date: 1,
      episode: 1,
      characters: 1,
      url: 1,
      created: 1,
    })
    .lean();
  return result[0];
};

export const insertEpisodeList = async (episodeList: EpisodeModel[]) =>
  await EpisodeContext.insertMany(episodeList);
