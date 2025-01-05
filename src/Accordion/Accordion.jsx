import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
const accordionData = require('./accordionData.json').accordionItems;
export default function Accordion() {
    const [expanded, setExpanded] = useState(new Array(accordionData.length).fill(false));
    const expandItem = (index) => setExpanded(expanded.map((item, idx) => idx === index ? !item : item));
    return (accordionData.map((item, idx) => <AccordionItem 
        expanded={expanded[idx]}
         expandItem={expandItem}
         itemIdx={idx}
          key={item.id} title={item.title} content={item.content} />))
}