import { rest } from 'msw';
import { mockValue } from '../mocks';

export const handlers = [
  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    return res(
      ctx.json({
        total: 10,
        total_pages: 2,
        results: [mockValue],
      })
    );
  }),
];
