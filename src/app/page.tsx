import AddTodo from "@/components/Todos/AddTodo";
import Todo from "@/components/Todos/Todo";
import {prisma} from "@/utiils/prisma";

async function getData(){
   const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy: {
      createdAt: "desc",
    },
   });
   return data;
}
 
export default async function Home() {
  const data = await getData();
  return (
<div className="w-screen py-20 flex justify-center flex-col items-center">
  <span className="text-4xl font-extrabold uppercase">Next.js Todo App</span>
  <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
    <span className="lowercase">w/</span>Server Actions
  </h1>

  <div className="flex justify-center flex-col items-center">
   {/* Add todo */}
   <AddTodo/>
   {/* map todo */}
   <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
   {
     data.map((todo, id) => (
      <div key={id} className="w-full 5"> 
        <Todo todo={todo}/>
        </div>
     ))}
   </div>
  </div>
</div>
  );
}
