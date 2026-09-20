import GridSkeleton from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        aria-hidden="true"
      >
        <div className="glow -left-40 -top-32 h-[420px] w-[420px] bg-accent-violet/15" />
        <div className="glow right-[-120px] top-10 h-[400px] w-[400px] bg-accent-cyan/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        {/* Badge */}
        <div className="h-7 w-32 animate-pulse rounded-full bg-surface-2" />

        {/* Heading */}
        <div className="mt-6 h-14 w-80 max-w-full animate-pulse rounded-xl bg-surface-2 sm:h-16" />

        <div className="mt-5 h-5 w-[520px] max-w-full animate-pulse rounded bg-surface-2" />
        <div className="mt-2 h-5 w-96 max-w-full animate-pulse rounded bg-surface-2" />

        {/* Filters */}
        <div className="mt-10 rounded-3xl border border-border bg-surface/40 p-4">
          <div className="h-16 animate-pulse rounded-2xl bg-surface-2" />
        </div>

        {/* Result bar */}
        <div className="mt-8 flex justify-between border-b border-border/70 pb-5">
          <div className="h-5 w-32 animate-pulse rounded bg-surface-2" />
          <div className="hidden h-5 w-44 animate-pulse rounded bg-surface-2 sm:block" />
        </div>

        {/* Grid */}
        <div className="mt-7">
          <GridSkeleton />
        </div>
      </div>
    </main>
  );
}