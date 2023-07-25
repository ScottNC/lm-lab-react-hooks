import { useEffect, useState } from 'react';

export const APICall = () => {

    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(json => setTodo(() => json));
    }, []);

    const printData = Object.entries(todo).map(([key, value], idx) => <p className={key} key={idx}>{key + ': ' + value}</p>);
    
    return (
        <>
            <h2>useEffect</h2>
            {printData}
        </>
    )
}