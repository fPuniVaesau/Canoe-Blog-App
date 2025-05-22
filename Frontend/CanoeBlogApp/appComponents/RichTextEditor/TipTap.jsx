// src/Tiptap.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import styles from "./TipTap.module.css";
import MenuBar from "./MenuBar/MenuBar";

const extensions = [
  StarterKit,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    defaultAlignment: "left",
  })
];

const content = '<p>lets get started.</p>'

export default function Tiptap(){
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div className={styles.editorContainer}>
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} />
    </div>
  )
}

