import ListItem from "@components/ListItem";
import Schedule from "@components/Schedule";
import GlassBox from "@components/GlassBox";

const listItems = [
  {
    text: "Leer mas",
    icon: "https://img.icons8.com/nolan/64/vegetarian-food.png",
  },
  {
    text: "Hacer Ejercicio",
    icon: "https://img.icons8.com/nolan/64/dumbbell.png",
  },
  {
    text: "Ser mas productiva",
    icon: "https://img.icons8.com/nolan/64/book.png",
  },
  {
    text: "Dedicarme mas tiempo",
    icon: "https://img.icons8.com/nolan/64/time.png",
  },
];

const schedule = [
  {
    day: "Lunes",
    tasks: [
      {
        category: "Ejercicio",
        time: "7:00am",
        activity: "Cardio",
      },
    ],
  },
  {
    day: "Martes",
    tasks: [
      {
        category: "Yoga",
        time: "7:00am",
        activity: "Clase grupal",
      },
      {
        category: "Ingles",
        time: "8:00am",
        activity: "Listening",
      },
    ],
  },
  {
    day: "Miercoles",
    tasks: [
      {
        category: "Ejecicio",
        time: "7:00am",
        activity: "Piernas",
      },
      {
        category: "Cita",
        time: "8:00am",
        activity: "Odontologia",
      },
    ],
  },
  {
    day: "Jueves",
    tasks: [
      {
        category: "Yoga",
        time: "7:00am",
        activity: "Clase grupal",
      },
      {
        category: "Ingles",
        time: "8:00am",
        activity: "Examen",
      },
      {
        category: "Lectura",
        time: "9:00am",
        activity: "Pag 70-90",
      },
    ],
  },
  {
    day: "Viernes",
    tasks: [
      {
        category: "Ejercicio",
        time: "7:00am",
        activity: "Brazos para ponerme bien fortaco",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex items-center w-screen lg:h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <GlassBox className="flex flex-col w-full p-10 mx-auto lg:flex-row md:my-10 lg:space-x-12 h-5/6 rounded-2xl md:max-w-7xl">
        <GlassBox className="w-full p-5 mb-10 bg-white lg:mb-0 lg:w-1/4 backdrop-filter backdrop-blur-sm rounded-2xl">
          <h2 className="mb-2 text-3xl font-bold">Objetivos</h2>
          <p className="mb-4">Lo que quiero lograr</p>
          <ul className="space-y-4">
            {listItems.map((item) => (
              <ListItem item={item} />
            ))}
          </ul>
        </GlassBox>
        <GlassBox className="flex-1 p-5 rounded-2xl">
          <h1 className="mb-2 text-3xl font-bold">Planeador semanal</h1>
          <p className="mb-4">Semana del 15 al 19 de marzo</p>
          <Schedule schedule={schedule} />
        </GlassBox>
      </GlassBox>
    </div>
  );
}
