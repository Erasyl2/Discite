-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 27 2018 г., 18:04
-- Версия сервера: 10.1.32-MariaDB
-- Версия PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `discite`
--

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `ID` int(1) NOT NULL,
  `name` text NOT NULL,
  `handle` text NOT NULL,
  `mail` text NOT NULL,
  `number` text NOT NULL,
  `teadent` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`ID`, `name`, `handle`, `mail`, `number`, `teadent`, `password`) VALUES
(20, 'Max', 'Minilay', 'minilie88@gmail.com', '87478258869', 'student', 'Frankie'),
(33, 'Segiz', 'Minilay', 'lol', '8(702) 874-7131', 'student', ''),
(34, 'Segiz', 'Minilay', 'lol', '8(702) 874-7138', 'student', ''),
(35, 'Segiz', 'Minilay', 'lol', '8(702) 874-7139', 'student', ''),
(36, 'Erlan', 'derebas', '', '8(888) 888-8888', 'student', ''),
(37, '', '', '', '', 'student', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
