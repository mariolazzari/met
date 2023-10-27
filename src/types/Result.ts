export type Result<T> = {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
};
