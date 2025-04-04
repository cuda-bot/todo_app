export function Todos(Todos){
    return <div>
     {
        Todos.map(function(todo){
            return <div> 
                <h1>{todo.tittle}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "mark as completed" }</button>
            </div>
        })
     }
     
    </div>
}