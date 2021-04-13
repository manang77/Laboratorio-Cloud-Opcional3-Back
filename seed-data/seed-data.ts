import { disconnect, Types } from 'mongoose';
import { connectToDB } from '../src/core/database';
import { envConstants } from '../src/core/constants';
import { insertCharacterList, CharacterModel } from '../src/dals/character';
import { insertEpisodeList, EpisodeModel } from '../src/dals/episode';


const characterListData: CharacterModel[] = [

  {
    _id: new Types.ObjectId().toHexString(),
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z",
    "bestSentences": [
      "Rick Sanchez's best sentence 1",
      "Rick Sanchez's best sentence 2"
    ]
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "2.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z",
    "bestSentences": [
      "Morty Smith's best sentence 1",
      "Morty Smith's best sentence 2"
    ]
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "3.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 4,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "4.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/4",
    "created": "2017-11-04T19:22:43.665Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 5,
    "name": "Jerry Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "5.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/5",
    "created": "2017-11-04T19:26:56.301Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Abadango",
      "url": "https://rickandmortyapi.com/api/location/2"
    },
    "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Abadango",
      "url": "https://rickandmortyapi.com/api/location/2"
    },
    "image": "6.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/27"
    ],
    "url": "https://rickandmortyapi.com/api/character/6",
    "created": "2017-11-04T19:50:28.250Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 7,
    "name": "Abradolf Lincler",
    "status": "unknown",
    "species": "Human",
    "type": "Genetic experiment",
    "gender": "Male",
    "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Testicle Monster Dimension",
      "url": "https://rickandmortyapi.com/api/location/21"
    },
    "image": "7.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11"
    ],
    "url": "https://rickandmortyapi.com/api/character/7",
    "created": "2017-11-04T19:59:20.523Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 8,
    "name": "Adjudicator Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "8.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/8",
    "created": "2017-11-04T20:03:34.737Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 9,
    "name": "Agency Director",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "9.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/24"
    ],
    "url": "https://rickandmortyapi.com/api/character/9",
    "created": "2017-11-04T20:06:54.976Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 10,
    "name": "Alan Rails",
    "status": "Dead",
    "species": "Human",
    "type": "Superhuman (Ghost trains summoner)",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Worldender's lair",
      "url": "https://rickandmortyapi.com/api/location/4"
    },
    "image": "10.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/25"
    ],
    "url": "https://rickandmortyapi.com/api/character/10",
    "created": "2017-11-04T20:19:09.017Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 11,
    "name": "Albert Einstein",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "11.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/12"
    ],
    "url": "https://rickandmortyapi.com/api/character/11",
    "created": "2017-11-04T20:20:20.965Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 12,
    "name": "Alexander",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Anatomy Park",
      "url": "https://rickandmortyapi.com/api/location/5"
    },
    "image": "12.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/3"
    ],
    "url": "https://rickandmortyapi.com/api/character/12",
    "created": "2017-11-04T20:32:33.144Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 13,
    "name": "Alien Googah",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "unknown",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "13.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/13",
    "created": "2017-11-04T20:33:30.779Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 14,
    "name": "Alien Morty",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "14.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10"
    ],
    "url": "https://rickandmortyapi.com/api/character/14",
    "created": "2017-11-04T20:51:31.373Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 15,
    "name": "Alien Rick",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "15.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10"
    ],
    "url": "https://rickandmortyapi.com/api/character/15",
    "created": "2017-11-04T20:56:13.215Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 16,
    "name": "Amish Cyborg",
    "status": "Dead",
    "species": "Alien",
    "type": "Parasite",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "16.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/15"
    ],
    "url": "https://rickandmortyapi.com/api/character/16",
    "created": "2017-11-04T21:12:45.235Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 17,
    "name": "Annie",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Anatomy Park",
      "url": "https://rickandmortyapi.com/api/location/5"
    },
    "image": "17.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/3"
    ],
    "url": "https://rickandmortyapi.com/api/character/17",
    "created": "2017-11-04T22:21:24.481Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 18,
    "name": "Antenna Morty",
    "status": "Alive",
    "species": "Human",
    "type": "Human with antennae",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "18.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/18",
    "created": "2017-11-04T22:25:29.008Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 19,
    "name": "Antenna Rick",
    "status": "unknown",
    "species": "Human",
    "type": "Human with antennae",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
    "image": "19.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10"
    ],
    "url": "https://rickandmortyapi.com/api/character/19",
    "created": "2017-11-04T22:28:13.756Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 20,
    "name": "Ants in my Eyes Johnson",
    "status": "unknown",
    "species": "Human",
    "type": "Human with ants in his eyes",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "20.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/20",
    "created": "2017-11-04T22:34:53.659Z",
    "bestSentences": []
  },
  {    _id: new Types.ObjectId().toHexString(),
    "id": 21,
    "name": "Aqua Morty",
    "status": "unknown",
    "species": "Humanoid",
    "type": "Fish-Person",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "21.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/21",
    "created": "2017-11-04T22:39:48.055Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 22,
    "name": "Aqua Rick",
    "status": "unknown",
    "species": "Humanoid",
    "type": "Fish-Person",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "22.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/22",
    "created": "2017-11-04T22:41:07.171Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 23,
    "name": "Arcade Alien",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Immortality Field Resort",
      "url": "https://rickandmortyapi.com/api/location/7"
    },
    "image": "23.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26"
    ],
    "url": "https://rickandmortyapi.com/api/character/23",
    "created": "2017-11-05T08:43:05.095Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 24,
    "name": "Armagheadon",
    "status": "Alive",
    "species": "Alien",
    "type": "Cromulon",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Signus 5 Expanse",
      "url": "https://rickandmortyapi.com/api/location/22"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Signus 5 Expanse",
      "url": "https://rickandmortyapi.com/api/location/22"
    },
    "image": "24.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/16"
    ],
    "url": "https://rickandmortyapi.com/api/character/24",
    "created": "2017-11-05T08:48:30.776Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 25,
    "name": "Armothy",
    "status": "Dead",
    "species": "unknown",
    "type": "Self-aware arm",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "25.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/25",
    "created": "2017-11-05T08:54:29.343Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 26,
    "name": "Arthricia",
    "status": "Alive",
    "species": "Alien",
    "type": "Cat-Person",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Purge Planet",
      "url": "https://rickandmortyapi.com/api/location/9"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Purge Planet",
      "url": "https://rickandmortyapi.com/api/location/9"
    },
    "image": "26.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/20"
    ],
    "url": "https://rickandmortyapi.com/api/character/26",
    "created": "2017-11-05T08:56:46.165Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 27,
    "name": "Artist Morty",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "27.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/27",
    "created": "2017-11-05T08:59:07.457Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 28,
    "name": "Attila Starwar",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "28.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/17"
    ],
    "url": "https://rickandmortyapi.com/api/character/28",
    "created": "2017-11-05T09:02:16.595Z",
    "bestSentences": []
  },
  {    _id: new Types.ObjectId().toHexString(),
    "id": 29,
    "name": "Baby Legs",
    "status": "Alive",
    "species": "Human",
    "type": "Human with baby legs",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "29.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/29",
    "created": "2017-11-05T09:06:19.644Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 30,
    "name": "Baby Poopybutthole",
    "status": "Alive",
    "species": "Poopybutthole",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
    "image": "30.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/30",
    "created": "2017-11-05T09:13:16.483Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 31,
    "name": "Baby Wizard",
    "status": "Dead",
    "species": "Alien",
    "type": "Parasite",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "31.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/15"
    ],
    "url": "https://rickandmortyapi.com/api/character/31",
    "created": "2017-11-05T09:15:11.286Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 32,
    "name": "Bearded Lady",
    "status": "Dead",
    "species": "Alien",
    "type": "Parasite",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "32.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/15"
    ],
    "url": "https://rickandmortyapi.com/api/character/32",
    "created": "2017-11-05T09:18:04.184Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 33,
    "name": "Beebo",
    "status": "Dead",
    "species": "Alien",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Venzenulon 7",
      "url": "https://rickandmortyapi.com/api/location/10"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Venzenulon 7",
      "url": "https://rickandmortyapi.com/api/location/10"
    },
    "image": "33.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/29"
    ],
    "url": "https://rickandmortyapi.com/api/character/33",
    "created": "2017-11-05T09:21:55.595Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 34,
    "name": "Benjamin",
    "status": "Alive",
    "species": "Poopybutthole",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "34.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/17"
    ],
    "url": "https://rickandmortyapi.com/api/character/34",
    "created": "2017-11-05T09:24:04.748Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 35,
    "name": "Bepisian",
    "status": "Alive",
    "species": "Alien",
    "type": "Bepisian",
    "gender": "unknown",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Bepis 9",
      "url": "https://rickandmortyapi.com/api/location/11"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Bepis 9",
      "url": "https://rickandmortyapi.com/api/location/11"
    },
    "image": "35.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/25"
    ],
    "url": "https://rickandmortyapi.com/api/character/35",
    "created": "2017-11-05T09:27:38.491Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 36,
    "name": "Beta-Seven",
    "status": "Alive",
    "species": "Alien",
    "type": "Hivemind",
    "gender": "unknown",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
    "image": "36.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/14"
    ],
    "url": "https://rickandmortyapi.com/api/character/36",
    "created": "2017-11-05T09:31:08.952Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 37,
    "name": "Beth Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "image": "37.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/37",
    "created": "2017-11-05T09:38:22.960Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 38,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "image": "38.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/38",
    "created": "2017-11-05T09:48:44.230Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 39,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Evil Rick's Target Dimension)",
      "url": "https://rickandmortyapi.com/api/location/34"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Evil Rick's Target Dimension)",
      "url": "https://rickandmortyapi.com/api/location/34"
    },
    "image": "39.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10"
    ],
    "url": "https://rickandmortyapi.com/api/character/39",
    "created": "2017-11-05T09:52:31.777Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 40,
    "name": "Beth's Mytholog",
    "status": "Dead",
    "species": "Mythological Creature",
    "type": "Mytholog",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Nuptia 4",
      "url": "https://rickandmortyapi.com/api/location/13"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Nuptia 4",
      "url": "https://rickandmortyapi.com/api/location/13"
    },
    "image": "40.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/18"
    ],
    "url": "https://rickandmortyapi.com/api/character/40",
    "created": "2017-11-05T10:02:26.701Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 41,
    "name": "Big Boobed Waitress",
    "status": "Alive",
    "species": "Mythological Creature",
    "type": "",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Fantasy World",
      "url": "https://rickandmortyapi.com/api/location/48"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Fantasy World",
      "url": "https://rickandmortyapi.com/api/location/48"
    },
    "image": "41.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/5"
    ],
    "url": "https://rickandmortyapi.com/api/character/41",
    "created": "2017-11-05T10:13:45.960Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 42,
    "name": "Big Head Morty",
    "status": "unknown",
    "species": "Human",
    "type": "Human with giant head",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "42.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/42",
    "created": "2017-11-05T10:15:53.349Z",
    "bestSentences": []
  },
  {    _id: new Types.ObjectId().toHexString(),
    "id": 43,
    "name": "Big Morty",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "43.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/43",
    "created": "2017-11-05T10:17:04.997Z",
    "bestSentences": []
  },
  {    _id: new Types.ObjectId().toHexString(),
    "id": 44,
    "name": "Body Guard Morty",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "44.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/44",
    "created": "2017-11-05T10:18:11.062Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 45,
    "name": "Bill",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "image": "45.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/3"
    ],
    "url": "https://rickandmortyapi.com/api/character/45",
    "created": "2017-11-05T10:22:27.446Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 46,
    "name": "Bill",
    "status": "unknown",
    "species": "Animal",
    "type": "Dog",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
    "image": "46.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/2"
    ],
    "url": "https://rickandmortyapi.com/api/character/46",
    "created": "2017-11-05T10:24:38.089Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 47,
    "name": "Birdperson",
    "status": "Dead",
    "species": "Alien",
    "type": "Bird-Person",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Bird World",
      "url": "https://rickandmortyapi.com/api/location/15"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Planet Squanch",
      "url": "https://rickandmortyapi.com/api/location/35"
    },
    "image": "47.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/26"
    ],
    "url": "https://rickandmortyapi.com/api/character/47",
    "created": "2017-11-05T11:13:36.018Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 48,
    "name": "Black Rick",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "48.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/48",
    "created": "2017-11-05T11:15:26.044Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 49,
    "name": "Blamph",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "unknown",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "49.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/19"
    ],
    "url": "https://rickandmortyapi.com/api/character/49",
    "created": "2017-11-05T11:18:26.702Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 50,
    "name": "Blim Blam",
    "status": "Alive",
    "species": "Alien",
    "type": "Korblock",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "50.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/14"
    ],
    "url": "https://rickandmortyapi.com/api/character/50",
    "created": "2017-11-05T11:21:43.756Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 51,
    "name": "Blue Diplomat",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "51.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/19"
    ],
    "url": "https://rickandmortyapi.com/api/character/51",
    "created": "2017-11-05T11:24:49.688Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 52,
    "name": "Blue Footprint Guy",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "52.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/52",
    "created": "2017-11-05T11:26:42.084Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 53,
    "name": "Blue Shirt Morty",
    "status": "unknown",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "53.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10"
    ],
    "url": "https://rickandmortyapi.com/api/character/53",
    "created": "2017-11-05T11:28:38.627Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 54,
    "name": "Bobby Moynihan",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "54.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/54",
    "created": "2017-11-05T11:31:26.348Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 55,
    "name": "Boobloosian",
    "status": "Dead",
    "species": "Alien",
    "type": "Boobloosian",
    "gender": "unknown",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Nuptia 4",
      "url": "https://rickandmortyapi.com/api/location/13"
    },
    "image": "55.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/21"
    ],
    "url": "https://rickandmortyapi.com/api/character/55",
    "created": "2017-11-05T11:32:53.847Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 56,
    "name": "Bootleg Portal Chemist Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "56.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/56",
    "created": "2017-11-05T11:34:16.447Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 57,
    "name": "Borpocian",
    "status": "Alive",
    "species": "Alien",
    "type": "Elephant-Person",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
    "image": "57.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/57",
    "created": "2017-11-05T11:38:29.459Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 58,
    "name": "Brad",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "58.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/30"
    ],
    "url": "https://rickandmortyapi.com/api/character/58",
    "created": "2017-11-05T11:40:02.554Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 59,
    "name": "Brad Anderson",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "59.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/7"
    ],
    "url": "https://rickandmortyapi.com/api/character/59",
    "created": "2017-11-05T11:41:38.964Z",
    "bestSentences": []
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 60,
    "name": "Calypso",
    "status": "Dead",
    "species": "Human",
    "type": "Superhuman",
    "gender": "Female",
        "origin": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
        "location": {
      _id: new Types.ObjectId().toHexString(),
      "name": "unknown",
      "url": ""
    },
    "image": "60.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/25"
    ],
    "url": "https://rickandmortyapi.com/api/character/60",
    "created": "2017-11-05T11:52:45.852Z",
    "bestSentences": []
  }
];
const episodeListData: EpisodeModel[] = [

  {
    _id: new Types.ObjectId().toHexString(),
    "id": 1,
    "name": "Pilot",
    "air_date": "December 2, 2013",
    "episode": "S01E01",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/35",
      "https://rickandmortyapi.com/api/character/38"
    ],
    "url": "https://rickandmortyapi.com/api/episode/1",
    "created": "2017-11-10T12:56:33.798Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 2,
    "name": "Lawnmower Dog",
    "air_date": "December 9, 2013",
    "episode": "S01E02",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/46"
    ],
    "url": "https://rickandmortyapi.com/api/episode/2",
    "created": "2017-11-10T12:56:33.916Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 3,
    "name": "Anatomy Park",
    "air_date": "December 16, 2013",
    "episode": "S01E03",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/12",
      "https://rickandmortyapi.com/api/character/17",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/45"
    ],
    "url": "https://rickandmortyapi.com/api/episode/3",
    "created": "2017-11-10T12:56:34.022Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 4,
    "name": "M. Night Shaym-Aliens!",
    "air_date": "January 13, 2014",
    "episode": "S01E04",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/38"
    ],
    "url": "https://rickandmortyapi.com/api/episode/4",
    "created": "2017-11-10T12:56:34.129Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 5,
    "name": "Meeseeks and Destroy",
    "air_date": "January 20, 2014",
    "episode": "S01E05",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/41"
    ],
    "url": "https://rickandmortyapi.com/api/episode/5",
    "created": "2017-11-10T12:56:34.236Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 6,
    "name": "Rick Potion #9",
    "air_date": "January 27, 2014",
    "episode": "S01E06",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/58"
    ],
    "url": "https://rickandmortyapi.com/api/episode/6",
    "created": "2017-11-10T12:56:34.339Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 7,
    "name": "Raising Gazorpazorp",
    "air_date": "March 10, 2014",
    "episode": "S01E07",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/59"
    ],
    "url": "https://rickandmortyapi.com/api/episode/7",
    "created": "2017-11-10T12:56:34.441Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 8,
    "name": "Rixty Minutes",
    "air_date": "March 17, 2014",
    "episode": "S01E08",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/20",
      "https://rickandmortyapi.com/api/character/28",
      "https://rickandmortyapi.com/api/character/29",
      "https://rickandmortyapi.com/api/character/34",
      "https://rickandmortyapi.com/api/character/37",
      "https://rickandmortyapi.com/api/character/54"
    ],
    "url": "https://rickandmortyapi.com/api/episode/8",
    "created": "2017-11-10T12:56:34.543Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 9,
    "name": "Something Ricked This Way Comes",
    "air_date": "March 24, 2014",
    "episode": "S01E09",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/9",
    "created": "2017-11-10T12:56:34.645Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 10,
    "name": "Close Rick-counters of the Rick Kind",
    "air_date": "April 7, 2014",
    "episode": "S01E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/7",
      "https://rickandmortyapi.com/api/character/14",
      "https://rickandmortyapi.com/api/character/15",
      "https://rickandmortyapi.com/api/character/18",
      "https://rickandmortyapi.com/api/character/19",
      "https://rickandmortyapi.com/api/character/21",
      "https://rickandmortyapi.com/api/character/22",
      "https://rickandmortyapi.com/api/character/27",
      "https://rickandmortyapi.com/api/character/39",
      "https://rickandmortyapi.com/api/character/53"
    ],
    "url": "https://rickandmortyapi.com/api/episode/10",
    "created": "2017-11-10T12:56:34.747Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 11,
    "name": "Ricksy Business",
    "air_date": "April 14, 2014",
    "episode": "S01E11",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/7",
      "https://rickandmortyapi.com/api/character/35",
      "https://rickandmortyapi.com/api/character/47",
      "https://rickandmortyapi.com/api/character/58"
    ],
    "url": "https://rickandmortyapi.com/api/episode/11",
    "created": "2017-11-10T12:56:34.850Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 12,
    "name": "A Rickle in Time",
    "air_date": "July 26, 2015",
    "episode": "S02E01",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/11"

    ],
    "url": "https://rickandmortyapi.com/api/episode/12",
    "created": "2017-11-10T12:56:34.953Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 13,
    "name": "Mortynight Run",
    "air_date": "August 2, 2015",
    "episode": "S02E02",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/23",
      "https://rickandmortyapi.com/api/character/28",
      "https://rickandmortyapi.com/api/character/34"
    ],
    "url": "https://rickandmortyapi.com/api/episode/13",
    "created": "2017-11-10T12:56:35.055Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 14,
    "name": "Auto Erotic Assimilation",
    "air_date": "August 9, 2015",
    "episode": "S02E03",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/36",
      "https://rickandmortyapi.com/api/character/50"
    ],
    "url": "https://rickandmortyapi.com/api/episode/14",
    "created": "2017-11-10T12:56:35.158Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 15,
    "name": "Total Rickall",
    "air_date": "August 16, 2015",
    "episode": "S02E04",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/16",
      "https://rickandmortyapi.com/api/character/31",
      "https://rickandmortyapi.com/api/character/32"
    ],
    "url": "https://rickandmortyapi.com/api/episode/15",
    "created": "2017-11-10T12:56:35.261Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 16,
    "name": "Get Schwifty",
    "air_date": "August 23, 2015",
    "episode": "S02E05",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/24",
      "https://rickandmortyapi.com/api/character/47"
    ],
    "url": "https://rickandmortyapi.com/api/episode/16",
    "created": "2017-11-10T12:56:35.364Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 17,
    "name": "The Ricks Must Be Crazy",
    "air_date": "August 30, 2015",
    "episode": "S02E06",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/28",
      "https://rickandmortyapi.com/api/character/34"
    ],
    "url": "https://rickandmortyapi.com/api/episode/17",
    "created": "2017-11-10T12:56:35.467Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 18,
    "name": "Big Trouble in Little Sanchez",
    "air_date": "September 13, 2015",
    "episode": "S02E07",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/40",
      "https://rickandmortyapi.com/api/character/55"
    ],
    "url": "https://rickandmortyapi.com/api/episode/18",
    "created": "2017-11-10T12:56:35.569Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 19,
    "name": "Interdimensional Cable 2: Tempting Fate",
    "air_date": "September 20, 2015",
    "episode": "S02E08",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/23",
      "https://rickandmortyapi.com/api/character/35",
      "https://rickandmortyapi.com/api/character/49",
      "https://rickandmortyapi.com/api/character/51"
    ],
    "url": "https://rickandmortyapi.com/api/episode/19",
    "created": "2017-11-10T12:56:35.669Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 20,
    "name": "Look Who's Purging Now",
    "air_date": "September 27, 2015",
    "episode": "S02E09",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/26"
    ],
    "url": "https://rickandmortyapi.com/api/episode/20",
    "created": "2017-11-10T12:56:35.772Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 21,
    "name": "The Wedding Squanchers",
    "air_date": "October 4, 2015",
    "episode": "S02E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/23",
      "https://rickandmortyapi.com/api/character/47",
      "https://rickandmortyapi.com/api/character/55"
    ],
    "url": "https://rickandmortyapi.com/api/episode/21",
    "created": "2017-11-10T12:56:35.875Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 22,
    "name": "The Rickshank Rickdemption",
    "air_date": "April 1, 2017",
    "episode": "S03E01",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/21",
      "https://rickandmortyapi.com/api/character/22",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/42",
      "https://rickandmortyapi.com/api/character/47",
      "https://rickandmortyapi.com/api/character/48",
      "https://rickandmortyapi.com/api/character/57"
    ],
    "url": "https://rickandmortyapi.com/api/episode/22",
    "created": "2017-11-10T12:56:35.983Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 23,
    "name": "Rickmancing the Stone",
    "air_date": "July 30, 2017",
    "episode": "S03E02",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/25",
      "https://rickandmortyapi.com/api/character/52"
    ],
    "url": "https://rickandmortyapi.com/api/episode/23",
    "created": "2017-11-10T12:56:36.100Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 24,
    "name": "Pickle Rick",
    "air_date": "August 6, 2017",
    "episode": "S03E03",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/9"
    ],
    "url": "https://rickandmortyapi.com/api/episode/24",
    "created": "2017-11-10T12:56:36.206Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 25,
    "name": "Vindicators 3: The Return of Worldender",
    "air_date": "August 13, 2017",
    "episode": "S03E04",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/10",
      "https://rickandmortyapi.com/api/character/23",
      "https://rickandmortyapi.com/api/character/35",
      "https://rickandmortyapi.com/api/character/60"
    ],
    "url": "https://rickandmortyapi.com/api/episode/25",
    "created": "2017-11-10T12:56:36.310Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 26,
    "name": "The Whirly Dirly Conspiracy",
    "air_date": "August 20, 2017",
    "episode": "S03E05",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/23",
      "https://rickandmortyapi.com/api/character/47"
    ],
    "url": "https://rickandmortyapi.com/api/episode/26",
    "created": "2017-11-10T12:56:36.413Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 27,
    "name": "Rest and Ricklaxation",
    "air_date": "August 27, 2017",
    "episode": "S03E06",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/6"
    ],
    "url": "https://rickandmortyapi.com/api/episode/27",
    "created": "2017-11-10T12:56:36.515Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 28,
    "name": "The Ricklantis Mixup",
    "air_date": "September 10, 2017",
    "episode": "S03E07",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/8",
      "https://rickandmortyapi.com/api/character/18",
      "https://rickandmortyapi.com/api/character/22",
      "https://rickandmortyapi.com/api/character/27",
      "https://rickandmortyapi.com/api/character/43",
      "https://rickandmortyapi.com/api/character/44",
      "https://rickandmortyapi.com/api/character/48",
      "https://rickandmortyapi.com/api/character/56"
    ],
    "url": "https://rickandmortyapi.com/api/episode/28",
    "created": "2017-11-10T12:56:36.618Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 29,
    "name": "Morty's Mind Blowers",
    "air_date": "September 17, 2017",
    "episode": "S03E08",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/33"
    ],
    "url": "https://rickandmortyapi.com/api/episode/29",
    "created": "2017-11-10T12:56:36.726Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 30,
    "name": "The ABC's of Beth",
    "air_date": "September 24, 2017",
    "episode": "S03E09",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/58"
    ],
    "url": "https://rickandmortyapi.com/api/episode/30",
    "created": "2017-11-10T12:56:36.828Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 31,
    "name": "The Rickchurian Mortydate",
    "air_date": "October 1, 2017",
    "episode": "S03E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5",
      "https://rickandmortyapi.com/api/character/13",
      "https://rickandmortyapi.com/api/character/30"
    ],
    "url": "https://rickandmortyapi.com/api/episode/31",
    "created": "2017-11-10T12:56:36.929Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 32,
    "name": "Edge of Tomorty: Rick, Die, Rickpeat",
    "air_date": "November 10, 2019",
    "episode": "S04E01",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/32",
    "created": "2020-04-30T06:52:04.495Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 33,
    "name": "The Old Man and the Seat",
    "air_date": "November 17, 2019",
    "episode": "S04E02",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/33",
    "created": "2020-04-30T06:52:04.498Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 34,
    "name": "One Crew Over the Crewcoo's Morty",
    "air_date": "November 24, 2019",
    "episode": "S04E03",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4"
    ],
    "url": "https://rickandmortyapi.com/api/episode/34",
    "created": "2020-04-30T06:52:04.498Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 35,
    "name": "Claw and Hoarder: Special Ricktim's Morty",
    "air_date": "December 8, 2019",
    "episode": "S04E04",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/35",
    "created": "2020-04-30T06:52:04.498Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 36,
    "name": "Rattlestar Ricklactica",
    "air_date": "December 15, 2019",
    "episode": "S04E05",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/36",
    "created": "2020-04-30T06:52:04.499Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 37,
    "name": "Never Ricking Morty",
    "air_date": "May 3, 2020",
    "episode": "S04E06",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2"
    ],
    "url": "https://rickandmortyapi.com/api/episode/37",
    "created": "2020-08-06T05:44:21.422Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 38,
    "name": "Promortyus",
    "air_date": "May 10, 2020",
    "episode": "S04E07",
    "characters": [

      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/38",
    "created": "2020-08-06T05:49:40.563Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 39,
    "name": "The Vat of Acid Episode",
    "air_date": "May 17, 2020",
    "episode": "S04E08",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/39",
    "created": "2020-08-06T05:51:07.419Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 40,
    "name": "Childrick of Mort",
    "air_date": "May 24, 2020",
    "episode": "S04E09",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/40",
    "created": "2020-08-06T05:51:25.458Z"
  },
  {
    _id: new Types.ObjectId().toHexString(),
    "id": 41,
    "name": "Star Mort: Rickturn of the Jerri",
    "air_date": "May 31, 2020",
    "episode": "S04E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/3",
      "https://rickandmortyapi.com/api/character/4",
      "https://rickandmortyapi.com/api/character/5"
    ],
    "url": "https://rickandmortyapi.com/api/episode/41",
    "created": "2020-08-06T05:51:52.079Z"
  }
];


export const run = async () => {
  await connectToDB(envConstants.MONGODB_URI);

  const characterList = characterListData;
  await insertCharacterList(characterList);

  const episodeList = episodeListData;
  await insertEpisodeList(episodeList);

  await disconnect();
};

run();
