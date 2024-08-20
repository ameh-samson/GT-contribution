import { ReactNode } from "react";

export interface childrenPropType {
  children: ReactNode;
}

export type themeStateType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export interface Filters {
  types: 'all' | 'completed' | 'uncompleted';
}

export const initialFilters: Filters = {
  types: 'all'
};