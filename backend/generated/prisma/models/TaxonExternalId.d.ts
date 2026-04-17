import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TaxonExternalId
 *
 */
export type TaxonExternalIdModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxonExternalIdPayload>;
export type AggregateTaxonExternalId = {
    _count: TaxonExternalIdCountAggregateOutputType | null;
    _avg: TaxonExternalIdAvgAggregateOutputType | null;
    _sum: TaxonExternalIdSumAggregateOutputType | null;
    _min: TaxonExternalIdMinAggregateOutputType | null;
    _max: TaxonExternalIdMaxAggregateOutputType | null;
};
export type TaxonExternalIdAvgAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
};
export type TaxonExternalIdSumAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
};
export type TaxonExternalIdMinAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
    source: string | null;
    externalId: string | null;
    taxonomySnapshotVersion: string | null;
};
export type TaxonExternalIdMaxAggregateOutputType = {
    id: number | null;
    taxonId: number | null;
    source: string | null;
    externalId: string | null;
    taxonomySnapshotVersion: string | null;
};
export type TaxonExternalIdCountAggregateOutputType = {
    id: number;
    taxonId: number;
    source: number;
    externalId: number;
    taxonomySnapshotVersion: number;
    _all: number;
};
export type TaxonExternalIdAvgAggregateInputType = {
    id?: true;
    taxonId?: true;
};
export type TaxonExternalIdSumAggregateInputType = {
    id?: true;
    taxonId?: true;
};
export type TaxonExternalIdMinAggregateInputType = {
    id?: true;
    taxonId?: true;
    source?: true;
    externalId?: true;
    taxonomySnapshotVersion?: true;
};
export type TaxonExternalIdMaxAggregateInputType = {
    id?: true;
    taxonId?: true;
    source?: true;
    externalId?: true;
    taxonomySnapshotVersion?: true;
};
export type TaxonExternalIdCountAggregateInputType = {
    id?: true;
    taxonId?: true;
    source?: true;
    externalId?: true;
    taxonomySnapshotVersion?: true;
    _all?: true;
};
export type TaxonExternalIdAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonExternalId to aggregate.
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonExternalIds to fetch.
     */
    orderBy?: Prisma.TaxonExternalIdOrderByWithRelationInput | Prisma.TaxonExternalIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TaxonExternalIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonExternalIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonExternalIds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TaxonExternalIds
    **/
    _count?: true | TaxonExternalIdCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TaxonExternalIdAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TaxonExternalIdSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TaxonExternalIdMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TaxonExternalIdMaxAggregateInputType;
};
export type GetTaxonExternalIdAggregateType<T extends TaxonExternalIdAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxonExternalId]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxonExternalId[P]> : Prisma.GetScalarType<T[P], AggregateTaxonExternalId[P]>;
};
export type TaxonExternalIdGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxonExternalIdWhereInput;
    orderBy?: Prisma.TaxonExternalIdOrderByWithAggregationInput | Prisma.TaxonExternalIdOrderByWithAggregationInput[];
    by: Prisma.TaxonExternalIdScalarFieldEnum[] | Prisma.TaxonExternalIdScalarFieldEnum;
    having?: Prisma.TaxonExternalIdScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxonExternalIdCountAggregateInputType | true;
    _avg?: TaxonExternalIdAvgAggregateInputType;
    _sum?: TaxonExternalIdSumAggregateInputType;
    _min?: TaxonExternalIdMinAggregateInputType;
    _max?: TaxonExternalIdMaxAggregateInputType;
};
export type TaxonExternalIdGroupByOutputType = {
    id: number;
    taxonId: number;
    source: string;
    externalId: string;
    taxonomySnapshotVersion: string | null;
    _count: TaxonExternalIdCountAggregateOutputType | null;
    _avg: TaxonExternalIdAvgAggregateOutputType | null;
    _sum: TaxonExternalIdSumAggregateOutputType | null;
    _min: TaxonExternalIdMinAggregateOutputType | null;
    _max: TaxonExternalIdMaxAggregateOutputType | null;
};
type GetTaxonExternalIdGroupByPayload<T extends TaxonExternalIdGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxonExternalIdGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxonExternalIdGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxonExternalIdGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxonExternalIdGroupByOutputType[P]>;
}>>;
export type TaxonExternalIdWhereInput = {
    AND?: Prisma.TaxonExternalIdWhereInput | Prisma.TaxonExternalIdWhereInput[];
    OR?: Prisma.TaxonExternalIdWhereInput[];
    NOT?: Prisma.TaxonExternalIdWhereInput | Prisma.TaxonExternalIdWhereInput[];
    id?: Prisma.IntFilter<"TaxonExternalId"> | number;
    taxonId?: Prisma.IntFilter<"TaxonExternalId"> | number;
    source?: Prisma.StringFilter<"TaxonExternalId"> | string;
    externalId?: Prisma.StringFilter<"TaxonExternalId"> | string;
    taxonomySnapshotVersion?: Prisma.StringNullableFilter<"TaxonExternalId"> | string | null;
    taxon?: Prisma.XOR<Prisma.TaxonScalarRelationFilter, Prisma.TaxonWhereInput>;
};
export type TaxonExternalIdOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    taxonomySnapshotVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    taxon?: Prisma.TaxonOrderByWithRelationInput;
};
export type TaxonExternalIdWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    taxonId_source?: Prisma.TaxonExternalIdTaxonIdSourceCompoundUniqueInput;
    AND?: Prisma.TaxonExternalIdWhereInput | Prisma.TaxonExternalIdWhereInput[];
    OR?: Prisma.TaxonExternalIdWhereInput[];
    NOT?: Prisma.TaxonExternalIdWhereInput | Prisma.TaxonExternalIdWhereInput[];
    taxonId?: Prisma.IntFilter<"TaxonExternalId"> | number;
    source?: Prisma.StringFilter<"TaxonExternalId"> | string;
    externalId?: Prisma.StringFilter<"TaxonExternalId"> | string;
    taxonomySnapshotVersion?: Prisma.StringNullableFilter<"TaxonExternalId"> | string | null;
    taxon?: Prisma.XOR<Prisma.TaxonScalarRelationFilter, Prisma.TaxonWhereInput>;
}, "id" | "taxonId_source">;
export type TaxonExternalIdOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    taxonomySnapshotVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TaxonExternalIdCountOrderByAggregateInput;
    _avg?: Prisma.TaxonExternalIdAvgOrderByAggregateInput;
    _max?: Prisma.TaxonExternalIdMaxOrderByAggregateInput;
    _min?: Prisma.TaxonExternalIdMinOrderByAggregateInput;
    _sum?: Prisma.TaxonExternalIdSumOrderByAggregateInput;
};
export type TaxonExternalIdScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxonExternalIdScalarWhereWithAggregatesInput | Prisma.TaxonExternalIdScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxonExternalIdScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxonExternalIdScalarWhereWithAggregatesInput | Prisma.TaxonExternalIdScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TaxonExternalId"> | number;
    taxonId?: Prisma.IntWithAggregatesFilter<"TaxonExternalId"> | number;
    source?: Prisma.StringWithAggregatesFilter<"TaxonExternalId"> | string;
    externalId?: Prisma.StringWithAggregatesFilter<"TaxonExternalId"> | string;
    taxonomySnapshotVersion?: Prisma.StringNullableWithAggregatesFilter<"TaxonExternalId"> | string | null;
};
export type TaxonExternalIdCreateInput = {
    source: string;
    externalId: string;
    taxonomySnapshotVersion?: string | null;
    taxon: Prisma.TaxonCreateNestedOneWithoutExternalIdsInput;
};
export type TaxonExternalIdUncheckedCreateInput = {
    id?: number;
    taxonId: number;
    source: string;
    externalId: string;
    taxonomySnapshotVersion?: string | null;
};
export type TaxonExternalIdUpdateInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taxon?: Prisma.TaxonUpdateOneRequiredWithoutExternalIdsNestedInput;
};
export type TaxonExternalIdUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TaxonExternalIdCreateManyInput = {
    id?: number;
    taxonId: number;
    source: string;
    externalId: string;
    taxonomySnapshotVersion?: string | null;
};
export type TaxonExternalIdUpdateManyMutationInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TaxonExternalIdUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TaxonExternalIdListRelationFilter = {
    every?: Prisma.TaxonExternalIdWhereInput;
    some?: Prisma.TaxonExternalIdWhereInput;
    none?: Prisma.TaxonExternalIdWhereInput;
};
export type TaxonExternalIdOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaxonExternalIdTaxonIdSourceCompoundUniqueInput = {
    taxonId: number;
    source: string;
};
export type TaxonExternalIdCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    taxonomySnapshotVersion?: Prisma.SortOrder;
};
export type TaxonExternalIdAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
};
export type TaxonExternalIdMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    taxonomySnapshotVersion?: Prisma.SortOrder;
};
export type TaxonExternalIdMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    taxonomySnapshotVersion?: Prisma.SortOrder;
};
export type TaxonExternalIdSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
};
export type TaxonExternalIdCreateNestedManyWithoutTaxonInput = {
    create?: Prisma.XOR<Prisma.TaxonExternalIdCreateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput> | Prisma.TaxonExternalIdCreateWithoutTaxonInput[] | Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput | Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput[];
    createMany?: Prisma.TaxonExternalIdCreateManyTaxonInputEnvelope;
    connect?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
};
export type TaxonExternalIdUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: Prisma.XOR<Prisma.TaxonExternalIdCreateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput> | Prisma.TaxonExternalIdCreateWithoutTaxonInput[] | Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput | Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput[];
    createMany?: Prisma.TaxonExternalIdCreateManyTaxonInputEnvelope;
    connect?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
};
export type TaxonExternalIdUpdateManyWithoutTaxonNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonExternalIdCreateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput> | Prisma.TaxonExternalIdCreateWithoutTaxonInput[] | Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput | Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput[];
    upsert?: Prisma.TaxonExternalIdUpsertWithWhereUniqueWithoutTaxonInput | Prisma.TaxonExternalIdUpsertWithWhereUniqueWithoutTaxonInput[];
    createMany?: Prisma.TaxonExternalIdCreateManyTaxonInputEnvelope;
    set?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    disconnect?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    delete?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    connect?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    update?: Prisma.TaxonExternalIdUpdateWithWhereUniqueWithoutTaxonInput | Prisma.TaxonExternalIdUpdateWithWhereUniqueWithoutTaxonInput[];
    updateMany?: Prisma.TaxonExternalIdUpdateManyWithWhereWithoutTaxonInput | Prisma.TaxonExternalIdUpdateManyWithWhereWithoutTaxonInput[];
    deleteMany?: Prisma.TaxonExternalIdScalarWhereInput | Prisma.TaxonExternalIdScalarWhereInput[];
};
export type TaxonExternalIdUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonExternalIdCreateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput> | Prisma.TaxonExternalIdCreateWithoutTaxonInput[] | Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput | Prisma.TaxonExternalIdCreateOrConnectWithoutTaxonInput[];
    upsert?: Prisma.TaxonExternalIdUpsertWithWhereUniqueWithoutTaxonInput | Prisma.TaxonExternalIdUpsertWithWhereUniqueWithoutTaxonInput[];
    createMany?: Prisma.TaxonExternalIdCreateManyTaxonInputEnvelope;
    set?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    disconnect?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    delete?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    connect?: Prisma.TaxonExternalIdWhereUniqueInput | Prisma.TaxonExternalIdWhereUniqueInput[];
    update?: Prisma.TaxonExternalIdUpdateWithWhereUniqueWithoutTaxonInput | Prisma.TaxonExternalIdUpdateWithWhereUniqueWithoutTaxonInput[];
    updateMany?: Prisma.TaxonExternalIdUpdateManyWithWhereWithoutTaxonInput | Prisma.TaxonExternalIdUpdateManyWithWhereWithoutTaxonInput[];
    deleteMany?: Prisma.TaxonExternalIdScalarWhereInput | Prisma.TaxonExternalIdScalarWhereInput[];
};
export type TaxonExternalIdCreateWithoutTaxonInput = {
    source: string;
    externalId: string;
    taxonomySnapshotVersion?: string | null;
};
export type TaxonExternalIdUncheckedCreateWithoutTaxonInput = {
    id?: number;
    source: string;
    externalId: string;
    taxonomySnapshotVersion?: string | null;
};
export type TaxonExternalIdCreateOrConnectWithoutTaxonInput = {
    where: Prisma.TaxonExternalIdWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxonExternalIdCreateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput>;
};
export type TaxonExternalIdCreateManyTaxonInputEnvelope = {
    data: Prisma.TaxonExternalIdCreateManyTaxonInput | Prisma.TaxonExternalIdCreateManyTaxonInput[];
    skipDuplicates?: boolean;
};
export type TaxonExternalIdUpsertWithWhereUniqueWithoutTaxonInput = {
    where: Prisma.TaxonExternalIdWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxonExternalIdUpdateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedUpdateWithoutTaxonInput>;
    create: Prisma.XOR<Prisma.TaxonExternalIdCreateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedCreateWithoutTaxonInput>;
};
export type TaxonExternalIdUpdateWithWhereUniqueWithoutTaxonInput = {
    where: Prisma.TaxonExternalIdWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxonExternalIdUpdateWithoutTaxonInput, Prisma.TaxonExternalIdUncheckedUpdateWithoutTaxonInput>;
};
export type TaxonExternalIdUpdateManyWithWhereWithoutTaxonInput = {
    where: Prisma.TaxonExternalIdScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxonExternalIdUpdateManyMutationInput, Prisma.TaxonExternalIdUncheckedUpdateManyWithoutTaxonInput>;
};
export type TaxonExternalIdScalarWhereInput = {
    AND?: Prisma.TaxonExternalIdScalarWhereInput | Prisma.TaxonExternalIdScalarWhereInput[];
    OR?: Prisma.TaxonExternalIdScalarWhereInput[];
    NOT?: Prisma.TaxonExternalIdScalarWhereInput | Prisma.TaxonExternalIdScalarWhereInput[];
    id?: Prisma.IntFilter<"TaxonExternalId"> | number;
    taxonId?: Prisma.IntFilter<"TaxonExternalId"> | number;
    source?: Prisma.StringFilter<"TaxonExternalId"> | string;
    externalId?: Prisma.StringFilter<"TaxonExternalId"> | string;
    taxonomySnapshotVersion?: Prisma.StringNullableFilter<"TaxonExternalId"> | string | null;
};
export type TaxonExternalIdCreateManyTaxonInput = {
    id?: number;
    source: string;
    externalId: string;
    taxonomySnapshotVersion?: string | null;
};
export type TaxonExternalIdUpdateWithoutTaxonInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TaxonExternalIdUncheckedUpdateWithoutTaxonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TaxonExternalIdUncheckedUpdateManyWithoutTaxonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalId?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonomySnapshotVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TaxonExternalIdSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    source?: boolean;
    externalId?: boolean;
    taxonomySnapshotVersion?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonExternalId"]>;
