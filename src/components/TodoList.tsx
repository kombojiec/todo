import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[],
  onToggle: (id: number) => void,
  onRemove(id:number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {

  return(
    <ul className="todo">
      {todos.length > 0 ?
        todos.map(todo => {
          return(
            <li className="todo__item" key={todo.id}>
              <label htmlFor={todo.id.toString()} className="todo__label"  >
                <input type="checkbox" checked={todo.completed} className="todo__input" id={todo.id.toString()} onChange={() => onToggle(todo.id)} /> 
                <span className={todo.completed? 'todo__completed': ''}>{todo.title}</span>
              </label>
                <button className="todo__button" onClick={() => onRemove(todo.id)} >delete</button>
            </li>
          )
        }):
        <h1>Отдыхайте, дел нет...</h1>
      }
    </ul>
  )
}