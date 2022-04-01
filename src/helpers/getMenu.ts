const getMenu = async (slug: string) => {
  const resMenu = await fetch(
    `https://admin-wp-back.canalapps.com/wp-json/menus/v1/menus/${slug}`
  );
  const menu = await resMenu.json();
  return menu;
};
export default getMenu;
