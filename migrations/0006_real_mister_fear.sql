CREATE TABLE `QuestionAnswerMaps` (
	`id` int AUTO_INCREMENT NOT NULL,
	`answer_id` int NOT NULL,
	`question_id` int NOT NULL,
	CONSTRAINT `QuestionAnswerMaps_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `Answers` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Questions` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Tags` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `QuestionTagMaps` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `QuestionAnswerMaps` ADD CONSTRAINT `QuestionAnswerMaps_answer_id_Answers_id_fk` FOREIGN KEY (`answer_id`) REFERENCES `Answers`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `QuestionAnswerMaps` ADD CONSTRAINT `QuestionAnswerMaps_question_id_Questions_id_fk` FOREIGN KEY (`question_id`) REFERENCES `Questions`(`id`) ON DELETE no action ON UPDATE no action;