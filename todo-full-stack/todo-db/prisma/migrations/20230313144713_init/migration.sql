/*
  Warnings:

  - The `done` column on the `ToDo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ToDo" DROP COLUMN "done",
ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;
