import React, { useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

const Preview = ({ html, css, js, className }) => {
  const iframeRef = useRef(null);

  const generateFullHTML = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch (error) {
            console.error('JavaScript Error:', error);
          }
        </script>
      </body>
      </html>
    `;
  };

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const htmlContent = generateFullHTML();
      
      iframe.srcdoc = htmlContent;
    }
  }, [html, css, js]);

  return (
    <div className={cn('border rounded-md overflow-hidden bg-white', className)}>
      <div className="bg-muted px-4 py-2 border-b">
        <h3 className="text-sm font-medium text-muted-foreground">Live Preview</h3>
      </div>
      <div className="relative">
        <iframe
          ref={iframeRef}
          title="Code Preview"
          className="w-full h-full min-h-[400px] border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default Preview;
