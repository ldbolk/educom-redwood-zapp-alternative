/*
  Warnings:

  - You are about to drop the `vasteTaken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "vasteTaken";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_KlantToTaak" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_KlantToTaak_A_fkey" FOREIGN KEY ("A") REFERENCES "Klant" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_KlantToTaak_B_fkey" FOREIGN KEY ("B") REFERENCES "Taak" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_KlantToTaak_AB_unique" ON "_KlantToTaak"("A", "B");

-- CreateIndex
CREATE INDEX "_KlantToTaak_B_index" ON "_KlantToTaak"("B");
