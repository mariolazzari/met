import { test, describe, expect } from 'vitest';
import { met } from './global';

describe('Departments', () => {
  test('full departments list', async () => {
    const res = await met.getDepartments();

    expect(res.success).toBeTruthy();
    expect(res.status).toBe(200);
    expect(res.data?.departments.length).greaterThan(0);
    expect(res.error).toBeUndefined();
  });
});
