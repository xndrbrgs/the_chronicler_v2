/*
  Warnings:

  - You are about to drop the column `userId` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_userId_fkey";

-- DropIndex
DROP INDEX "books_userId_key";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "userId";
