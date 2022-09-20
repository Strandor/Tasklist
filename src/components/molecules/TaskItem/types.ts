export interface TaskItemProps {
  isChecked?: boolean;
  title: string;
  onClick?: () => void;
  onCheck?: (completed: boolean) => void;
}
