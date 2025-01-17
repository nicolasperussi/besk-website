export interface IArticle {
  title: string;
  image: string;
  content: Array<{
    subtitle: string;
    text: Array<string>;
    source?: string;
  }>;
}
