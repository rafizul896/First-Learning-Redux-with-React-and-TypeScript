import { ITask } from "@/redux/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    task: ITask[]
}

const initialState:IinitialState = {
  task: [
    {
      id: "abc",
      title: "Init",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High"
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
