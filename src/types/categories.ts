export type CategoryProps = {
  id: number;
  count: number;
  name: string;
  slug: string;
};

export type PathsCategoryProps = {
  params: {
    category: string;
  };
};

export type PathsCategoryPropsPaginated = {
  params: {
    category: string;
    page: string;
  };
};
