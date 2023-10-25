export type Measurement = {
  elementName: string;
  elementDescription?: string;
  elementMeasurements: {
    Height: number;
    Width: number;
  };
};
