import EmployeeControls from "../employeeControls/employeeControls";
import EmployeeList from "../employeeList/employeeList";
import { useState } from "react";
export default function Employee() {
    const employeeData = [{ id: 1, name: "Alice", title: "Software Engineer" },
    { id: 2, name: "Bob", title: "Product Manager" },
    { id: 3, name: "Charlie", title: "UX Designer" }];
    const [checkboxState, setCheckboxState] = useState(new Array(employeeData.length).fill(false));

    return (
        <>
            <EmployeeControls />
            <EmployeeList employeeData={employeeData}
                checkboxState={checkboxState}
                setCheckboxState={setCheckboxState} />
        </>
    )
}