export type TaxonExternalIdSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    source?: boolean;
    externalId?: boolean;
    taxonomySnapshotVersion?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonExternalId"]>;
export type TaxonExternalIdSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    source?: boolean;
    externalId?: boolean;
    taxonomySnapshotVersion?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonExternalId"]>;
export type TaxonExternalIdSelectScalar = {
    id?: boolean;
    taxonId?: boolean;
    source?: boolean;
    externalId?: boolean;
    taxonomySnapshotVersion?: boolean;
};
export type TaxonExternalIdOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxonId" | "source" | "externalId" | "taxonomySnapshotVersion", ExtArgs["result"]["taxonExternalId"]>;
export type TaxonExternalIdInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
};
export type TaxonExternalIdIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
};
export type TaxonExternalIdIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
};
export type $TaxonExternalIdPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxonExternalId";
    objects: {
        taxon: Prisma.$TaxonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        taxonId: number;
        source: string;
        externalId: string;
        taxonomySnapshotVersion: string | null;
    }, ExtArgs["result"]["taxonExternalId"]>;
    composites: {};
};
export type TaxonExternalIdGetPayload<S extends boolean | null | undefined | TaxonExternalIdDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload, S>;
export type TaxonExternalIdCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxonExternalIdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxonExternalIdCountAggregateInputType | true;
};
export interface TaxonExternalIdDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxonExternalId'];
        meta: {
            name: 'TaxonExternalId';
        };
    };
    /**
     * Find zero or one TaxonExternalId that matches the filter.
     * @param {TaxonExternalIdFindUniqueArgs} args - Arguments to find a TaxonExternalId
     * @example
     * // Get one TaxonExternalId
     * const taxonExternalId = await prisma.taxonExternalId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonExternalIdFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TaxonExternalId that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonExternalIdFindUniqueOrThrowArgs} args - Arguments to find a TaxonExternalId
     * @example
     * // Get one TaxonExternalId
     * const taxonExternalId = await prisma.taxonExternalId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonExternalIdFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxonExternalId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdFindFirstArgs} args - Arguments to find a TaxonExternalId
     * @example
     * // Get one TaxonExternalId
     * const taxonExternalId = await prisma.taxonExternalId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonExternalIdFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxonExternalIdFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxonExternalId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdFindFirstOrThrowArgs} args - Arguments to find a TaxonExternalId
     * @example
     * // Get one TaxonExternalId
     * const taxonExternalId = await prisma.taxonExternalId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonExternalIdFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxonExternalIdFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TaxonExternalIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonExternalIds
     * const taxonExternalIds = await prisma.taxonExternalId.findMany()
     *
     * // Get first 10 TaxonExternalIds
     * const taxonExternalIds = await prisma.taxonExternalId.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taxonExternalIdWithIdOnly = await prisma.taxonExternalId.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaxonExternalIdFindManyArgs>(args?: Prisma.SelectSubset<T, TaxonExternalIdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TaxonExternalId.
     * @param {TaxonExternalIdCreateArgs} args - Arguments to create a TaxonExternalId.
     * @example
     * // Create one TaxonExternalId
     * const TaxonExternalId = await prisma.taxonExternalId.create({
     *   data: {
     *     // ... data to create a TaxonExternalId
     *   }
     * })
     *
     */
    create<T extends TaxonExternalIdCreateArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdCreateArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TaxonExternalIds.
     * @param {TaxonExternalIdCreateManyArgs} args - Arguments to create many TaxonExternalIds.
     * @example
     * // Create many TaxonExternalIds
     * const taxonExternalId = await prisma.taxonExternalId.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaxonExternalIdCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxonExternalIdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TaxonExternalIds and returns the data saved in the database.
     * @param {TaxonExternalIdCreateManyAndReturnArgs} args - Arguments to create many TaxonExternalIds.
     * @example
     * // Create many TaxonExternalIds
     * const taxonExternalId = await prisma.taxonExternalId.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TaxonExternalIds and only return the `id`
     * const taxonExternalIdWithIdOnly = await prisma.taxonExternalId.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaxonExternalIdCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxonExternalIdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TaxonExternalId.
     * @param {TaxonExternalIdDeleteArgs} args - Arguments to delete one TaxonExternalId.
     * @example
     * // Delete one TaxonExternalId
     * const TaxonExternalId = await prisma.taxonExternalId.delete({
     *   where: {
     *     // ... filter to delete one TaxonExternalId
     *   }
     * })
     *
     */
    delete<T extends TaxonExternalIdDeleteArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TaxonExternalId.
     * @param {TaxonExternalIdUpdateArgs} args - Arguments to update one TaxonExternalId.
     * @example
     * // Update one TaxonExternalId
     * const taxonExternalId = await prisma.taxonExternalId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaxonExternalIdUpdateArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TaxonExternalIds.
     * @param {TaxonExternalIdDeleteManyArgs} args - Arguments to filter TaxonExternalIds to delete.
     * @example
     * // Delete a few TaxonExternalIds
     * const { count } = await prisma.taxonExternalId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaxonExternalIdDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxonExternalIdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxonExternalIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonExternalIds
     * const taxonExternalId = await prisma.taxonExternalId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaxonExternalIdUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxonExternalIds and returns the data updated in the database.
     * @param {TaxonExternalIdUpdateManyAndReturnArgs} args - Arguments to update many TaxonExternalIds.
     * @example
     * // Update many TaxonExternalIds
     * const taxonExternalId = await prisma.taxonExternalId.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TaxonExternalIds and only return the `id`
     * const taxonExternalIdWithIdOnly = await prisma.taxonExternalId.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxonExternalIdUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TaxonExternalId.
     * @param {TaxonExternalIdUpsertArgs} args - Arguments to update or create a TaxonExternalId.
     * @example
     * // Update or create a TaxonExternalId
     * const taxonExternalId = await prisma.taxonExternalId.upsert({
     *   create: {
     *     // ... data to create a TaxonExternalId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonExternalId we want to update
     *   }
     * })
     */
    upsert<T extends TaxonExternalIdUpsertArgs>(args: Prisma.SelectSubset<T, TaxonExternalIdUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxonExternalIdClient<runtime.Types.Result.GetResult<Prisma.$TaxonExternalIdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TaxonExternalIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdCountArgs} args - Arguments to filter TaxonExternalIds to count.
     * @example
     * // Count the number of TaxonExternalIds
     * const count = await prisma.taxonExternalId.count({
     *   where: {
     *     // ... the filter for the TaxonExternalIds we want to count
     *   }
     * })
    **/
    count<T extends TaxonExternalIdCountArgs>(args?: Prisma.Subset<T, TaxonExternalIdCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxonExternalIdCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TaxonExternalId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonExternalIdAggregateArgs>(args: Prisma.Subset<T, TaxonExternalIdAggregateArgs>): Prisma.PrismaPromise<GetTaxonExternalIdAggregateType<T>>;
    /**
     * Group by TaxonExternalId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonExternalIdGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TaxonExternalIdGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxonExternalIdGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxonExternalIdGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxonExternalIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonExternalIdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TaxonExternalId model
     */
    readonly fields: TaxonExternalIdFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TaxonExternalId.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TaxonExternalIdClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    taxon<T extends Prisma.TaxonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxonDefaultArgs<ExtArgs>>): Prisma.Prisma__TaxonClient<runtime.Types.Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TaxonExternalId model
 */
