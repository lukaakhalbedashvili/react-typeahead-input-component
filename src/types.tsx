export interface Results {
  results?: {
    img: string;
    title: string;
    subTitle: string;
    redirectUrl: string;
  }[];
}
export interface SearchBarProps extends Results {
  value?: string;
  placeholder?: string;
  loading?: boolean;
}
