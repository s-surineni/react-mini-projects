import './styles.css'
import PropTypes from 'prop-types'
export default function EmployeeList({ employeeData, checkboxState, setCheckboxState }) {
    const handleCheckboxChange = (idx) => {
        const newCheckboxState = [...checkboxState];
        newCheckboxState[idx] = !newCheckboxState[idx];
        setCheckboxState(newCheckboxState);
    }
    return (
        <>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Select All</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee, idx) => (
                        <tr key={employee.id}>
                            <td><input type="checkbox"
                            onChange={() => handleCheckboxChange(idx)}
                                checked={checkboxState[idx]} /></td>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
EmployeeList.propTypes = {
    employeeData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};