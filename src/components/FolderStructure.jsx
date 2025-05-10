import { useState } from 'react';
import './FolderStructure.css';

const FolderStructure = ({ data }) => {
  const [expandedFolders, setExpandedFolders] = useState(new Set());

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

  const getChildren = (parentId) => {
    return data.filter(item => item.parentId === parentId);
  };

  const renderItem = (item) => {
    const isDirectory = item.type === 'directory';
    const isExpanded = expandedFolders.has(item.id);
    const children = isDirectory ? getChildren(item.id) : [];

    return (
      <div key={item.id} className="folder-item">
        <div 
          className={`item-content ${isDirectory ? 'directory' : 'file'}`}
          onClick={() => isDirectory && toggleFolder(item.id)}
        >
          <span className="icon">
            {isDirectory ? (isExpanded ? '📂' : '📁') : '📄'}
          </span>
          <span className="name">{item.name}</span>
        </div>
        {isDirectory && isExpanded && (
          <div className="children">
            {children.map(child => renderItem(child))}
          </div>
        )}
      </div>
    );
  };

  const rootItems = data.filter(item => !item.parentId);

  return (
    <div className="folder-structure">
      {rootItems.map(item => renderItem(item))}
    </div>
  );
};

export default FolderStructure; 