CREATE TABLE `User`(
    `UserId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `UserImage` VARCHAR(255) NULL DEFAULT 'defaultUserImage'
);
ALTER TABLE
    `User` ADD PRIMARY KEY `user_userid_primary`(`UserId`);
CREATE TABLE `Post`(
    `PostId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(255) NOT NULL,
    `Description` VARCHAR(255) NOT NULL,
    `Content` TEXT NOT NULL,
    `PostImage` VARCHAR(255) NULL,
    `PostUser` BIGINT NOT NULL
);
ALTER TABLE
    `Post` ADD PRIMARY KEY `post_postid_primary`(`PostId`);
CREATE TABLE `Tag`(
    `TagId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `TagName` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Tag` ADD PRIMARY KEY `tag_tagid_primary`(`TagId`);
CREATE TABLE `PostTags`(
    `PostIds` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `TagIds` BIGINT NOT NULL
);
ALTER TABLE
    `User` ADD CONSTRAINT `user_userimage_foreign` FOREIGN KEY(`UserImage`) REFERENCES `Post`(`PostUser`);
ALTER TABLE
    `PostTags` ADD CONSTRAINT `posttags_postids_foreign` FOREIGN KEY(`PostIds`) REFERENCES `Post`(`PostId`);
ALTER TABLE
    `PostTags` ADD CONSTRAINT `posttags_tagids_foreign` FOREIGN KEY(`TagIds`) REFERENCES `Tag`(`TagId`);