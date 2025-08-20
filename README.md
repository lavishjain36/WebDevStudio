# 🚀 Code Execution Platform

A powerful, modern web-based code editor for HTML, CSS, and JavaScript with live preview functionality. Built with React, Vite, and Monaco Editor.

## ✨ Features

### 🎯 Core Features
- **Three-Panel Editor**: Separate editors for HTML, CSS, and JavaScript
- **Live Preview**: Real-time iframe-based rendering
- **Monaco Editor**: Professional code editing experience (same as VS Code)
- **Resizable Panels**: Drag to resize HTML/CSS/JS/output panels
- **Dark/Light Mode**: Toggle between themes
- **Auto-run**: Live updates as you type
- **Export Functionality**: Download your project as a single HTML file

### 🛠️ Editor Features
- Syntax highlighting for HTML, CSS, and JavaScript
- Line numbers
- Auto indentation
- Bracket matching
- Auto-completion
- Error detection
- Multiple themes

### 🎨 UI/UX Features
- Modern, responsive design
- Tabbed interface for code editors
- Professional button components
- Smooth animations and transitions
- Mobile-friendly layout

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd code-execution-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
code-execution-platform/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── CodeEditor.jsx      # Monaco editor wrapper
│   │   ├── Preview.jsx         # Live preview iframe
│   │   └── ResizablePanel.jsx  # Resizable panel component
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and Tailwind
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## 🎮 How to Use

### Basic Usage
1. **Write HTML**: Use the HTML tab to write your HTML structure
2. **Style with CSS**: Switch to the CSS tab to add styling
3. **Add Interactivity**: Use the JavaScript tab for functionality
4. **See Results**: Watch the live preview update in real-time

### Features
- **Auto-run**: Toggle on/off to see live updates as you type
- **Manual Run**: Click the "Run" button to force a preview update
- **Reset**: Click "Reset" to restore default code
- **Export**: Download your complete project as an HTML file
- **Theme Toggle**: Switch between dark and light modes

### Default Template
The platform comes with a beautiful default template that demonstrates:
- Responsive design
- CSS animations
- JavaScript interactivity
- Modern UI components

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Code Editor**: Monaco Editor (VS Code's editor)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 🎨 Customization

### Adding New Themes
You can customize the Monaco Editor themes by modifying the `theme` prop in `CodeEditor.jsx`.

### Styling
The project uses Tailwind CSS with a custom design system. Modify `tailwind.config.js` to customize colors, spacing, and other design tokens.

### Extending Features
The modular component structure makes it easy to add new features:
- Add new editor languages
- Implement file upload functionality
- Add collaboration features
- Integrate with external APIs

## 🚀 Deployment

### GitHub Setup
1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Code Execution Platform"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Follow the instructions to push your existing repository

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/code-execution-platform.git
   git branch -M main
   git push -u origin main
   ```

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Build for Production
```bash
npm run build
```

## 🔧 GitHub Configuration

This project includes comprehensive GitHub configuration files:

### Workflows
- **CI/CD Pipeline**: Automated testing and deployment
- **Dependabot**: Automatic dependency updates
- **Code Quality**: ESLint and build checks

### Templates
- **Issue Templates**: Bug reports and feature requests
- **Pull Request Template**: Standardized PR format
- **Contributing Guide**: Community guidelines

### Security & Compliance
- **Code of Conduct**: Community standards
- **MIT License**: Open source licensing
- **Security Policies**: Vulnerability reporting

## 🤝 Contributing

This is a learning project, but contributions are welcome! Here are some ideas:
- Add more code templates
- Implement file upload/download
- Add collaboration features
- Improve mobile responsiveness
- Add more editor themes

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Learning Goals

This platform is perfect for:
- Learning HTML, CSS, and JavaScript
- Prototyping web applications
- Testing code snippets
- Teaching web development
- Quick experimentation

## 🔧 Troubleshooting

### Common Issues

1. **Monaco Editor not loading**
   - Ensure all dependencies are installed
   - Check browser console for errors

2. **Preview not updating**
   - Toggle auto-run off and on
   - Check for JavaScript errors in the console

3. **Styling issues**
   - Clear browser cache
   - Ensure Tailwind CSS is properly configured

### Performance Tips
- Disable auto-run for large code files
- Use the manual "Run" button for better performance
- Close unused browser tabs to free up memory

---

**Happy Coding! 🎉**

Built with ❤️ for the developer community.
