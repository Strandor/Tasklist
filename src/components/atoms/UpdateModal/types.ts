export interface UpdateModalProps {
  title: string;
  description: string;
  deadline?: Date;
  onUpdateTitle?: (title: string) => void;
  onUpdateDeadline?: (date: Date) => void;
  onUpdateDescription?: (description: string) => void;
  onClose?: () => void;
}
