import { useEffect } from 'react'
import { Editor } from './component/Editor'

export function App() {
  useEffect(() => {
    document.title = 'notelab | home'
  }, [])

  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-zinc-800 mx-auto rounded-xl min-h-[45rem] border border-black/20 shadow-sm overflow-hidden max-w-5xl">
        <main>
          <Editor />
        </main>
      </div>
    </div>
  )
}
