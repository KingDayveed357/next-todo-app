import { todo } from "node:test"
import Button from "../button/button"
import Form from "../form/form"
import Input from "../input/input"
import * as actions from "@/actions"
import { todoProps } from "@/types"
import { FaCheck } from "react-icons/fa"


const ChangeTodo = ({ todo }: {todo: todoProps}) => {
  return (
 <Form action={actions.changeStatus}>
    <Input name="inputId" value={todo.id} type="hidden" ></Input>
    <Button text={<FaCheck />} type="submit" actionButton bgColor={todo.isCompleted ? 'bg-green-400': "bg-blue-500"}></Button>
 </Form>
  )
}

export default ChangeTodo