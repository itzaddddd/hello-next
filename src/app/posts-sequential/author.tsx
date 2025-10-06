type Author = {
  id: number
  name: string
}

export async function Author({ userId }: { userId: number }) {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000) );
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user: Author = await resp.json();

  return (
    <div>
      Written by:{" "} {user.name}
    </div>
  )
}