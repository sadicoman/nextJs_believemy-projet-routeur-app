import { notFound } from "next/navigation";

export default function Article({ params: {slug} }) {
    // console.log(slug);

    if (true) {
        notFound();
    }

    return (
        <div>
            <h1>Article {slug}</h1>
        </div>
    );
}
