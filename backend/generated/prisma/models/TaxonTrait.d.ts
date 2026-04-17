import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TaxonTrait
 *
 */
export type TaxonTraitModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxonTraitPayload>;
export type AggregateTaxonTrait = {
    _count: TaxonTraitCountAggregateOutputType | null;
    _avg: TaxonTraitAvgAggregateOutputType | null;
    _sum: TaxonTraitSumAggregateOutputType | null;
    _min: TaxonTraitMinAggregateOutputType | null;
    _max: TaxonTraitMaxAggregateOutputType | null;
};
export type TaxonTraitAvgAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
    traitId: number | null;
    valueNumber: runtime.Decimal | null;
    confidence: number | null;
};
export type TaxonTraitSumAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
    traitId: number | null;
    valueNumber: runtime.Decimal | null;
    confidence: number | null;
};
export type TaxonTraitMinAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
    traitId: number | null;
    valueCode: string | null;
    valueText: string | null;
    valueNumber: runtime.Decimal | null;
    valueBoolean: boolean | null;
    source: string | null;
    sourceRef: string | null;
    sourceText: string | null;
    confidence: number | null;
    isPreferred: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaxonTraitMaxAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
    traitId: number | null;
    valueCode: string | null;
    valueText: string | null;
    valueNumber: runtime.Decimal | null;
    valueBoolean: boolean | null;
    source: string | null;
    sourceRef: string | null;
    sourceText: string | null;
    confidence: number | null;
    isPreferred: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaxonTraitCountAggregateOutputType = {
    id: number;
    taxonId: number;
    traitId: number;
    valueCode: number;
    valueText: number;
    valueNumber: number;
    valueBoolean: number;
    source: number;
    sourceRef: number;
    sourceText: number;
    confidence: number;
    isPreferred: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaxonTraitAvgAggregateInputType = {
    id?: true;
    taxonId?: true;
    traitId?: true;
    valueNumber?: true;
    confidence?: true;
};
export type TaxonTraitSumAggregateInputType = {
    id?: true;
    taxonId?: true;
    traitId?: true;
    valueNumber?: true;
    confidence?: true;
};
export type TaxonTraitMinAggregateInputType = {
    id?: true;
    taxonId?: true;
    traitId?: true;
    valueCode?: true;
    valueText?: true;
    valueNumber?: true;
    valueBoolean?: true;
    source?: true;
    sourceRef?: true;
    sourceText?: true;
    confidence?: true;
    isPreferred?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaxonTraitMaxAggregateInputType = {
    id?: true;
    taxonId?: true;
    traitId?: true;
    valueCode?: true;
    valueText?: true;
    valueNumber?: true;
    valueBoolean?: true;
    source?: true;
    sourceRef?: true;
    sourceText?: true;
    confidence?: true;
    isPreferred?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaxonTraitCountAggregateInputType = {
    id?: true;
    taxonId?: true;
    traitId?: true;
    valueCode?: true;
    valueText?: true;
    valueNumber?: true;
    valueBoolean?: true;
    source?: true;
    sourceRef?: true;
    sourceText?: true;
    confidence?: true;
    isPreferred?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaxonTraitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonTrait to aggregate.
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonTraits to fetch.
     */
    orderBy?: Prisma.TaxonTraitOrderByWithRelationInput | Prisma.TaxonTraitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TaxonTraitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonTraits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonTraits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TaxonTraits
    **/
    _count?: true | TaxonTraitCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TaxonTraitAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TaxonTraitSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TaxonTraitMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TaxonTraitMaxAggregateInputType;
};
export type GetTaxonTraitAggregateType<T extends TaxonTraitAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxonTrait]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxonTrait[P]> : Prisma.GetScalarType<T[P], AggregateTaxonTrait[P]>;
};
export type TaxonTraitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxonTraitWhereInput;
    orderBy?: Prisma.TaxonTraitOrderByWithAggregationInput | Prisma.TaxonTraitOrderByWithAggregationInput[];
    by: Prisma.TaxonTraitScalarFieldEnum[] | Prisma.TaxonTraitScalarFieldEnum;
    having?: Prisma.TaxonTraitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxonTraitCountAggregateInputType | true;
    _avg?: TaxonTraitAvgAggregateInputType;
    _sum?: TaxonTraitSumAggregateInputType;
    _min?: TaxonTraitMinAggregateInputType;
    _max?: TaxonTraitMaxAggregateInputType;
};
export type TaxonTraitGroupByOutputType = {
    id: number;
    taxonId: number;
    traitId: number;
    valueCode: string | null;
    valueText: string | null;
    valueNumber: runtime.Decimal | null;
    valueBoolean: boolean | null;
    source: string | null;
    sourceRef: string | null;
    sourceText: string | null;
    confidence: number | null;
    isPreferred: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TaxonTraitCountAggregateOutputType | null;
    _avg: TaxonTraitAvgAggregateOutputType | null;
    _sum: TaxonTraitSumAggregateOutputType | null;
    _min: TaxonTraitMinAggregateOutputType | null;
    _max: TaxonTraitMaxAggregateOutputType | null;
};
type GetTaxonTraitGroupByPayload<T extends TaxonTraitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxonTraitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxonTraitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxonTraitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxonTraitGroupByOutputType[P]>;
}>>;
export type TaxonTraitWhereInput = {
    AND?: Prisma.TaxonTraitWhereInput | Prisma.TaxonTraitWhereInput[];
    OR?: Prisma.TaxonTraitWhereInput[];
    NOT?: Prisma.TaxonTraitWhereInput | Prisma.TaxonTraitWhereInput[];
    id?: Prisma.IntFilter<"TaxonTrait"> | number;
    taxonId?: Prisma.IntFilter<"TaxonTrait"> | number;
    traitId?: Prisma.IntFilter<"TaxonTrait"> | number;
    valueCode?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    valueText?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    valueNumber?: Prisma.DecimalNullableFilter<"TaxonTrait"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.BoolNullableFilter<"TaxonTrait"> | boolean | null;
    source?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    sourceRef?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    sourceText?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"TaxonTrait"> | number | null;
    isPreferred?: Prisma.BoolFilter<"TaxonTrait"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TaxonTrait"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaxonTrait"> | Date | string;
    taxon?: Prisma.XOR<Prisma.TaxonScalarRelationFilter, Prisma.TaxonWhereInput>;
    trait?: Prisma.XOR<Prisma.TraitScalarRelationFilter, Prisma.TraitWhereInput>;
};
export type TaxonTraitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    valueText?: Prisma.SortOrderInput | Prisma.SortOrder;
    valueNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    valueBoolean?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceText?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPreferred?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    taxon?: Prisma.TaxonOrderByWithRelationInput;
    trait?: Prisma.TraitOrderByWithRelationInput;
};
export type TaxonTraitWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TaxonTraitWhereInput | Prisma.TaxonTraitWhereInput[];
    OR?: Prisma.TaxonTraitWhereInput[];
    NOT?: Prisma.TaxonTraitWhereInput | Prisma.TaxonTraitWhereInput[];
    taxonId?: Prisma.IntFilter<"TaxonTrait"> | number;
    traitId?: Prisma.IntFilter<"TaxonTrait"> | number;
    valueCode?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    valueText?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    valueNumber?: Prisma.DecimalNullableFilter<"TaxonTrait"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.BoolNullableFilter<"TaxonTrait"> | boolean | null;
    source?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    sourceRef?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    sourceText?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"TaxonTrait"> | number | null;
    isPreferred?: Prisma.BoolFilter<"TaxonTrait"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TaxonTrait"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaxonTrait"> | Date | string;
    taxon?: Prisma.XOR<Prisma.TaxonScalarRelationFilter, Prisma.TaxonWhereInput>;
    trait?: Prisma.XOR<Prisma.TraitScalarRelationFilter, Prisma.TraitWhereInput>;
}, "id">;
export type TaxonTraitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    valueText?: Prisma.SortOrderInput | Prisma.SortOrder;
    valueNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    valueBoolean?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceText?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPreferred?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaxonTraitCountOrderByAggregateInput;
    _avg?: Prisma.TaxonTraitAvgOrderByAggregateInput;
    _max?: Prisma.TaxonTraitMaxOrderByAggregateInput;
    _min?: Prisma.TaxonTraitMinOrderByAggregateInput;
    _sum?: Prisma.TaxonTraitSumOrderByAggregateInput;
};
export type TaxonTraitScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxonTraitScalarWhereWithAggregatesInput | Prisma.TaxonTraitScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxonTraitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxonTraitScalarWhereWithAggregatesInput | Prisma.TaxonTraitScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TaxonTrait"> | number;
    taxonId?: Prisma.IntWithAggregatesFilter<"TaxonTrait"> | number;
    traitId?: Prisma.IntWithAggregatesFilter<"TaxonTrait"> | number;
    valueCode?: Prisma.StringNullableWithAggregatesFilter<"TaxonTrait"> | string | null;
    valueText?: Prisma.StringNullableWithAggregatesFilter<"TaxonTrait"> | string | null;
    valueNumber?: Prisma.DecimalNullableWithAggregatesFilter<"TaxonTrait"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.BoolNullableWithAggregatesFilter<"TaxonTrait"> | boolean | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"TaxonTrait"> | string | null;
    sourceRef?: Prisma.StringNullableWithAggregatesFilter<"TaxonTrait"> | string | null;
    sourceText?: Prisma.StringNullableWithAggregatesFilter<"TaxonTrait"> | string | null;
    confidence?: Prisma.FloatNullableWithAggregatesFilter<"TaxonTrait"> | number | null;
    isPreferred?: Prisma.BoolWithAggregatesFilter<"TaxonTrait"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaxonTrait"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TaxonTrait"> | Date | string;
};
export type TaxonTraitCreateInput = {
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    taxon: Prisma.TaxonCreateNestedOneWithoutTraitsInput;
    trait: Prisma.TraitCreateNestedOneWithoutTaxonTraitsInput;
};
export type TaxonTraitUncheckedCreateInput = {
    id?: number;
    taxonId: number;
    traitId: number;
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaxonTraitUpdateInput = {
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxon?: Prisma.TaxonUpdateOneRequiredWithoutTraitsNestedInput;
    trait?: Prisma.TraitUpdateOneRequiredWithoutTaxonTraitsNestedInput;
};
export type TaxonTraitUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    traitId?: Prisma.IntFieldUpdateOperationsInput | number;
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitCreateManyInput = {
    id?: number;
    taxonId: number;
    traitId: number;
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaxonTraitUpdateManyMutationInput = {
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    traitId?: Prisma.IntFieldUpdateOperationsInput | number;
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitListRelationFilter = {
    every?: Prisma.TaxonTraitWhereInput;
    some?: Prisma.TaxonTraitWhereInput;
    none?: Prisma.TaxonTraitWhereInput;
};
export type TaxonTraitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaxonTraitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueCode?: Prisma.SortOrder;
    valueText?: Prisma.SortOrder;
    valueNumber?: Prisma.SortOrder;
    valueBoolean?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    sourceText?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    isPreferred?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaxonTraitAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueNumber?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type TaxonTraitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueCode?: Prisma.SortOrder;
    valueText?: Prisma.SortOrder;
    valueNumber?: Prisma.SortOrder;
    valueBoolean?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    sourceText?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    isPreferred?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaxonTraitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueCode?: Prisma.SortOrder;
    valueText?: Prisma.SortOrder;
    valueNumber?: Prisma.SortOrder;
    valueBoolean?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    sourceText?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    isPreferred?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaxonTraitSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    traitId?: Prisma.SortOrder;
    valueNumber?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type TaxonTraitCreateNestedManyWithoutTaxonInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTaxonInput, Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput> | Prisma.TaxonTraitCreateWithoutTaxonInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput | Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput[];
    createMany?: Prisma.TaxonTraitCreateManyTaxonInputEnvelope;
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
};
export type TaxonTraitUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTaxonInput, Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput> | Prisma.TaxonTraitCreateWithoutTaxonInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput | Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput[];
    createMany?: Prisma.TaxonTraitCreateManyTaxonInputEnvelope;
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
};
export type TaxonTraitUpdateManyWithoutTaxonNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTaxonInput, Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput> | Prisma.TaxonTraitCreateWithoutTaxonInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput | Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput[];
    upsert?: Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTaxonInput | Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTaxonInput[];
    createMany?: Prisma.TaxonTraitCreateManyTaxonInputEnvelope;
    set?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    disconnect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    delete?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    update?: Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTaxonInput | Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTaxonInput[];
    updateMany?: Prisma.TaxonTraitUpdateManyWithWhereWithoutTaxonInput | Prisma.TaxonTraitUpdateManyWithWhereWithoutTaxonInput[];
    deleteMany?: Prisma.TaxonTraitScalarWhereInput | Prisma.TaxonTraitScalarWhereInput[];
};
export type TaxonTraitUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTaxonInput, Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput> | Prisma.TaxonTraitCreateWithoutTaxonInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput | Prisma.TaxonTraitCreateOrConnectWithoutTaxonInput[];
    upsert?: Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTaxonInput | Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTaxonInput[];
    createMany?: Prisma.TaxonTraitCreateManyTaxonInputEnvelope;
    set?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    disconnect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    delete?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    update?: Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTaxonInput | Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTaxonInput[];
    updateMany?: Prisma.TaxonTraitUpdateManyWithWhereWithoutTaxonInput | Prisma.TaxonTraitUpdateManyWithWhereWithoutTaxonInput[];
    deleteMany?: Prisma.TaxonTraitScalarWhereInput | Prisma.TaxonTraitScalarWhereInput[];
};
export type TaxonTraitCreateNestedManyWithoutTraitInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTraitInput, Prisma.TaxonTraitUncheckedCreateWithoutTraitInput> | Prisma.TaxonTraitCreateWithoutTraitInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTraitInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTraitInput | Prisma.TaxonTraitCreateOrConnectWithoutTraitInput[];
    createMany?: Prisma.TaxonTraitCreateManyTraitInputEnvelope;
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
};
export type TaxonTraitUncheckedCreateNestedManyWithoutTraitInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTraitInput, Prisma.TaxonTraitUncheckedCreateWithoutTraitInput> | Prisma.TaxonTraitCreateWithoutTraitInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTraitInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTraitInput | Prisma.TaxonTraitCreateOrConnectWithoutTraitInput[];
    createMany?: Prisma.TaxonTraitCreateManyTraitInputEnvelope;
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
};
export type TaxonTraitUpdateManyWithoutTraitNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTraitInput, Prisma.TaxonTraitUncheckedCreateWithoutTraitInput> | Prisma.TaxonTraitCreateWithoutTraitInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTraitInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTraitInput | Prisma.TaxonTraitCreateOrConnectWithoutTraitInput[];
    upsert?: Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTraitInput | Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTraitInput[];
    createMany?: Prisma.TaxonTraitCreateManyTraitInputEnvelope;
    set?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    disconnect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    delete?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    update?: Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTraitInput | Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTraitInput[];
    updateMany?: Prisma.TaxonTraitUpdateManyWithWhereWithoutTraitInput | Prisma.TaxonTraitUpdateManyWithWhereWithoutTraitInput[];
    deleteMany?: Prisma.TaxonTraitScalarWhereInput | Prisma.TaxonTraitScalarWhereInput[];
};
export type TaxonTraitUncheckedUpdateManyWithoutTraitNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTraitInput, Prisma.TaxonTraitUncheckedCreateWithoutTraitInput> | Prisma.TaxonTraitCreateWithoutTraitInput[] | Prisma.TaxonTraitUncheckedCreateWithoutTraitInput[];
    connectOrCreate?: Prisma.TaxonTraitCreateOrConnectWithoutTraitInput | Prisma.TaxonTraitCreateOrConnectWithoutTraitInput[];
    upsert?: Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTraitInput | Prisma.TaxonTraitUpsertWithWhereUniqueWithoutTraitInput[];
    createMany?: Prisma.TaxonTraitCreateManyTraitInputEnvelope;
    set?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    disconnect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    delete?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    connect?: Prisma.TaxonTraitWhereUniqueInput | Prisma.TaxonTraitWhereUniqueInput[];
    update?: Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTraitInput | Prisma.TaxonTraitUpdateWithWhereUniqueWithoutTraitInput[];
    updateMany?: Prisma.TaxonTraitUpdateManyWithWhereWithoutTraitInput | Prisma.TaxonTraitUpdateManyWithWhereWithoutTraitInput[];
    deleteMany?: Prisma.TaxonTraitScalarWhereInput | Prisma.TaxonTraitScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type TaxonTraitCreateWithoutTaxonInput = {
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trait: Prisma.TraitCreateNestedOneWithoutTaxonTraitsInput;
};
export type TaxonTraitUncheckedCreateWithoutTaxonInput = {
    id?: number;
    traitId: number;
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaxonTraitCreateOrConnectWithoutTaxonInput = {
    where: Prisma.TaxonTraitWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTaxonInput, Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput>;
};
export type TaxonTraitCreateManyTaxonInputEnvelope = {
    data: Prisma.TaxonTraitCreateManyTaxonInput | Prisma.TaxonTraitCreateManyTaxonInput[];
    skipDuplicates?: boolean;
};
export type TaxonTraitUpsertWithWhereUniqueWithoutTaxonInput = {
    where: Prisma.TaxonTraitWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxonTraitUpdateWithoutTaxonInput, Prisma.TaxonTraitUncheckedUpdateWithoutTaxonInput>;
    create: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTaxonInput, Prisma.TaxonTraitUncheckedCreateWithoutTaxonInput>;
};
export type TaxonTraitUpdateWithWhereUniqueWithoutTaxonInput = {
    where: Prisma.TaxonTraitWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxonTraitUpdateWithoutTaxonInput, Prisma.TaxonTraitUncheckedUpdateWithoutTaxonInput>;
};
export type TaxonTraitUpdateManyWithWhereWithoutTaxonInput = {
    where: Prisma.TaxonTraitScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxonTraitUpdateManyMutationInput, Prisma.TaxonTraitUncheckedUpdateManyWithoutTaxonInput>;
};
export type TaxonTraitScalarWhereInput = {
    AND?: Prisma.TaxonTraitScalarWhereInput | Prisma.TaxonTraitScalarWhereInput[];
    OR?: Prisma.TaxonTraitScalarWhereInput[];
    NOT?: Prisma.TaxonTraitScalarWhereInput | Prisma.TaxonTraitScalarWhereInput[];
    id?: Prisma.IntFilter<"TaxonTrait"> | number;
    taxonId?: Prisma.IntFilter<"TaxonTrait"> | number;
    traitId?: Prisma.IntFilter<"TaxonTrait"> | number;
    valueCode?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    valueText?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    valueNumber?: Prisma.DecimalNullableFilter<"TaxonTrait"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.BoolNullableFilter<"TaxonTrait"> | boolean | null;
    source?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    sourceRef?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    sourceText?: Prisma.StringNullableFilter<"TaxonTrait"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"TaxonTrait"> | number | null;
    isPreferred?: Prisma.BoolFilter<"TaxonTrait"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TaxonTrait"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaxonTrait"> | Date | string;
};
export type TaxonTraitCreateWithoutTraitInput = {
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    taxon: Prisma.TaxonCreateNestedOneWithoutTraitsInput;
};
export type TaxonTraitUncheckedCreateWithoutTraitInput = {
    id?: number;
    taxonId: number;
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaxonTraitCreateOrConnectWithoutTraitInput = {
    where: Prisma.TaxonTraitWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTraitInput, Prisma.TaxonTraitUncheckedCreateWithoutTraitInput>;
};
export type TaxonTraitCreateManyTraitInputEnvelope = {
    data: Prisma.TaxonTraitCreateManyTraitInput | Prisma.TaxonTraitCreateManyTraitInput[];
    skipDuplicates?: boolean;
};
export type TaxonTraitUpsertWithWhereUniqueWithoutTraitInput = {
    where: Prisma.TaxonTraitWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxonTraitUpdateWithoutTraitInput, Prisma.TaxonTraitUncheckedUpdateWithoutTraitInput>;
    create: Prisma.XOR<Prisma.TaxonTraitCreateWithoutTraitInput, Prisma.TaxonTraitUncheckedCreateWithoutTraitInput>;
};
export type TaxonTraitUpdateWithWhereUniqueWithoutTraitInput = {
    where: Prisma.TaxonTraitWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxonTraitUpdateWithoutTraitInput, Prisma.TaxonTraitUncheckedUpdateWithoutTraitInput>;
};
export type TaxonTraitUpdateManyWithWhereWithoutTraitInput = {
    where: Prisma.TaxonTraitScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxonTraitUpdateManyMutationInput, Prisma.TaxonTraitUncheckedUpdateManyWithoutTraitInput>;
};
export type TaxonTraitCreateManyTaxonInput = {
    id?: number;
    traitId: number;
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaxonTraitUpdateWithoutTaxonInput = {
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trait?: Prisma.TraitUpdateOneRequiredWithoutTaxonTraitsNestedInput;
};
export type TaxonTraitUncheckedUpdateWithoutTaxonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    traitId?: Prisma.IntFieldUpdateOperationsInput | number;
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitUncheckedUpdateManyWithoutTaxonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    traitId?: Prisma.IntFieldUpdateOperationsInput | number;
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitCreateManyTraitInput = {
    id?: number;
    taxonId: number;
    valueCode?: string | null;
    valueText?: string | null;
    valueNumber?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: boolean | null;
    source?: string | null;
    sourceRef?: string | null;
    sourceText?: string | null;
    confidence?: number | null;
    isPreferred?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaxonTraitUpdateWithoutTraitInput = {
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxon?: Prisma.TaxonUpdateOneRequiredWithoutTraitsNestedInput;
};
export type TaxonTraitUncheckedUpdateWithoutTraitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitUncheckedUpdateManyWithoutTraitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    valueCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valueNumber?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valueBoolean?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isPreferred?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonTraitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    traitId?: boolean;
    valueCode?: boolean;
    valueText?: boolean;
    valueNumber?: boolean;
    valueBoolean?: boolean;
    source?: boolean;
    sourceRef?: boolean;
    sourceText?: boolean;
    confidence?: boolean;
    isPreferred?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
    trait?: boolean | Prisma.TraitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonTrait"]>;
export type TaxonTraitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    traitId?: boolean;
    valueCode?: boolean;
    valueText?: boolean;
    valueNumber?: boolean;
    valueBoolean?: boolean;
    source?: boolean;
    sourceRef?: boolean;
    sourceText?: boolean;
    confidence?: boolean;
    isPreferred?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
    trait?: boolean | Prisma.TraitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonTrait"]>;
export type TaxonTraitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    traitId?: boolean;
    valueCode?: boolean;
    valueText?: boolean;
    valueNumber?: boolean;
    valueBoolean?: boolean;
    source?: boolean;
    sourceRef?: boolean;
    sourceText?: boolean;
    confidence?: boolean;
    isPreferred?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
    trait?: boolean | Prisma.TraitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonTrait"]>;
export type TaxonTraitSelectScalar = {
    id?: boolean;
    taxonId?: boolean;
    traitId?: boolean;
    valueCode?: boolean;
    valueText?: boolean;
    valueNumber?: boolean;
    valueBoolean?: boolean;
    source?: boolean;
    sourceRef?: boolean;
    sourceText?: boolean;
    confidence?: boolean;
    isPreferred?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaxonTraitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxonId" | "traitId" | "valueCode" | "valueText" | "valueNumber" | "valueBoolean" | "source" | "sourceRef" | "sourceText" | "confidence" | "isPreferred" | "createdAt" | "updatedAt", ExtArgs["result"]["taxonTrait"]>;
export type TaxonTraitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
    trait?: boolean | Prisma.TraitDefaultArgs<ExtArgs>;
};
export type TaxonTraitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
    trait?: boolean | Prisma.TraitDefaultArgs<ExtArgs>;
};
export type TaxonTraitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
    trait?: boolean | Prisma.TraitDefaultArgs<ExtArgs>;
};
export type $TaxonTraitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxonTrait";
    objects: {
        taxon: Prisma.$TaxonPayload<ExtArgs>;
        trait: Prisma.$TraitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        taxonId: number;
        traitId: number;
        valueCode: string | null;
        valueText: string | null;
        valueNumber: runtime.Decimal | null;
        valueBoolean: boolean | null;
        source: string | null;
        sourceRef: string | null;
        sourceText: string | null;
        confidence: number | null;
        isPreferred: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["taxonTrait"]>;
    composites: {};
};
export type TaxonTraitGetPayload<S extends boolean | null | undefined | TaxonTraitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload, S>;
export type TaxonTraitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxonTraitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxonTraitCountAggregateInputType | true;
};
export interface TaxonTraitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxonTrait'];
        meta: {
            name: 'TaxonTrait';
        };
    };
    /**
     * Find zero or one TaxonTrait that matches the filter.
     * @param {TaxonTraitFindUniqueArgs} args - Arguments to find a TaxonTrait
     * @example
     * // Get one TaxonTrait
     * const taxonTrait = await prisma.taxonTrait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonTraitFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxonTraitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TaxonTrait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonTraitFindUniqueOrThrowArgs} args - Arguments to find a TaxonTrait
     * @example
     * // Get one TaxonTrait
     * const taxonTrait = await prisma.taxonTrait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonTraitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxonTraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxonTrait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitFindFirstArgs} args - Arguments to find a TaxonTrait
     * @example
     * // Get one TaxonTrait
     * const taxonTrait = await prisma.taxonTrait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonTraitFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxonTraitFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxonTrait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitFindFirstOrThrowArgs} args - Arguments to find a TaxonTrait
     * @example
     * // Get one TaxonTrait
     * const taxonTrait = await prisma.taxonTrait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonTraitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxonTraitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TaxonTraits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonTraits
     * const taxonTraits = await prisma.taxonTrait.findMany()
     *
     * // Get first 10 TaxonTraits
     * const taxonTraits = await prisma.taxonTrait.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taxonTraitWithIdOnly = await prisma.taxonTrait.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaxonTraitFindManyArgs>(args?: Prisma.SelectSubset<T, TaxonTraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TaxonTrait.
     * @param {TaxonTraitCreateArgs} args - Arguments to create a TaxonTrait.
     * @example
     * // Create one TaxonTrait
     * const TaxonTrait = await prisma.taxonTrait.create({
     *   data: {
     *     // ... data to create a TaxonTrait
     *   }
     * })
     *
     */
    create<T extends TaxonTraitCreateArgs>(args: Prisma.SelectSubset<T, TaxonTraitCreateArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TaxonTraits.
     * @param {TaxonTraitCreateManyArgs} args - Arguments to create many TaxonTraits.
     * @example
     * // Create many TaxonTraits
     * const taxonTrait = await prisma.taxonTrait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaxonTraitCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxonTraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TaxonTraits and returns the data saved in the database.
     * @param {TaxonTraitCreateManyAndReturnArgs} args - Arguments to create many TaxonTraits.
     * @example
     * // Create many TaxonTraits
     * const taxonTrait = await prisma.taxonTrait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TaxonTraits and only return the `id`
     * const taxonTraitWithIdOnly = await prisma.taxonTrait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaxonTraitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxonTraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TaxonTrait.
     * @param {TaxonTraitDeleteArgs} args - Arguments to delete one TaxonTrait.
     * @example
     * // Delete one TaxonTrait
     * const TaxonTrait = await prisma.taxonTrait.delete({
     *   where: {
     *     // ... filter to delete one TaxonTrait
     *   }
     * })
     *
     */
    delete<T extends TaxonTraitDeleteArgs>(args: Prisma.SelectSubset<T, TaxonTraitDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TaxonTrait.
     * @param {TaxonTraitUpdateArgs} args - Arguments to update one TaxonTrait.
     * @example
     * // Update one TaxonTrait
     * const taxonTrait = await prisma.taxonTrait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaxonTraitUpdateArgs>(args: Prisma.SelectSubset<T, TaxonTraitUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TaxonTraits.
     * @param {TaxonTraitDeleteManyArgs} args - Arguments to filter TaxonTraits to delete.
     * @example
     * // Delete a few TaxonTraits
     * const { count } = await prisma.taxonTrait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaxonTraitDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxonTraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxonTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonTraits
     * const taxonTrait = await prisma.taxonTrait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaxonTraitUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxonTraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxonTraits and returns the data updated in the database.
     * @param {TaxonTraitUpdateManyAndReturnArgs} args - Arguments to update many TaxonTraits.
     * @example
     * // Update many TaxonTraits
     * const taxonTrait = await prisma.taxonTrait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TaxonTraits and only return the `id`
     * const taxonTraitWithIdOnly = await prisma.taxonTrait.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TaxonTraitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxonTraitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TaxonTrait.
     * @param {TaxonTraitUpsertArgs} args - Arguments to update or create a TaxonTrait.
     * @example
     * // Update or create a TaxonTrait
     * const taxonTrait = await prisma.taxonTrait.upsert({
     *   create: {
     *     // ... data to create a TaxonTrait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonTrait we want to update
     *   }
     * })
     */
    upsert<T extends TaxonTraitUpsertArgs>(args: Prisma.SelectSubset<T, TaxonTraitUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxonTraitClient<runtime.Types.Result.GetResult<Prisma.$TaxonTraitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TaxonTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitCountArgs} args - Arguments to filter TaxonTraits to count.
     * @example
     * // Count the number of TaxonTraits
     * const count = await prisma.taxonTrait.count({
     *   where: {
     *     // ... the filter for the TaxonTraits we want to count
     *   }
     * })
    **/
    count<T extends TaxonTraitCountArgs>(args?: Prisma.Subset<T, TaxonTraitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxonTraitCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TaxonTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxonTraitAggregateArgs>(args: Prisma.Subset<T, TaxonTraitAggregateArgs>): Prisma.PrismaPromise<GetTaxonTraitAggregateType<T>>;
    /**
     * Group by TaxonTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonTraitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends TaxonTraitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxonTraitGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxonTraitGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxonTraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TaxonTrait model
     */
    readonly fields: TaxonTraitFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TaxonTrait.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TaxonTraitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    taxon<T extends Prisma.TaxonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxonDefaultArgs<ExtArgs>>): Prisma.Prisma__TaxonClient<runtime.Types.Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    trait<T extends Prisma.TraitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TraitDefaultArgs<ExtArgs>>): Prisma.Prisma__TraitClient<runtime.Types.Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the TaxonTrait model
 */
export interface TaxonTraitFieldRefs {
    readonly id: Prisma.FieldRef<"TaxonTrait", 'Int'>;
    readonly taxonId: Prisma.FieldRef<"TaxonTrait", 'Int'>;
    readonly traitId: Prisma.FieldRef<"TaxonTrait", 'Int'>;
    readonly valueCode: Prisma.FieldRef<"TaxonTrait", 'String'>;
    readonly valueText: Prisma.FieldRef<"TaxonTrait", 'String'>;
    readonly valueNumber: Prisma.FieldRef<"TaxonTrait", 'Decimal'>;
    readonly valueBoolean: Prisma.FieldRef<"TaxonTrait", 'Boolean'>;
    readonly source: Prisma.FieldRef<"TaxonTrait", 'String'>;
    readonly sourceRef: Prisma.FieldRef<"TaxonTrait", 'String'>;
    readonly sourceText: Prisma.FieldRef<"TaxonTrait", 'String'>;
    readonly confidence: Prisma.FieldRef<"TaxonTrait", 'Float'>;
    readonly isPreferred: Prisma.FieldRef<"TaxonTrait", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TaxonTrait", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TaxonTrait", 'DateTime'>;
}
/**
 * TaxonTrait findUnique
 */
export type TaxonTraitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonTrait to fetch.
     */
    where: Prisma.TaxonTraitWhereUniqueInput;
};
/**
 * TaxonTrait findUniqueOrThrow
 */
export type TaxonTraitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonTrait to fetch.
     */
    where: Prisma.TaxonTraitWhereUniqueInput;
};
/**
 * TaxonTrait findFirst
 */
