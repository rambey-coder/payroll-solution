export interface ITab {
  label: string;
  value: string;
  content: React.ReactNode;
}

export interface ITabs {
  defaultValue: string;
  tabs: ITab[];
}
