// metmuseum.github.io
import { DepartmentsResponse } from './types/DepartmentsResponse';
import { Result } from './types/Result';
import { SearchRequest } from './types/SearchRequest';
import { ObjectData } from './types/ObjectData';
import { ObjectsResponse } from './types/ObjectsResponse';

export class Met {
  private baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/';

  // fetch data from api
  private async fetchData<T>(url: string): Promise<Result<T>> {
    try {
      const res = await fetch(`${this.baseUrl}${url}`);
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data: T = await res.json();
      return {
        success: true,
        data,
      };
    } catch (ex) {
      return {
        success: false,
        error: ex instanceof Error ? ex.message : 'Unknown error',
      };
    }
  }

  // fecth object data
  private async getObjects(ids: number[] = []): Promise<ObjectData[]> {
    const promises = ids.map(id => this.getObject(id));
    const res = await Promise.all(promises);
    const objects: ObjectData[] = [];
    res.forEach(r => {
      if (r.success) {
        objects.push(r.data);
      }
    });

    return objects;
  }

  // get departments list
  public async getDepartments(): Promise<Result<DepartmentsResponse>> {
    return await this.fetchData<DepartmentsResponse>('departments');
  }

  // get object details
  public async getObject(id: number): Promise<Result<ObjectData>> {
    return await this.fetchData<ObjectData>(`objects/${id}`);
  }

  // search term
  public async search({
    searchTerm,
    page = 1,
    perPage = 10,
  }: SearchRequest): Promise<Result<ObjectData[]>> {
    const url = `/search?q=${searchTerm}`;

    const resIDs = await this.fetchData<ObjectsResponse>(url);
    if (resIDs.success) {
      const ids: number[] = resIDs.data.objectIDs.slice(
        (page - 1) * perPage,
        page * perPage
      );

      return {
        success: true,
        data: await this.getObjects(ids),
      };
    }

    return {
      success: false,
      error: resIDs.error,
    };
  }
}
