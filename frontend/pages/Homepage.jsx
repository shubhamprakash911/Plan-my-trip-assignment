import GetPostData from "../component/GetPostData";
import { useGetUsersQuery } from "../slices/apiSlice";

function Homepage() {
  const { data: posts, isLoading, error } = useGetUsersQuery();

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && error?.message}
      {posts?.length ? (
        posts.map((post) => <GetPostData post={post} key={post._id} />)
      ) : (
        <h2>There is no Post</h2>
      )}
    </div>
  );
}

export default Homepage;
