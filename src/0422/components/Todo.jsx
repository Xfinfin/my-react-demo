import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import EditForm from "./EDitForm";
//使用props接收原件屬性
/* function Todo(props) {
    return (
        <div className="todo">
            <p>{props.todo}</p>
        </div>
    )
}
export default Todo */

//解構方式如下
/* function Todo({todo}) {
    return (
        <div className="todo">
            <p>{todo}</p>
        </div>
    )
}
export default Todo */
function Todo({ todo, delTodo, toggleIsEdit }) {
    return (
        todo.isEdit ? <EditForm todo={todo} /> :



            <div className="todo">
                <p>{todo.content}</p>
                <div>
                    <MdModeEdit
                        onClick={()=>{toggleIsEdit(todo.id)}}
                        style={{ cursor: 'pointer' }} />
                    <MdDelete
                        onClick={() => { delTodo(todo.id) }}
                        style={{ cursor: 'pointer', margin: '10px' }} />
                </div>
            </div>
    )
}
export default Todo