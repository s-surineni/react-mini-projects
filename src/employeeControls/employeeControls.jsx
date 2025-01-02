export default function EmployeeControls({deleteSelected}) {
    return (
        <>
            <button onClick={deleteSelected}>Delete</button>
            <button>Insert</button>
        </>
    )
}