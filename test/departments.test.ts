import { test, describe, expect } from 'vitest';
import { met } from './global';

describe('Departments', () => {
  test('full departments list', async () => {
    const res = await met.getDepartments();

    expect(res.success).toBeTruthy();
    if (res.success) {
      expect(res.data.departments.length).greaterThan(0);
    } else {
      expect(res.error).toBeDefined();
    }
  });
});
