import { Router } from 'express';
import { getEpisodeList, getEpisode } from 'dals/episode';
import { mapEpisodeListFromModelToApi, mapEpisodeFromModelToApi } from './episode.mappers';
import { Info, EpisodeApi, Episode } from './episode.api-model';

export const episodeApi = Router();

episodeApi.get('/', async (req, res) => {
  try {
    const { _limit, _page, name_like } = req.query;
    const pageSize = parseInt(_limit as string);
    const page = parseInt(_page as string);
    const episodeListModel = await getEpisodeList(name_like as string);
    const episodeListApi = mapEpisodeListFromModelToApi(episodeListModel);
    const characterInfo: Info = {
      count: episodeListApi.length,
      pages: Math.ceil(episodeListApi.length / pageSize),
      next: "",
      prev: "",
    }
    const ind1 = (page - 1) * pageSize;
    const ind2 = ((ind1 + pageSize) < episodeListApi.length) ? (ind1 + pageSize) : episodeListApi.length;
    const response: EpisodeApi = {
      info: characterInfo,
      results: episodeListApi.slice(ind1, ind2),
    }
    res.send(response);
  } catch (error) {
    res.sendStatus(400);
  }
});

episodeApi.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const episode = await getEpisode(id as string);
    res.send(mapEpisodeFromModelToApi(episode));
  } catch (error) {
    res.sendStatus(400);
  }
});