export interface TaxonExternalIdFieldRefs {
    readonly id: Prisma.FieldRef<"TaxonExternalId", 'Int'>;
    readonly taxonId: Prisma.FieldRef<"TaxonExternalId", 'Int'>;
    readonly source: Prisma.FieldRef<"TaxonExternalId", 'String'>;
    readonly externalId: Prisma.FieldRef<"TaxonExternalId", 'String'>;
    readonly taxonomySnapshotVersion: Prisma.FieldRef<"TaxonExternalId", 'String'>;
}
/**
 * TaxonExternalId findUnique
 */
export type TaxonExternalIdFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonExternalId to fetch.
     */
    where: Prisma.TaxonExternalIdWhereUniqueInput;
};
/**
 * TaxonExternalId findUniqueOrThrow
 */
export type TaxonExternalIdFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonExternalId to fetch.
     */
    where: Prisma.TaxonExternalIdWhereUniqueInput;
};
/**
 * TaxonExternalId findFirst
 */
export type TaxonExternalIdFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonExternalId to fetch.
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonExternalIds to fetch.
     */
    orderBy?: Prisma.TaxonExternalIdOrderByWithRelationInput | Prisma.TaxonExternalIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxonExternalIds.
     */
    cursor?: Prisma.TaxonExternalIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonExternalIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonExternalIds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxonExternalIds.
     */
    distinct?: Prisma.TaxonExternalIdScalarFieldEnum | Prisma.TaxonExternalIdScalarFieldEnum[];
};
/**
 * TaxonExternalId findFirstOrThrow
 */
