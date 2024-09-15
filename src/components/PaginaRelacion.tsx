import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Heart, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';

const HeartIcon = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const HeartArrowIcon = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    <path d="M12 5.67L18 18H6L12 5.67z"></path>
  </svg>
);

export default function PaginaRelacion() {
  const [seccionActual, setSeccionActual] = useState<'apreciaciones' | 'recuerdos' | 'mensajeFinal'>('apreciaciones');
  const [mensajeFinalVisible, setMensajeFinalVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const [respuestaVisible, setRespuestaVisible] = useState(false);

  const apreciaciones = [
    "Eres muy tierna conmigo.",
    "Aprecio tus apapachos.",
    "Adoro cuando duermes a mi lado.",
    "Me gusta lo bien que me tratas y lo buena que eres conmigo.",
    "Tus gestos cuando nos hacemos bromas."
  ];

  const imagenes = [
    '/IMG-20231206-WA0016.jpg',
    '/IMG-20231209-WA0016.jpg',
    '/IMG-20231229-WA0036.jpg',
    '/IMG-20240104-WA0020.jpg',
  ];

  useEffect(() => {
    if (seccionActual === 'apreciaciones') {
      const timer = setInterval(() => {
        setAnimatedItems(prev => {
          if (prev.length === apreciaciones.length) {
            clearInterval(timer);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 800);
      return () => clearInterval(timer);
    }
  }, [seccionActual]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-purple-800">Nuestra Historia de Amor</h1>

      {seccionActual === 'apreciaciones' && (
        <Card className="w-full max-w-md md:max-w-2xl bg-white shadow-lg">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">Lo Que Aprecio de Ti</h2>
            <ul className="space-y-4">
              {apreciaciones.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center transition-all duration-500 ease-in-out ${
                    animatedItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                  }`}
                >
                  {index % 2 === 0 ? (
                    <HeartIcon className="text-pink-500 mr-2 animate-pulse" />
                  ) : (
                    <HeartArrowIcon className="text-red-500 mr-2 animate-bounce" />
                  )}
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white text-lg py-3 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setSeccionActual('recuerdos')}
            >
              Ver Nuestros Recuerdos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {seccionActual === 'recuerdos' && (
        <Card className="w-full max-w-md md:max-w-2xl bg-white shadow-lg">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">Nuestros Momentos Especiales</h2>
            <div className="w-full mb-4">
              <Slider {...sliderSettings}>
                {imagenes.map((imagen, index) => (
                  <div key={index} className="outline-none">
                    <div className="aspect-w-4 aspect-h-3">
                      <img
                        src={imagen}
                        alt={`Recuerdo ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <Button
              className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white text-lg py-3 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setSeccionActual('mensajeFinal')}
            >
              Ver Mensaje Final <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {seccionActual === 'mensajeFinal' && (
        <Card className="w-full max-w-md md:max-w-2xl bg-white shadow-lg">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">Mi Compromiso Contigo</h2>
            {!mensajeFinalVisible ? (
              <Button
                onClick={() => setMensajeFinalVisible(true)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Revelar Mensaje Final <Heart className="ml-2 h-5 w-5 animate-beat" />
              </Button>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700 text-center">
                  Mi amor, me comprometo a esforzarme cada día para fortalecer nuestra relación. Entiendo que no solo se trata de hacer estos detalles al principio, sino de mantener un esfuerzo constante. Estoy dispuesto a mejorar cada día, a escucharte más, a ser más paciente y a mostrarte mi amor en las pequeñas cosas de manera continua.
                </p>
                <p className="text-gray-700 text-center">
                  Si me das otra oportunidad, te prometo que no será solo un esfuerzo temporal, sino un compromiso duradero. Juntos, construiremos un futuro lleno de amor, comprensión y felicidad, con atención a cada detalle que te haga sentir especial.
                </p>
                <Button
                  onClick={() => alert( 'Si deseas darme otra oportunidad, escribeme al whatsapp u.u ')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Si quiero <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
