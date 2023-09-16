/*
  Warnings:

  - You are about to drop the column `nickname` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_nickname_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "nickname",
ADD COLUMN     "username" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
