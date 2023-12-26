-- CreateTable
CREATE TABLE "LessonCompletion" (
    "user_email" TEXT NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "is_completed" BOOLEAN NOT NULL,

    CONSTRAINT "LessonCompletion_pkey" PRIMARY KEY ("user_email","lesson_id")
);

-- AddForeignKey
ALTER TABLE "LessonCompletion" ADD CONSTRAINT "LessonCompletion_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
