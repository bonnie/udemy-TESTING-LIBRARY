import {http, HttpResponse} from 'msw';

export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
      {
        "name": "Mint chip",
        "imagePath": "/images/mint-chip.png"
      },
      {
        "name": "Vanilla",
        "imagePath": "/images/vanilla.png"
      }
    ])
  }),
]