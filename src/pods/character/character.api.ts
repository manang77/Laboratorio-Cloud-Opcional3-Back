import { Router } from 'express';
import { getCharacterList, getCharacter } from 'dals/character';
import { mapCharacterListFromModelToApi, mapCharacterFromModelToApi } from './character-mappers';
import { Info, CharacterApi, Character } from './character.api-model';

export const characterApi = Router();

characterApi.get('/', async (req, res) => {
  try {
    const {_limit, _page, name_like} = req.query;
    const pageSize = parseInt(_limit as string);
    const page = parseInt(_page as string);
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
