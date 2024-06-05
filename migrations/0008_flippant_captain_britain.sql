CREATE TABLE `Categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`text` varchar(15) NOT NULL,
	CONSTRAINT `Categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `Categories_text_unique` UNIQUE(`text`)
);
