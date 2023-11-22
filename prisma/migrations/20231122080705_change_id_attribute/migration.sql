-- AlterTable
CREATE SEQUENCE lesson_id_seq;
ALTER TABLE "Lesson" ALTER COLUMN "id" SET DEFAULT nextval('lesson_id_seq');
ALTER SEQUENCE lesson_id_seq OWNED BY "Lesson"."id";

-- AlterTable
CREATE SEQUENCE question_id_seq;
ALTER TABLE "Question" ALTER COLUMN "id" SET DEFAULT nextval('question_id_seq');
ALTER SEQUENCE question_id_seq OWNED BY "Question"."id";
