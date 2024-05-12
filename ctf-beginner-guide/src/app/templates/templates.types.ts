export type Templatearray = {
  templates: Array<Template>;
};

export type Template = {
  content: string;
  date: string;
  title: string;
};

export type GH_Template = {
  name: string,
  path:string,
  sha: string,
  size: string,
  url: string,
  html_url:string,
  git_url: string,
  download_url: string,
  type: string,
  content?:string;
  _links: {
    type: object,
    properties: {
      self: string,
      git:string,
      html:string
    }
  }
}


