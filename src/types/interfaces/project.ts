export interface IHRTask {
  taskId: string;
  assignee: string; // Name or ID of the person assigned to the task
  dueDate: Date;
  status: "not_started" | "in_progress" | "completed" | "halted" | "abandoned";
  description: string;
}

export interface IProject<T> {
  name: string;
  description: string;
  time_range: Date;
  owner: string; // Name of the project owner or manager
  teamMembers: string[]; // Array of team members involved in the project
  status: "planning" | "in_progress" | "completed";
  budget: number;
  startDate: Date;
  endDate: Date;
  milestones: Array<{ name: string; date: Date }>; // List of project milestones and their dates
  tasks: T[]; // Array of tasks specific to the project, using a generic type T
}

export interface IHRProject extends IProject<IHRTask> {
  addHRTask: (task: IHRTask) => void;
  removeHRTask: (taskId: string) => void;
  updateHRTask: (taskId: string, updatedTask: Partial<IHRTask>) => void;
}
