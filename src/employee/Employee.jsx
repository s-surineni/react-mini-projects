import EmployeeControls from "../employeeControls/employeeControls";
import EmployeeList from "../employeeList/employeeList";
import { useState } from "react";
const employeeData = [{ id: 1, name: "Alice", title: "Software Engineer" },
    { id: 2, name: "Bob", title: "Product Manager" },
    { id: 3, name: "Charlie", title: "UX Designer" }];
    
export default function Employee() {

        
    const [checkboxState, setCheckboxState] = useState(new Array(employeeData.length).fill(false));
    const deleteSelected = () => {
        const newCheckBoxState = [...checkboxState];
        const filteredCheckBoxes = newCheckBoxState.filter((ele, idx) =>  {
            if (ele) {
                employeeData.splice(idx, 1)
            }
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