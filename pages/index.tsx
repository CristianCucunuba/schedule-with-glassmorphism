import ListItem from "../components/ListItem";
import Schedule from "../components/Schedule";

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
    <div className="flex items-center w-screen h-screen">
      <div className="grid w-4/5 grid-cols-5 gap-5 p-10 mx-auto border border-red-700 h-5/6">
        <div className="p-5 border border-black">
          <h2 className="mb-2 text-3xl font-bold">Objetivos</h2>
          <p className="mb-4">Lo que quiero lograr</p>
          <ul>
            {listItems.map((item) => (
              <ListItem item={item} />
            ))}
          </ul>
        </div>
        <div className="col-span-4 p-5 ">
          <h1 className="mb-2 text-3xl font-bold">Planeador semanal</h1>
          <p className="mb-4">Semana del 15 al 19 de marzo</p>
          <Schedule schedule={schedule} />
        </div>
      </div>
    </div>
  );
}