export type TaxonTraitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonTrait to fetch.
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonTraits to fetch.
     */
    orderBy?: Prisma.TaxonTraitOrderByWithRelationInput | Prisma.TaxonTraitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxonTraits.
     */
    cursor?: Prisma.TaxonTraitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonTraits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonTraits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxonTraits.
     */
    distinct?: Prisma.TaxonTraitScalarFieldEnum | Prisma.TaxonTraitScalarFieldEnum[];
};
/**
 * TaxonTrait findFirstOrThrow
 */
export type TaxonTraitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonTrait to fetch.
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonTraits to fetch.
     */
    orderBy?: Prisma.TaxonTraitOrderByWithRelationInput | Prisma.TaxonTraitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxonTraits.
     */
    cursor?: Prisma.TaxonTraitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonTraits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonTraits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxonTraits.
     */
    distinct?: Prisma.TaxonTraitScalarFieldEnum | Prisma.TaxonTraitScalarFieldEnum[];
};
/**
 * TaxonTrait findMany
 */
export type TaxonTraitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonTraits to fetch.
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonTraits to fetch.
     */
    orderBy?: Prisma.TaxonTraitOrderByWithRelationInput | Prisma.TaxonTraitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TaxonTraits.
     */
    cursor?: Prisma.TaxonTraitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonTraits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonTraits.
     */
    skip?: number;
    distinct?: Prisma.TaxonTraitScalarFieldEnum | Prisma.TaxonTraitScalarFieldEnum[];
};
/**
 * TaxonTrait create
 */
