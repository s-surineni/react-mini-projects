import './FileTree.css';
import { useState } from 'react';

export default function FileTree({ data }) {
    // note
    const rootItems = data.filter(item => !item.parentId);

    const [expandedFolders, setExpandedFolders] = useState(new Set());

    const toggleFolder = (folderId) => {
        setExpandedFolders(prev => {
            const newSet = new Set(prev);
            newSet.has(folderId) ? newSet.delete(folderId) : newSet.add(folderId);
            return newSet;
        });
    }

    const renderItem = (item) => {
        const isDirectory = item.type === 'directory';
        const children = data.filter(child => child.parentId === item.id);
        const isExpanded = expandedFolders.has(item.id);
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
        )
    }
    return (
        <div className="folder-structure">
            {rootItems.map(item => renderItem(item))}
        </div>
    )
}
