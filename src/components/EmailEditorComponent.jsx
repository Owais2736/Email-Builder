import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

const EmailEditorComponent = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    if (unlayer) {
      unlayer.exportHtml((data) => {
        const { html } = data;
        alert("HTML is exported in your browser console")
        console.log("Exported HTML:", html);
      });
    } else {
      console.error("Email Editor not ready yet!");
    }
  };

  const onReady = () => {
    console.log("Email Editor is ready!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-4 flex justify-center">
        <button
          onClick={exportHtml}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Export HTML
        </button>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <EmailEditor ref={emailEditorRef} onReady={onReady} />
      </div>
    </div>
  );
};

export default EmailEditorComponent;
