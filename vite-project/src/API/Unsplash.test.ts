import '@testing-library/jest-dom';
import Unsplash from './Unsplash';
import { server } from '../tests/server/server';

describe('API', () => {
  it('Return data', async () => {
    server.listen();
    const result = await Unsplash('Test');
    expect(result[0].user.name).toEqual('Alex');
    server.close();
  });
});
