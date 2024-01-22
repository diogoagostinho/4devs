
User {
	UserId int pk increments unique
	Username varchar(255)
	Password varchar(255)
	UserImage varchar(255) def(defaultUserImage)
}

Tag {
	TagId int pk increments unique
	TagName varchar(255)
}

Post {
	PostId int pk increments unique
	Title varchar(255)
	Description varchar(255)
	Content text
	PostImage varchar(255) null
	Date date
	PostUser int *> User.UserId
}

PostTags {
	PostIds int > Post.PostId
	TagIds int > Tag.TagId
}

