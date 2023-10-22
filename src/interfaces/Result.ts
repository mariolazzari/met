export interface Result<T> {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
}
