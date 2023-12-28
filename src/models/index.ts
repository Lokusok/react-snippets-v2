export type TGroup = {
  id: string,
  title: string,
  description: string,
  snippets: TSnippet[],
};

export type TSnippet = {
  id: string,
  title: string,
  code: string,
};
