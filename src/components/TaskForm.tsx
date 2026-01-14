import { useState } from "react";
import { Task, TaskStatus } from "@/types/task";
import { statusToId } from "@/utils/statusMapper";

interface Props {
  initialData?: Task | null;
  onSubmit: (data: { title: string; description?: string; statusId: number }) => void;
  onCancel: () => void;
}

const statusOptions: { label: string; value: TaskStatus }[] = [
  { label: "Pendente", value: "Pendente" },
  { label: "Em Progresso", value: "EmProgresso" },
  { label: "Concluída", value: "Concluida" },
];

export default function TaskForm({ initialData, onSubmit, onCancel }: Props) {
  const [title, setTitle] = useState(initialData?.titulo ?? "");
  const [description, setDescription] = useState(initialData?.descricao ?? "");
  const [status, setStatus] = useState<TaskStatus>(initialData?.status ?? "Pendente");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ title, description, statusId: statusToId[status] });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-sm font-semibold">Título</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={100}
          className="mt-2 w-full rounded-xl border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 w-full rounded-xl border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          className="mt-2 w-full rounded-xl border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border px-5 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-xl bg-black px-5 py-2 text-white hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
