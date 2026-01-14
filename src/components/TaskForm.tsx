import { useState } from "react";
import { Task, TaskStatus } from "@/types/task";
import { statusToId } from "@/utils/statusMapper";

interface Props {
  initialData?: Task | null;
  onSubmit: (data: {
    title: string;
    description?: string;
    statusId: number;
  }) => void;
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

    console.log("Status selecionado:", status);
    console.log("StatusId enviado:", statusToId[status]);

    onSubmit({
      title,
      description,
      statusId: statusToId[status],
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Título</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={100}
          className="mt-1 w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          className="mt-1 w-full rounded-lg border px-3 py-2"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-4 py-2"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
