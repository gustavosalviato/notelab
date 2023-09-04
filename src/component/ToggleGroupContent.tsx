import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { BubbbleButton } from './BubbleButton'
import { Editor } from '@tiptap/react'
import clsx from 'clsx'
import { RiBold, RiCodeFill, RiItalic, RiStrikethrough } from 'react-icons/ri'

interface ToggleGroupContentProps {
  editor: Editor
}

export function ToggleGroupContent({ editor }: ToggleGroupContentProps) {
  return (
    <>
      <ToggleGroup.Item
        asChild
        value="bold"
        className="focus:outline-cyan-600 overflow-hidden"
        tabIndex={0}
      >
        <BubbbleButton
          data-active={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={clsx(
            'p-2 leading-none hover:bg-zinc-500 duration-300 transition-colors flex items-center justify-center outline-none',
            {
              'data-[active=true]:text-cyan-300': editor.isActive('bold'),
            },
          )}
        >
          <RiBold />
        </BubbbleButton>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        asChild
        value="italic"
        className="focus:outline-cyan-600 overflow-hidden"
        tabIndex={1}
      >
        <BubbbleButton
          data-active={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={clsx(
            'p-2 leading-none hover:bg-zinc-500 duration-300 transition-colors flex items-center justify-center',
            {
              'data-[active=true]:text-cyan-300': editor.isActive('italic'),
            },
          )}
        >
          <RiItalic />
        </BubbbleButton>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="strike"
        asChild
        className="focus:outline-cyan-600 overflow-hidden"
        tabIndex={2}
      >
        <BubbbleButton
          data-active={editor.isActive('strike')}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={clsx(
            'p-2 leading-none hover:bg-zinc-500 duration-300 transition-colors flex items-center justify-center',
            {
              'data-[active=true]:text-cyan-300': editor.isActive('strike'),
            },
          )}
        >
          <RiStrikethrough />
        </BubbbleButton>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="code"
        asChild
        className="focus:outline-cyan-600 overflow-hidden"
        tabIndex={3}
      >
        <BubbbleButton
          data-active={editor.isActive('code')}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={clsx(
            'p-2 leading-none hover:bg-zinc-500 duration-300 transition-colors flex items-center justify-center',
            {
              'data-[active=true]:text-cyan-300': editor.isActive('code'),
            },
          )}
        >
          <RiCodeFill />
        </BubbbleButton>
      </ToggleGroup.Item>
    </>
  )
}
