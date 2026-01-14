export type TaskStatus = "Pendente" | "EmProgresso" | "Concluída";

export interface Task {
    id: string;
    titulo: string;
    descricao: string;
    status: TaskStatus;
    criado: string;
}