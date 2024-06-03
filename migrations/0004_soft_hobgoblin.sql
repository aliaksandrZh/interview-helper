CREATE TABLE `QuestionTagMaps` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`question_id` int,
	`tag_id` int,
	CONSTRAINT `QuestionTagMaps_id` PRIMARY KEY(`id`)
);
