export interface TaskItemProps {
  isChecked?: boolean;
  title: string;
  onClick?: () => void;
  onCheck?: () => void;
}
