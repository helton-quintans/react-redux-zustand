export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do redux</h1>
            <span className="text-sm text-zinc-400">
              Módulo "Desvendando o redux"
            </span>
          </div>
          <button>Deixar feedback</button>
        </div>

        <main>

        </main>
      </div>
    </div>
  )
}
