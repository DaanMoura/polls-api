/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `Poll` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,externalId]` on the table `Poll` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalId` to the `Poll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Poll" ADD COLUMN     "externalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Poll_externalId_key" ON "Poll"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Poll_id_externalId_key" ON "Poll"("id", "externalId");
