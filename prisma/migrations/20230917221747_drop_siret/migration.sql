/*
  Warnings:

  - You are about to drop the column `siret` on the `Company` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "iban" TEXT,
    "bic" TEXT,
    "address" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT,
    "billingEmail" TEXT NOT NULL,
    "planId" INTEGER,
    CONSTRAINT "Company_planId_fkey" FOREIGN KEY ("planId") REFERENCES "PlanType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("address", "bic", "billingEmail", "city", "country", "createdAt", "iban", "id", "name", "phone", "planId", "updatedAt", "zipCode") SELECT "address", "bic", "billingEmail", "city", "country", "createdAt", "iban", "id", "name", "phone", "planId", "updatedAt", "zipCode" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
