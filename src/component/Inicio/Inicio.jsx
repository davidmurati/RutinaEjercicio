import { useEffect } from 'react';
import "./Inicio.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../Card/Card.jsx";
import Card2 from "../Card/Card2.jsx";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import gymlove from './Noticia/LogoFitpulse.png';
import noticia4 from './Noticia/pezargento.jpeg';
import Noticia5 from './Noticia/ImagenEjercicio1.jpeg';

const Inicio = () => {
    useEffect(() => {
        // Código relacionado con efectos secundarios o lógica adicional.
    }, []);

    const cards2 = [
        {
            id: 1,
            title: "Web de ejercicios funcionales",
            text: "Esta web de ejercicios funcionales está diseñada para ayudarte a combatir el sedentarismo y fomentar un estilo de vida más saludable. La aplicación ofrece una rutina de ejercicios dividida en tres bloques, cada uno con cuatro ejercicios que se enfocan en el tren inferior, medio, y superior del cuerpo. Los ejercicios se seleccionan al azar cada vez que accedes a la aplicación, lo que proporciona variedad y mantiene la rutina interesante.",
            text2: "El objetivo principal de esta web es facilitarte una forma sencilla de comenzar a moverte y a crear el hábito de hacer ejercicio regularmente. Es importante destacar que esta aplicación no pretende sustituir las actividades guiadas por especialistas ni las rutinas más elaboradas que se diseñan para alcanzar objetivos específicos. En cambio, es una herramienta útil para aquellos que buscan iniciarse en un estilo de vida más activo, ofreciéndote una base para que, una vez que el hábito esté establecido, puedas avanzar hacia metas más personalizadas y complejas.",
            text3: "Aprienta ejercicio para comenzar a entrenar",
        },
    ];

    const cards3 = [
        {
            id: 1,
            title: "¡Bienvenido!",
            text: "¡Bienvenido a nuestra página de ejercicios funcionales! Estamos emocionados de que te unas a nosotros en este viaje hacia un estilo de vida más activo y saludable. Aunque estamos en nuestros primeros pasos, hemos creado esta plataforma con el objetivo de ayudarte a moverte más, a sentirte mejor, y a empezar a construir un hábito de ejercicio regular.",
           
            image: Noticia5,
        },
        
        {
            id: 2,
            title: "Pez Argento en character.ai",
            text: (
                <>
                    ¿Algo te incomoda y quieres hablar? Habla con el Pez Argento, amigo de Coraje. Seguro te dará un gran consejo. Puedes hablar con él en este enlace:{" "}
                    <a href="https://character.ai/chat/qfT15B9lrHeRHYN0eK0dLKMPwc4d6qLV0AH8yDJh3-A" target="_blank" rel="noopener noreferrer">
                        Pez Argento en character.ai
                    </a>.
                </>
            ),
            image: noticia4,
        },
    ];

    return (
        <div className="App">
            
            <div className="heater-container">
            <h2>FITPULSE</h2>
            <Navbar />
            </div>

            
            

            <div className="content">
            

                <section className="section-about"> 
                    <h4>Recursos y noticias</h4>
                    <Carousel className="carousel">
                        {cards3.map(({ id, title, text, image }) => (
                            <Card 
                                key={id} 
                                imageSource={image} 
                                title={title} 
                                text={text} 
                            />
                        ))}
                    </Carousel>
                </section>
            </div>

            <img src={gymlove} className="App-logo" alt="logo" />

            <div className="App">
            
                <section className="section-about" id="sobre-la-web">
                    <h4>Sobre la web</h4>
                    {cards2.map(({ id, title, text, text2, text3, text4, text5, text6 }) => (
                        <Card2 
                            key={id} 
                            title={title} 
                            text={text} 
                            text2={text2} 
                            text3={text3} 
                            text4={text4} 
                            text5={text5} 
                            text6={text6} 
                        />
                    ))}
                </section>
                <Footer />
            </div>
            
        </div>
    );
};

export default Inicio;
