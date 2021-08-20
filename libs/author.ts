export const authorAvatars: string[] = [
  "/images/authors/author1.svg",
  "/images/authors/author2.svg",
  "/images/authors/author3.svg",
  "/images/authors/author4.svg",
  "/images/authors/author5.svg",
  "/images/authors/author6.svg",
  "/images/authors/author7.svg",
  "/images/authors/author8.svg",
  "/images/authors/author9.svg",
  "/images/authors/author10.svg",
];

export type Author = {
  id: number;
  name: string;
  birthplace?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  books?: { id: number; title: string; isbn: number; datePublished: string }[];
};