export type TaxonExternalIdFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonExternalId to fetch.
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonExternalIds to fetch.
     */
    orderBy?: Prisma.TaxonExternalIdOrderByWithRelationInput | Prisma.TaxonExternalIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxonExternalIds.
     */
    cursor?: Prisma.TaxonExternalIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonExternalIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonExternalIds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxonExternalIds.
     */
    distinct?: Prisma.TaxonExternalIdScalarFieldEnum | Prisma.TaxonExternalIdScalarFieldEnum[];
};
/**
 * TaxonExternalId findMany
 */
export type TaxonExternalIdFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonExternalIds to fetch.
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonExternalIds to fetch.
     */
    orderBy?: Prisma.TaxonExternalIdOrderByWithRelationInput | Prisma.TaxonExternalIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TaxonExternalIds.
     */
    cursor?: Prisma.TaxonExternalIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonExternalIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonExternalIds.
     */
    skip?: number;
    distinct?: Prisma.TaxonExternalIdScalarFieldEnum | Prisma.TaxonExternalIdScalarFieldEnum[];
};
/**
 * TaxonExternalId create
 */
export type TaxonExternalIdCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * The data needed to create a TaxonExternalId.
     */
    data: Prisma.XOR<Prisma.TaxonExternalIdCreateInput, Prisma.TaxonExternalIdUncheckedCreateInput>;
};
/**
 * TaxonExternalId createMany
 */
