import './styles.css'
import PropTypes from 'prop-types'
export default function EmployeeList({ employeeData }) {
    return (
        <>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => (
                        <tr key={employee.id}>
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