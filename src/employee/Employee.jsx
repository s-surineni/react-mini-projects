import EmployeeControls from "../employeeControls/employeeControls";
import EmployeeList from "../employeeList/employeeList";
import { useState } from "react";
let employeeData = [{ id: 1, name: "Alice", title: "Software Engineer" },
    { id: 2, name: "Bob", title: "Product Manager" },
    { id: 3, name: "Charlie", title: "UX Designer" }];
    
export default function Employee() {

        
    const [checkboxState, setCheckboxState] = useState(new Array(employeeData.length).fill(false));
    const deleteSelected = () => {
        const newCheckBoxState = [...checkboxState];
        employeeData = employeeData.filter((ele, idx) => {
           return !newCheckBoxState[idx]
        })
        const filteredCheckBoxes = newCheckBoxState.filter((ele) =>  {
            // if (ele) {
            //     employeeData.splice(idx, 1)
            // }
            return !ele;
        })
        setCheckboxState(filteredCheckBoxes)
    }

    return (
        <>
            <EmployeeControls deleteSelected={deleteSelected}/>
            <EmployeeList employeeData={employeeData}
                checkboxState={checkboxState}
                setCheckboxState={setCheckboxState} />
        </>
    )
}