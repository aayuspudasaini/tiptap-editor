"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import { TiptapMenuBar } from "./tiptap-menubar";
import Underline from "@tiptap/extension-underline";

export const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
        alignments: ["left", "right", "center", "justify"],
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[400px]",
      },
    },
  });

  return (
    <div className="p-2.5">
      <TiptapMenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="border min-h-[400px] rounded-b-lg px-2 py-2"
      />
    </div>
  );
};
