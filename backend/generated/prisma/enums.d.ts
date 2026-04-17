export declare const TaxonomyRank: {
    readonly kingdom: "kingdom";
    readonly phylum: "phylum";
    readonly class_: "class_";
    readonly order: "order";
    readonly family: "family";
    readonly genus: "genus";
    readonly species: "species";
};
export type TaxonomyRank = (typeof TaxonomyRank)[keyof typeof TaxonomyRank];
export declare const NomenclatureStatus: {
    readonly accepted: "accepted";
    readonly synonym: "synonym";
};
export type NomenclatureStatus = (typeof NomenclatureStatus)[keyof typeof NomenclatureStatus];
export declare const RegionType: {
    readonly continent: "continent";
    readonly country: "country";
    readonly region: "region";
    readonly province: "province";
    readonly locality: "locality";
};
export type RegionType = (typeof RegionType)[keyof typeof RegionType];
export declare const UserRole: {
    readonly admin: "admin";
    readonly editor: "editor";
    readonly user: "user";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const ContributionType: {
    readonly suggest_edit: "suggest_edit";
    readonly add_image: "add_image";
    readonly add_plant: "add_plant";
    readonly report_error: "report_error";
};
export type ContributionType = (typeof ContributionType)[keyof typeof ContributionType];
export declare const ContributionStatus: {
    readonly pending: "pending";
    readonly approved: "approved";
    readonly rejected: "rejected";
};
export type ContributionStatus = (typeof ContributionStatus)[keyof typeof ContributionStatus];
export declare const Observability: {
    readonly easy: "easy";
    readonly moderate: "moderate";
    readonly hard: "hard";
};
export type Observability = (typeof Observability)[keyof typeof Observability];
export declare const TraitDataType: {
    readonly option: "option";
    readonly number: "number";
    readonly boolean: "boolean";
    readonly text: "text";
};
export type TraitDataType = (typeof TraitDataType)[keyof typeof TraitDataType];
export declare const PlantGroup: {
    readonly angiosperm: "angiosperm";
    readonly gymnosperm: "gymnosperm";
    readonly fern: "fern";
};
export type PlantGroup = (typeof PlantGroup)[keyof typeof PlantGroup];
//# sourceMappingURL=enums.d.ts.map