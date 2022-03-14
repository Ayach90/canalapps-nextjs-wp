import fetcher from "src/helpers/fetcher";
import useSWR from "swr";

const useGetCategoryName = (id: number) => {
  const { data, error } = useSWR(
    `https://www.canalapps.com/wp-json/wp/v2/posts?categories=${id}`,
    fetcher
  );
  return {
    category: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetCategoryName;
