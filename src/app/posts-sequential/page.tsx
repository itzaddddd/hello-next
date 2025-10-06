import { Suspense } from "react";
import { Author } from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const filteredPosts = posts.filter(post => post.id % 10 == 1)
  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Suspense
            fallback={<div>Loading author...</div>}
          >
            <Author userId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}