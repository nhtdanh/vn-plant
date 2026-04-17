import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Taxon: "Taxon";
    readonly TaxonName: "TaxonName";
    readonly Description: "Description";
    readonly TraitGroup: "TraitGroup";
    readonly Trait: "Trait";
    readonly TraitOption: "TraitOption";
    readonly TaxonTrait: "TaxonTrait";
    readonly TaxonImage: "TaxonImage";
    readonly CommonName: "CommonName";
    readonly TaxonExternalId: "TaxonExternalId";
    readonly Region: "Region";
    readonly TaxonDistribution: "TaxonDistribution";
    readonly User: "User";
    readonly Account: "Account";
    readonly Bookmark: "Bookmark";
    readonly Contribution: "Contribution";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TaxonScalarFieldEnum: {
    readonly id: "id";
    readonly publicId: "publicId";
    readonly canonicalName: "canonicalName";
    readonly author: "author";
    readonly vietnameseName: "vietnameseName";
    readonly rank: "rank";
    readonly plantGroup: "plantGroup";
    readonly parentId: "parentId";
    readonly nomenclatureStatus: "nomenclatureStatus";
    readonly description: "description";
    readonly morphology: "morphology";
    readonly ecology: "ecology";
    readonly phenology: "phenology";
    readonly usages: "usages";
    readonly conservationStatus: "conservationStatus";
    readonly thumbnailUrl: "thumbnailUrl";
    readonly note: "note";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaxonScalarFieldEnum = (typeof TaxonScalarFieldEnum)[keyof typeof TaxonScalarFieldEnum];
export declare const TaxonNameScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly normalizedName: "normalizedName";
    readonly author: "author";
    readonly status: "status";
    readonly source: "source";
    readonly verbatim: "verbatim";
    readonly taxonId: "taxonId";
    readonly createdAt: "createdAt";
};
export type TaxonNameScalarFieldEnum = (typeof TaxonNameScalarFieldEnum)[keyof typeof TaxonNameScalarFieldEnum];
export declare const DescriptionScalarFieldEnum: {
    readonly id: "id";
    readonly taxonId: "taxonId";
    readonly source: "source";
    readonly rawText: "rawText";
    readonly page: "page";
    readonly confidence: "confidence";
    readonly url: "url";
    readonly createdAt: "createdAt";
};
export type DescriptionScalarFieldEnum = (typeof DescriptionScalarFieldEnum)[keyof typeof DescriptionScalarFieldEnum];
export declare const TraitGroupScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly label: "label";
};
export type TraitGroupScalarFieldEnum = (typeof TraitGroupScalarFieldEnum)[keyof typeof TraitGroupScalarFieldEnum];
export declare const TraitScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly labelVi: "labelVi";
    readonly labelEn: "labelEn";
    readonly dataType: "dataType";
    readonly groupId: "groupId";
    readonly description: "description";
    readonly observability: "observability";
    readonly applicableIf: "applicableIf";
};
export type TraitScalarFieldEnum = (typeof TraitScalarFieldEnum)[keyof typeof TraitScalarFieldEnum];
export declare const TraitOptionScalarFieldEnum: {
    readonly id: "id";
    readonly traitId: "traitId";
    readonly code: "code";
    readonly labelVi: "labelVi";
    readonly labelEn: "labelEn";
    readonly rankOrder: "rankOrder";
};
export type TraitOptionScalarFieldEnum = (typeof TraitOptionScalarFieldEnum)[keyof typeof TraitOptionScalarFieldEnum];
export declare const TaxonTraitScalarFieldEnum: {
    readonly id: "id";
    readonly taxonId: "taxonId";
    readonly traitId: "traitId";
    readonly valueCode: "valueCode";
    readonly valueText: "valueText";
    readonly valueNumber: "valueNumber";
    readonly valueBoolean: "valueBoolean";
    readonly source: "source";
    readonly sourceRef: "sourceRef";
    readonly sourceText: "sourceText";
    readonly confidence: "confidence";
    readonly isPreferred: "isPreferred";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaxonTraitScalarFieldEnum = (typeof TaxonTraitScalarFieldEnum)[keyof typeof TaxonTraitScalarFieldEnum];
export declare const TaxonImageScalarFieldEnum: {
    readonly id: "id";
    readonly taxonId: "taxonId";
    readonly url: "url";
    readonly caption: "caption";
    readonly source: "source";
    readonly isPrimary: "isPrimary";
    readonly createdAt: "createdAt";
};
export type TaxonImageScalarFieldEnum = (typeof TaxonImageScalarFieldEnum)[keyof typeof TaxonImageScalarFieldEnum];
export declare const CommonNameScalarFieldEnum: {
    readonly id: "id";
    readonly taxonId: "taxonId";
    readonly name: "name";
    readonly language: "language";
    readonly isPrimary: "isPrimary";
    readonly regionNote: "regionNote";
};
export type CommonNameScalarFieldEnum = (typeof CommonNameScalarFieldEnum)[keyof typeof CommonNameScalarFieldEnum];
export declare const TaxonExternalIdScalarFieldEnum: {
    readonly id: "id";
    readonly taxonId: "taxonId";
    readonly source: "source";
    readonly externalId: "externalId";
    readonly taxonomySnapshotVersion: "taxonomySnapshotVersion";
};
export type TaxonExternalIdScalarFieldEnum = (typeof TaxonExternalIdScalarFieldEnum)[keyof typeof TaxonExternalIdScalarFieldEnum];
export declare const RegionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly parentId: "parentId";
};
export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum];
export declare const TaxonDistributionScalarFieldEnum: {
    readonly taxonId: "taxonId";
    readonly regionId: "regionId";
    readonly isNative: "isNative";
    readonly note: "note";
};
export type TaxonDistributionScalarFieldEnum = (typeof TaxonDistributionScalarFieldEnum)[keyof typeof TaxonDistributionScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly displayName: "displayName";
    readonly avatarUrl: "avatarUrl";
    readonly role: "role";
    readonly refreshToken: "refreshToken";
    readonly refreshTokenExp: "refreshTokenExp";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly provider: "provider";
    readonly providerAccountId: "providerAccountId";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const BookmarkScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly taxonId: "taxonId";
    readonly createdAt: "createdAt";
};
export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum];
export declare const ContributionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly taxonId: "taxonId";
    readonly type: "type";
    readonly content: "content";
    readonly status: "status";
    readonly reviewedBy: "reviewedBy";
    readonly createdAt: "createdAt";
    readonly reviewedAt: "reviewedAt";
};
export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map