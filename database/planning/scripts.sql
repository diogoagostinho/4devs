SELECT * FROM database_4devs.posts JOIN database_4devs.posts_tags ON posts.postId = posts_tags.post WHERE posts_tags.tag = 1;
SELECT * FROM database_4devs.tags JOIN database_4devs.posts_tags ON tags.tagId = posts_tags.tag WHERE posts_tags.post = 1;