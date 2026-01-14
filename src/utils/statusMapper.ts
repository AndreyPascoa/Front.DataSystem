import { TaskStatus } from "@/types/task";

export const statusToId: Record<TaskStatus, number> = {
  Pendente: 1,
  EmProgresso: 2,
  Concluída: 3,
};

export const idToStatus: Record<number, TaskStatus> = {
  1: "Pendente",
  2: "EmProgresso",
  3: "Concluída",
};
