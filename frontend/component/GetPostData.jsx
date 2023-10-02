function GetPostData({ post }) {
  return (
    <li className="card">
      <h2>{post.name}</h2>
      <h3>{post.email}</h3>
      <p>{}</p>
    </li>
  );
}

export default GetPostData;
