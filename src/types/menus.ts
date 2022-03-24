export type MenuProps = {
  items: MenuItem[];
};

type MenuItem = {
  ID: number;
  url: string;
  title: string;
  description: string;
  slug: string;
  child_items?: MenuItem[];
};
