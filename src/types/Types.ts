export type TGadgets = {
  _id: string;
  __v: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  releaseDate: string;
  Brand: string;
  modelNumber: string;
  Category: string;
  operatingSystem?: string;
  connectivity?: string;
  powerSource?: string;
  features?: {
    resolution?: string;
    storagecapacity?: string;
    screenSize?: string;
    weight?: string;
    dimensions?: string;
  };
  createdAt: string;
  updatedAt: string;
};

//
export type TSales = {
  productId: string;
  quantity: number;
  buyerName: string;
};
