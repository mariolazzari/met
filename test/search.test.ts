import { test, describe, expect } from 'vitest';
import { met } from './global';

const page = 1;
const perPage = 10;

describe('Search', () => {
  test('Search for Vermeer', async () => {
    const res = await met.search({
      searchTerm: 'Vermeer',
      page,
      perPage,
      hasImages: true,
      artistOrCulture: true,
    });

    expect(res.success).toBeTruthy();
    expect(res.status).toBe(200);
    expect(res.data?.length).toBe(perPage);
    expect(res.error).toBeUndefined();
  });
});
