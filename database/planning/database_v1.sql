CREATE TABLE `Users` (
  `userId` int,
  `userName` varchar(30),
  `userPassword` varchar(90),
  `userImage` varchar(255)
);

CREATE TABLE `Posts` (
  `postId` int,
  `postTitle` varchar(60),
  `postDescription` varchar(120),
  `postContent` text,
  `postImage` varchar(255),
  `postDate` date,
  `postUser` int
);

CREATE TABLE `Tags` (
  `tagId` int,
  `tagName` varchar(30)
);

ALTER TABLE `Posts` ADD FOREIGN KEY (`postUser`) REFERENCES `Users` (`userId`);

CREATE TABLE `Posts_Tags` (
  `Posts_postId` int,
  `Tags_tagId` int,
  PRIMARY KEY (`Posts_postId`, `Tags_tagId`)
);

ALTER TABLE `Posts_Tags` ADD FOREIGN KEY (`Posts_postId`) REFERENCES `Posts` (`postId`);

ALTER TABLE `Posts_Tags` ADD FOREIGN KEY (`Tags_tagId`) REFERENCES `Tags` (`tagId`);

