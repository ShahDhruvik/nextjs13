import Link from 'next/link'
import React from 'react'
import { Todo } from '../../typing'

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  return todos
}
async function TodoList() {
  const todos = await fetchTodos()

  return (
    <>
      <h1>todos</h1>
      {todos.map((todo) => {
        return (
          <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: ${todo.id}</Link>
          </p>
        )
      })}
    </>
  )
}

export default TodoList
