import { useEffect, useState } from "react";

function PromiseSample() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usersXHR, setUsersXHR] = useState(null);
    const [loadingXHR, setLoadingXHR] = useState(true);
    const [errorXHR, setErrorXHR] = useState(null);

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

    useEffect(() => {
        setLoadingXHR(true);
        setErrorXHR(null);
        // Helper to wrap XHR in a Promise
        function xhrPromise(url) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // Some browsers don't support xhr.responseType = 'json'
                        resolve(xhr.responseType === 'json' ? xhr.response : JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error('Network response was not ok'));
                    }
                };
                xhr.onerror = function() {
                    reject(new Error('Network error'));
                };
                xhr.send();
            });
        }
        xhrPromise('http://localhost:3001/users/1')
            .then((userData) => {
                return xhrPromise(`http://localhost:3001/orders?userId=${userData.id}`)
                    .then((ordersData) => {
                        setUsersXHR({ ...userData, orders: ordersData });
                        setLoadingXHR(false);
                    });
            })
            .catch((err) => {
                setErrorXHR(err.message);
                setLoadingXHR(false);
            });
    }, []);

    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Users</h2>
            <h3>Promise</h3>
            {/* Display fetch/Promise data */}
            <div>
                <h4>Fetch/Promise Data</h4>
                {users && users.id && (
                    <div>
                        <div>Name: {users.name}</div>
                        <div>Email: {users.email}</div>
                        <div>Orders: {users.orders && users.orders.length}</div>
                    </div>
                )}
            </div>
            <h3>XHR + Promise</h3>
            {/* Display XHR/Promise data */}
            <div>
                <h4>XHR/Promise Data</h4>
                {loadingXHR && <div>Loading users (XHR)...</div>}
                {errorXHR && <div>Error (XHR): {errorXHR}</div>}
                {usersXHR && usersXHR.id && !loadingXHR && !errorXHR && (
                    <div>
                        <div>Name: {usersXHR.name}</div>
                        <div>Email: {usersXHR.email}</div>
                        <div>Orders: {usersXHR.orders && usersXHR.orders.length}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PromiseSample;
