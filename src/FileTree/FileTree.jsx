import './FileTree.css';

export default function FileTree({ data }) {
    const rootItems = data.filter(item => !item.parentId);

    const renderItem = (item) => {
        const children = data.filter(child => child.parentId === item.id);
        return (
            <div key={item.id}>
                {item.name}
                <div className="children">
                    {children.map(child => renderItem(child))}
                </div>
            </div>
        )
    }
    return (
        <div>
            {rootItems.map(item => renderItem(item))}
        </div>
    )
}
