/**TasksContext:

Handles task-related data and functionalities.
Includes features for creating tasks, assigning tasks to team members, and tracking task status. */

import React, { createContext, useContext, useState } from "react";

// Define the type for a task
export interface ITask {
  taskId: string;
  title: string;
  description: string;
  assignedTo: string; // EmployeeId of the team member assigned to the task
  status: "todo" | "in_progress" | "completed";
}

// Create the TasksContext
const TasksContext = createContext<
  | {
      tasks: ITask[];
      createTask: (task: ITask) => void;
    }
  | undefined
>(undefined);

// TasksContext Provider component
export function TasksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = (task: ITask) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
}

// Hook to use the TasksContext
export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error(
      "useTasksContext must be used within a TasksContextProvider"
    );
  }
  return context;
}
