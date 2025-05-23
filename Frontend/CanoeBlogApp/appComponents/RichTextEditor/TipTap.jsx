// src/Tiptap.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from '@tiptap/extension-placeholder';
import styles from "./TipTap.module.css";
import MenuBar from "./MenuBar/MenuBar";

const extensions = [
  StarterKit,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    defaultAlignment: "left",
  }),
  Highlight.configure({
    HTMLAttributes: {
      class: "highlighter",
    },
  }),
  Placeholder.configure({
    emptyEditorClass: "is-editor-empty",
    placeholder: "lets get started."
  })
];

// const content = '<p>lets get started.</p>'

export default function Tiptap({onContentChange}){
  const editor = useEditor({
    extensions,
    content: "",
    onUpdate : ({editor})=>{
      onContentChange(editor.getHTML())
    }
  });

  return (
    <div className={styles.editorContainer}>
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} />
    </div>
  )
}

