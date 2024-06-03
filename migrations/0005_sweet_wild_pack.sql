ALTER TABLE `Answers` MODIFY COLUMN `text` varchar(500) NOT NULL;--> statement-breakpoint
ALTER TABLE `Questions` MODIFY COLUMN `text` varchar(500) NOT NULL;--> statement-breakpoint
ALTER TABLE `Tags` MODIFY COLUMN `text` varchar(500) NOT NULL;--> statement-breakpoint
ALTER TABLE `Answers` ADD CONSTRAINT `Answers_text_unique` UNIQUE(`text`);--> statement-breakpoint
ALTER TABLE `Questions` ADD CONSTRAINT `Questions_text_unique` UNIQUE(`text`);--> statement-breakpoint
ALTER TABLE `Tags` ADD CONSTRAINT `Tags_text_unique` UNIQUE(`text`);