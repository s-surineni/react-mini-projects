import './FileTree.css';

export default function FileTree({ data }) {
    // note
    const rootItems = data.filter(item => !item.parentId);

    const renderItem = (item) => {
        const isDirectory = item.type === 'directory';
        const children = data.filter(child => child.parentId === item.id);
        return (
            <div key={item.id} className="folder-item">
                <span className="icon">
                    {isDirectory ? '📁' : '📄'}
                </span>
                <span className="name">{item.name}</span>
                <div className="children">
                    {children.map(child => renderItem(child))}
                </div>
            </div>
        )
    }
    return (
        <div className="folder-structure">
            {rootItems.map(item => renderItem(item))}
        </div>
    )
}
