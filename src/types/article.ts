export interface IArticle {
  image: string;
  title: string;
  content: Array<{
    title: string;
    subtitle: string;
    text: Array<string>;
    source?: string;
  }>;
}
