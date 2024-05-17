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
  CodeXml,
  Italic,
  List,
  ListOrderedIcon,
  Strikethrough,
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

      {/* Marks */}
      <div className="border-l border-r">
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
        <Button
          size="xs"
          title="Strike"
          variant={editor.isActive("strike") ? "default" : "ghost"}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="w-4 h-4" />
        </Button>
      </div>
      <Button
        size="xs"
        title="Code Block"
        variant={editor.isActive("strike") ? "default" : "ghost"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <CodeXml className="w-4 h-4" />
      </Button>

      {/* Text Alignment */}
      <div>
        <Button
          className="w-8"
          title="Align Left"
          variant={editor.isActive({ textAlign: "left" }) ? "default" : "ghost"}
          size="xs"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="w-4 h-4" />
        </Button>

        <Button
          className="w-8"
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
          className="w-8"
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
          className="w-8"
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

      {/* Bullet List && List Item */}
      <div>
        <Button
          className="w-8"
          title="Unordered List"
          variant={editor.isActive("bulletlist") ? "default" : "ghost"}
          size="xs"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="w-4 h-4" />
        </Button>

        <Button
          className="w-8"
          title="Ordered List"
          variant={editor.isActive("orderedList") ? "default" : "ghost"}
          size="xs"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrderedIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
