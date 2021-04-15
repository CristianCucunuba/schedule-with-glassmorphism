import GlassBox from "@components/GlassBox";

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
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
      {schedule.map((day) => {
        return (
          <div>
            <p className="text-lg">{day.day}</p>
            <div className="mt-8">
              {day.tasks.map((task) => {
                return (
                  <GlassBox className="flex h-20 mb-8 overflow-hidden cursor-pointer rounded-2xl">
                    <div className="p-1 font-bold text-center text-white transform rotate-180 vertical-rl">
                      {task.category}
                    </div>
                    <GlassBox className="flex flex-col w-full pl-3 justify-evenly rounded-l-2xl bg-opacity-20">
                      <span className="text-2xl font-bold">{task.time}</span>
                      <p className="pr-10 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {task.activity}
                      </p>
                    </GlassBox>
                  </GlassBox>
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
