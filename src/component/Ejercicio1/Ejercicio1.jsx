import React, { useState, useEffect, useRef } from "react";
import "./Ejercicio1.css";
import audioFile from "./musicaejercicio2.m4a";
import imagen1 from './onegaiMuscule1.png';
import imagen2 from './onegaiMuscule2.png';
import imagen3 from './onegaiMuscule3.png';
import imagen4 from './onegaiMuscule4.png';
import imagen6 from './onegaiMuscule6.png';

/*

const exercises = [
  // Calentamiento y Cardio (5 minutos)
  { name: "Jumping Jacks", duration: 60, reps: "1 minuto" },
  { name: "Trote en el lugar", duration: 120, reps: "2 minutos" },
  { name: "Shadow Boxing", duration: 60, reps: "1 minuto" },
  { name: "Marcha en el lugar con elevación de rodillas", duration: 60, reps: "1 minuto" },

  { name: "Descanso", duration: 60, reps: "1 minuto" },

  // Ejercicios Funcionales para Piernas - Ciclo 1
  { name: "Sentadillas simples", duration: 120, reps: "15 repeticiones" },
  { name: "Lunges laterales", duration: 120, reps: "12 repeticiones por pierna 3 series" },
  { name: "Sentadillas sumo", duration: 120, reps: "15 repeticiones 3 series" },
  { name: "Lunges alternos", duration: 120, reps: "15 repeticiones 3 series" },
  
  // Descanso
  { name: "Descanso activo", duration: 60, reps: "1 minuto (caminar en el lugar)" },

  // Ejercicios Funcionales para Piernas - Ciclo 2
  { name: "Elevación de talones", duration: 60, reps: "1 minuto" },
  { name: "Step-ups en banco o escalón", duration: 120, reps: "12 repeticiones por pierna 3 series" },
  { name: "Patadas hacia atrás en cuadrupedia", duration: 120, reps: "15 repeticiones por pierna 3 series" },
  { name: "Trote con rodillas al pecho", duration: 60, reps: "1 minuto" },
  
  // Descanso
  { name: "Descanso activo", duration: 60, reps: "1 minuto (caminar en el lugar)" },

  // Ejercicios Funcionales - Ciclo 3
  { name: "Zancadas estáticas", duration: 120, reps: "12 repeticiones por pierna" },
  { name: "Sentadillas de pared (Wall Sit)", duration: 60, reps: "1 minuto" },
  { name: "Abducción de cadera en el suelo", duration: 120, reps: "15 repeticiones por pierna 3 series" },
  { name: "Plancha", duration: 30, reps: "0.5 minuto" },
  { name: "Crunch abdominal con piernas elevadas", duration: 120, reps: "30 repeticiones 3 series" },
  
  { name: "Estiramiento", duration: 60, reps: "1 minuto (caminar en el lugar)" },
];

*/

const exercises = [
  // Calentamiento y Cardio (5 minutos)
  { name: "Jumping Jacks", duration: 60, reps: "1 minuto" },
  { name: "Trote en el lugar con movimiento de brazos", duration: 120, reps: "2 minutos" },
  { name: "Burpees", duration: 60, reps: "1 minuto" },
  { name: "Shadow Boxing", duration: 60, reps: "1 minuto" },

  // Ejercicios para Abdominales
  { name: "Plancha", duration: 120, reps: "1 minuto" },
  { name: "Crunch abdominal con piernas elevadas", duration: 120, reps: "100" },
  { name: "Crunch abdominal oblicuos", duration: 120, reps: "100" },
  { name: "Elevaciones de piernas", duration: 120, reps: "100" },

  // Ejercicios para Brazos
  { name: "Flexiones", duration: 120, reps: "12-15 repeticiones" },
  { name: "Remo con mancuerna en posición plank", duration: 120, reps: "12 repeticiones por lado" },
  { name: "Fondos en silla o banco", duration: 120, reps: "15 repeticiones" },
  { name: "Press de hombros con mancuernas o bandas", duration: 130, reps: "12 repeticiones" },
  { name: "Curl de bíceps", duration: 130, reps: "15 repeticiones" },

  // Enfriamiento y Estiramientos (5 minutos)
  { name: "Enfriamiento y estiramientos", duration: 300, reps: "5 minutos" },
];

function Ejercicio() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercises[0].duration);
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
            if (currentExercise < exercises.length - 1) {
              setCurrentExercise((prev) => prev + 1);
              setTimeLeft(exercises[currentExercise + 1].duration);
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
  }, [isRunning, currentExercise]);

  useEffect(() => {
    const changeImageAndPhrase = () => {
      switch (true) {
        case currentExercise < 4:
          setCurrentImage(imagen3);
          setCurrentPhrase("Hola, hoy vamos a hacer ejercicios. Esto te acercará más a tu meta.");
          break;
        case currentExercise < 7:
          setCurrentImage(imagen2);
          setCurrentPhrase("¡Excelente! Acabas de terminar el calentamiento. Vamos con todo.");
          break;
        case currentExercise < 11:
          setCurrentImage(imagen3);
          setCurrentPhrase("¡Vamos con intensidad!");
          break;
        case currentExercise < 14:
          setCurrentImage(imagen2);
          setCurrentPhrase("Lo estás haciendo muy bien.");
          break;
        case currentExercise < 17:
          setCurrentImage(imagen4);
          setCurrentPhrase("¡Excelente! Ya casi terminamos el ejercicio.");
          break;
          case currentExercise < 20:
          setCurrentImage(imagen6);
          setCurrentPhrase("¡Te felicito! estas apunto de cumplir la rutina de hoy.");
          break;
      }
    };

    changeImageAndPhrase();
  }, [currentExercise]);

  const startWorkout = () => {
    setIsRunning(true);
  };

  const stopWorkout = () => {
    setIsRunning(false);
  };

  const resetWorkout = () => {
    setIsRunning(false);
    setCurrentExercise(0);
    setTimeLeft(exercises[0].duration);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setTimeLeft(exercises[currentExercise + 1].duration);
      setIsRunning(false);
    }
  };

  const previousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setTimeLeft(exercises[currentExercise - 1].duration);
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

  return (
    <div className="App">
      <h1>Entrenamiento Funcional</h1>
      
      <div className="exercise-info">
      
        <h2>{exercises[currentExercise].name}</h2>
        <p>{exercises[currentExercise].reps}</p>
        <p className="time-left">{timeLeft} segundos</p>
      </div>
      <div className="buttons">
        <button onClick={startWorkout} disabled={isRunning}>
          Iniciar
        </button>
        <button onClick={stopWorkout}>Pausa</button>
        <button onClick={resetWorkout}>Reiniciar</button>
        <button onClick={previousExercise} disabled={currentExercise === 0}>
          Anterior
        </button>
        <button onClick={nextExercise} disabled={currentExercise === exercises.length - 1}>
          Siguiente
        </button>
        <button onClick={toggleAudio}>
          {isPlaying ? "Pausar Música" : "Reproducir Música"}
        </button>
        <button onClick={() => skipAudio(300)}>Adelantar 5 min</button>
        <button onClick={() => skipAudio(-300)}>Retroceder 5 min</button>
      </div>
      <img src={currentImage} className="App-logo" alt="imagen de ejercicio" />
      <p>{currentPhrase}</p>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
}

export default Ejercicio;