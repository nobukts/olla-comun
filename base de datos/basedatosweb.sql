-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2023 a las 06:49:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basedatosweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ollascomunes`
--

CREATE TABLE `ollascomunes` (
  `id` int(11) NOT NULL,
  `imagen` varchar(1000) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ollas_comunes_en_1932.jpg/338px-Ollas_comunes_en_1932.jpg',
  `titulo` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `region` varchar(100) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `cordX` float NOT NULL,
  `cordY` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ollascomunes`
--

INSERT INTO `ollascomunes` (`id`, `imagen`, `titulo`, `fecha`, `descripcion`, `direccion`, `region`, `telefono`, `correo`, `cordX`, `cordY`) VALUES
(1, 'https://es.wikipedia.org/wiki/Olla_com%C3%BAn#/media/Archivo:Ollas_comunes_en_1932.jpg', 'Olla Común de ñuñoa', '2023-06-24', 'La sencilla comuna de Ñuñoa alberga el Estadio Nacional Julio Martínez Prádanos, un gran estadio en el que se celebran partidos de fútbol y conciertos con artistas de renombre. El complejo circundante incluye una pista de patinaje y un diamante de béisbol. Alrededor de la arbolada Plaza Ñuñoa se pueden encontrar cafeterías al aire libre y bares animados, además de restaurantes chilenos, italianos y peruanos, y el centro comercial Portal Ñuñoa tiene restaurantes de comida rápida.', 'Ñuñoa, Región Metropolitana', 'region metropolitana', '+56912345678', 'ñuñoa@chile.cl', -33.4568, -70.5938),
(2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mujeres_en_olla_com%C3%BAn_en_Lima_en_2021.jpg/800px-Mujeres_en_olla_com%C3%BAn_en_Lima_en_2021.jpg', 'Olla Común de maipú', '2023-06-23', 'Maipú es una comuna ubicada en el sector surponiente de la ciudad de Santiago, capital de Chile. Pertenece administrativamente a la provincia de Santiago, dentro de la región Metropolitana de Santiago. Según el censo del año 2017, Maipú tiene una población de 521 627 habitantes, transformándola en la segunda comuna más poblada del país después de Puente Alto.1. El nombre de la comuna proviene de una derivación de la palabra «Maipo» (del mapudungun: maypun, lugar arado).', 'Maipú, Región Metropolitana', 'region metropolitana', '+56987654321', 'maipú@chile.cl', -33.5098, -70.7563),
(3, 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Olla_com%C3%BAn_en_Lima%2C_agosto_de_2021_en_plena_pandemia_por_COVID-19.jpg', 'Olla comun san benito', '2023-06-20', 'Este es un texto de prueba de la descripcion para la olla común', 'Calle San Benito, 9390000 Lampa, Región Metropolitana de Santiago', 'region metropolitana', 'test1', 'test2', -33, -70);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `contrasenya` varchar(500) NOT NULL,
  `esAdmin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `nombre`, `telefono`, `contrasenya`, `esAdmin`) VALUES
(23, 'bryan@a.a', 'byran', '+56931115984', '5f650f7ab5dfc7105e8000a5a96ae2f1f17ce29a4ec57357219df217c4f490ac397436e33e1b21ffc59d536ce39715446aa3e92d2294f7a953899db9e36fcd6a', 0),
(24, 'jefte@a.a', 'jefte', '+56988888888', 'dd79ce625fea1e77b6e6b5f61bd7684389dacd4078a3e793c0b30a8a430f3c746560c7f10dbddd3087abc1b602def70b39a52b9dcdfa88e9456794474fc8914e', 0),
(25, 'jose@a.a', 'jose', '+56977777777', '5f650f7ab5dfc7105e8000a5a96ae2f1f17ce29a4ec57357219df217c4f490ac397436e33e1b21ffc59d536ce39715446aa3e92d2294f7a953899db9e36fcd6a', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ollascomunes`
--
ALTER TABLE `ollascomunes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ollascomunes`
--
ALTER TABLE `ollascomunes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
