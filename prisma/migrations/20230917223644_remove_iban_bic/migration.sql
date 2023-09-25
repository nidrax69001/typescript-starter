/*
  Warnings:

  - You are about to drop the column `bic` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `iban` on the `Company` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "country" TEXT NOT NULL,
    "phone" TEXT,
    "billingEmail" TEXT NOT NULL,
    "planId" INTEGER,
    CONSTRAINT "Company_planId_fkey" FOREIGN KEY ("planId") REFERENCES "PlanType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("address", "billingEmail", "city", "country", "createdAt", "id", "name", "phone", "planId", "state", "updatedAt", "zipCode") SELECT "address", "billingEmail", "city", "country", "createdAt", "id", "name", "phone", "planId", "state", "updatedAt", "zipCode" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
