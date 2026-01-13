-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password_hash" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "full_name" TEXT,
    "avatar_url" TEXT,
    "refresh_token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phyla" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "vietnamese_name" TEXT,
    "scientific_name" TEXT,

    CONSTRAINT "phyla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "families" (
    "id" SERIAL NOT NULL,
    "phylum_id" INTEGER,
    "scientific_name" TEXT NOT NULL,
    "vietnamese_name" TEXT,
    "order_name" TEXT,
    "class_name" TEXT,

    CONSTRAINT "families_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genera" (
    "id" SERIAL NOT NULL,
    "family_id" INTEGER,
    "scientific_name" TEXT NOT NULL,

    CONSTRAINT "genera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "species" (
    "id" SERIAL NOT NULL,
    "genus_id" INTEGER,
    "scientific_name" TEXT NOT NULL,
    "scientific_synonyms" TEXT[],
    "vietnamese_names" TEXT[],
    "full_description" TEXT,
    "original_description" TEXT,
    "morphology" JSONB,
    "images" JSONB,
    "source_url" TEXT,
    "created_by" UUID,
    "updated_by" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "code" TEXT NOT NULL,
    "name_display" TEXT,
    "region" TEXT,
    "modern_mapping" JSONB,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "_LocationToSpecies" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LocationToSpecies_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "phyla_code_key" ON "phyla"("code");

-- CreateIndex
CREATE UNIQUE INDEX "families_scientific_name_key" ON "families"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "genera_scientific_name_key" ON "genera"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "species_scientific_name_key" ON "species"("scientific_name");

-- CreateIndex
CREATE INDEX "species_vietnamese_names_idx" ON "species" USING GIN ("vietnamese_names");

-- CreateIndex
CREATE INDEX "species_morphology_idx" ON "species" USING GIN ("morphology");

-- CreateIndex
CREATE INDEX "_LocationToSpecies_B_index" ON "_LocationToSpecies"("B");

-- AddForeignKey
ALTER TABLE "families" ADD CONSTRAINT "families_phylum_id_fkey" FOREIGN KEY ("phylum_id") REFERENCES "phyla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "genera" ADD CONSTRAINT "genera_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "families"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "species" ADD CONSTRAINT "species_genus_id_fkey" FOREIGN KEY ("genus_id") REFERENCES "genera"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "species" ADD CONSTRAINT "species_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "species" ADD CONSTRAINT "species_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToSpecies" ADD CONSTRAINT "_LocationToSpecies_A_fkey" FOREIGN KEY ("A") REFERENCES "locations"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToSpecies" ADD CONSTRAINT "_LocationToSpecies_B_fkey" FOREIGN KEY ("B") REFERENCES "species"("id") ON DELETE CASCADE ON UPDATE CASCADE;
