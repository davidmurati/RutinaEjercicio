import React, { useState, useEffect, useRef } from "react";
import "./Ejercicio2.css";
import audioFile from "../Ejercicio1/musicaejercicio2.m4a";
import imagen1 from './ImagenEntrenador/onegaiMuscule1.png';
import imagen2 from './ImagenEntrenador/onegaiMuscule2.png';
import imagen3 from './ImagenEntrenador/onegaiMuscule3.png';
import imagen4 from './ImagenEntrenador/onegaiMuscule4.png';
import imagen6 from './ImagenEntrenador/onegaiMuscule6.png';

import imagenCalentamiento1 from './ImagenesEjercicios/Calentamiento/Burpees.png';
import imagenCalentamiento2 from './ImagenesEjercicios/Calentamiento/JumpingJacks.png';
import imagenCalentamiento3 from './ImagenesEjercicios/Calentamiento/MountainClimbers1.jpg';
import imagenCalentamiento4 from './ImagenesEjercicios/Calentamiento/SaltosPatinador.jpg';
import imagenCalentamiento5 from './ImagenesEjercicios/Calentamiento/ShadowBoxing.jpg';

import imagenZona1 from './ImagenesEjercicios/ZonaInferior/Lunge.jpg';
import imagenZona2 from './ImagenesEjercicios/ZonaInferior/Cuadrupedia.png';
import imagenZona3 from './ImagenesEjercicios/ZonaInferior/SentadillaBulgara.png';
import imagenZona4 from './ImagenesEjercicios/ZonaInferior/SentadillaSimples.jpg';
import imagenZona5 from './ImagenesEjercicios/ZonaInferior/Step-ups.jpg';
import imagenZona6 from './ImagenesEjercicios/ZonaInferior/SentadillaSumo.jpg';
import imagenZona7 from './ImagenesEjercicios/ZonaInferior/EscaleraCoordinativa.jpg';

import imagenZonaM1 from './ImagenesEjercicios/ZonaMedia/Bicicleta.jpg';
import imagenZonaM2 from './ImagenesEjercicios/ZonaMedia/Crunches.jpg';
import imagenZonaM3 from './ImagenesEjercicios/ZonaMedia/FlutterKicks.jpg';
import imagenZonaM4 from './ImagenesEjercicios/ZonaMedia/LegRaises.jpg';
import imagenZonaM5 from './ImagenesEjercicios/ZonaMedia/ReverseCrunches.png';
import imagenZonaM6 from './ImagenesEjercicios/ZonaMedia/RussianTwists.jpg';

import imagenZonaS1 from './ImagenesEjercicios/ZonaSuperior/CrabWalk.jpg';
import imagenZonaS2 from './ImagenesEjercicios/ZonaSuperior/CurlBíceps.jpg';
import imagenZonaS3 from './ImagenesEjercicios/ZonaSuperior/CurlMartillo.jpg';
import imagenZonaS4 from './ImagenesEjercicios/ZonaSuperior/DesplazamientoLagarto.jpg';
import imagenZonaS5 from './ImagenesEjercicios/ZonaSuperior/FondosTríceps.jpg';
import imagenZonaS6 from './ImagenesEjercicios/ZonaSuperior/PressArnold.jpg';
import imagenZonaS7 from './ImagenesEjercicios/ZonaSuperior/TrícepsCabeza.jpg';

import Navbar from '../Navbar/Navbar';
import swal from 'sweetalert';

const calentamiento = [
  { name: "Jumping Jacks", duration: 60, reps: "1 minuto",  image: imagenCalentamiento2  },
  { name: "Trote en el lugar con movimiento de brazos", duration: 120, reps: "2 minutos", image:imagen2  },
  { name: "Burpees", duration: 60, reps: "1 minuto", image: imagenCalentamiento1  },
  { name: "Shadow Boxing", duration: 120, reps: "2 minuto", image: imagenCalentamiento5  },
  { name: "Rodillas al pecho", duration: 60, reps: "1 minuto", image:imagen2  },
  { name: "Mountain Climbers", duration: 60, reps: "1 minuto", image: imagenCalentamiento3  },
  { name: "Talones atras", duration: 120, reps: "2 minuto", image:imagen2 },
  { name: "Saltos de patinador", duration: 60, reps: "1 minuto", image: imagenCalentamiento4  },
  { name: "Salto de cuerda", duration: 120, reps: "2 minutos", image:imagen2 },
  { name: "Jump Squats (Salto buscando altura)", duration: 60, reps: "1 minuto", image:imagen2  },
];

