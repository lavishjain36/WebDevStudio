import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

const ResizablePanel = ({ 
  children, 
  minWidth = 200, 
  maxWidth = 800, 
  defaultWidth = 300,
  className,
  onResize 
}) => {
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef(null);

  const startResize = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResize);
  };

  const handleMouseMove = (e) => {
    if (!isResizing || !panelRef.current) return;

    const containerRect = panelRef.current.parentElement.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;
    
    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setWidth(newWidth);
      onResize?.(newWidth);
    }
  };

  const stopResize = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResize);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResize);
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className={cn('relative', className)}
      style={{ width: `${width}px`, minWidth: `${minWidth}px` }}
    >
      {children}
      <div
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-primary/20 transition-colors"
        onMouseDown={startResize}
      />
    </div>
  );
};

export default ResizablePanel;
