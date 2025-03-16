export type UseFormProps<T> = {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>; // Validation function
};
export type Expense = {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};
export type PieChartReportProps = {
  expenses: Expense[] | undefined;
  isLoading: boolean;
  error: Error | null;
  days: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  currency: string;
  totalBalance: number;
  profilePicture: string;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
};
export type ProfileImageTypes = {
  profilePicture: string;
  name: string;
};
export type ProfileInfoTypes = {
  name: string;
  currency: string;
  totalBalance: number;
};
export interface AddExpenseFormProps {
  closeModal: () => void; // Function to close the modal
}
export type SidebarProps = {
  isOpen: boolean; // Boolean to control whether the sidebar is open or closed
  setIsOpen: (isOpen: boolean) => void; // Function to set the sidebar open state
};
export type ModalProps = {
  children: React.ReactNode; // Content to be displayed inside the modal
  isOpen: boolean; // Controls the visibility of the modal
  onClose: () => void; // Callback function to close the modal
};

export type AddToBalanceProps = {
  totalBalance: number;
};
