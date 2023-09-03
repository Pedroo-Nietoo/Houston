/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Habit_title_key" ON "Habit"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_title_key" ON "Activity"("title");

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
