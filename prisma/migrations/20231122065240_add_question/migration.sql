-- CreateTable
CREATE TABLE "QuestionType" (
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL,
    "question_type" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionType_type_key" ON "QuestionType"("type");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_question_type_fkey" FOREIGN KEY ("question_type") REFERENCES "QuestionType"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
