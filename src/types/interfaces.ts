export interface Planet {
  id?: number;
  name?: string;
  climate?: string;
  diameter?: string;
  rotation_period?: string;
  terrain?: string;
}

export interface ResultsBlockProps {
  searchResults: Planet[];
  itemsPerPage: number;
  countResults: number;
  currentPage: number;
  countPerPage: number;
  setCurrentPage: (page: number) => void;
}

export interface ErrorButtonState {
  throwError: boolean;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export interface Details {
  name: string;
  climate: string;
  diameter: string;
  rotation_period: string;
  terrain: string;
}

export interface PaginationProps {
  currentPage: number;
  countPerPage: number;
  countResults: number;
  setCurrentPage: (page: number) => void;
}
