-- CreateTable
CREATE TABLE "AdminData" (
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminData_email_key" ON "AdminData"("email");
