"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Editor } from "@tiptap/react";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";

export const TiptapMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-4 border border-b-0 rounded-t-lg items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="xs" className="w-auto px-2 ">
            Paragraph
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-24" align="end" forceMount>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
              >
                Heading 1
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>Heading 2</DropdownMenuItem>
            <DropdownMenuItem>Heading 3</DropdownMenuItem>
            <DropdownMenuItem>Heading 4</DropdownMenuItem>
            <DropdownMenuItem>Heading 5</DropdownMenuItem>
            <DropdownMenuItem>Heading 6</DropdownMenuItem>
            <DropdownMenuItem>Paragraph</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Text */}
      <div>
        <Button
          variant={editor.isActive("bold") ? "default" : "ghost"}
          size="xs"
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          title="Italic"
          size="xs"
          variant={editor.isActive("italic") ? "default" : "ghost"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          size="xs"
          title="Underline"
          variant={editor.isActive("underline") ? "default" : "ghost"}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline className="w-4 h-4" />
        </Button>
      </div>

      {/* Text Alignment */}
      <div>
        <Button
          title="Align Left"
          variant={editor.isActive({ textAlign: "left" }) ? "default" : "ghost"}
          size="xs"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="w-4 h-4" />
        </Button>
        <Button
          title="Align Center"
          variant={
            editor.isActive({ textAlign: "center" }) ? "default" : "ghost"
          }
          size="xs"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter className="w-4 h-4" />
        </Button>
        <Button
          title="Align Right"
          variant={
            editor.isActive({ textAlign: "right" }) ? "default" : "ghost"
          }
          size="xs"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight className="w-4 h-4" />
        </Button>
        <Button
          title="Align Justify"
          variant={
            editor.isActive({ textAlign: "justify" }) ? "default" : "ghost"
          }
          size="xs"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
