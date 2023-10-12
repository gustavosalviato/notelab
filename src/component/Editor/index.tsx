import './styles/placeholder.css'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import {
  BubbleMenu,
  EditorContent,
  FloatingMenu,
  JSONContent,
  useEditor,
} from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/tomorrow-night-blue.css'

import { lowlight } from 'lowlight'
import { ToggleGroupContent } from '../ToggleGroupContent'
import { useState } from 'react'

lowlight.registerLanguage('javascript', javascript)

const LOCAL_STORAGE_KEY = 'noteLab:savedContent'

export function Editor() {
  const [editorContent, setEditorContent] = useState<JSONContent>(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!),
  )

  const editor = useEditor({
    content: editorContent,
    onUpdate({ editor }) {
      const newContent = editor.getJSON()

      setEditorContent(newContent)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContent))
    },
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Untitled'
          }

          if (node.type.name === 'editorBlock') {
            return ''
          }

          return "Type '/' to see commands..."
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'max-w-[700px] mx-auto pt-12 prose prose-invert outline-none',
      },
    },
  })

  return (
    <>
      <EditorContent spellCheck={false} editor={editor} />
      {editor && (
        <ToggleGroup.Root type="single" asChild orientation="horizontal" loop>
          <BubbleMenu
            editor={editor}
            className="flex p-1 bg-zinc-700 gap-1 rounded overflow-hidden"
          >
            <ToggleGroupContent editor={editor} />
          </BubbleMenu>
        </ToggleGroup.Root>
      )}

      {editor && (
        <FloatingMenu
          className="overflow-hidden shadow-xl py-2 px-2 border border-zinc-600 shadow-black/20 flex flex-col rounded-lg bg-zinc-700 w-[320px] gap-2"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent
            return currentLineText === '/'
          }}
        >
          <button
            className="flex items-center hover:hover:bg-zinc-600 duration-300 transition-colors gap-1.5 p-1.5 rounded-lg focus:outline-cyan-600 outline-none"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="https://www.notion.so/images/blocks/header.57a7576a.png"
              className="w-10 h-10"
              alt=""
            />

            <div className="flex flex-col gap-1 items-start">
              <span className="text-zinc-50 text-sm font-medium">h1</span>
              <p className="text-xs text-zinc-300">Big section heading.</p>
            </div>
          </button>

          <button
            className="flex items-center hover:hover:bg-zinc-600 duration-300 transition-colors gap-1.5 p-1.5 rounded-lg focus:outline-cyan-600 outline-none"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <img
              src="https://www.notion.so/images/blocks/subheader.9aab4769.png"
              className="w-10 h-10"
              alt=""
            />

            <div className="flex flex-col gap-1 items-start">
              <span className="text-zinc-50 text-sm font-medium">h2</span>
              <p className="text-xs text-zinc-300">Medium section heading.</p>
            </div>
          </button>

          <button
            className="flex items-center hover:hover:bg-zinc-600 duration-300 transition-colors gap-1.5 p-1.5 rounded-lg focus:outline-cyan-600 outline-none"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <img
              src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
              className="w-10 h-10"
              alt=""
            />

            <div className="flex flex-col gap-1 items-start">
              <span className="text-zinc-50 text-sm font-medium">h3</span>
              <p className="text-xs text-zinc-300">Small section heading.</p>
            </div>
          </button>
          <button
            className="flex items-center hover:hover:bg-zinc-600 duration-300 transition-colors gap-1.5 p-1.5 rounded-lg focus:outline-cyan-600 outline-none"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <img
              src="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
              className="w-10 h-10"
              alt=""
            />

            <div className="flex flex-col gap-1 items-start">
              <span className="text-zinc-50 text-sm font-medium">
                Bullet List
              </span>
              <p className="text-xs text-zinc-300">
                Create a simple bullet list.
              </p>
            </div>
          </button>
        </FloatingMenu>
      )}
    </>
  )
}
