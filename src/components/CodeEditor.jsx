import React from 'react';
import Editor from '@monaco-editor/react';
import { cn } from '../lib/utils';

const CodeEditor = ({ 
  language, 
  value, 
  onChange, 
  theme = 'vs-dark',
  height = '300px',
  className 
}) => {
  const handleEditorChange = (value, event) => {
    onChange(value);
  };

  return (
    <div className={cn('border rounded-md overflow-hidden', className)}>
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={handleEditorChange}
        theme={theme}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          wordWrap: 'on',
          bracketPairColorization: { enabled: true },
          autoClosingBrackets: 'always',
          autoClosingQuotes: 'always',
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
