"use client";

import { useEffect, useState } from "react";
import { Task, TaskStatus } from "@/types/task";
import { getTasks, createTask, updateTask, deleteTask } from "@/services/taskService";
import StatusFilter from "@/components/StatusFilter";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import Modal from "@/components/Modal";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "Todos">("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => { loadTasks(); }, []);

  async function handleSubmit(taskData: { title: string; description?: string; statusId: number }) {
    if (editingTask) {
      await updateTask(editingTask.id, { titulo: taskData.title, descricao: taskData.description, statusId: taskData.statusId });
    } else {
      await createTask({ titulo: taskData.title, descricao: taskData.description, statusId: taskData.statusId });
    }
    setIsModalOpen(false);
    setEditingTask(null);
    loadTasks();
  }

  async function handleDelete(id: string) {
    await deleteTask(id);
    loadTasks();
  }

  const filteredTasks = statusFilter === "Todos" ? tasks : tasks.filter((t) => t.status === statusFilter);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center p-6 transition-colors">
      <main className="w-full max-w-3xl space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Minhas Tarefas</h1>
          <button
            onClick={() => { setEditingTask(null); setIsModalOpen(true); }}
            className="rounded-full bg-black px-6 py-2 text-white font-medium hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
          >
            Nova tarefa
          </button>
        </header>

        <StatusFilter value={statusFilter} onChange={setStatusFilter} />

        <section className="space-y-4">
          {filteredTasks.length === 0 && <p className="text-center text-zinc-500 dark:text-zinc-400">Nenhuma tarefa encontrada</p>}
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={(t) => { setEditingTask(t); setIsModalOpen(true); }}
              onDelete={handleDelete}
            />
          ))}
        </section>
      </main>

      <Modal
        title={editingTask ? "Editar tarefa" : "Nova tarefa"}
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingTask(null); }}
      >
        <TaskForm
          initialData={editingTask}
          onCancel={() => { setIsModalOpen(false); setEditingTask(null); }}
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}
