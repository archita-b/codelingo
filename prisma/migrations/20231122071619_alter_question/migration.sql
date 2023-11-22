/*
  Warnings:

  - Added the required column `correct_ans` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lesson_id` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "answers" TEXT[],
ADD COLUMN     "correct_ans" INTEGER NOT NULL,
ADD COLUMN     "lesson_id" INTEGER NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
