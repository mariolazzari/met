import { test, describe, expect } from 'vitest';
import { met } from './global';

describe('Objects', () => {
  test('Search for Vermeer Study of a Young Woman', async () => {
    const id = 437879;
    const res = await met.getObject(id);

    expect(res.success).toBeTruthy();
    if (res.success) {
      expect(res.data?.objectID).toBe(id);
    } else {
      expect(res.error).toBeDefined();
    }
  });
});
