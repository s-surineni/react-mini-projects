import { useEffect, useState } from "react";

function PromiseSample() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch("http://localhost:3001/users/1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((userData) => {
                // Get user orders after getting user data
                return fetch(`http://localhost:3001/orders?userId=${userData.id}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((ordersData) => {
                        setUsers({...userData, orders: ordersData});
                        setLoading(false);
                    });
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Users</h2>
            <h3>Promise</h3>
        </div>
    );
}

export default PromiseSample;
