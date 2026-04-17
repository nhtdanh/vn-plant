import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Taxons
   * const taxons = await prisma.taxon.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Taxons
 * const taxons = await prisma.taxon.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.taxon`: Exposes CRUD operations for the **Taxon** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Taxons
  * const taxons = await prisma.taxon.findMany()
  * ```
  */
    get taxon(): Prisma.TaxonDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.taxonName`: Exposes CRUD operations for the **TaxonName** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TaxonNames
      * const taxonNames = await prisma.taxonName.findMany()
      * ```
      */
    get taxonName(): Prisma.TaxonNameDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.description`: Exposes CRUD operations for the **Description** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Descriptions
      * const descriptions = await prisma.description.findMany()
      * ```
      */
    get description(): Prisma.DescriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.traitGroup`: Exposes CRUD operations for the **TraitGroup** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TraitGroups
      * const traitGroups = await prisma.traitGroup.findMany()
      * ```
      */
    get traitGroup(): Prisma.TraitGroupDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.trait`: Exposes CRUD operations for the **Trait** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Traits
      * const traits = await prisma.trait.findMany()
      * ```
      */
    get trait(): Prisma.TraitDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.traitOption`: Exposes CRUD operations for the **TraitOption** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TraitOptions
      * const traitOptions = await prisma.traitOption.findMany()
      * ```
      */
    get traitOption(): Prisma.TraitOptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.taxonTrait`: Exposes CRUD operations for the **TaxonTrait** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TaxonTraits
      * const taxonTraits = await prisma.taxonTrait.findMany()
      * ```
      */
    get taxonTrait(): Prisma.TaxonTraitDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.taxonImage`: Exposes CRUD operations for the **TaxonImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TaxonImages
      * const taxonImages = await prisma.taxonImage.findMany()
      * ```
      */
    get taxonImage(): Prisma.TaxonImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.commonName`: Exposes CRUD operations for the **CommonName** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CommonNames
      * const commonNames = await prisma.commonName.findMany()
      * ```
      */
    get commonName(): Prisma.CommonNameDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.taxonExternalId`: Exposes CRUD operations for the **TaxonExternalId** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TaxonExternalIds
      * const taxonExternalIds = await prisma.taxonExternalId.findMany()
      * ```
      */
    get taxonExternalId(): Prisma.TaxonExternalIdDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.region`: Exposes CRUD operations for the **Region** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Regions
      * const regions = await prisma.region.findMany()
      * ```
      */
    get region(): Prisma.RegionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.taxonDistribution`: Exposes CRUD operations for the **TaxonDistribution** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TaxonDistributions
      * const taxonDistributions = await prisma.taxonDistribution.findMany()
      * ```
      */
    get taxonDistribution(): Prisma.TaxonDistributionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.account`: Exposes CRUD operations for the **Account** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Accounts
      * const accounts = await prisma.account.findMany()
      * ```
      */
    get account(): Prisma.AccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Bookmarks
      * const bookmarks = await prisma.bookmark.findMany()
      * ```
      */
    get bookmark(): Prisma.BookmarkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contribution`: Exposes CRUD operations for the **Contribution** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Contributions
      * const contributions = await prisma.contribution.findMany()
      * ```
      */
    get contribution(): Prisma.ContributionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map