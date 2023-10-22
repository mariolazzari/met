// metmuseum.github.io
import { DepartmentsResponse } from './interfaces/DepartmentsResponse';
import { Result } from './interfaces/Result';

export class Met {
  private baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/';

  private async fetchData<T>(url: string) {
    let result: Result<T> = {
      success: false,
      status: 500,
      data: undefined,
      error: undefined,
    };

    try {
      const res = await fetch(`${this.baseUrl}${url}`);
      if (res.ok) {
        const data = ((await res.json()) as unknown) as T;
        result.data = data;
        result.success = true;
        result.status = 200;
      } else {
        result.status = res.status;
        result.error = res.statusText;
      }
    } catch (ex) {
      if (ex instanceof Error) {
        result.error = ex.message;
      } else {
        result.error = 'Internal server error';
      }
    } finally {
      return result;
    }
  }

  public async getDepartments() {
    return await this.fetchData<DepartmentsResponse>('departments');
  }
}
