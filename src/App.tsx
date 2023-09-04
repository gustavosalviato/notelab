import { Editor } from './component/Editor'

export function App() {
  return (
    <div className="min-h-screen text-zinc-900 bg-gradient-to-tr from-stone-300 via-pink-800 to-orange-300 p-8">
      <div className="bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] border border-black/20 shadow-sm overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-900 border-r border-zinc-800 p-4 text-zinc-50">
          <h1>Aside</h1>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}
