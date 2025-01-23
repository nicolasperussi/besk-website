export interface IArticle {
  image: string;
  content: Array<{
    title: string;
    subtitle: string;
    text: Array<string>;
    source?: string;
  }>;
}
