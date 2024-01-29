-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: 4devs
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Content` text NOT NULL,
  `PostImage` varchar(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `PostUser` int NOT NULL,
  PRIMARY KEY (`idPost`),
  UNIQUE KEY `idPost_UNIQUE` (`idPost`),
  KEY `PostUser_idx` (`PostUser`),
  CONSTRAINT `PostUser` FOREIGN KEY (`PostUser`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Top 10 Front-End Tools of 2024','Who doesn\'t love a good front-end tool? In this roundup, you\'ll find useful front-end tools that were popular last year and will help you speed up your development workflow. Let\'s dive in!','Hello Devs, It\'s a popular saying that a craftsman is as good as his tools and the same goes for Web Developers, both frontend and backend developers.','post1.gif','2024-01-29',1),(2,'This is a Post title','This is a Post description','This is the content from a Post.',NULL,'2024-01-29',1),(3,'This is a Post title','This is a Post description','This is the content from a Post.',NULL,'2024-01-29',1),(4,'This is a Post title','This is a Post description','This is the content from a Post.',NULL,'2024-01-29',1),(5,'This is a Post title','This is a Post description','This is the content from a Post.',NULL,'2024-01-29',1);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posttags`
--

DROP TABLE IF EXISTS `posttags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posttags` (
  `idPostTags` int NOT NULL AUTO_INCREMENT,
  `PostIds` int NOT NULL,
  `TagIds` int NOT NULL,
  PRIMARY KEY (`idPostTags`),
  UNIQUE KEY `idPostTags_UNIQUE` (`idPostTags`),
  KEY `TagIds_idx` (`TagIds`),
  KEY `PostIds_idx` (`PostIds`),
  CONSTRAINT `PostIds` FOREIGN KEY (`PostIds`) REFERENCES `post` (`idPost`),
  CONSTRAINT `TagIds` FOREIGN KEY (`TagIds`) REFERENCES `tag` (`idTag`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posttags`
--

LOCK TABLES `posttags` WRITE;
/*!40000 ALTER TABLE `posttags` DISABLE KEYS */;
INSERT INTO `posttags` VALUES (1,1,1),(2,1,2),(3,1,3);
/*!40000 ALTER TABLE `posttags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `idTag` int NOT NULL AUTO_INCREMENT,
  `tagName` varchar(45) NOT NULL,
  PRIMARY KEY (`idTag`),
  UNIQUE KEY `idTag_UNIQUE` (`idTag`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'web-dev'),(2,'javascript'),(3,'react'),(4,'database'),(5,'full-stack'),(6,'front-end'),(7,'back-end'),(8,'ai'),(9,'news');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `UserImage` varchar(255) NOT NULL DEFAULT 'defaultUserImage',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Diogo Agostinho','P@$$w0rd','diogoagostinho.jpg'),(2,'Camel','Camelo123','camel.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-29 16:57:00
