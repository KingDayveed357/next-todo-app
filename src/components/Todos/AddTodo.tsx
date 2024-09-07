import React from 'react'
import Form from '../form/form'
import Input from '../input/input'
import Button from '../button/button'
import * as actions from '@/actions'


const AddTodo = () => {
  return (
  <Form action={actions.createTodo}>
    <div className='flex gap-4 items-center'>
        <Input name="input" type='text'  placeholder='Add Todo Here...' />
        <Button type="submit" text="Add" bgColor='bg-blue-600 text-white'></Button>
    </div>
  </Form>
  )
}

export default AddTodo