type task = {
  category: string;
  time: string;
  activity: string;
};

interface ScheduleProps {
  schedule: {
    day: string;
    tasks: task[];
  }[];
}

function Schedule({ schedule }: ScheduleProps) {
  return (
    <div className="grid grid-cols-5 gap-5">
      {schedule.map((day) => {
        return (
          <div>
            <p className="text-lg">{day.day}</p>
            <div className="mt-8">
              {day.tasks.map((task) => {
                return (
                  <div className="flex h-20 mb-8 overflow-hidden rounded-2xl bg-red-50">
                    <div className="p-2 text-center transform rotate-180 vertical-rl">
                      {task.category}
                    </div>
                    <div className="flex flex-col w-full pl-3 bg-gray-400 justify-evenly rounded-l-2xl">
                      <span className="text-2xl font-bold">{task.time}</span>
                      <p className="pr-10 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {task.activity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Schedule;
