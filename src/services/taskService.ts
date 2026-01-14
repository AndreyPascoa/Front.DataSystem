import { Task } from "@/types/task";
import { API } from "./api";

export async function getTasks(): Promise<Task[]> {
    const response = await API.get<Task[]>("/tasks");
    console.log(response);
    return response.data;
}

export async function createTask(task: {
    titulo: string;
    descricao?: string;
    statusId: number;
}) {
    await API.post("/tasks", task);
}


export async function updateTask(id: string,
    task: {
        titulo: string;
        descricao?: string;
        statusId: number;
    }
) {
    console.log(task);
    await API.put(`/tasks/${id}`, task);
}

export async function deleteTask(id: string) {
    await API.delete(`/tasks/${id}`);
}