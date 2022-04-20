import fetcher from "src/helpers/fetcher";
import useSWR from "swr";

const useGetMenu = (slug: string) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/menus/v1/menus/${slug}`,
    fetcher
  );
  return {
    category: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetMenu;
