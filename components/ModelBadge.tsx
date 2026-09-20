import { Cpu } from "lucide-react";

export default function ModelBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-violet/15 to-accent-cyan/15 border border-accent-cyan/20 px-3 py-1 text-xs font-medium text-foreground/90">
      <Cpu className="h-3 w-3 text-accent-cyan" aria-hidden="true" />
      {label}
    </span>
  );
}
