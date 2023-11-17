import { RequestHandler } from "express";
import { Todo } from "../models/todo";
const TODOS: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ messsage: "Created the todo", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < -1) {
    throw new Error("Could not find todo");
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  res.status(222).json({ message: "Updated", updateTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < -1) {
    throw new Error("Could not find todo");
  }
  TODOS.splice(todoIndex, 1);
  res.status(222).json({ message: "Todo deleted" });
};
