import React from 'react';
import EmailEditor from 'react-email-editor';

function App() {
  let emailEditorRef = null;

  const exportHtml = () => {
    emailEditorRef.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  return (
    <div className="App">
      <button onClick={exportHtml}>Export HTML</button>
      <EmailEditor ref={(editor) => (emailEditorRef = editor)} />
    </div>
  );
}

export default App;
