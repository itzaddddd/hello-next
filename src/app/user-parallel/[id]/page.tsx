type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type Album = {
  userId: number
  id: number
  title: string
}

const getUserPosts = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
}

const getUserAlbums = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
}

export default async function UserPage(
  { 
    params 
  }: { 
    params: Promise<{ id: string }> 
  }) {
  const { id } = await params;
  const [ posts, albums ] = await Promise.all([getUserPosts(id), getUserAlbums(id)])
  return (
    <div>
      <h1>User {id}</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h2>Albums</h2>
      <ul>
        {albums.map((album: Album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
  
}