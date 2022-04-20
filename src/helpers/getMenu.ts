const getMenu = async (slug: string) => {
  const resMenu = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/menus/v1/menus/${slug}`
  );
  const menu = await resMenu.json();
  return menu;
};
export default getMenu;
