import {feed} from '../../interfaces/feed';

export const feedDataList:feed[]=[
    {
      "albumId": 1,
      "id": 1,
      "title": "Lake",
      "url": "https://images.pexels.com/photos/113727/pexels-photo-113727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "Himalayas",
        "url": "https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350s",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "Car",
      "url": "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "Fruit",
      "url": "https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "Movies",
      "url": "data:image/jpeg;base64,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",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "Bikes",
      "url": "https://images.pexels.com/photos/595809/pexels-photo-595809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "Games",
      "url": "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "Software",
      "url": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    }
   ]