import React from "react";
import { format } from "date-fns";

// Functions
import { getRandInt } from "../../libs/utils";

// Resources
import { authorAvatars } from "../../libs/author";

// Styles
import styles from "../../styles/AuthorPage.module.css";

// Hooks
import { useGetAuthor } from "../../hooks/author";
import { useRouter } from "next/router";

// Components
import AuthorList from "../../components/AuthorList";
import AuthorsBookList from "../../components/AuthorsBookList";

function AuthorPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, author } = useGetAuthor(id);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <main className={styles.AuthorPage}>
      <h1 className={styles.heading}>{author.name}</h1>
      <section className={styles.authorSection}>
        <div className={styles.authorInfo}>
          <img
            className={styles.image}
            src={authorAvatars[(author.id - 1) % 10]}
            alt={`${author.name}'s avatar.`}
          />
          <div className={styles.authorInfoText}>
            <div className={styles.author}>
              <h4 className={styles.infoHeading}>Birthplace</h4>
              <h2 className={styles.authorBirthplace}>{author.birthplace}</h2>
            </div>
            <div className={styles.data}>
              <h4 className={styles.infoHeading}>Born</h4>
              <h3 className={styles.authorData}>
                {format(new Date(author.dateOfBirth), "do 'of' LLLL yyyy")}
              </h3>
              <h4 className={styles.infoHeading}>Passed</h4>
              <h3 className={styles.authorData}>
                {format(new Date(author.dateOfDeath), "do 'of' LLLL yyyy")}
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.bookList}>
          <AuthorsBookList books={author.books} author={author.name} />
        </div>
      </section>
      <AuthorList isRow maxAuthors={5} page={getRandInt(1, 5)} />
    </main>
  );
}

export default AuthorPage;
