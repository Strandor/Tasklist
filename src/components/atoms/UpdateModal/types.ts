interface User {
  id: string;
  name: string;
}

export interface UpdateModalProps {
  title: string;
  description?: string;
  deadline: Date;
  users: User[];
  asignees: string[];
  onUpdateTitle?: (title: string) => void;
  onUpdateDeadline?: (date: Date) => void;
  onUpdateDescription?: (description: string) => void;
  onUpdateAsignees?: (id: string) => void;
  onClose?: () => void;
}