export type TaxonExternalIdCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonExternalIds.
     */
    data: Prisma.TaxonExternalIdCreateManyInput | Prisma.TaxonExternalIdCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TaxonExternalId createManyAndReturn
 */
export type TaxonExternalIdCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * The data used to create many TaxonExternalIds.
     */
    data: Prisma.TaxonExternalIdCreateManyInput | Prisma.TaxonExternalIdCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TaxonExternalId update
 */
export type TaxonExternalIdUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * The data needed to update a TaxonExternalId.
     */
    data: Prisma.XOR<Prisma.TaxonExternalIdUpdateInput, Prisma.TaxonExternalIdUncheckedUpdateInput>;
    /**
     * Choose, which TaxonExternalId to update.
     */
    where: Prisma.TaxonExternalIdWhereUniqueInput;
};
/**
 * TaxonExternalId updateMany
 */
export type TaxonExternalIdUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonExternalIds.
     */
    data: Prisma.XOR<Prisma.TaxonExternalIdUpdateManyMutationInput, Prisma.TaxonExternalIdUncheckedUpdateManyInput>;
    /**
     * Filter which TaxonExternalIds to update
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * Limit how many TaxonExternalIds to update.
     */
    limit?: number;
};
/**
 * TaxonExternalId updateManyAndReturn
 */
