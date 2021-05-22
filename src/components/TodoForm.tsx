import React, {useState} from 'react';

interface TodoFormProps{
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      props.onAdd(title);
      setTitle('');
    }
  }

  return(
    <div className="form">
      <label htmlFor="title" className="form__label">
        Введите название дела
      </label>
      <input 
        type="text" 
        id="title" 
        className="form__input" 
        placeholder='Введите название дела'
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
    </div>
  )
}