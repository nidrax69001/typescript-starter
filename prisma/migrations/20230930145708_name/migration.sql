/*
  Warnings:

  - You are about to drop the `InvoiceAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `state` on the `Company` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "InvoiceAddress";
PRAGMA foreign_keys=on;

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
    "iban" TEXT,
    "country" TEXT NOT NULL,
    "phone" TEXT,
    "billingEmail" TEXT,
    "planId" INTEGER,
    CONSTRAINT "Company_planId_fkey" FOREIGN KEY ("planId") REFERENCES "PlanType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("address", "billingEmail", "city", "country", "createdAt", "id", "name", "phone", "planId", "updatedAt", "zipCode") SELECT "address", "billingEmail", "city", "country", "createdAt", "id", "name", "phone", "planId", "updatedAt", "zipCode" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE TABLE "new_Invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "totalVat" REAL NOT NULL,
    "vatRate" REAL NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "statusId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "companyToId" INTEGER,
    "url" TEXT,
    CONSTRAINT "Invoice_companyToId_fkey" FOREIGN KEY ("companyToId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Invoice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invoice_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "InvoiceStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Invoice" ("companyId", "createdAt", "dueDate", "id", "number", "statusId", "title", "total", "totalVat", "updatedAt", "url", "vatRate") SELECT "companyId", "createdAt", "dueDate", "id", "number", "statusId", "title", "total", "totalVat", "updatedAt", "url", "vatRate" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
CREATE UNIQUE INDEX "Invoice_number_key" ON "Invoice"("number");
CREATE UNIQUE INDEX "Invoice_url_key" ON "Invoice"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
