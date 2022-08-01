/*
  Warnings:

  - You are about to drop the `_KlantToTaak` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_KlantToTaak";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "vasteTaken" (
    "klantId" INTEGER NOT NULL,
    "taakId" INTEGER NOT NULL,

    PRIMARY KEY ("klantId", "taakId"),
    CONSTRAINT "vasteTaken_klantId_fkey" FOREIGN KEY ("klantId") REFERENCES "Klant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vasteTaken_taakId_fkey" FOREIGN KEY ("taakId") REFERENCES "Taak" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
