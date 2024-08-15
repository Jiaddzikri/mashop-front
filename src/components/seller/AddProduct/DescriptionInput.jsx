"use client";

import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DescriptionInput = ({ setForm, errors }) => {
  const [description, setDescription] = useState("");
  const [isDescriptionErrorExists, setDescriptionExist] = useState(false);
  useEffect(() => {
    const timer = setTimeout(
      () => setForm((prev) => ({ ...prev, description: description })),
      1000
    );

    return () => clearTimeout(timer);
  }, [description]);

  useEffect(() => {
    console.log(errors);
    errors.description.length > 0
      ? setDescriptionExist(true)
      : setDescriptionExist(false);
  }, [errors]);

  return (
    <div className="relative my-6 px-2">
      <h2 className="mb-3">Product Description</h2>
      <ReactQuill
        className="bg-white"
        value={description}
        onChange={setDescription}
        modules={quillModules}
        formats={quillFormats}
      />
      {isDescriptionErrorExists
        ? errors.description.map((error) => (
            <span className="text-red-500 text-[0.7rem]">{error}</span>
          ))
        : ""}
    </div>
  );
};
export default DescriptionInput;

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    [{ align: [] }],
    [{ color: [] }],
    ["code-block"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "align",
  "color",
  "code-block",
];
