export type TaskStatus = "Pendente" | "EmProgresso" | "Concluida";

export interface Task {
    id: string;
    titulo: string;
    descricao: string;
    status: TaskStatus;
    criado: string;
}