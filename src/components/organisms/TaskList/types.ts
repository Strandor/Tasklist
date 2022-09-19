export interface TaskListProps {
  date: Date;
  children?: React.ReactNode;
  onCreateTask?: (title: string) => void;
}
