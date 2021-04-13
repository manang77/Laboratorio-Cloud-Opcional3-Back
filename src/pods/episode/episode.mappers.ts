import * as model from 'dals/episode/episode.model';
import * as apiModel from './episode.api-model';

export const mapEpisodeFromModelToApi = (episode: model.EpisodeModel): apiModel.Episode => ({

  id: episode.id,
  name: episode.name,
  air_date: episode.air_date,
  episode: episode.episode,
  characters: episode.characters,
  url: episode.url,
  created: episode.created,
});

export const mapEpisodeListFromModelToApi = (
  episodeList: model.EpisodeModel[]
): apiModel.Episode[] => episodeList.map(mapEpisodeFromModelToApi);
