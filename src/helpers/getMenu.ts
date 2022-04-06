import { URL_BACKEND } from "src/constants";

const getMenu = async (slug: string) => {
  const resMenu = await fetch(`${URL_BACKEND}wp-json/menus/v1/menus/${slug}`);
  const menu = await resMenu.json();
  return menu;
};
export default getMenu;
