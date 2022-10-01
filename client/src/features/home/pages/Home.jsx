import React, { useState, useRef } from "react";
import { Editor } from "../../../component/editor/Editor";
import "./style.css";
import { useOutside } from "../../../hooks/useOutsider";
import {useDocumentTitle} from "../../../hooks/useTitle"

export const Home = () => {
  const [note, setNote] = useState({ title: "", content: "", priority: "Low" });
  const [isEditorOpen, setOpen] = useState(false);
  const clickHandler = () => {
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  const wrapperRef = useRef(null);
  useOutside(wrapperRef, setOpen);
  useDocumentTitle("Home")
  return (
    <div className="min-h-full ">
      <div className="h-48 w-full flex items-start justify-end">
        {isEditorOpen ? (
          <div className="editor-wrapper py-3 px-2 m-6" ref={wrapperRef}>
            <Editor note={note} setNote={setNote} />
          </div>
        ) : (
          <input
            type="text"
            placeholder="Add Notes..."
            onClick={clickHandler}
            onBlur={() => setOpen(false)}
            className="w-2/3 py-3 px-2 m-6 shadow-black"
          />
        )}
      </div>
    </div>
  );
};