export type TaxonExternalIdUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * The data used to update TaxonExternalIds.
     */
    data: Prisma.XOR<Prisma.TaxonExternalIdUpdateManyMutationInput, Prisma.TaxonExternalIdUncheckedUpdateManyInput>;
    /**
     * Filter which TaxonExternalIds to update
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * Limit how many TaxonExternalIds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TaxonExternalId upsert
 */
export type TaxonExternalIdUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * The filter to search for the TaxonExternalId to update in case it exists.
     */
    where: Prisma.TaxonExternalIdWhereUniqueInput;
    /**
     * In case the TaxonExternalId found by the `where` argument doesn't exist, create a new TaxonExternalId with this data.
     */
    create: Prisma.XOR<Prisma.TaxonExternalIdCreateInput, Prisma.TaxonExternalIdUncheckedCreateInput>;
    /**
     * In case the TaxonExternalId was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TaxonExternalIdUpdateInput, Prisma.TaxonExternalIdUncheckedUpdateInput>;
};
/**
 * TaxonExternalId delete
 */
export type TaxonExternalIdDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
    /**
     * Filter which TaxonExternalId to delete.
     */
    where: Prisma.TaxonExternalIdWhereUniqueInput;
};
/**
 * TaxonExternalId deleteMany
 */
export type TaxonExternalIdDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonExternalIds to delete
     */
    where?: Prisma.TaxonExternalIdWhereInput;
    /**
     * Limit how many TaxonExternalIds to delete.
     */
    limit?: number;
};
/**
 * TaxonExternalId without action
 */
export type TaxonExternalIdDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonExternalId
     */
    select?: Prisma.TaxonExternalIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonExternalId
     */
    omit?: Prisma.TaxonExternalIdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonExternalIdInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TaxonExternalId.d.ts.map