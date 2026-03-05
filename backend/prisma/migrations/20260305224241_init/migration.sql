-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "ltree";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateEnum
CREATE TYPE "taxonomy_rank" AS ENUM ('kingdom', 'phylum', 'class_', 'order', 'family', 'genus', 'species');

-- CreateEnum
CREATE TYPE "nomenclature_status" AS ENUM ('accepted', 'synonym');

-- CreateEnum
CREATE TYPE "region_type" AS ENUM ('continent', 'country', 'region', 'province', 'locality');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('admin', 'editor', 'user');

-- CreateEnum
CREATE TYPE "contribution_type" AS ENUM ('suggest_edit', 'add_image', 'add_plant', 'report_error');

-- CreateEnum
CREATE TYPE "contribution_status" AS ENUM ('pending', 'approved', 'rejected');

-- CreateTable
CREATE TABLE "taxon" (
    "id" SERIAL NOT NULL,
    "canonical_name" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255),
    "vietnamese_name" VARCHAR(255),
    "rank" "taxonomy_rank" NOT NULL,
    "path" ltree,
    "nomenclature_status" "nomenclature_status" NOT NULL DEFAULT 'accepted',
    "description" TEXT,
    "morphology" JSONB,
    "ecology" JSONB,
    "phenology" JSONB,
    "usages" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "conservation_status" VARCHAR(20),
    "thumbnail_url" VARCHAR(500),
    "note" TEXT,
    "search_vector" tsvector,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "accepted_taxon_id" INTEGER,

    CONSTRAINT "taxon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common_name" (
    "id" UUID NOT NULL,
    "taxon_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "language" VARCHAR(10) NOT NULL,

    CONSTRAINT "common_name_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxon_image" (
    "id" UUID NOT NULL,
    "taxon_id" INTEGER NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "caption" VARCHAR(255),
    "source" VARCHAR(255),
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "taxon_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" "region_type" NOT NULL,
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "parent_id" UUID,

    CONSTRAINT "region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxon_distribution" (
    "taxon_id" INTEGER NOT NULL,
    "region_id" UUID NOT NULL,
    "is_native" BOOLEAN NOT NULL DEFAULT true,
    "note" TEXT,

    CONSTRAINT "taxon_distribution_pkey" PRIMARY KEY ("taxon_id","region_id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "display_name" VARCHAR(100),
    "avatar_url" VARCHAR(500),
    "role" "user_role" NOT NULL DEFAULT 'user',
    "refresh_token" VARCHAR(500),
    "refresh_token_exp" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookmark" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "taxon_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contribution" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "taxon_id" INTEGER NOT NULL,
    "type" "contribution_type" NOT NULL,
    "content" TEXT NOT NULL,
    "status" "contribution_status" NOT NULL DEFAULT 'pending',
    "reviewed_by" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewed_at" TIMESTAMPTZ,

    CONSTRAINT "contribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "taxon_canonical_name_author_key" ON "taxon"("canonical_name", "author");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "bookmark_user_id_taxon_id_key" ON "bookmark"("user_id", "taxon_id");

-- AddForeignKey
ALTER TABLE "taxon" ADD CONSTRAINT "taxon_accepted_taxon_id_fkey" FOREIGN KEY ("accepted_taxon_id") REFERENCES "taxon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common_name" ADD CONSTRAINT "common_name_taxon_id_fkey" FOREIGN KEY ("taxon_id") REFERENCES "taxon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxon_image" ADD CONSTRAINT "taxon_image_taxon_id_fkey" FOREIGN KEY ("taxon_id") REFERENCES "taxon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "region" ADD CONSTRAINT "region_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxon_distribution" ADD CONSTRAINT "taxon_distribution_taxon_id_fkey" FOREIGN KEY ("taxon_id") REFERENCES "taxon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxon_distribution" ADD CONSTRAINT "taxon_distribution_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_taxon_id_fkey" FOREIGN KEY ("taxon_id") REFERENCES "taxon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contribution" ADD CONSTRAINT "contribution_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contribution" ADD CONSTRAINT "contribution_reviewed_by_fkey" FOREIGN KEY ("reviewed_by") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contribution" ADD CONSTRAINT "contribution_taxon_id_fkey" FOREIGN KEY ("taxon_id") REFERENCES "taxon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
