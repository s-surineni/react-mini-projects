import { useState } from 'react';
import './FolderStructureManager.css';

const initialFolderStructure = [
  {
    id: '1',
    name: 'project-root',
    type: 'directory',
    path: '/project-root'
  },
  {
    id: '2',
    name: 'src',
    type: 'directory',
    parentId: '1',
    path: '/project-root/src'
  },
  {
    id: '3',
    name: 'components',
    type: 'directory',
    parentId: '2',
    path: '/project-root/src/components'
  },
  {
    id: '4',
    name: 'utils',
    type: 'directory',
    parentId: '2',
    path: '/project-root/src/utils'
  },
  {
    id: '5',
    name: 'App.jsx',
    type: 'file',
    parentId: '2',
    path: '/project-root/src/App.jsx'
  },
  {
    id: '6',
    name: 'Header.jsx',
    type: 'file',
    parentId: '3',
    path: '/project-root/src/components/Header.jsx'
  },
  {
    id: '7',
    name: 'Button.jsx',
    type: 'file',
    parentId: '3',
    path: '/project-root/src/components/Button.jsx'
  },
  {
    id: '8',
    name: 'helpers.js',
    type: 'file',
    parentId: '4',
    path: '/project-root/src/utils/helpers.js'
  },
  {
    id: '9',
    name: 'public',
    type: 'directory',
    parentId: '1',
    path: '/project-root/public'
  },
  {
    id: '10',
    name: 'index.html',
    type: 'file',
    parentId: '9',
    path: '/project-root/public/index.html'
  },
  {
    id: '11',
    name: 'package.json',
    type: 'file',
    parentId: '1',
    path: '/project-root/package.json'
  },
  {
    id: '12',
    name: 'README.md',
    type: 'file',
    parentId: '1',
    path: '/project-root/README.md'
  }
];

