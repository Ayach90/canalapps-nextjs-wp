import fetcher from "src/helpers/fetcher";
import useSWR from "swr";

const useGetMenu = (slug: string) => {
  const { data, error } = useSWR(
    `https://www.canalapps.com/wp-json/menus/v1/menus/${slug}`,
    fetcher
  );
  return {
    category: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetMenu;
