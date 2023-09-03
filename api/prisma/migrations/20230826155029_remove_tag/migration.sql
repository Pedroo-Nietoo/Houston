/*
  Warnings:

  - You are about to drop the column `tag` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "tag";

-- DropEnum
DROP TYPE "TAG";
