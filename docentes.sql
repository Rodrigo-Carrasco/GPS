-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2023 a las 17:33:56
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
-- Base de datos: `docentes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

CREATE TABLE `docentes` (
  `docenteId` int(20) NOT NULL,
  `docenteNombre` varchar(30) NOT NULL,
  `docenteHoras` varchar(20) DEFAULT NULL,
  `docenteDescripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`docenteId`, `docenteNombre`, `docenteHoras`, `docenteDescripcion`) VALUES
(1, 'Docente 2', 'Trabaja 5 horas', 'Docente de Recursos Naturales.'),
(2, 'Docente 1', 'Trabaja 5 horas', 'Docente de Programación WEB.'),
(4, 'Jose', 'Trabaja 5 horas', 'Docente de Recursos Humanos'),
(5, 'Luis', 'Trabaja 5 horas', 'Docente de Algebra'),
(6, 'Claudio', 'Trabaja 5 horas', 'Docente de Inglés'),
(7, 'Martina', 'Trabaja 5 horas', 'Docente de Castellano'),
(8, 'Sofia', 'Trabaja 5 horas', 'Docente de Redes'),
(9, 'Joaquin', 'Trabaja 5 horas', 'Docente de Ingenieria'),
(10, 'Matías', 'Trabaja 5 horas', 'Docente de Algebra'),
(132, 'Jose', '33', 'Prueba'),
(133, 'Prueba', '2 horas', 'Prueba');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD PRIMARY KEY (`docenteId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `docentes`
--
ALTER TABLE `docentes`
  MODIFY `docenteId` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
