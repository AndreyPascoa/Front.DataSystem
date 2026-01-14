import { Task } from "@/types/task";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onEdit, onDelete }: Props) {
  const statusColor: Record<string, string> = {
    Pendente: "bg-yellow-100 text-yellow-700",
    EmProgresso: "bg-blue-100 text-blue-700",
    Concluida: "bg-green-100 text-green-700",
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {task.titulo}
          </h3>

          {task.descricao && (
            <p className="mt-1 text-sm text-zinc-500">
              {task.descricao}
            </p>
          )}

          <span
            className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${statusColor[task.status]}`}
          >
            {task.status}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="rounded-lg border px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Editar
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="rounded-lg border border-red-500 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
