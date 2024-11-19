import Posts from "@/components/Posts/Posts";
import PostsSkeleton from "@/components/Posts/PostsSkeleton";
import { Suspense } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-7xl mb-5">Accueil</h1>
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </main>
    </div>
  );
}