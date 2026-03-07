import ArticleJsonLd from "./ArticleJsonLd";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd />
      {children}
    </>
  );
}
