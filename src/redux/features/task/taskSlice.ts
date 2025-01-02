import { RootState } from "@/redux/store";
import { ITask } from "@/redux/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  tasks: ITask[];
  filter: "all" | "medium" | "high" | "low";
}

const initialState: IinitialState = {
  tasks: [
    {
      id: "abc",
      title: "Init",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const seleteFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
