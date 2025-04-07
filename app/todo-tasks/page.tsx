"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo.trim(),
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const getFilterLabel = () => {
    switch (filter) {
      case "all":
        return "All";
      case "active":
        return "Active";
      case "completed":
        return "Completed";
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle
            id="todo-list-title"
            className="flex items-center justify-between"
          >
            <span>Todo List</span>
            <Badge variant="outline">{todos.length} items</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4" data-testid="todo-list-form">
            <Input
              id="todo-list-input"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <Button data-testid="todo-list-add-button" onClick={addTodo}>
              Add
            </Button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[120px]"
                  data-testid="todo-list-filter-dropdown"
                >
                  {getFilterLabel()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setFilter("all")}
                  data-testid="filter-all"
                >
                  All
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setFilter("active")}
                  data-testid="filter-active"
                >
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setFilter("completed")}
                  data-testid="filter-completed"
                >
                  Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-2">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-2 border rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    className={
                      todo.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {todo.text}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>

          {todos.some((todo) => todo.completed) && (
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={clearCompleted}
                className="w-full"
              >
                Clear Completed
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
