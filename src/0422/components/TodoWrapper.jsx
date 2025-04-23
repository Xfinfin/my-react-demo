import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"
function TodoWrapper() {
    //因為有N個todo,所以用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '對發票', id: Math.random(), isCompleted: false, isEdit: false },
    ])

    //建立加入新的todo內容函式
    //其餘運算子(...名稱)
    const addTodo = (newContent) => {
        setTodos([...todos, { content: newContent, id: Math.random() }])
    }

    //建立刪除todo函示
    //傳入被刪除的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            //使用filter方法,保留不被刪除的id
            return todo.id !== id
        }))
    }


    //建立切換isEdit屬性質函式，傳給Todo元件使用
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            //! 表示not => ! false => ture
            //!ture => false
            return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo
                        todo={todo}
                        key={todo.id}
                        delTodo={delTodo}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />
                })

            }
        </div>
    )
}
export default TodoWrapper