export type TaxonTraitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * The data needed to create a TaxonTrait.
     */
    data: Prisma.XOR<Prisma.TaxonTraitCreateInput, Prisma.TaxonTraitUncheckedCreateInput>;
};
/**
 * TaxonTrait createMany
 */
export type TaxonTraitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonTraits.
     */
    data: Prisma.TaxonTraitCreateManyInput | Prisma.TaxonTraitCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TaxonTrait createManyAndReturn
 */
export type TaxonTraitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * The data used to create many TaxonTraits.
     */
    data: Prisma.TaxonTraitCreateManyInput | Prisma.TaxonTraitCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TaxonTrait update
 */
export type TaxonTraitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * The data needed to update a TaxonTrait.
     */
    data: Prisma.XOR<Prisma.TaxonTraitUpdateInput, Prisma.TaxonTraitUncheckedUpdateInput>;
    /**
     * Choose, which TaxonTrait to update.
     */
    where: Prisma.TaxonTraitWhereUniqueInput;
};
/**
 * TaxonTrait updateMany
 */
export type TaxonTraitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonTraits.
     */
    data: Prisma.XOR<Prisma.TaxonTraitUpdateManyMutationInput, Prisma.TaxonTraitUncheckedUpdateManyInput>;
    /**
     * Filter which TaxonTraits to update
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * Limit how many TaxonTraits to update.
     */
    limit?: number;
};
/**
 * TaxonTrait updateManyAndReturn
 */
