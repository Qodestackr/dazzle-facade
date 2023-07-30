import { axiosDefaultInstance } from "./api/axios";
import { useQuery, useInfiniteQuery } from "react-query";

function ExampleComponent() {
  const { data, isLoading, isError } = useQuery(
    /**The query key "todos" acts as an abstraction for uniquely identifying the query
     * result in the cache. This allows React Query to manage the cache and handle data
     * refetching efficiently.
     * */

    "todos",
    async () => {
      const response = await axiosDefaultInstance.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data; // Return the fetched data
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {"error"}</div>;
  }

  return (
    <div>
      {data.map((todo: any) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default ExampleComponent;

// useInfiniteQuery
// IntersectionObserver
export function ExampleComponentInfiniteScrollPagination() {}

/**We will be using IntersectionObserver for implementing pagination in our
 * application. We can create a ref for the last element in the list, and then
 *  use IntersectionObserver to observe this element. When the last element becomes
 * visible in the viewport, we can fetch more data to implement infinite scroll pagination.
 * This allows us to efficiently load more data as the user scrolls, providing a
 * smooth and optimized pagination experience.
 * */

// QueryFunction from react-query

// useInfiniteQuery
/** 
 {
  data, error, fetchNextPage,
  hasNextPage, isFetching, isLoading
    isFetchingNextPage,
  isFetchingPreviousPage,
  ...result

  // queryKey,
  queryFn
  getNextPageParam
   getPreviousPageParam:
 } 
https://www.antstack.com/blog/implementing-infinite-scroll-pagination-with-react-query-v3/



const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData
  } = useQuery()
 */
