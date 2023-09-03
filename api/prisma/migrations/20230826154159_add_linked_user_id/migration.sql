/*
  Warnings:

  - Added the required column `linkedUserId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "linkedUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isManager" BOOLEAN NOT NULL DEFAULT false;
