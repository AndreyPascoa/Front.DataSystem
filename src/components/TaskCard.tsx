import { Task } from "@/types/task";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onEdit, onDelete }: Props) {
  const statusColor: Record<string, string> = {
    Pendente: "bg-yellow-100 text-yellow-800",
    EmProgresso: "bg-blue-100 text-blue-800",
    Concluida: "bg-green-100 text-green-800",
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 transition hover:scale-[1.01] hover:shadow-xl">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{task.titulo}</h3>
          {task.descricao && <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-300">{task.descricao}</p>}
          <span
            className={`mt-3 inline-block rounded-full px-4 py-1 text-xs font-medium ${statusColor[task.status]}`}
          >
            {task.status === "EmProgresso" ? "Em Progresso" : task.status === "Concluida" ? "Concluída" : task.status}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => onEdit(task)}
            className="rounded-lg border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800 transition"
          >
            Editar
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="rounded-lg border border-red-500 px-3 py-1 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-700/20 transition"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
