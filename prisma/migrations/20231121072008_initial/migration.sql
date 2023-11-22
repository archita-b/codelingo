-- CreateTable
CREATE TABLE "Lesson" (
    "id" INTEGER NOT NULL,
    "lesson_name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");
