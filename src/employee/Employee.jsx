import EmployeeControls from "../employeeControls/employeeControls";
import EmployeeList from "../employeeList/employeeList";
export default function Employee() {
    const employeeData = [ { id: 1, name: "Alice", title: "Software Engineer" }, 
        { id: 2, name: "Bob", title: "Product Manager" }, 
        { id: 3, name: "Charlie", title: "UX Designer"}];
    return (
        <>
            <EmployeeControls />
            <EmployeeList employeeData={employeeData}/>
        </>
    )
}