import React, {useState, useEffect} from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

export const Todos: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(prev => todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const AddHandler = (title: string) => {
    console.log(title);
    const newTodo: ITodo ={
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number)  => {
    const arr = [...todos]
    arr.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(prev => arr )
  }

  const removeHandler = (id: number)  => {
    const confirmation = window.confirm('Вы уверены?');
    if(confirmation){
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }

  return(
    <>
      <TodoForm onAdd={AddHandler}/>
        <TodoList 
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
    </>
  )

}