import React from 'react'
import { FaTrash } from 'react-icons/fa'
import Button from '../button/button'
import * as actions from "@/actions"
import Input from '../input/input'
import Form from '../form/form'
import { todoProps } from '@/types'

const DeleteTodo = ({todo}: {todo: todoProps}) => {
  return (
    <Form action={actions.deleteTodo}> 
        <Input type="hidden" name="inputId" value={todo.id}></Input>
        <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash/>}></Button>
    </Form>
  )
}

export default DeleteTodo