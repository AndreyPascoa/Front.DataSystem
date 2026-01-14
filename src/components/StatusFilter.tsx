import { TaskStatus } from "@/types/task";

interface Props {
  value: TaskStatus | "Todos";
  onChange: (value: TaskStatus | "Todos") => void;
}

const options: (TaskStatus | "Todos")[] = [
  "Todos",
  "Pendente",
  "EmProgresso",
  "Concluída",
];

export default function StatusFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition
            ${
              value === status
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
