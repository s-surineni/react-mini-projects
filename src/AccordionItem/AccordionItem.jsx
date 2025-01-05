

function AccordionItem({title, content, expanded, itemIdx, expandItem}) {
  return (
    <>
    <div onClick={() => expandItem(itemIdx)}>{title}</div>
    <p>{expanded && content}</p>
    </>
  )
}

export default AccordionItem