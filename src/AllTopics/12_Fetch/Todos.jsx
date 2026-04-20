import React, { useEffect, useState } from 'react'
import Todo from './Todo';

const Todos = () => {

    const [allTodos, setAllTodos] = useState([]);

    //to call todo API
    async function getTodos() {
        try {
            let resp = await fetch("https://dummyjson.com/todos");
            let data = await resp.json();
            console.log(data.todos)
            setAllTodos(data.todos);
        } catch (err) {
            console.log(err.response);
        }
    }


    useEffect(() => {
        getTodos();//invokes during mounting phase
    }, [])

    return (
        <div>
            <h1>Todos</h1>

            {allTodos.length === 0 ? (
                <>

                    <p>No todos available</p>

                </>
            ) : (
                <>
                    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {allTodos.map((ele) => {

                            return <Todo key = {ele.id} ele = {ele} />;       
                            
                        })}
                    </section>
                </>
            )}
        </div>
    )
}

export default Todos;