export type TaxonTraitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * The data used to update TaxonTraits.
     */
    data: Prisma.XOR<Prisma.TaxonTraitUpdateManyMutationInput, Prisma.TaxonTraitUncheckedUpdateManyInput>;
    /**
     * Filter which TaxonTraits to update
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * Limit how many TaxonTraits to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TaxonTrait upsert
 */
export type TaxonTraitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * The filter to search for the TaxonTrait to update in case it exists.
     */
    where: Prisma.TaxonTraitWhereUniqueInput;
    /**
     * In case the TaxonTrait found by the `where` argument doesn't exist, create a new TaxonTrait with this data.
     */
    create: Prisma.XOR<Prisma.TaxonTraitCreateInput, Prisma.TaxonTraitUncheckedCreateInput>;
    /**
     * In case the TaxonTrait was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TaxonTraitUpdateInput, Prisma.TaxonTraitUncheckedUpdateInput>;
};
/**
 * TaxonTrait delete
 */
export type TaxonTraitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
    /**
     * Filter which TaxonTrait to delete.
     */
    where: Prisma.TaxonTraitWhereUniqueInput;
};
/**
 * TaxonTrait deleteMany
 */
export type TaxonTraitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonTraits to delete
     */
    where?: Prisma.TaxonTraitWhereInput;
    /**
     * Limit how many TaxonTraits to delete.
     */
    limit?: number;
};
/**
 * TaxonTrait without action
 */
export type TaxonTraitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonTrait
     */
    select?: Prisma.TaxonTraitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonTrait
     */
    omit?: Prisma.TaxonTraitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonTraitInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TaxonTrait.d.ts.map