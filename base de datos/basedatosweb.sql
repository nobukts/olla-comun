-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 01:44:18
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
-- Estructura de tabla para la tabla `errores`
--

CREATE TABLE `errores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Ollas_comunes_en_1932.jpg', 'Olla Común de ñuñoa', '2023-06-24', 'La sencilla comuna de Ñuñoa alberga el Estadio Nacional Julio Martínez Prádanos, un gran estadio en el que se celebran partidos de fútbol y conciertos con artistas de renombre. El complejo circundante incluye una pista de patinaje y un diamante de béisbol. Alrededor de la arbolada Plaza Ñuñoa se pueden encontrar cafeterías al aire libre y bares animados, además de restaurantes chilenos, italianos y peruanos, y el centro comercial Portal Ñuñoa tiene restaurantes de comida rápida.', 'Ñuñoa, Región Metropolitana', 'region metropolitana', '+56912345678', 'ñuñoa@chile.cl', -33.4568, -70.5938),
(2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mujeres_en_olla_com%C3%BAn_en_Lima_en_2021.jpg/800px-Mujeres_en_olla_com%C3%BAn_en_Lima_en_2021.jpg', 'Olla Común de maipú', '2023-06-23', 'Maipú es una comuna ubicada en el sector surponiente de la ciudad de Santiago, capital de Chile. Pertenece administrativamente a la provincia de Santiago, dentro de la región Metropolitana de Santiago. Según el censo del año 2017, Maipú tiene una población de 521 627 habitantes, transformándola en la segunda comuna más poblada del país después de Puente Alto.1. El nombre de la comuna proviene de una derivación de la palabra «Maipo» (del mapudungun: maypun, lugar arado).', 'Maipú, Región Metropolitana', 'region metropolitana', '+56987654321', 'maipu@chile.cl', -33.5098, -70.7563),
(3, 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Olla_com%C3%BAn_en_Lima%2C_agosto_de_2021_en_plena_pandemia_por_COVID-19.jpg', 'Olla comun san benito', '2023-06-20', 'Este es un texto de prueba de la descripcion para la olla común', 'Calle San Benito, 9390000 Lampa, Región Metropolitana de Santiago', 'region metropolitana', '+56988887777', 'sanbenito@a.a', -33.3291, -70.7707),
(4, 'https://th.bing.com/th/id/OIP.7qxmFOhVu1SbS06H0oHIzAHaGC?pid=ImgDet&rs=1', 'Olla comun puerto cisnes', '2023-06-08', 'Esta olla comun queda en la region de aysen, test de la descripcion', 'Cisnes, Región Aysén del General Carlos Ibáñez del Campo, Chile', 'region de Aysen', '+56933334444', 'puertocisnes@a.a', -44.7276, -72.681),
(7, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Montaje_de_Arica.jpg/375px-Montaje_de_Arica.jpg', 'Olla comun Arica', '2023-06-26', 'Esta es la olla común de Arica', 'Dr. Juan Noe, Arica, Arica y Parinacota', 'region de Arica y Parinacota', '+56977776666', 'arica@a.a', -18.4781, -70.3124),
(8, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/R%C3%ADo_%C3%91uble%2C_regi%C3%B3n_de_%C3%91uble%2C_Chile.jpg/375px-R%C3%ADo_%C3%91uble%2C_regi%C3%B3n_de_%C3%91uble%2C_Chile.jpg', 'Olla comun del Ñuble', '2023-06-27', 'Esta es la olla común del Ñuble', 'Dieciocho de Septiembre 539, 3800708 Diguillin, Chillán, Ñuble', 'region del Ñuble', '+56944445555', 'ñuble@a.a', -36.6064, -72.1042),
(15, '', 'asdas', '2023-06-01', '13123123123', '123123123', 'region de valparaiso', '+56921115984', 'bryan@a.a', 30, -30),
(16, '', 'asdasd', '2023-06-01', 'asdasd', 'asdasdas', 'region de Arica y Parinacota', '+56921115984', 'ñúble@a.a', 23, 23);

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
(23, 'bryan@a.a', 'byran', '+56931115984', 'dd79ce625fea1e77b6e6b5f61bd7684389dacd4078a3e793c0b30a8a430f3c746560c7f10dbddd3087abc1b602def70b39a52b9dcdfa88e9456794474fc8914e', 0),
(24, 'jefte@a.a', 'jefte', '+56988888888', 'dd79ce625fea1e77b6e6b5f61bd7684389dacd4078a3e793c0b30a8a430f3c746560c7f10dbddd3087abc1b602def70b39a52b9dcdfa88e9456794474fc8914e', 0),
(25, 'jose@a.a', 'jose', '+56977777777', 'dd79ce625fea1e77b6e6b5f61bd7684389dacd4078a3e793c0b30a8a430f3c746560c7f10dbddd3087abc1b602def70b39a52b9dcdfa88e9456794474fc8914e', 1),
(26, 'augusto@a.a', 'Augusto', '+56988887777', '4bb409fda9e6c5226deb27438cf8a76e49c4e17bba93c68f454cd117db70eb3a305a55a9ebf9756db30efa9dfe7a70f79f39e39ae0ba407ec6650250b2f68563', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `errores`
--
ALTER TABLE `errores`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `errores`
--
ALTER TABLE `errores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ollascomunes`
--
ALTER TABLE `ollascomunes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
