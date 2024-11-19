export default async function Posts() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(`https://dummyjson.com/post?limit=${randomNumber}`, {
        // cache: "no-store",
        next: {
            revalidate: 5,
        },
    });

    const { posts } = await response.json();

    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2 className="text-2xl">{post.title}</h2>
                </div>
            ))}
        </>
    );
}
