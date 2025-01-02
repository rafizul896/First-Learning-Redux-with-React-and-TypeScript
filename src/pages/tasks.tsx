import { useAppSelector } from "@/redux/features/hook";
import {  selectTasks, seleteFilter } from "@/redux/features/task/taskSlice";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(seleteFilter);

  console.log(tasks)
  console.log(filter)

  return (
    <div>
      <h1>This is Tasks Component</h1>
    </div>
  );
};

export default Tasks;
