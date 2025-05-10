export default function FileTree({ data }) {
    const rootItems = data.filter(item => !item.parentId);

    const renderItem = (item) => {
        return (
            <div key={item.id}>
                {item.name}
            </div>
        )
    }
    return (
        <div>
            {rootItems.map(item => renderItem(item))}
        </div>
    )
}
