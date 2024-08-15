import React from "react";

const Todo = () => {
  const filterTagsTask = ["All", "Active", "Completed"];
  return (
    <div className="w-4/5 border-2 border-sky-500 flex">
      <div>
        {filterTagsTask.map((tName) => (
          <p>{tName}</p>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h1>All Tasks</h1>
        <input type="text" placeholder="Add a new task insdie ‘All’ category" />
        <div>
          <div>
            <input
              type="checkbox"
              className="border-[#5A5A5A] h-7 w-7 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
