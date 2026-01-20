-- CreateEnum
CREATE TYPE "ResultChoice" AS ENUM ('SUCCESS', 'SILLY', 'NEXT');

-- CreateTable
CREATE TABLE "Profile" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT,
    "styleId" TEXT,
    "doodlePath" TEXT NOT NULL,
    "renderPath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "characterId" UUID NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "verbId" TEXT NOT NULL,
    "resultChoice" "ResultChoice" NOT NULL,
    "sceneImagePath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageCard" (
    "id" UUID NOT NULL,
    "sceneId" UUID NOT NULL,
    "ko" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "LanguageCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeedLedger" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "delta" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeedLedger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Character_userId_createdAt_idx" ON "Character"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Scene_userId_createdAt_idx" ON "Scene"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Scene_characterId_createdAt_idx" ON "Scene"("characterId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageCard_sceneId_order_key" ON "LanguageCard"("sceneId", "order");

-- CreateIndex
CREATE INDEX "SeedLedger_userId_createdAt_idx" ON "SeedLedger"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageCard" ADD CONSTRAINT "LanguageCard_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeedLedger" ADD CONSTRAINT "SeedLedger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
