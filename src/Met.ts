// metmuseum.github.io
import { DepartmentsResponse } from './interfaces/DepartmentsResponse';
import { Result } from './interfaces/Result';
import { SearchRequest } from './interfaces/SearchRequest';
import { SearchResponse } from './interfaces/SearchRsponse';
import { ObjectData } from './types/ObjectData';

export class Met {
  private baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/';

  // fetch data from api
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

  // fecth object data
  private async getObjects(ids: number[] = []) {
    const promises = ids.map(id => this.getObject(id));
    const res = await Promise.all(promises);
    const objects: ObjectData[] = [];
    res.forEach(r => {
      if (r.data) {
        objects.push(r.data);
      }
    });

    return objects;
  }

  // get departments list
  public async getDepartments() {
    const res = await this.fetchData<DepartmentsResponse>('departments');
    return res;
  }

  // get object details
  public async getObject(id: number) {
    const res = await this.fetchData<ObjectData>(`objects/${id}`);
    return res;
  }

  // search term
  public async search({ searchTerm, page = 1, perPage = 10 }: SearchRequest) {
    let url = `/search?q=${searchTerm}`;
    let resObjects: Result<ObjectData[]> = {
      success: true,
      status: 200,
      data: [],
    };

    const resIDs = await this.fetchData<SearchResponse>(url);
    if (resIDs.success && resIDs.data) {
      const ids: number[] = resIDs.data.objectIDs.slice(
        (page - 1) * perPage,
        page * perPage
      );

      resObjects.data = await this.getObjects(ids);
    }

    return resObjects;
  }
}
