import { Router } from 'express';
import { getCharacterList, getCharacter } from 'dals/character';
import { mapCharacterListFromModelToApi, mapCharacterFromModelToApi } from './character-mappers';
import { Info, CharacterApi, Character } from './character.api-model';
import { envConstants } from 'core/constants';

export const characterApi = Router();

characterApi.get('/', async (req, res) => {
  try {
    const {_limit, _page, name_like} = req.query;
    const pageSize = (_limit) ? parseInt(_limit as string) : parseInt(envConstants.PAGE_SIZE);
    const page = (_page) ? parseInt(_page as string) : 1;
    const characterListModel = await getCharacterList(name_like as string);
    const characterListApi = mapCharacterListFromModelToApi(characterListModel);
    const characterInfo: Info = {
      count: characterListApi.length,
      pages: Math.ceil(characterListApi.length / pageSize),
      next: "",
      prev: "",
    }
    const ind1 = (page - 1) * pageSize;
    const ind2 = ((ind1 + pageSize) < characterListApi.length) ? (ind1 + pageSize) : characterListApi.length;
    const response: CharacterApi = {
      info: characterInfo,
      results: characterListApi.slice(ind1, ind2),
    }
    res.send(response);
  } catch (error) {
    res.sendStatus(400);
  }
});

characterApi.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const character = await getCharacter(id as string);
    res.send(mapCharacterFromModelToApi(character));
  } catch (error) {
    res.sendStatus(400);
  }
});
