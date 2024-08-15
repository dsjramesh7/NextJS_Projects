"use client";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Todo = () => {
  const filterTagsTask = ["All", "Active", "Completed"];
  const [todos, setTodos] = useState([
    { id: 1, text: "Get a new helmet", completed: false },
    { id: 2, text: "Purchase Milk & Corn Flakes", completed: true },
    { id: 3, text: "Pay mortgage", completed: false },
    { id: 4, text: "Complete Assignments", completed: false },
    { id: 5, text: "Replace laptop's screen", completed: true },
  ]);

  const addTodo = (taskText) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: taskText, completed: false },
    ]);
  };

  const deleteTode = (id) => {
    setTodos(todos.filter((_, index) => index !== id));
  };

  const toggleCheck = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="w-[70%] h-[70%] bg-white rounded-lg shadow-lg flex ">
      <div className="w-1/5 m-24">
        {filterTagsTask.map((tName, i) => (
          <p key={i}>{tName}</p>
        ))}
      </div>
      <div className="w-[1px] bg-[#D8D8D8] bg-red-300 h-full"></div>
      <div className="flex flex-col gap-2 w-4/5 ml-8 mt-8">
        <h1 className="text-4xl font-semibold">All Tasks</h1>
        <input
          type="text"
          placeholder="Add a new task insdie ‘All’ category"
          className="w-[678px]"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              addTodo(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <div className="flex flex-col gap-2">
          {todos && todos.length > 0 ? (
            todos.map((task) => (
              <div className="flex justify-between w-[678px]" key={task.id}>
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="border-[#5A5A5A] h-7 w-7"
                    style={{ borderRadius: "24px" }}
                    onChange={() => toggleCheck(task.id)}
                  />
                  <span className={task.completed ? "completed" : ""}>
                    {task.text}
                  </span>
                </div>
                <RiDeleteBin6Line onClick={() => deleteTode(task.id)} />
              </div>
            ))
          ) : (
            <p>No task added yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
