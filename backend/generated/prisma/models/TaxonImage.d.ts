import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TaxonImage
 *
 */
export type TaxonImageModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxonImagePayload>;
export type AggregateTaxonImage = {
    _count: TaxonImageCountAggregateOutputType | null;
    _avg: TaxonImageAvgAggregateOutputType | null;
    _sum: TaxonImageSumAggregateOutputType | null;
    _min: TaxonImageMinAggregateOutputType | null;
    _max: TaxonImageMaxAggregateOutputType | null;
};
export type TaxonImageAvgAggregateOutputType = {
    taxonId: number | null;
};
export type TaxonImageSumAggregateOutputType = {
    taxonId: number | null;
};
export type TaxonImageMinAggregateOutputType = {
    id: string | null;
    taxonId: number | null;
    url: string | null;
    caption: string | null;
    source: string | null;
    isPrimary: boolean | null;
    createdAt: Date | null;
};
export type TaxonImageMaxAggregateOutputType = {
    id: string | null;
    taxonId: number | null;
    url: string | null;
    caption: string | null;
    source: string | null;
    isPrimary: boolean | null;
    createdAt: Date | null;
};
export type TaxonImageCountAggregateOutputType = {
    id: number;
    taxonId: number;
    url: number;
    caption: number;
    source: number;
    isPrimary: number;
    createdAt: number;
    _all: number;
};
export type TaxonImageAvgAggregateInputType = {
    taxonId?: true;
};
export type TaxonImageSumAggregateInputType = {
    taxonId?: true;
};
export type TaxonImageMinAggregateInputType = {
    id?: true;
    taxonId?: true;
    url?: true;
    caption?: true;
    source?: true;
    isPrimary?: true;
    createdAt?: true;
};
export type TaxonImageMaxAggregateInputType = {
    id?: true;
    taxonId?: true;
    url?: true;
    caption?: true;
    source?: true;
    isPrimary?: true;
    createdAt?: true;
};
export type TaxonImageCountAggregateInputType = {
    id?: true;
    taxonId?: true;
    url?: true;
    caption?: true;
    source?: true;
    isPrimary?: true;
    createdAt?: true;
    _all?: true;
};
export type TaxonImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonImage to aggregate.
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: Prisma.TaxonImageOrderByWithRelationInput | Prisma.TaxonImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TaxonImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TaxonImages
    **/
    _count?: true | TaxonImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TaxonImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TaxonImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TaxonImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TaxonImageMaxAggregateInputType;
};
export type GetTaxonImageAggregateType<T extends TaxonImageAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxonImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxonImage[P]> : Prisma.GetScalarType<T[P], AggregateTaxonImage[P]>;
};
export type TaxonImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxonImageWhereInput;
    orderBy?: Prisma.TaxonImageOrderByWithAggregationInput | Prisma.TaxonImageOrderByWithAggregationInput[];
    by: Prisma.TaxonImageScalarFieldEnum[] | Prisma.TaxonImageScalarFieldEnum;
    having?: Prisma.TaxonImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxonImageCountAggregateInputType | true;
    _avg?: TaxonImageAvgAggregateInputType;
    _sum?: TaxonImageSumAggregateInputType;
    _min?: TaxonImageMinAggregateInputType;
    _max?: TaxonImageMaxAggregateInputType;
};
export type TaxonImageGroupByOutputType = {
    id: string;
    taxonId: number;
    url: string;
    caption: string | null;
    source: string | null;
    isPrimary: boolean;
    createdAt: Date;
    _count: TaxonImageCountAggregateOutputType | null;
    _avg: TaxonImageAvgAggregateOutputType | null;
    _sum: TaxonImageSumAggregateOutputType | null;
    _min: TaxonImageMinAggregateOutputType | null;
    _max: TaxonImageMaxAggregateOutputType | null;
};
type GetTaxonImageGroupByPayload<T extends TaxonImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxonImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxonImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxonImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxonImageGroupByOutputType[P]>;
}>>;
export type TaxonImageWhereInput = {
    AND?: Prisma.TaxonImageWhereInput | Prisma.TaxonImageWhereInput[];
    OR?: Prisma.TaxonImageWhereInput[];
    NOT?: Prisma.TaxonImageWhereInput | Prisma.TaxonImageWhereInput[];
    id?: Prisma.UuidFilter<"TaxonImage"> | string;
    taxonId?: Prisma.IntFilter<"TaxonImage"> | number;
    url?: Prisma.StringFilter<"TaxonImage"> | string;
    caption?: Prisma.StringNullableFilter<"TaxonImage"> | string | null;
    source?: Prisma.StringNullableFilter<"TaxonImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"TaxonImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TaxonImage"> | Date | string;
    taxon?: Prisma.XOR<Prisma.TaxonScalarRelationFilter, Prisma.TaxonWhereInput>;
};
export type TaxonImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    taxon?: Prisma.TaxonOrderByWithRelationInput;
};
export type TaxonImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaxonImageWhereInput | Prisma.TaxonImageWhereInput[];
    OR?: Prisma.TaxonImageWhereInput[];
    NOT?: Prisma.TaxonImageWhereInput | Prisma.TaxonImageWhereInput[];
    taxonId?: Prisma.IntFilter<"TaxonImage"> | number;
    url?: Prisma.StringFilter<"TaxonImage"> | string;
    caption?: Prisma.StringNullableFilter<"TaxonImage"> | string | null;
    source?: Prisma.StringNullableFilter<"TaxonImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"TaxonImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TaxonImage"> | Date | string;
    taxon?: Prisma.XOR<Prisma.TaxonScalarRelationFilter, Prisma.TaxonWhereInput>;
}, "id">;
export type TaxonImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TaxonImageCountOrderByAggregateInput;
    _avg?: Prisma.TaxonImageAvgOrderByAggregateInput;
    _max?: Prisma.TaxonImageMaxOrderByAggregateInput;
    _min?: Prisma.TaxonImageMinOrderByAggregateInput;
    _sum?: Prisma.TaxonImageSumOrderByAggregateInput;
};
export type TaxonImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxonImageScalarWhereWithAggregatesInput | Prisma.TaxonImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxonImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxonImageScalarWhereWithAggregatesInput | Prisma.TaxonImageScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxonImage"> | string;
    taxonId?: Prisma.IntWithAggregatesFilter<"TaxonImage"> | number;
    url?: Prisma.StringWithAggregatesFilter<"TaxonImage"> | string;
    caption?: Prisma.StringNullableWithAggregatesFilter<"TaxonImage"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"TaxonImage"> | string | null;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"TaxonImage"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaxonImage"> | Date | string;
};
export type TaxonImageCreateInput = {
    id?: string;
    url: string;
    caption?: string | null;
    source?: string | null;
    isPrimary?: boolean;
    createdAt?: Date | string;
    taxon: Prisma.TaxonCreateNestedOneWithoutImagesInput;
};
export type TaxonImageUncheckedCreateInput = {
    id?: string;
    taxonId: number;
    url: string;
    caption?: string | null;
    source?: string | null;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type TaxonImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxon?: Prisma.TaxonUpdateOneRequiredWithoutImagesNestedInput;
};
export type TaxonImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonImageCreateManyInput = {
    id?: string;
    taxonId: number;
    url: string;
    caption?: string | null;
    source?: string | null;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type TaxonImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxonId?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonImageListRelationFilter = {
    every?: Prisma.TaxonImageWhereInput;
    some?: Prisma.TaxonImageWhereInput;
    none?: Prisma.TaxonImageWhereInput;
};
export type TaxonImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaxonImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxonImageAvgOrderByAggregateInput = {
    taxonId?: Prisma.SortOrder;
};
export type TaxonImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxonImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxonId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxonImageSumOrderByAggregateInput = {
    taxonId?: Prisma.SortOrder;
};
export type TaxonImageCreateNestedManyWithoutTaxonInput = {
    create?: Prisma.XOR<Prisma.TaxonImageCreateWithoutTaxonInput, Prisma.TaxonImageUncheckedCreateWithoutTaxonInput> | Prisma.TaxonImageCreateWithoutTaxonInput[] | Prisma.TaxonImageUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonImageCreateOrConnectWithoutTaxonInput | Prisma.TaxonImageCreateOrConnectWithoutTaxonInput[];
    createMany?: Prisma.TaxonImageCreateManyTaxonInputEnvelope;
    connect?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
};
export type TaxonImageUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: Prisma.XOR<Prisma.TaxonImageCreateWithoutTaxonInput, Prisma.TaxonImageUncheckedCreateWithoutTaxonInput> | Prisma.TaxonImageCreateWithoutTaxonInput[] | Prisma.TaxonImageUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonImageCreateOrConnectWithoutTaxonInput | Prisma.TaxonImageCreateOrConnectWithoutTaxonInput[];
    createMany?: Prisma.TaxonImageCreateManyTaxonInputEnvelope;
    connect?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
};
export type TaxonImageUpdateManyWithoutTaxonNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonImageCreateWithoutTaxonInput, Prisma.TaxonImageUncheckedCreateWithoutTaxonInput> | Prisma.TaxonImageCreateWithoutTaxonInput[] | Prisma.TaxonImageUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonImageCreateOrConnectWithoutTaxonInput | Prisma.TaxonImageCreateOrConnectWithoutTaxonInput[];
    upsert?: Prisma.TaxonImageUpsertWithWhereUniqueWithoutTaxonInput | Prisma.TaxonImageUpsertWithWhereUniqueWithoutTaxonInput[];
    createMany?: Prisma.TaxonImageCreateManyTaxonInputEnvelope;
    set?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    disconnect?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    delete?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    connect?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    update?: Prisma.TaxonImageUpdateWithWhereUniqueWithoutTaxonInput | Prisma.TaxonImageUpdateWithWhereUniqueWithoutTaxonInput[];
    updateMany?: Prisma.TaxonImageUpdateManyWithWhereWithoutTaxonInput | Prisma.TaxonImageUpdateManyWithWhereWithoutTaxonInput[];
    deleteMany?: Prisma.TaxonImageScalarWhereInput | Prisma.TaxonImageScalarWhereInput[];
};
export type TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: Prisma.XOR<Prisma.TaxonImageCreateWithoutTaxonInput, Prisma.TaxonImageUncheckedCreateWithoutTaxonInput> | Prisma.TaxonImageCreateWithoutTaxonInput[] | Prisma.TaxonImageUncheckedCreateWithoutTaxonInput[];
    connectOrCreate?: Prisma.TaxonImageCreateOrConnectWithoutTaxonInput | Prisma.TaxonImageCreateOrConnectWithoutTaxonInput[];
    upsert?: Prisma.TaxonImageUpsertWithWhereUniqueWithoutTaxonInput | Prisma.TaxonImageUpsertWithWhereUniqueWithoutTaxonInput[];
    createMany?: Prisma.TaxonImageCreateManyTaxonInputEnvelope;
    set?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    disconnect?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    delete?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    connect?: Prisma.TaxonImageWhereUniqueInput | Prisma.TaxonImageWhereUniqueInput[];
    update?: Prisma.TaxonImageUpdateWithWhereUniqueWithoutTaxonInput | Prisma.TaxonImageUpdateWithWhereUniqueWithoutTaxonInput[];
    updateMany?: Prisma.TaxonImageUpdateManyWithWhereWithoutTaxonInput | Prisma.TaxonImageUpdateManyWithWhereWithoutTaxonInput[];
    deleteMany?: Prisma.TaxonImageScalarWhereInput | Prisma.TaxonImageScalarWhereInput[];
};
export type TaxonImageCreateWithoutTaxonInput = {
    id?: string;
    url: string;
    caption?: string | null;
    source?: string | null;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type TaxonImageUncheckedCreateWithoutTaxonInput = {
    id?: string;
    url: string;
    caption?: string | null;
    source?: string | null;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type TaxonImageCreateOrConnectWithoutTaxonInput = {
    where: Prisma.TaxonImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxonImageCreateWithoutTaxonInput, Prisma.TaxonImageUncheckedCreateWithoutTaxonInput>;
};
export type TaxonImageCreateManyTaxonInputEnvelope = {
    data: Prisma.TaxonImageCreateManyTaxonInput | Prisma.TaxonImageCreateManyTaxonInput[];
    skipDuplicates?: boolean;
};
export type TaxonImageUpsertWithWhereUniqueWithoutTaxonInput = {
    where: Prisma.TaxonImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxonImageUpdateWithoutTaxonInput, Prisma.TaxonImageUncheckedUpdateWithoutTaxonInput>;
    create: Prisma.XOR<Prisma.TaxonImageCreateWithoutTaxonInput, Prisma.TaxonImageUncheckedCreateWithoutTaxonInput>;
};
export type TaxonImageUpdateWithWhereUniqueWithoutTaxonInput = {
    where: Prisma.TaxonImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxonImageUpdateWithoutTaxonInput, Prisma.TaxonImageUncheckedUpdateWithoutTaxonInput>;
};
export type TaxonImageUpdateManyWithWhereWithoutTaxonInput = {
    where: Prisma.TaxonImageScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxonImageUpdateManyMutationInput, Prisma.TaxonImageUncheckedUpdateManyWithoutTaxonInput>;
};
export type TaxonImageScalarWhereInput = {
    AND?: Prisma.TaxonImageScalarWhereInput | Prisma.TaxonImageScalarWhereInput[];
    OR?: Prisma.TaxonImageScalarWhereInput[];
    NOT?: Prisma.TaxonImageScalarWhereInput | Prisma.TaxonImageScalarWhereInput[];
    id?: Prisma.UuidFilter<"TaxonImage"> | string;
    taxonId?: Prisma.IntFilter<"TaxonImage"> | number;
    url?: Prisma.StringFilter<"TaxonImage"> | string;
    caption?: Prisma.StringNullableFilter<"TaxonImage"> | string | null;
    source?: Prisma.StringNullableFilter<"TaxonImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"TaxonImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TaxonImage"> | Date | string;
};
export type TaxonImageCreateManyTaxonInput = {
    id?: string;
    url: string;
    caption?: string | null;
    source?: string | null;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type TaxonImageUpdateWithoutTaxonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonImageUncheckedUpdateWithoutTaxonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonImageUncheckedUpdateManyWithoutTaxonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxonImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    url?: boolean;
    caption?: boolean;
    source?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonImage"]>;
export type TaxonImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    url?: boolean;
    caption?: boolean;
    source?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonImage"]>;
export type TaxonImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxonId?: boolean;
    url?: boolean;
    caption?: boolean;
    source?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxonImage"]>;
export type TaxonImageSelectScalar = {
    id?: boolean;
    taxonId?: boolean;
    url?: boolean;
    caption?: boolean;
    source?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
};
export type TaxonImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxonId" | "url" | "caption" | "source" | "isPrimary" | "createdAt", ExtArgs["result"]["taxonImage"]>;
export type TaxonImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
};
export type TaxonImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
};
export type TaxonImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxon?: boolean | Prisma.TaxonDefaultArgs<ExtArgs>;
};
export type $TaxonImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxonImage";
    objects: {
        taxon: Prisma.$TaxonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taxonId: number;
        url: string;
        caption: string | null;
        source: string | null;
        isPrimary: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["taxonImage"]>;
    composites: {};
};
export type TaxonImageGetPayload<S extends boolean | null | undefined | TaxonImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload, S>;
export type TaxonImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxonImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxonImageCountAggregateInputType | true;
};
export interface TaxonImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxonImage'];
        meta: {
            name: 'TaxonImage';
        };
    };
    /**
     * Find zero or one TaxonImage that matches the filter.
     * @param {TaxonImageFindUniqueArgs} args - Arguments to find a TaxonImage
     * @example
     * // Get one TaxonImage
     * const taxonImage = await prisma.taxonImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonImageFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxonImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TaxonImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonImageFindUniqueOrThrowArgs} args - Arguments to find a TaxonImage
     * @example
     * // Get one TaxonImage
     * const taxonImage = await prisma.taxonImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxonImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxonImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageFindFirstArgs} args - Arguments to find a TaxonImage
     * @example
     * // Get one TaxonImage
     * const taxonImage = await prisma.taxonImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonImageFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxonImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxonImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageFindFirstOrThrowArgs} args - Arguments to find a TaxonImage
     * @example
     * // Get one TaxonImage
     * const taxonImage = await prisma.taxonImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxonImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TaxonImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonImages
     * const taxonImages = await prisma.taxonImage.findMany()
     *
     * // Get first 10 TaxonImages
     * const taxonImages = await prisma.taxonImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taxonImageWithIdOnly = await prisma.taxonImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaxonImageFindManyArgs>(args?: Prisma.SelectSubset<T, TaxonImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TaxonImage.
     * @param {TaxonImageCreateArgs} args - Arguments to create a TaxonImage.
     * @example
     * // Create one TaxonImage
     * const TaxonImage = await prisma.taxonImage.create({
     *   data: {
     *     // ... data to create a TaxonImage
     *   }
     * })
     *
     */
    create<T extends TaxonImageCreateArgs>(args: Prisma.SelectSubset<T, TaxonImageCreateArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TaxonImages.
     * @param {TaxonImageCreateManyArgs} args - Arguments to create many TaxonImages.
     * @example
     * // Create many TaxonImages
     * const taxonImage = await prisma.taxonImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaxonImageCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxonImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TaxonImages and returns the data saved in the database.
     * @param {TaxonImageCreateManyAndReturnArgs} args - Arguments to create many TaxonImages.
     * @example
     * // Create many TaxonImages
     * const taxonImage = await prisma.taxonImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TaxonImages and only return the `id`
     * const taxonImageWithIdOnly = await prisma.taxonImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaxonImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxonImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TaxonImage.
     * @param {TaxonImageDeleteArgs} args - Arguments to delete one TaxonImage.
     * @example
     * // Delete one TaxonImage
     * const TaxonImage = await prisma.taxonImage.delete({
     *   where: {
     *     // ... filter to delete one TaxonImage
     *   }
     * })
     *
     */
    delete<T extends TaxonImageDeleteArgs>(args: Prisma.SelectSubset<T, TaxonImageDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TaxonImage.
     * @param {TaxonImageUpdateArgs} args - Arguments to update one TaxonImage.
     * @example
     * // Update one TaxonImage
     * const taxonImage = await prisma.taxonImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaxonImageUpdateArgs>(args: Prisma.SelectSubset<T, TaxonImageUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TaxonImages.
     * @param {TaxonImageDeleteManyArgs} args - Arguments to filter TaxonImages to delete.
     * @example
     * // Delete a few TaxonImages
     * const { count } = await prisma.taxonImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaxonImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxonImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxonImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonImages
     * const taxonImage = await prisma.taxonImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaxonImageUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxonImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxonImages and returns the data updated in the database.
     * @param {TaxonImageUpdateManyAndReturnArgs} args - Arguments to update many TaxonImages.
     * @example
     * // Update many TaxonImages
     * const taxonImage = await prisma.taxonImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TaxonImages and only return the `id`
     * const taxonImageWithIdOnly = await prisma.taxonImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxonImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxonImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TaxonImage.
     * @param {TaxonImageUpsertArgs} args - Arguments to update or create a TaxonImage.
     * @example
     * // Update or create a TaxonImage
     * const taxonImage = await prisma.taxonImage.upsert({
     *   create: {
     *     // ... data to create a TaxonImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonImage we want to update
     *   }
     * })
     */
    upsert<T extends TaxonImageUpsertArgs>(args: Prisma.SelectSubset<T, TaxonImageUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxonImageClient<runtime.Types.Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TaxonImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageCountArgs} args - Arguments to filter TaxonImages to count.
     * @example
     * // Count the number of TaxonImages
     * const count = await prisma.taxonImage.count({
     *   where: {
     *     // ... the filter for the TaxonImages we want to count
     *   }
     * })
    **/
    count<T extends TaxonImageCountArgs>(args?: Prisma.Subset<T, TaxonImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxonImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TaxonImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonImageAggregateArgs>(args: Prisma.Subset<T, TaxonImageAggregateArgs>): Prisma.PrismaPromise<GetTaxonImageAggregateType<T>>;
    /**
     * Group by TaxonImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TaxonImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxonImageGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxonImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxonImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TaxonImage model
     */
    readonly fields: TaxonImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TaxonImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TaxonImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the TaxonImage model
 */
export interface TaxonImageFieldRefs {
    readonly id: Prisma.FieldRef<"TaxonImage", 'String'>;
    readonly taxonId: Prisma.FieldRef<"TaxonImage", 'Int'>;
    readonly url: Prisma.FieldRef<"TaxonImage", 'String'>;
    readonly caption: Prisma.FieldRef<"TaxonImage", 'String'>;
    readonly source: Prisma.FieldRef<"TaxonImage", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"TaxonImage", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TaxonImage", 'DateTime'>;
}
/**
 * TaxonImage findUnique
 */
export type TaxonImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonImage to fetch.
     */
    where: Prisma.TaxonImageWhereUniqueInput;
};
/**
 * TaxonImage findUniqueOrThrow
 */
export type TaxonImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonImage to fetch.
     */
    where: Prisma.TaxonImageWhereUniqueInput;
};
/**
 * TaxonImage findFirst
 */
export type TaxonImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonImage to fetch.
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: Prisma.TaxonImageOrderByWithRelationInput | Prisma.TaxonImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxonImages.
     */
    cursor?: Prisma.TaxonImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxonImages.
     */
    distinct?: Prisma.TaxonImageScalarFieldEnum | Prisma.TaxonImageScalarFieldEnum[];
};
/**
 * TaxonImage findFirstOrThrow
 */
export type TaxonImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonImage to fetch.
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: Prisma.TaxonImageOrderByWithRelationInput | Prisma.TaxonImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxonImages.
     */
    cursor?: Prisma.TaxonImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxonImages.
     */
    distinct?: Prisma.TaxonImageScalarFieldEnum | Prisma.TaxonImageScalarFieldEnum[];
};
/**
 * TaxonImage findMany
 */
