import React from 'react'
import { Todo } from '../../../typing'
type Pageprops = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } },
  )
  const todo: Todo = await res.json()
  return todo
}

async function TodoListPage({ params: { todoId } }: Pageprops) {
  const todo = await fetchTodo(todoId)
  return (
    <>
      <div className="my-5 mx-2">TodoListPage : {todoId}</div>
      <div className="p-10 m-2 bg-yellow-200 border-2 shadow-lg">
        <p>Todo : {todo.title}</p>
        <p>Completed : {todo.completed ? 'YES' : 'NO'}</p>
        <p className=" border-t border-black mt-5 text-right">
          UserId : {todo.userId}
        </p>
      </div>
    </>
  )
}

export default TodoListPage

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const todo: Todo[] = await res.json()
  const terminatedTodo = todo.splice(1, 10)
  return terminatedTodo.map((todo) => ({ todoId: todo.id.toString() }))
}
