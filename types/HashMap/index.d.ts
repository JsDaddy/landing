interface IHashMap  {
  [key: string]: any;
}

interface ISectionQuery { query: string; replace: string; rewrite?: boolean; }

type Section = (string | ISectionQuery);