export type TaxonImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * Filter, which TaxonImages to fetch.
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: Prisma.TaxonImageOrderByWithRelationInput | Prisma.TaxonImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TaxonImages.
     */
    cursor?: Prisma.TaxonImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxonImages.
     */
    skip?: number;
    distinct?: Prisma.TaxonImageScalarFieldEnum | Prisma.TaxonImageScalarFieldEnum[];
};
/**
 * TaxonImage create
 */
export type TaxonImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a TaxonImage.
     */
    data: Prisma.XOR<Prisma.TaxonImageCreateInput, Prisma.TaxonImageUncheckedCreateInput>;
};
/**
 * TaxonImage createMany
 */
export type TaxonImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonImages.
     */
    data: Prisma.TaxonImageCreateManyInput | Prisma.TaxonImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TaxonImage createManyAndReturn
 */
export type TaxonImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * The data used to create many TaxonImages.
     */
    data: Prisma.TaxonImageCreateManyInput | Prisma.TaxonImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TaxonImage update
 */
export type TaxonImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a TaxonImage.
     */
    data: Prisma.XOR<Prisma.TaxonImageUpdateInput, Prisma.TaxonImageUncheckedUpdateInput>;
    /**
     * Choose, which TaxonImage to update.
     */
    where: Prisma.TaxonImageWhereUniqueInput;
};
/**
 * TaxonImage updateMany
 */
