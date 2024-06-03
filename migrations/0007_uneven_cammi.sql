ALTER TABLE `QuestionTagMaps` MODIFY COLUMN `question_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `QuestionTagMaps` MODIFY COLUMN `tag_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `QuestionTagMaps` ADD CONSTRAINT `QuestionTagMaps_question_id_Questions_id_fk` FOREIGN KEY (`question_id`) REFERENCES `Questions`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `QuestionTagMaps` ADD CONSTRAINT `QuestionTagMaps_tag_id_Tags_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `Tags`(`id`) ON DELETE no action ON UPDATE no action;