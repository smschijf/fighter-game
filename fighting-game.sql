-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 23, 2022 at 01:11 PM
-- Server version: 5.7.34
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fighting-game`
--

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `id` int(9) NOT NULL,
  `name` varchar(3) DEFAULT NULL,
  `register_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`id`, `name`, `register_date`) VALUES
(1, '1', '2022-06-23 10:48:56'),
(2, 'p1', '2022-06-23 11:02:35');

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE `score` (
  `id` int(9) NOT NULL,
  `player_id` int(9) NOT NULL,
  `win` int(1) NOT NULL,
  `playdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `score`
--

INSERT INTO `score` (`id`, `player_id`, `win`, `playdate`) VALUES
(1, 0, 2, '2022-06-22 13:11:08'),
(2, 0, 2, '2022-06-22 13:21:04'),
(3, 0, 2, '2022-06-22 13:30:57'),
(4, 1, 2, '2022-06-22 13:38:50'),
(5, 1, 2, '2022-06-22 14:32:43'),
(6, 0, 2, '2022-06-22 14:32:51'),
(7, 963168641, 2, '2022-06-23 09:21:23'),
(8, 1238947140, 1, '2022-06-23 09:23:28'),
(9, 1939039899, 1, '2022-06-23 09:25:25'),
(10, 1868798038, 1, '2022-06-23 09:51:46'),
(11, 812334780, 1, '2022-06-23 10:48:56'),
(12, 826123189, 2, '2022-06-23 10:57:58'),
(13, 186929925, 1, '2022-06-23 10:59:34'),
(14, 689367267, 1, '2022-06-23 11:00:14'),
(15, 1400230296, 1, '2022-06-23 11:01:32'),
(16, 777680300, 1, '2022-06-23 11:02:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `score`
--
ALTER TABLE `score`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