const pierna = [
  { name: "Sentadillas simples", duration: 120, reps: "12 repeticiones 3 series", image: imagenZona4  },
  { name: "Sentadillas sumo", duration: 120, reps: "12 repeticiones 3 series", image: imagenZona6},
  { name: "Sentadillas bulgara", duration: 120, reps: "12 repeticiones 3 series", image: imagenZona3},
  { name: "Lunges alternos", duration: 120, reps: "12 repeticiones 3 series", image: imagenZona1  },
  { name: "Elevación de talones", duration: 60, reps: "1 minuto", image: imagen3  },
  { name: "Rodillas al pecho", duration: 60, reps: "1 minuto", image: imagen3  },
  { name: "Step-ups en banco o escalón (subir a caja o escalon)", duration: 120, reps: "12 repeticiones por pierna 3 series", image: imagenZona5  },
  { name: "Patadas hacia atrás en cuadrupedia", duration: 120, reps: "10 repeticiones por pierna 3 series", image: imagenZona2  },
  { name: "Trote con rodillas al pecho", duration: 60, reps: "1 minuto", image: imagen3  },
  { name: "Ejercicio con escalera coordinativa", duration: 120, reps: "2 minutos", image: imagenZona7  },
  { name: "Sentadillas de pared (Wall Sit)", duration: 60, reps: "1 minuto", image: imagen3  },
];

const abdomen = [
  { name: "Crunches", duration: 60, reps: "40 repeticiones", image: imagenZonaM2  },
 { name: "Dorsales", duration: 60, reps: "1 minuto", image: imagen2  },
 { name: "Abdominales tipo bicicleta", duration: 60, reps: "40 repeticiones", image: imagenZonaM1  },
 { name: "Abdominales con Elevacion de piernas (Leg Raises)", duration: 60, reps: "40 repeticiones", image: imagenZonaM4 },
 { name: "Mountain Climbers", duration: 60, reps: "1 minuto", image: imagenCalentamiento3 },
 { name: "Abdominales tipo remo (Russian Twists)", duration: 60, reps: "80 repeticiones", image: imagenZonaM6 },
 { name: "Flutter Kicks (pedalea con piernas estiradas)", duration: 60, reps: "1 minuto", image: imagenZonaM3 },
 { name: "Reverse Crunches", duration: 60, reps: "40 repeticiones", image: imagenZonaM5 },
 { name: "V-Ups", duration: 60, reps: "50 repeticiones", image: imagen2 },
 { name: "Crunch abdominal con piernas elevadas", duration: 120, reps: "100 repeticiones", image: imagen2 },
 { name: "Crunch abdominal oblicuos", duration: 120, reps: "100 repeticiones", image: imagen2 },
];

const brazos = [
  { name: "Flexiones", duration: 120, reps: "10 repeticiones 3 series", image: imagen2 },
  { name: "Fondos de Tríceps", duration: 120, reps: "15 repeticiones 3 series", image: imagenZonaS5 },
  { name: "Curl de Bíceps", duration: 120, reps: "10 repeticiones 3 series", image: imagenZonaS2 },
  { name: "Extensiones de Tríceps por Encima de la Cabeza", duration: 120, reps: "10 repeticiones 3 series", image: imagenZonaS7 },
  { name: "Elevaciones pesas Laterales", duration: 120, reps: "15 repeticiones 3 series", image: imagen2 },
  { name: "Superman", duration: 60, reps: "1 minuto", image: imagen2 },
  { name: "Plancha lateral", duration: 60, reps: "1 minuto 20 s por lado", image: imagen2 },
  { name: "Plancha", duration: 60, reps: "40 s", image: imagen2 },
  { name: "Curl Martillo", duration: 60, reps: "10 repeticiones 3 series", image: imagenZonaS3 },
  { name: "Press Arnold", duration: 120, reps: "10 repeticiones 3 series", image: imagenZonaS6 },
  { name: "Flexiones Diamante", duration: 120, reps: "10 repeticiones 3 series", image: imagen2 },
  { name: "Remo con Mancuerna", duration: 120, reps: "10 repeticiones 3 series", image: imagen2 },
  { name: "Fondos en Silla o Banco", duration: 120, reps: "15 repeticiones 3 series", image: imagen2 },
  { name: "Press de Hombros con Mancuernas o Bandas", duration: 120, reps: "15 repeticiones 3 series", image: imagen2 },
  { name: "Curl de Bíceps", duration: 130, reps: "20 repeticiones 3 series", image: imagen2},
  { name: "Desplazamiento de lagarto", duration: 60, reps: "1 minuto", image: imagenZonaS4 },
  { name: "Crab Walk", duration: 60, reps: "1 minuto", image: imagenZonaS1 },
];

const descanso = [
  { name: "Descanso activo", duration: 60, reps: "1 minuto (caminar en el lugar)", image:imagen2},
];

const Inicio = [
  { name: "Inicio", duration: 3, reps: "Hola", image:imagen2 },
];

const Calentamiento0= [
  { name: "Trote", duration: 60, reps: "1 minuto", image:imagen3 },
];

const estiramiento = [
  { name: "Estiramientos", duration: 300, reps: "5 minutos", image:imagen2},
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
       <img
          src={routine[currentExercise].image}
          alt={routine[currentExercise].name}
          className="exercise-image"
        />
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