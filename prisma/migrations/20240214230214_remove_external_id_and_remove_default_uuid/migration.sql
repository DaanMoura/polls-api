/*
  Warnings:

  - You are about to drop the column `externalId` on the `Poll` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Poll_externalId_key";

-- DropIndex
DROP INDEX "Poll_id_externalId_key";

-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "externalId";
