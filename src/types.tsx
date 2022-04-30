export interface SearchResult {
  img: string;
  title: string;
  subTitle: string;
  payload: string;
}
export interface Results {
  results?: {
    img: string;
    title: string;
    subTitle: string;
    payload: any;
  }[];
  input: string;
  onClickHandler?: (data: SearchResult) => void;
}
export interface SearchBarProps {
  value?: string;
  placeholder?: string;
  loading?: boolean;
  results?: {
    img: string;
    title: string;
    subTitle: string;
    payload: any;
  }[];
  // onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => string;
  onClick?: (data: SearchResult) => void;
}
