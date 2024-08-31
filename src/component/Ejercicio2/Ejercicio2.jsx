import React, { useState, useEffect, useRef } from "react";
import "./Ejercicio2.css";
import audioFile from "../Ejercicio1/musicaejercicio2.m4a";
import imagen1 from './ImagenEntrenador/onegaiMuscule1.png';
import imagen2 from './ImagenEntrenador/onegaiMuscule2.png';
import imagen3 from './ImagenEntrenador/onegaiMuscule3.png';
import imagen4 from './ImagenEntrenador/onegaiMuscule4.png';
import imagen6 from './ImagenEntrenador/onegaiMuscule6.png';
import Navbar from '../Navbar/Navbar';
import swal from 'sweetalert';

const calentamiento = [
  { name: "Jumping Jacks", duration: 60, reps: "1 minuto" },
  { name: "Trote en el lugar con movimiento de brazos", duration: 120, reps: "2 minutos" },
  { name: "Burpees", duration: 60, reps: "1 minuto" },
  { name: "Shadow Boxing", duration: 120, reps: "2 minuto" },
  { name: "Rodillas al pecho", duration: 60, reps: "1 minuto" },
  { name: "Mountain Climbers", duration: 60, reps: "1 minuto" },
  { name: "Talones atras", duration: 120, reps: "2 minuto" },
  { name: "Saltos de patinador", duration: 60, reps: "1 minuto" },
  { name: "Salto de uerda", duration: 120, reps: "2 minutos" },
  { name: "Jump Squats (Salto buscando altura)", duration: 60, reps: "1 minuto" },
];

const pierna = [
  { name: "Sentadillas simples", duration: 120, reps: "12 repeticiones 3 series" },
  { name: "Lunges laterales", duration: 120, reps: "12 repeticiones por pierna 3 series" },
  { name: "Sentadillas sumo", duration: 120, reps: "12 repeticiones 3 series" },
  { name: "Lunges alternos", duration: 120, reps: "12 repeticiones 3 series" },
  { name: "Elevación de talones", duration: 60, reps: "1 minuto" },
  { name: "Rodillas al pecho", duration: 60, reps: "1 minuto" },
  { name: "Step-ups en banco o escalón (subir a caja o escalon)", duration: 120, reps: "12 repeticiones por pierna 3 series" },
  { name: "Patadas hacia atrás en cuadrupedia", duration: 120, reps: "10 repeticiones por pierna 3 series" },
  { name: "Trote con rodillas al pecho", duration: 60, reps: "1 minuto" },
  { name: "Zancadas estáticas", duration: 120, reps: "12 repeticiones por pierna 3 series" },
  { name: "Sentadillas de pared (Wall Sit)", duration: 60, reps: "1 minuto" },
];

const abdomen = [
  { name: "Crunches", duration: 60, reps: "50 repeticiones" },
 { name: "Plancha", duration: 60, reps: "1 minuto" },
 { name: "Abdominales tipo bicicleta", duration: 60, reps: "50 repeticiones" },
 { name: "Abdominales con Elevacion de piernas (Leg Raises)", duration: 60, reps: "50 repeticiones" },
 { name: "Mountain Climbers", duration: 60, reps: "1 minuto" },
 { name: "Abdominales tipo remo (Russian Twists)", duration: 60, reps: "80 repeticiones" },
 { name: "Flutter Kicks (pedalea con piernas estiradas)", duration: 60, reps: "1 minuto" },
 { name: "Plancha lateral (Side Plank) (30 segundos por lado)", duration: 60, reps: "1 minuto" },
 { name: "Reverse Crunches", duration: 60, reps: "50 repeticiones" },
 { name: "V-Ups", duration: 60, reps: "50 repeticiones" },
 { name: "Crunch abdominal con piernas elevadas", duration: 120, reps: "100 repeticiones" },
 { name: "Crunch abdominal oblicuos", duration: 120, reps: "100 repeticiones" },
 { name: "Elevaciones de piernas", duration: 120, reps: "50 repeticiones" },
];

const brazos = [
  { name: "Flexiones", duration: 120, reps: "10 repeticiones 3 series" },
  { name: "Fondos de Tríceps", duration: 120, reps: "15 repeticiones 3 series" },
  { name: "Curl de Bíceps", duration: 120, reps: "10 repeticiones 3 series" },
  { name: "Extensiones de Tríceps por Encima de la Cabeza", duration: 120, reps: "10 repeticiones 3 series" },
  { name: "Elevaciones Laterales", duration: 120, reps: "15 repeticiones 3 series" },
  { name: "Plancha a Flexión", duration: 60, reps: "1 minuto" },
  { name: "Curl Martillo", duration: 60, reps: "1 minuto" },
  { name: "Press Arnold", duration: 120, reps: "10 repeticiones 3 series" },
  { name: "Flexiones Diamante", duration: 120, reps: "10 repeticiones 3 series" },
  { name: "Remo con Mancuerna", duration: 120, reps: "10 repeticiones 3 series" },
  { name: "Fondos en Silla o Banco", duration: 120, reps: "15 repeticiones 3 series" },
  { name: "Press de Hombros con Mancuernas o Bandas", duration: 120, reps: "15 repeticiones 3 series" },
  { name: "Press Militar", duration: 130, reps: "12 repeticiones 3 series" },
  { name: "Curl de Bíceps", duration: 130, reps: "20 repeticiones 3 series" },
  { name: "Desplazamiento de lagarto", duration: 60, reps: "1 minuto" },
  { name: "Crab Walk", duration: 60, reps: "1 minuto" },
];

