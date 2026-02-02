export type MenuItem = {
  href: string;
  text: string;
  external?: boolean;
  dropdown?: {
    items: {
      href: string;
      text: string;
      external?: boolean;
    }[];
  };
};