export default function FolderStructureManager() {
  const [folderStructure, setFolderStructure] = useState(initialFolderStructure);
  const [expandedFolders, setExpandedFolders] = useState(new Set(['1', '2'])); // Start with root and src expanded
  const [newFilePath, setNewFilePath] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFolderPath, setSelectedFolderPath] = useState('');

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const generateId = () => {
    return (Math.max(...folderStructure.map(item => parseInt(item.id))) + 1).toString();
  };



  const pathExists = (path) => {
    return folderStructure.some(item => item.path === path);
  };

  const createDirectoriesInPath = (path) => {
    const pathParts = path.split('/').filter(part => part);
    let currentPath = '';
    const newDirectories = [];

    for (let i = 0; i < pathParts.length - 1; i++) {
      currentPath += '/' + pathParts[i];
      
      if (!pathExists(currentPath)) {
        const parentPath = '/' + pathParts.slice(0, i).join('/');
        const parent = folderStructure.find(item => item.path === parentPath) || 
                     newDirectories.find(item => item.path === parentPath);
        
        const newDir = {
          id: generateId(),
          name: pathParts[i],
          type: 'directory',
          parentId: parent?.id || null,
          path: currentPath
        };
        
        newDirectories.push(newDir);
      }
    }

    return newDirectories;
  };

  const createFileAtPath = (filePath) => {
    if (!filePath.trim()) {
      setMessage('Please enter a file path');
      return;
    }

    let path = filePath.trim();
    
    // Ensure path starts with /
    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    // Check if file already exists
    if (pathExists(path)) {
      setMessage('File or directory already exists at this path');
      return;
    }

    // Extract filename
    const pathParts = path.split('/').filter(part => part);
    const fileName = pathParts[pathParts.length - 1];

    if (!fileName) {
      setMessage('Invalid file path');
      return;
    }

    // Create any missing directories in the path
    const newDirectories = createDirectoriesInPath(path);
    
    // Find or create parent directory
    const parentPath = '/' + pathParts.slice(0, -1).join('/');
    let parent = folderStructure.find(item => item.path === parentPath);
    
    if (!parent && newDirectories.length > 0) {
      parent = newDirectories[newDirectories.length - 1];
    }

    // Create the new file
    const newFile = {
      id: generateId(),
      name: fileName,
      type: 'file',
      parentId: parent?.id || null,
      path: path
    };

    // Update folder structure
    setFolderStructure(prev => [...prev, ...newDirectories, newFile]);
    
    // Expand parent directories to show the new file
    if (parent) {
      setExpandedFolders(prev => new Set([...prev, parent.id]));
    }

    setMessage(`Successfully created: ${path}`);
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const createFile = () => {
    createFileAtPath(newFilePath);
    setNewFilePath('');
    setSelectedFolderPath('');
  };

  const clearInput = () => {
    setNewFilePath('');
    setSelectedFolderPath('');
    setMessage('');
  };

  const handleAddFileToFolder = (folderPath, event) => {
    event.stopPropagation(); // Prevent folder toggle
    setSelectedFolderPath(folderPath);
    setNewFilePath(`${folderPath}/`);
    
    // Focus the input field
    setTimeout(() => {
      const input = document.querySelector('.file-input');
      if (input) {
        input.focus();
        // Position cursor at the end
        input.setSelectionRange(input.value.length, input.value.length);
      }
    }, 100);
    
    setMessage(`Ready to create file in: ${folderPath}`);
    setTimeout(() => setMessage(''), 3000);
  };

  const renderPath = (item) => {
    return (
      <span className="item-path" title={item.path}>
        {item.path}
      </span>
    );
  };

  const renderItem = (item, level = 0) => {
    const isDirectory = item.type === 'directory';
    const children = folderStructure.filter(child => child.parentId === item.id);
    const isExpanded = expandedFolders.has(item.id);
    
    return (
      <div key={item.id} className="folder-item" style={{ marginLeft: `${level * 20}px` }}>
        <div
          className={`item-content ${isDirectory ? 'directory' : 'file'}`}
          onClick={() => isDirectory && toggleFolder(item.id)}
        >
          <span className="icon">
            {isDirectory ? (isExpanded ? '📂' : '📁') : '📄'}
          </span>
          <span className="name">{item.name}</span>
          {isDirectory && (
            <button
              className="add-file-btn"
              onClick={(e) => handleAddFileToFolder(item.path, e)}
              title={`Add file to ${item.path}`}
            >
              +
            </button>
          )}
          {renderPath(item)}
        </div>
        {isDirectory && isExpanded && children.length > 0 && (
          <div className="children">
            {children
              .sort((a, b) => {
                // Directories first, then files, both alphabetically
                if (a.type !== b.type) {
                  return a.type === 'directory' ? -1 : 1;
                }
                return a.name.localeCompare(b.name);
              })
              .map(child => renderItem(child, level + 1))
            }
          </div>
        )}
      </div>
    );
  };

  const rootItems = folderStructure.filter(item => !item.parentId);

  return (
    <div className="folder-structure-manager">
      <div className="header">
        <h2>📁 Folder Structure Manager</h2>
        <p>Click on folders to expand/collapse. Create new files by specifying a path.</p>
      </div>

      <div className="file-creator">
        <div className="input-group">
          <input
            type="text"
            value={newFilePath}
            onChange={(e) => setNewFilePath(e.target.value)}
            placeholder={selectedFolderPath ? `Enter filename (creating in: ${selectedFolderPath})` : "Enter file path (e.g., /src/components/NewComponent.jsx)"}
            className="file-input"
            onKeyDown={(e) => e.key === 'Enter' && createFile()}
          />
          <button onClick={createFile} className="create-btn">
            Create File
          </button>
          {selectedFolderPath && (
            <button onClick={clearInput} className="clear-btn" title="Clear selection">
              ✕
            </button>
          )}
        </div>
        {message && (
          <div className={`message ${message.includes('Successfully') || message.includes('Ready') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>

      <div className="folder-tree">
        {rootItems
          .sort((a, b) => {
            if (a.type !== b.type) {
              return a.type === 'directory' ? -1 : 1;
            }
            return a.name.localeCompare(b.name);
          })
          .map(item => renderItem(item))
        }
      </div>
    </div>
  );
} 