export type TaxonImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonImages.
     */
    data: Prisma.XOR<Prisma.TaxonImageUpdateManyMutationInput, Prisma.TaxonImageUncheckedUpdateManyInput>;
    /**
     * Filter which TaxonImages to update
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * Limit how many TaxonImages to update.
     */
    limit?: number;
};
/**
 * TaxonImage updateManyAndReturn
 */
export type TaxonImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * The data used to update TaxonImages.
     */
    data: Prisma.XOR<Prisma.TaxonImageUpdateManyMutationInput, Prisma.TaxonImageUncheckedUpdateManyInput>;
    /**
     * Filter which TaxonImages to update
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * Limit how many TaxonImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TaxonImage upsert
 */
export type TaxonImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the TaxonImage to update in case it exists.
     */
    where: Prisma.TaxonImageWhereUniqueInput;
    /**
     * In case the TaxonImage found by the `where` argument doesn't exist, create a new TaxonImage with this data.
     */
    create: Prisma.XOR<Prisma.TaxonImageCreateInput, Prisma.TaxonImageUncheckedCreateInput>;
    /**
     * In case the TaxonImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TaxonImageUpdateInput, Prisma.TaxonImageUncheckedUpdateInput>;
};
/**
 * TaxonImage delete
 */
export type TaxonImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
    /**
     * Filter which TaxonImage to delete.
     */
    where: Prisma.TaxonImageWhereUniqueInput;
};
/**
 * TaxonImage deleteMany
 */
export type TaxonImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonImages to delete
     */
    where?: Prisma.TaxonImageWhereInput;
    /**
     * Limit how many TaxonImages to delete.
     */
    limit?: number;
};
/**
 * TaxonImage without action
 */
export type TaxonImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: Prisma.TaxonImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: Prisma.TaxonImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxonImageInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TaxonImage.d.ts.map