const descanso = [
  { name: "Descanso activo", duration: 60, reps: "1 minuto (caminar en el lugar)" },
];

const Inicio = [
  { name: "Inicio", duration: 3, reps: "Hola" },
];

const Calentamiento0= [
  { name: "Trote", duration: 60, reps: "1 minuto" },
];

const estiramiento = [
  { name: "Enfriamiento y estiramientos", duration: 300, reps: "5 minutos" },
];

// Función para obtener ejercicios aleatorios de un array
const getRandomExercises = (exercisesArray, count) => {
  const shuffled = [...exercisesArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Genera la rutina con 4 ejercicios al azar de cada categoría
const generateRoutine = () => [
  ...Inicio, // Un descanso después de todos los ejercicios
  ...Calentamiento0, // Trote de 1 min
  ...getRandomExercises(calentamiento, 4),
  ...descanso, // Un descanso después de todos los ejercicios
  ...getRandomExercises(pierna, 4),
  ...descanso, // Un descanso después de todos los ejercicios
  ...getRandomExercises(abdomen, 4),
  ...descanso, // Un descanso después de todos los ejercicios
  ...getRandomExercises(brazos, 4),
  ...estiramiento, // Estiramiento final
];

function Ejercicio() {
  const [routine, setRoutine] = useState(generateRoutine());
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timeLeft, setTimeLeft] = useState(routine[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(imagen1);
  const [currentPhrase, setCurrentPhrase] = useState("Hola, hoy vamos a hacer ejercicios. Esto te acercará más a tu meta.");
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timerRef.current);
            if (currentExercise < routine.length - 1) {
              setCurrentExercise((prev) => prev + 1);
              setTimeLeft(routine[currentExercise + 1].duration);
              setIsRunning(true);
            } else {
              setIsRunning(false);
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, currentExercise, routine]);

  useEffect(() => {
    const changeImageAndPhrase = () => {
      switch (true) {
      
        case currentExercise < 5:
          setCurrentImage(imagen1);
          setCurrentPhrase("¡Vamos a empezar con energía!");
          break;
        case currentExercise < 10:
          setCurrentImage(imagen2);
          setCurrentPhrase("¡Sigue así! ¡Lo estás haciendo genial!");
          
          break;
        case currentExercise < 15:
          setCurrentImage(imagen3);
          setCurrentPhrase("¿Sientes el ardor? ¡Eso es progreso!");
          
          break;
        case currentExercise < 20:
          setCurrentImage(imagen4);
          setCurrentPhrase("¡Último esfuerzo! ¡Tú puedes!");
          
          break;
        default:
          setCurrentImage(imagen6);
          setCurrentPhrase("¡Gran trabajo! No olvides estirar.");
          
          break;
          setCurrentPhrase(newPhrase);

        }
        
      };

   changeImageAndPhrase();
  }, [currentExercise]);

 const startWorkout = () => {
   setIsRunning(true);
   mostrarAlerta();
 };

 const stopWorkout = () => {
   setIsRunning(false);
 };

 const resetWorkout = () => {
  setIsRunning(false);
  setCurrentExercise(0);
  setTimeLeft(routine[0].duration);
};

const nextExercise = () => {
  if (currentExercise < routine.length - 1) {
    setCurrentExercise(currentExercise + 1);
    setTimeLeft(routine[currentExercise + 1].duration);
    setIsRunning(false);
  }
};

const previousExercise = () => {
  if (currentExercise > 0) {
    setCurrentExercise(currentExercise - 1);
    setTimeLeft(routine[currentExercise - 1].duration);
    setIsRunning(false);
  }
};

 const toggleAudio = () => {
   if (audioRef.current) {
     if (isPlaying) {
       audioRef.current.pause();
     } else {
       audioRef.current.play();
     }
     setIsPlaying(!isPlaying);
   }
 };

 const skipAudio = (seconds) => {
   if (audioRef.current) {
     audioRef.current.currentTime += seconds;
   }
 };

 const mostrarAlerta=()=>{
  swal ({
  title: "Atención",
  text: currentPhrase,
  icon: "success",
  button: "Continuar",
  timer: "1500",
  });
  }

 return (
   <div className="App">

    <Navbar />
    <div className="titulo">
     <h1>Entrenamiento Funcional</h1>
     </div>
     
     <div className="exercise-info">
     
     <h2>{routine[currentExercise].name}</h2>
     <p>{routine[currentExercise].reps}</p>
       <p className="time-left">{timeLeft} segundos</p>
     </div>
     <div className="buttons">
       <button onClick={startWorkout} disabled={isRunning}>
         Iniciar
       </button>
       <button onClick={stopWorkout}>Pausa</button>
       <button onClick={resetWorkout}>Reiniciar</button>
       <button onClick={nextExercise} disabled={currentExercise === routine.length - 1}>
          Siguiente
        </button>
        <button onClick={previousExercise} disabled={currentExercise === 0}>
          Anterior
        </button>
       <button onClick={toggleAudio}>
         {isPlaying ? "Pausar Música" : "Reproducir Música"}
       </button>
       <button onClick={() => skipAudio(300)}>Adelantar 5 min</button>
       <button onClick={() => skipAudio(-300)}>Retroceder 5 min</button>
     </div>
     <h3>{currentPhrase }</h3>
     <img src={currentImage} className="App-logo" alt="imagen de ejercicio" />
     <audio ref={audioRef} src={audioFile} />
   </div>
 );
}

export default Ejercicio;