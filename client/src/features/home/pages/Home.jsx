import React, { useState, useRef } from "react";
import { Editor } from "../../../component/editor/Editor";
import "./style.css";
import { useOutside } from "../../../hooks/useOutsider";

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
      {/* <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white 
          font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
           focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
           transition duration-150 ease-in-out my-10"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Add Notes
      </button> */}
    </div>
  );
};
