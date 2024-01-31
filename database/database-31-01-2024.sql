-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: database_4devs
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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `postId` int NOT NULL AUTO_INCREMENT,
  `postTitle` varchar(60) NOT NULL,
  `postDescription` varchar(200) NOT NULL,
  `postContent` text NOT NULL,
  `postImage` varchar(255) DEFAULT NULL,
  `postDate` date DEFAULT (curdate()),
  `postUser` int NOT NULL,
  PRIMARY KEY (`postId`),
  KEY `postUser_FOREIGN_idx` (`postUser`),
  CONSTRAINT `postUser_FOREIGN` FOREIGN KEY (`postUser`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Top 10 Front-End Tools of 2024','Who doesn\'t love a good front-end tool? In this roundup, you\'ll find useful front-end tools that were popular last year and will help you speed up your development workflow.','Hello Devs, It\'s a popular saying that a craftsman is as good as his tools and the same goes for Web Developers, both frontend and backend developers. Who doesn\'t love a good front-end tool? In this roundup, you\'ll find useful front-end tools that were popular last year and will help you speed up your development workflow. Let\'s dive in! Hello Devs, It\'s a popular saying that a craftsman is as good as his tools and the same goes for Web Developers, both frontend and backend developers. Hello Devs, It\'s a popular saying that a craftsman is as good as his tools and the same goes for Web Developers, both frontend and backend developers. Hello Devs, It\'s a popular saying that a craftsman is as good as his tools and the same goes for Web Developers, both frontend and backend developers.','post1.gif','2024-01-31',1),(2,'What is the most difficult coding language?','Malbolge - the most difficult language in the world','A language with no standard syntax, in which all commands are executed arbitrarily and the code is even encrypted. Malbolge works on a ternary number system, understands only 3 registers, and fills up the free memory of the interpreter with empty data. All that amounts to one hellish language, which is simply impossible to work with. Only 3 programs have been written in Malbolge – all with the help of a computer. Even the creator of the language could not write ‘Hello, World’ in Malbolge. It took 2 years of code selection in Lisp to produce it.',NULL,'2024-01-31',1),(3,'How to get a job as a web developer','So, you\'re thinking about getting a full-time or part-time job as a web developer.','You want to be the architect of the internet, designing and developing the online experience for users. Well, buckle up (put on your belt), because we\'re about to break down the steps to becoming a web developer and getting a job. Imagine you\'re behind the scenes of the Terminator movie, making sure the acting and editing work flawlessly.','post2.png','2024-01-31',2),(4,'Sideway selection in CSS','Today I will teach you how to sideways select in CSS','Hi folks!Today I would like to share with you this codepen I created in order to showcase a simple but really cool use for the recently introduced \"has()\" selector. If you hover with your mouse over any of the emojis, you\'ll notice that not only the hovered emoji smoothly pops up, but its previous and next siblings also get affected a little bit, creating a very pleasant effect.',NULL,'2024-01-31',3);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_tags`
--

DROP TABLE IF EXISTS `posts_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_tags` (
  `post` int NOT NULL,
  `tag` int NOT NULL,
  PRIMARY KEY (`post`,`tag`),
  KEY `tag_FOREIGN_idx` (`tag`),
  CONSTRAINT `post_FOREIGN` FOREIGN KEY (`post`) REFERENCES `posts` (`postId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_FOREIGN` FOREIGN KEY (`tag`) REFERENCES `tags` (`tagId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_tags`
--

LOCK TABLES `posts_tags` WRITE;
/*!40000 ALTER TABLE `posts_tags` DISABLE KEYS */;
INSERT INTO `posts_tags` VALUES (1,1),(3,1),(4,1),(2,2),(2,4),(1,5),(2,5),(4,5),(2,6),(3,6),(3,7),(3,8),(1,9);
/*!40000 ALTER TABLE `posts_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `tagId` int NOT NULL AUTO_INCREMENT,
  `tagName` varchar(30) NOT NULL,
  PRIMARY KEY (`tagId`),
  UNIQUE KEY `tagName_UNIQUE` (`tagName`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (4,'backend'),(3,'database'),(5,'frontend'),(6,'fullstack'),(2,'javascript'),(8,'news'),(7,'react'),(9,'tools'),(1,'webdev');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) NOT NULL,
  `userPassword` varchar(100) NOT NULL,
  `userImage` varchar(255) DEFAULT 'userprofile.jpg',
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userPassword_UNIQUE` (`userPassword`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Diogo Agostinho','P@$$w0rd','diogoagostinho.jpg'),(2,'Bernardo Generoso','Camelo123','camel.jpg'),(3,'John Doe','palavrapasse','userprofile.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-31 17:48:02
