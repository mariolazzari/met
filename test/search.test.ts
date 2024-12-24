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
    if (res.success) {
      expect(res.data?.length).toBe(perPage);
    } else {
      expect(res.error).toBeUndefined();
    }
  });
});
