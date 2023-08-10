import s from './TodoList.module.css'
import TodoItm from './TodoItm/TodoItm'

const TodoList = ({ list, onChange, onDelite }) => {

  let setTodoList = list.map(itm =>
    <TodoItm key={itm.id} {...itm} onDelite={onDelite} onChange={onChange} />
  )

  return (
    <div>
      {setTodoList}
    </div>
  )
}

export default TodoList 