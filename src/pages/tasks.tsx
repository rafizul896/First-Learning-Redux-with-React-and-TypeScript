import { AddTaskModel } from "@/components/modules/tasks/AddTaskModel";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { useAppSelector } from "@/redux/features/hook";
import { selectTasks } from "@/redux/features/task/taskSlice";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModel />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
