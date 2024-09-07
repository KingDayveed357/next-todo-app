"use client";
import { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import { todoProps } from '@/types';
import * as actions from '@/actions'

const EditTodo = ({todo} : {todo: todoProps}) => {
    const [editTodoState, setEditTodoState] = useState(false);
    
    const handleEdit = () => {
        if(todo.isCompleted){
        return ;
        }
        setEditTodoState(!editTodoState);
    }
   const handleSubmit = () => {
    setEditTodoState(false);
   };
  return (
    <div className='flex gap-5 items-center'>
        <Button onClick={handleEdit} text={<MdEdit/>} actionButton/>
        {editTodoState ? (
            <Form action={actions.editTodo} onSubmit={handleSubmit}> 
                <Input name="inputId" value={todo.id} type="hidden"></Input>
                <div className='flex justify-center'>
                <Input name="newTitle"  placeholder="Edit Todo ..." type="text"></Input>
                <Button type="submit" text="save"></Button>
                </div>
                </Form>
        ) : null}
       
    </div>
  )
}

export default EditTodo;