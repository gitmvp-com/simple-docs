const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

// Configuration
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const BUILD_DIR = path.join(__dirname, '..', 'build');
const TOC_FILE = path.join(__dirname, '..', 'toc.yml');

// Ensure build directory exists
if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
}

// Read and parse table of contents
function loadTableOfContents() {
    try {
        const tocContent = fs.readFileSync(TOC_FILE, 'utf8');
        return yaml.load(tocContent);
    } catch (error) {
        console.warn('Warning: Could not load toc.yml, building all docs without TOC');
        return [];
    }
}

// HTML template
function getTemplate(title, content, nav = '') {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Simple Docs</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        
        .container {
            display: flex;
            max-width: 1400px;
            margin: 0 auto;
            background-color: white;
            min-height: 100vh;
        }
        
        .sidebar {
            width: 280px;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            overflow-y: auto;
            position: sticky;
            top: 0;
            height: 100vh;
        }
        
        .sidebar h2 {
            font-size: 1.5em;
            margin-bottom: 20px;
            color: #ecf0f1;
        }
        
        .sidebar nav a {
            display: block;
            color: #ecf0f1;
            text-decoration: none;
            padding: 8px 12px;
            margin-bottom: 5px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .sidebar nav a:hover {
            background-color: #34495e;
        }
        
        .content {
            flex: 1;
            padding: 40px 60px;
            max-width: 900px;
        }
        
        .content h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        
        .content h2 {
            font-size: 2em;
            margin-top: 40px;
            margin-bottom: 15px;
            color: #2c3e50;
        }
        
        .content h3 {
            font-size: 1.5em;
            margin-top: 30px;
            margin-bottom: 12px;
            color: #34495e;
        }
        
        .content p {
            margin-bottom: 15px;
        }
        
        .content ul, .content ol {
            margin-left: 30px;
            margin-bottom: 15px;
        }
        
        .content li {
            margin-bottom: 8px;
        }
        
        .content code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        .content pre {
            background-color: #282c34;
            color: #abb2bf;
            padding: 20px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 20px;
        }
        
        .content pre code {
            background-color: transparent;
            color: inherit;
            padding: 0;
        }
        
        .content blockquote {
            border-left: 4px solid #3498db;
            padding-left: 20px;
            margin-left: 0;
            margin-bottom: 20px;
            color: #555;
            font-style: italic;
        }
        
        .content table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .content table th,
        .content table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        .content table th {
            background-color: #3498db;
            color: white;
            font-weight: bold;
        }
        
        .content table tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        .content a {
            color: #3498db;
            text-decoration: none;
        }
        
        .content a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }
            
            .sidebar {
                width: 100%;
                position: static;
                height: auto;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <aside class="sidebar">
            <h2>Simple Docs</h2>
            <nav>
                ${nav}
            </nav>
        </aside>
        <main class="content">
            ${content}
        </main>
    </div>
</body>
</html>`;
}

// Generate navigation from TOC
function generateNav(toc, baseUrl = '') {
    let nav = '';
    
    for (const item of toc) {
        if (typeof item === 'string') {
            nav += `<div style="margin-top: 15px; font-weight: bold; color: #3498db;">${item}</div>`;
        } else if (item.href) {
            const linkPath = item.href.replace('docs/', '').replace('.md', '.html');
            const title = path.basename(item.href, '.md').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            nav += `<a href="/${linkPath}">${title}</a>`;
            
            if (item.topics) {
                nav += '<div style="margin-left: 15px;">';
                nav += generateNav(item.topics, baseUrl);
                nav += '</div>';
            }
        }
    }
    
    return nav;
}

// Convert Markdown file to HTML
function convertMarkdownToHtml(filePath, nav) {
    const markdown = fs.readFileSync(filePath, 'utf8');
    const html = marked(markdown);
    
    // Extract title from first heading or filename
    const titleMatch = markdown.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(filePath, '.md');
    
    return getTemplate(title, html, nav);
}

// Process all markdown files
function processMarkdownFiles(dir, nav, outputDir = BUILD_DIR) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            const newOutputDir = path.join(outputDir, file);
            if (!fs.existsSync(newOutputDir)) {
                fs.mkdirSync(newOutputDir, { recursive: true });
            }
            processMarkdownFiles(filePath, nav, newOutputDir);
        } else if (file.endsWith('.md')) {
            const html = convertMarkdownToHtml(filePath, nav);
            const outputFile = path.join(outputDir, file.replace('.md', '.html'));
            fs.writeFileSync(outputFile, html);
            console.log(`✓ Built: ${path.relative(BUILD_DIR, outputFile)}`);
        }
    }
}

// Create index.html
function createIndex(nav) {
    const indexContent = `
        <h1>Welcome to Simple Docs</h1>
        <p>A lightweight, Markdown-based documentation system.</p>
        
        <h2>Quick Links</h2>
        <ul>
            <li><a href="/getting-started/intro.html">Getting Started</a></li>
            <li><a href="/user-guide/intro.html">User Guide</a></li>
            <li><a href="/reference/intro.html">Reference</a></li>
        </ul>
        
        <h2>Features</h2>
        <ul>
            <li><strong>Markdown Support</strong>: Write documentation in simple Markdown format</li>
            <li><strong>Fast Build</strong>: Quick conversion from Markdown to HTML</li>
            <li><strong>Responsive Design</strong>: Works on desktop, tablet, and mobile</li>
            <li><strong>Easy to Use</strong>: Minimal configuration required</li>
        </ul>
    `;
    
    const html = getTemplate('Home', indexContent, nav);
    fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), html);
    console.log('✓ Built: index.html');
}

// Main build function
function build() {
    console.log('Building documentation...');
    
    // Load table of contents
    const toc = loadTableOfContents();
    const nav = generateNav(toc);
    
    // Process all markdown files
    if (fs.existsSync(DOCS_DIR)) {
        processMarkdownFiles(DOCS_DIR, nav);
    }
    
    // Create index page
    createIndex(nav);
    
    console.log('\n✨ Build complete! Files are in the build/ directory.');
    console.log('Run "npm start" to view your documentation.\n');
}

// Run build
build();
