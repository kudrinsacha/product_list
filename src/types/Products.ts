export type ProductCardType = {
  id: string;
  title: string;
  price: number;
  image: ImageType;
  description: string;
  userId: string;
};

export type ImageType = {
  id: string;
  url: string | File;
};

export type ProductListType = ProductCardType[];

export type ProductDTO = {
  [key: string]: {
    [key: string]: ProductCardType;
  };
};

export type ProductStateType = {
  products: ProductListType;
  plug: ImageType;
  loading: boolean;
  error: string | undefined;
};
