"use client";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, title, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 transform transition-all duration-300">
        <header className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
          >
            ×
          </button>
        </header>

        {children}
      </div>
    </div>
  );
}
