import React, { useState, useEffect } from 'react';
import { Play, Moon, Sun, Download, RotateCcw } from 'lucide-react';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import ResizablePanel from './components/ResizablePanel';
import Button from './components/Button';
import { cn } from './lib/utils';

// Default code templates
const defaultCode = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Project</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to Code Execution Platform!</h1>
        <p>Start coding and see the magic happen in real-time.</p>
        <button id="demo-btn" class="btn">Click Me!</button>
        <div id="output" class="output"></div>
    </div>
</body>
</html>`,
  css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 90%;
}

h1 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 2.5rem;
}

p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.btn {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 10px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.output {
    margin-top: 2rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    min-height: 50px;
}`,
  js: `// JavaScript code runs here
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('demo-btn');
    const output = document.getElementById('output');
    
    btn.addEventListener('click', function() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        output.innerHTML = '<p style="color: ' + randomColor + '; font-weight: bold;">🎉 Button clicked! You can now start building amazing things!</p>';
        
        // Add some animation
        output.style.transform = 'scale(1.05)';
        setTimeout(() => {
            output.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Add some interactive elements
    let clickCount = 0;
    btn.addEventListener('click', function() {
        clickCount++;
        if (clickCount > 5) {
            btn.textContent = 'You\'re on fire! 🔥';
        }
    });
});`
};

function App() {
  const [code, setCode] = useState(defaultCode);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [autoRun, setAutoRun] = useState(true);
  const [activeTab, setActiveTab] = useState('html');
  const [editorWidths, setEditorWidths] = useState({
    html: 350,
    css: 350,
    js: 350
  });

  // Auto-run functionality
  useEffect(() => {
    if (!autoRun) return;
    
    const timeoutId = setTimeout(() => {
      // Trigger preview update
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [code, autoRun]);

  const handleCodeChange = (language, value) => {
    setCode(prev => ({
      ...prev,
      [language]: value
    }));
  };

  const handleRun = () => {
    // Force preview update
    setCode({ ...code });
  };

  const handleReset = () => {
    setCode(defaultCode);
  };

  const handleExport = () => {
    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Project</title>
    <style>
${code.css}
    </style>
</head>
<body>
${code.html}
    <script>
${code.js}
    </script>
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'html', label: 'HTML', language: 'html' },
    { id: 'css', label: 'CSS', language: 'css' },
    { id: 'js', label: 'JavaScript', language: 'javascript' }
  ];

  return (
    <div className={cn('min-h-screen', isDarkMode ? 'dark' : '')}>
      <div className="bg-background text-foreground min-h-screen">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">🚀 Code Execution Platform</h1>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setAutoRun(!autoRun)}
                  className={autoRun ? 'bg-primary text-primary-foreground' : ''}
                >
                  Auto-run
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRun}
                >
                  <Play className="w-4 h-4 mr-1" />
                  Run
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExport}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex h-[calc(100vh-65px)]">
          {/* Left Panel - Code Editors */}
          <div className="flex-1 flex flex-col">
            {/* Editor Tabs */}
            <div className="bg-muted border-b">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-colors',
                      activeTab === tab.id
                        ? 'bg-background text-foreground border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Editor */}
            <div className="flex-1">
              <CodeEditor
                language={tabs.find(tab => tab.id === activeTab)?.language}
                value={code[activeTab]}
                onChange={(value) => handleCodeChange(activeTab, value)}
                theme={isDarkMode ? 'vs-dark' : 'light'}
                height="100%"
                className="h-full"
              />
            </div>
          </div>

          {/* Right Panel - Preview */}
          <ResizablePanel
            minWidth={300}
            maxWidth={800}
            defaultWidth={500}
            className="border-l"
          >
            <Preview
              html={code.html}
              css={code.css}
              js={code.js}
              className="h-full"
            />
          </ResizablePanel>
        </div>
      </div>
    </div>
  );
}

export default App;
