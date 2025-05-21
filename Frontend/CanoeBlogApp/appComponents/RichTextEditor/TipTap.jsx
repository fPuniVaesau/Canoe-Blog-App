// src/Tiptap.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./TipTap.module.css";

const extensions = [StarterKit]

const content = '<p>lets get started.</p>'

export default function Tiptap(){
  const editor = useEditor({
    extensions,
    content
  })

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

