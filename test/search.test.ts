import { test, describe, expect } from 'vitest';
import { met } from './global';

describe('Search', () => {
  test('Search for Vermeer', async () => {
    const res = await met.search({
      searchTerm: 'Vermeer',
      hasImages: true,
      artistOrCulture: true,
    });
    expect(res.success).toBeTruthy();
    expect(res.status).toBe(200);
    // expect(res.data?.departments.length).greaterThan(0);
    expect(res.error).toBeUndefined();
  });
});
