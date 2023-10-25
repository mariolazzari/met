import { test, describe, expect } from 'vitest';
import { met } from './global';

describe('Objects', () => {
  test('Search for Vermeer Study of a Young Woman', async () => {
    const id = 437879;
    const res = await met.getObject(id);

    expect(res.success).toBeTruthy();
    expect(res.status).toBe(200);
    expect(res.data?.objectID).toBe(id);
    expect(res.error).toBeUndefined();
  });
});
