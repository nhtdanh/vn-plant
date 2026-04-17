
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Taxon
 * 
 */
export type Taxon = $Result.DefaultSelection<Prisma.$TaxonPayload>
/**
 * Model TaxonSynonym
 * 
 */
export type TaxonSynonym = $Result.DefaultSelection<Prisma.$TaxonSynonymPayload>
/**
 * Model TaxonCommonName
 * 
 */
export type TaxonCommonName = $Result.DefaultSelection<Prisma.$TaxonCommonNamePayload>
/**
 * Model TaxonImage
 * 
 */
export type TaxonImage = $Result.DefaultSelection<Prisma.$TaxonImagePayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model TaxonProvince
 * 
 */
export type TaxonProvince = $Result.DefaultSelection<Prisma.$TaxonProvincePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model TaxonImageLike
 * 
 */
export type TaxonImageLike = $Result.DefaultSelection<Prisma.$TaxonImageLikePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaxonomyRank: {
  kingdom: 'kingdom',
  phylum: 'phylum',
  taxonomicClass: 'taxonomicClass',
  order: 'order',
  family: 'family',
  genus: 'genus',
  species: 'species',
  subspecies: 'subspecies',
  variety: 'variety',
  forma: 'forma'
};

export type TaxonomyRank = (typeof TaxonomyRank)[keyof typeof TaxonomyRank]


export const PlantGroup: {
  angiosperm: 'angiosperm',
  gymnosperm: 'gymnosperm',
  fern: 'fern'
};

export type PlantGroup = (typeof PlantGroup)[keyof typeof PlantGroup]


export const PublishStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]


export const UserRole: {
  admin: 'admin',
  editor: 'editor',
  user: 'user'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ImageStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus]


export const UserStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type TaxonomyRank = $Enums.TaxonomyRank

export const TaxonomyRank: typeof $Enums.TaxonomyRank

export type PlantGroup = $Enums.PlantGroup

export const PlantGroup: typeof $Enums.PlantGroup

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ImageStatus = $Enums.ImageStatus

export const ImageStatus: typeof $Enums.ImageStatus

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Taxons
 * const taxons = await prisma.taxon.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Taxons
   * const taxons = await prisma.taxon.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.taxon`: Exposes CRUD operations for the **Taxon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxons
    * const taxons = await prisma.taxon.findMany()
    * ```
    */
  get taxon(): Prisma.TaxonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxonSynonym`: Exposes CRUD operations for the **TaxonSynonym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxonSynonyms
    * const taxonSynonyms = await prisma.taxonSynonym.findMany()
    * ```
    */
  get taxonSynonym(): Prisma.TaxonSynonymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxonCommonName`: Exposes CRUD operations for the **TaxonCommonName** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxonCommonNames
    * const taxonCommonNames = await prisma.taxonCommonName.findMany()
    * ```
    */
  get taxonCommonName(): Prisma.TaxonCommonNameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxonImage`: Exposes CRUD operations for the **TaxonImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxonImages
    * const taxonImages = await prisma.taxonImage.findMany()
    * ```
    */
  get taxonImage(): Prisma.TaxonImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxonProvince`: Exposes CRUD operations for the **TaxonProvince** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxonProvinces
    * const taxonProvinces = await prisma.taxonProvince.findMany()
    * ```
    */
  get taxonProvince(): Prisma.TaxonProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxonImageLike`: Exposes CRUD operations for the **TaxonImageLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxonImageLikes
    * const taxonImageLikes = await prisma.taxonImageLike.findMany()
    * ```
    */
  get taxonImageLike(): Prisma.TaxonImageLikeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Taxon: 'Taxon',
    TaxonSynonym: 'TaxonSynonym',
    TaxonCommonName: 'TaxonCommonName',
    TaxonImage: 'TaxonImage',
    Province: 'Province',
    TaxonProvince: 'TaxonProvince',
    User: 'User',
    RefreshToken: 'RefreshToken',
    Account: 'Account',
    Bookmark: 'Bookmark',
    TaxonImageLike: 'TaxonImageLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "taxon" | "taxonSynonym" | "taxonCommonName" | "taxonImage" | "province" | "taxonProvince" | "user" | "refreshToken" | "account" | "bookmark" | "taxonImageLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Taxon: {
        payload: Prisma.$TaxonPayload<ExtArgs>
        fields: Prisma.TaxonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>
          }
          findFirst: {
            args: Prisma.TaxonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>
          }
          findMany: {
            args: Prisma.TaxonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>[]
          }
          create: {
            args: Prisma.TaxonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>
          }
          createMany: {
            args: Prisma.TaxonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>[]
          }
          delete: {
            args: Prisma.TaxonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>
          }
          update: {
            args: Prisma.TaxonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>
          }
          deleteMany: {
            args: Prisma.TaxonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>[]
          }
          upsert: {
            args: Prisma.TaxonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonPayload>
          }
          aggregate: {
            args: Prisma.TaxonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxon>
          }
          groupBy: {
            args: Prisma.TaxonGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxonGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxonCountArgs<ExtArgs>
            result: $Utils.Optional<TaxonCountAggregateOutputType> | number
          }
        }
      }
      TaxonSynonym: {
        payload: Prisma.$TaxonSynonymPayload<ExtArgs>
        fields: Prisma.TaxonSynonymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxonSynonymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxonSynonymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>
          }
          findFirst: {
            args: Prisma.TaxonSynonymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxonSynonymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>
          }
          findMany: {
            args: Prisma.TaxonSynonymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>[]
          }
          create: {
            args: Prisma.TaxonSynonymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>
          }
          createMany: {
            args: Prisma.TaxonSynonymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxonSynonymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>[]
          }
          delete: {
            args: Prisma.TaxonSynonymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>
          }
          update: {
            args: Prisma.TaxonSynonymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>
          }
          deleteMany: {
            args: Prisma.TaxonSynonymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxonSynonymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxonSynonymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>[]
          }
          upsert: {
            args: Prisma.TaxonSynonymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonSynonymPayload>
          }
          aggregate: {
            args: Prisma.TaxonSynonymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxonSynonym>
          }
          groupBy: {
            args: Prisma.TaxonSynonymGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxonSynonymGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxonSynonymCountArgs<ExtArgs>
            result: $Utils.Optional<TaxonSynonymCountAggregateOutputType> | number
          }
        }
      }
      TaxonCommonName: {
        payload: Prisma.$TaxonCommonNamePayload<ExtArgs>
        fields: Prisma.TaxonCommonNameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxonCommonNameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxonCommonNameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>
          }
          findFirst: {
            args: Prisma.TaxonCommonNameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxonCommonNameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>
          }
          findMany: {
            args: Prisma.TaxonCommonNameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>[]
          }
          create: {
            args: Prisma.TaxonCommonNameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>
          }
          createMany: {
            args: Prisma.TaxonCommonNameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxonCommonNameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>[]
          }
          delete: {
            args: Prisma.TaxonCommonNameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>
          }
          update: {
            args: Prisma.TaxonCommonNameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>
          }
          deleteMany: {
            args: Prisma.TaxonCommonNameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxonCommonNameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxonCommonNameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>[]
          }
          upsert: {
            args: Prisma.TaxonCommonNameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonCommonNamePayload>
          }
          aggregate: {
            args: Prisma.TaxonCommonNameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxonCommonName>
          }
          groupBy: {
            args: Prisma.TaxonCommonNameGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxonCommonNameGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxonCommonNameCountArgs<ExtArgs>
            result: $Utils.Optional<TaxonCommonNameCountAggregateOutputType> | number
          }
        }
      }
      TaxonImage: {
        payload: Prisma.$TaxonImagePayload<ExtArgs>
        fields: Prisma.TaxonImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxonImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxonImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>
          }
          findFirst: {
            args: Prisma.TaxonImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxonImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>
          }
          findMany: {
            args: Prisma.TaxonImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>[]
          }
          create: {
            args: Prisma.TaxonImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>
          }
          createMany: {
            args: Prisma.TaxonImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxonImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>[]
          }
          delete: {
            args: Prisma.TaxonImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>
          }
          update: {
            args: Prisma.TaxonImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>
          }
          deleteMany: {
            args: Prisma.TaxonImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxonImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxonImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>[]
          }
          upsert: {
            args: Prisma.TaxonImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImagePayload>
          }
          aggregate: {
            args: Prisma.TaxonImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxonImage>
          }
          groupBy: {
            args: Prisma.TaxonImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxonImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxonImageCountArgs<ExtArgs>
            result: $Utils.Optional<TaxonImageCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      TaxonProvince: {
        payload: Prisma.$TaxonProvincePayload<ExtArgs>
        fields: Prisma.TaxonProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxonProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxonProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>
          }
          findFirst: {
            args: Prisma.TaxonProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxonProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>
          }
          findMany: {
            args: Prisma.TaxonProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>[]
          }
          create: {
            args: Prisma.TaxonProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>
          }
          createMany: {
            args: Prisma.TaxonProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxonProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>[]
          }
          delete: {
            args: Prisma.TaxonProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>
          }
          update: {
            args: Prisma.TaxonProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>
          }
          deleteMany: {
            args: Prisma.TaxonProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxonProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxonProvinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>[]
          }
          upsert: {
            args: Prisma.TaxonProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonProvincePayload>
          }
          aggregate: {
            args: Prisma.TaxonProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxonProvince>
          }
          groupBy: {
            args: Prisma.TaxonProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxonProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxonProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<TaxonProvinceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      TaxonImageLike: {
        payload: Prisma.$TaxonImageLikePayload<ExtArgs>
        fields: Prisma.TaxonImageLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxonImageLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxonImageLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>
          }
          findFirst: {
            args: Prisma.TaxonImageLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxonImageLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>
          }
          findMany: {
            args: Prisma.TaxonImageLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>[]
          }
          create: {
            args: Prisma.TaxonImageLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>
          }
          createMany: {
            args: Prisma.TaxonImageLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxonImageLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>[]
          }
          delete: {
            args: Prisma.TaxonImageLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>
          }
          update: {
            args: Prisma.TaxonImageLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>
          }
          deleteMany: {
            args: Prisma.TaxonImageLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxonImageLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxonImageLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>[]
          }
          upsert: {
            args: Prisma.TaxonImageLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxonImageLikePayload>
          }
          aggregate: {
            args: Prisma.TaxonImageLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxonImageLike>
          }
          groupBy: {
            args: Prisma.TaxonImageLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxonImageLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxonImageLikeCountArgs<ExtArgs>
            result: $Utils.Optional<TaxonImageLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    taxon?: TaxonOmit
    taxonSynonym?: TaxonSynonymOmit
    taxonCommonName?: TaxonCommonNameOmit
    taxonImage?: TaxonImageOmit
    province?: ProvinceOmit
    taxonProvince?: TaxonProvinceOmit
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    account?: AccountOmit
    bookmark?: BookmarkOmit
    taxonImageLike?: TaxonImageLikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TaxonCountOutputType
   */

  export type TaxonCountOutputType = {
    children: number
    synonyms: number
    commonNames: number
    images: number
    provinces: number
    bookmarks: number
  }

  export type TaxonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TaxonCountOutputTypeCountChildrenArgs
    synonyms?: boolean | TaxonCountOutputTypeCountSynonymsArgs
    commonNames?: boolean | TaxonCountOutputTypeCountCommonNamesArgs
    images?: boolean | TaxonCountOutputTypeCountImagesArgs
    provinces?: boolean | TaxonCountOutputTypeCountProvincesArgs
    bookmarks?: boolean | TaxonCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCountOutputType
     */
    select?: TaxonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonWhereInput
  }

  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeCountSynonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonSynonymWhereInput
  }

  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeCountCommonNamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonCommonNameWhereInput
  }

  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageWhereInput
  }

  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeCountProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonProvinceWhereInput
  }

  /**
   * TaxonCountOutputType without action
   */
  export type TaxonCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type TaxonImageCountOutputType
   */

  export type TaxonImageCountOutputType = {
    likes: number
  }

  export type TaxonImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | TaxonImageCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * TaxonImageCountOutputType without action
   */
  export type TaxonImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageCountOutputType
     */
    select?: TaxonImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaxonImageCountOutputType without action
   */
  export type TaxonImageCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageLikeWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    taxa: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxa?: boolean | ProvinceCountOutputTypeCountTaxaArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountTaxaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonProvinceWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    bookmarks: number
    uploadedImages: number
    reviewedImages: number
    refreshTokens: number
    imageLikes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    uploadedImages?: boolean | UserCountOutputTypeCountUploadedImagesArgs
    reviewedImages?: boolean | UserCountOutputTypeCountReviewedImagesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    imageLikes?: boolean | UserCountOutputTypeCountImageLikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImageLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Taxon
   */

  export type AggregateTaxon = {
    _count: TaxonCountAggregateOutputType | null
    _avg: TaxonAvgAggregateOutputType | null
    _sum: TaxonSumAggregateOutputType | null
    _min: TaxonMinAggregateOutputType | null
    _max: TaxonMaxAggregateOutputType | null
  }

  export type TaxonAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type TaxonSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type TaxonMinAggregateOutputType = {
    id: number | null
    slug: string | null
    canonicalName: string | null
    scientificName: string | null
    author: string | null
    vietnameseName: string | null
    primaryImageUrl: string | null
    rank: $Enums.TaxonomyRank | null
    plantGroup: $Enums.PlantGroup | null
    parentId: number | null
    status: $Enums.PublishStatus | null
    hasVietnamRecord: boolean | null
    description: string | null
    descriptionLang: string | null
    habit: string | null
    leaf: string | null
    reproduction: string | null
    phenology: string | null
    value: string | null
    distributionText: string | null
    note: string | null
    sourceName: string | null
    externalId: string | null
    orderInBook: string | null
    rawDescriptionInBook: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    canonicalName: string | null
    scientificName: string | null
    author: string | null
    vietnameseName: string | null
    primaryImageUrl: string | null
    rank: $Enums.TaxonomyRank | null
    plantGroup: $Enums.PlantGroup | null
    parentId: number | null
    status: $Enums.PublishStatus | null
    hasVietnamRecord: boolean | null
    description: string | null
    descriptionLang: string | null
    habit: string | null
    leaf: string | null
    reproduction: string | null
    phenology: string | null
    value: string | null
    distributionText: string | null
    note: string | null
    sourceName: string | null
    externalId: string | null
    orderInBook: string | null
    rawDescriptionInBook: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonCountAggregateOutputType = {
    id: number
    slug: number
    canonicalName: number
    scientificName: number
    author: number
    vietnameseName: number
    primaryImageUrl: number
    rank: number
    plantGroup: number
    parentId: number
    status: number
    hasVietnamRecord: number
    description: number
    descriptionLang: number
    habit: number
    leaf: number
    reproduction: number
    phenology: number
    value: number
    distributionText: number
    note: number
    sourceName: number
    externalId: number
    orderInBook: number
    rawDescriptionInBook: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxonAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type TaxonSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type TaxonMinAggregateInputType = {
    id?: true
    slug?: true
    canonicalName?: true
    scientificName?: true
    author?: true
    vietnameseName?: true
    primaryImageUrl?: true
    rank?: true
    plantGroup?: true
    parentId?: true
    status?: true
    hasVietnamRecord?: true
    description?: true
    descriptionLang?: true
    habit?: true
    leaf?: true
    reproduction?: true
    phenology?: true
    value?: true
    distributionText?: true
    note?: true
    sourceName?: true
    externalId?: true
    orderInBook?: true
    rawDescriptionInBook?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonMaxAggregateInputType = {
    id?: true
    slug?: true
    canonicalName?: true
    scientificName?: true
    author?: true
    vietnameseName?: true
    primaryImageUrl?: true
    rank?: true
    plantGroup?: true
    parentId?: true
    status?: true
    hasVietnamRecord?: true
    description?: true
    descriptionLang?: true
    habit?: true
    leaf?: true
    reproduction?: true
    phenology?: true
    value?: true
    distributionText?: true
    note?: true
    sourceName?: true
    externalId?: true
    orderInBook?: true
    rawDescriptionInBook?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonCountAggregateInputType = {
    id?: true
    slug?: true
    canonicalName?: true
    scientificName?: true
    author?: true
    vietnameseName?: true
    primaryImageUrl?: true
    rank?: true
    plantGroup?: true
    parentId?: true
    status?: true
    hasVietnamRecord?: true
    description?: true
    descriptionLang?: true
    habit?: true
    leaf?: true
    reproduction?: true
    phenology?: true
    value?: true
    distributionText?: true
    note?: true
    sourceName?: true
    externalId?: true
    orderInBook?: true
    rawDescriptionInBook?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taxon to aggregate.
     */
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     */
    orderBy?: TaxonOrderByWithRelationInput | TaxonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taxons
    **/
    _count?: true | TaxonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonMaxAggregateInputType
  }

  export type GetTaxonAggregateType<T extends TaxonAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxon[P]>
      : GetScalarType<T[P], AggregateTaxon[P]>
  }




  export type TaxonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonWhereInput
    orderBy?: TaxonOrderByWithAggregationInput | TaxonOrderByWithAggregationInput[]
    by: TaxonScalarFieldEnum[] | TaxonScalarFieldEnum
    having?: TaxonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonCountAggregateInputType | true
    _avg?: TaxonAvgAggregateInputType
    _sum?: TaxonSumAggregateInputType
    _min?: TaxonMinAggregateInputType
    _max?: TaxonMaxAggregateInputType
  }

  export type TaxonGroupByOutputType = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author: string | null
    vietnameseName: string | null
    primaryImageUrl: string | null
    rank: $Enums.TaxonomyRank
    plantGroup: $Enums.PlantGroup | null
    parentId: number | null
    status: $Enums.PublishStatus
    hasVietnamRecord: boolean
    description: string | null
    descriptionLang: string | null
    habit: string | null
    leaf: string | null
    reproduction: string | null
    phenology: string | null
    value: string | null
    distributionText: string | null
    note: string | null
    sourceName: string | null
    externalId: string | null
    orderInBook: string | null
    rawDescriptionInBook: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaxonCountAggregateOutputType | null
    _avg: TaxonAvgAggregateOutputType | null
    _sum: TaxonSumAggregateOutputType | null
    _min: TaxonMinAggregateOutputType | null
    _max: TaxonMaxAggregateOutputType | null
  }

  type GetTaxonGroupByPayload<T extends TaxonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonGroupByOutputType[P]>
        }
      >
    >


  export type TaxonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    canonicalName?: boolean
    scientificName?: boolean
    author?: boolean
    vietnameseName?: boolean
    primaryImageUrl?: boolean
    rank?: boolean
    plantGroup?: boolean
    parentId?: boolean
    status?: boolean
    hasVietnamRecord?: boolean
    description?: boolean
    descriptionLang?: boolean
    habit?: boolean
    leaf?: boolean
    reproduction?: boolean
    phenology?: boolean
    value?: boolean
    distributionText?: boolean
    note?: boolean
    sourceName?: boolean
    externalId?: boolean
    orderInBook?: boolean
    rawDescriptionInBook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Taxon$parentArgs<ExtArgs>
    children?: boolean | Taxon$childrenArgs<ExtArgs>
    synonyms?: boolean | Taxon$synonymsArgs<ExtArgs>
    commonNames?: boolean | Taxon$commonNamesArgs<ExtArgs>
    images?: boolean | Taxon$imagesArgs<ExtArgs>
    provinces?: boolean | Taxon$provincesArgs<ExtArgs>
    bookmarks?: boolean | Taxon$bookmarksArgs<ExtArgs>
    _count?: boolean | TaxonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxon"]>

  export type TaxonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    canonicalName?: boolean
    scientificName?: boolean
    author?: boolean
    vietnameseName?: boolean
    primaryImageUrl?: boolean
    rank?: boolean
    plantGroup?: boolean
    parentId?: boolean
    status?: boolean
    hasVietnamRecord?: boolean
    description?: boolean
    descriptionLang?: boolean
    habit?: boolean
    leaf?: boolean
    reproduction?: boolean
    phenology?: boolean
    value?: boolean
    distributionText?: boolean
    note?: boolean
    sourceName?: boolean
    externalId?: boolean
    orderInBook?: boolean
    rawDescriptionInBook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Taxon$parentArgs<ExtArgs>
  }, ExtArgs["result"]["taxon"]>

  export type TaxonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    canonicalName?: boolean
    scientificName?: boolean
    author?: boolean
    vietnameseName?: boolean
    primaryImageUrl?: boolean
    rank?: boolean
    plantGroup?: boolean
    parentId?: boolean
    status?: boolean
    hasVietnamRecord?: boolean
    description?: boolean
    descriptionLang?: boolean
    habit?: boolean
    leaf?: boolean
    reproduction?: boolean
    phenology?: boolean
    value?: boolean
    distributionText?: boolean
    note?: boolean
    sourceName?: boolean
    externalId?: boolean
    orderInBook?: boolean
    rawDescriptionInBook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Taxon$parentArgs<ExtArgs>
  }, ExtArgs["result"]["taxon"]>

  export type TaxonSelectScalar = {
    id?: boolean
    slug?: boolean
    canonicalName?: boolean
    scientificName?: boolean
    author?: boolean
    vietnameseName?: boolean
    primaryImageUrl?: boolean
    rank?: boolean
    plantGroup?: boolean
    parentId?: boolean
    status?: boolean
    hasVietnamRecord?: boolean
    description?: boolean
    descriptionLang?: boolean
    habit?: boolean
    leaf?: boolean
    reproduction?: boolean
    phenology?: boolean
    value?: boolean
    distributionText?: boolean
    note?: boolean
    sourceName?: boolean
    externalId?: boolean
    orderInBook?: boolean
    rawDescriptionInBook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaxonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "canonicalName" | "scientificName" | "author" | "vietnameseName" | "primaryImageUrl" | "rank" | "plantGroup" | "parentId" | "status" | "hasVietnamRecord" | "description" | "descriptionLang" | "habit" | "leaf" | "reproduction" | "phenology" | "value" | "distributionText" | "note" | "sourceName" | "externalId" | "orderInBook" | "rawDescriptionInBook" | "createdAt" | "updatedAt", ExtArgs["result"]["taxon"]>
  export type TaxonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Taxon$parentArgs<ExtArgs>
    children?: boolean | Taxon$childrenArgs<ExtArgs>
    synonyms?: boolean | Taxon$synonymsArgs<ExtArgs>
    commonNames?: boolean | Taxon$commonNamesArgs<ExtArgs>
    images?: boolean | Taxon$imagesArgs<ExtArgs>
    provinces?: boolean | Taxon$provincesArgs<ExtArgs>
    bookmarks?: boolean | Taxon$bookmarksArgs<ExtArgs>
    _count?: boolean | TaxonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaxonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Taxon$parentArgs<ExtArgs>
  }
  export type TaxonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Taxon$parentArgs<ExtArgs>
  }

  export type $TaxonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taxon"
    objects: {
      parent: Prisma.$TaxonPayload<ExtArgs> | null
      children: Prisma.$TaxonPayload<ExtArgs>[]
      synonyms: Prisma.$TaxonSynonymPayload<ExtArgs>[]
      commonNames: Prisma.$TaxonCommonNamePayload<ExtArgs>[]
      images: Prisma.$TaxonImagePayload<ExtArgs>[]
      provinces: Prisma.$TaxonProvincePayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      canonicalName: string
      scientificName: string
      author: string | null
      vietnameseName: string | null
      primaryImageUrl: string | null
      rank: $Enums.TaxonomyRank
      plantGroup: $Enums.PlantGroup | null
      parentId: number | null
      status: $Enums.PublishStatus
      hasVietnamRecord: boolean
      description: string | null
      descriptionLang: string | null
      habit: string | null
      leaf: string | null
      reproduction: string | null
      phenology: string | null
      value: string | null
      distributionText: string | null
      note: string | null
      sourceName: string | null
      externalId: string | null
      orderInBook: string | null
      rawDescriptionInBook: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taxon"]>
    composites: {}
  }

  type TaxonGetPayload<S extends boolean | null | undefined | TaxonDefaultArgs> = $Result.GetResult<Prisma.$TaxonPayload, S>

  type TaxonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxonCountAggregateInputType | true
    }

  export interface TaxonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taxon'], meta: { name: 'Taxon' } }
    /**
     * Find zero or one Taxon that matches the filter.
     * @param {TaxonFindUniqueArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonFindUniqueArgs>(args: SelectSubset<T, TaxonFindUniqueArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taxon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonFindUniqueOrThrowArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonFindFirstArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonFindFirstArgs>(args?: SelectSubset<T, TaxonFindFirstArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonFindFirstOrThrowArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxonFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxons
     * const taxons = await prisma.taxon.findMany()
     * 
     * // Get first 10 Taxons
     * const taxons = await prisma.taxon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxonWithIdOnly = await prisma.taxon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxonFindManyArgs>(args?: SelectSubset<T, TaxonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taxon.
     * @param {TaxonCreateArgs} args - Arguments to create a Taxon.
     * @example
     * // Create one Taxon
     * const Taxon = await prisma.taxon.create({
     *   data: {
     *     // ... data to create a Taxon
     *   }
     * })
     * 
     */
    create<T extends TaxonCreateArgs>(args: SelectSubset<T, TaxonCreateArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxons.
     * @param {TaxonCreateManyArgs} args - Arguments to create many Taxons.
     * @example
     * // Create many Taxons
     * const taxon = await prisma.taxon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxonCreateManyArgs>(args?: SelectSubset<T, TaxonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taxons and returns the data saved in the database.
     * @param {TaxonCreateManyAndReturnArgs} args - Arguments to create many Taxons.
     * @example
     * // Create many Taxons
     * const taxon = await prisma.taxon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taxons and only return the `id`
     * const taxonWithIdOnly = await prisma.taxon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxonCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taxon.
     * @param {TaxonDeleteArgs} args - Arguments to delete one Taxon.
     * @example
     * // Delete one Taxon
     * const Taxon = await prisma.taxon.delete({
     *   where: {
     *     // ... filter to delete one Taxon
     *   }
     * })
     * 
     */
    delete<T extends TaxonDeleteArgs>(args: SelectSubset<T, TaxonDeleteArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taxon.
     * @param {TaxonUpdateArgs} args - Arguments to update one Taxon.
     * @example
     * // Update one Taxon
     * const taxon = await prisma.taxon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxonUpdateArgs>(args: SelectSubset<T, TaxonUpdateArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxons.
     * @param {TaxonDeleteManyArgs} args - Arguments to filter Taxons to delete.
     * @example
     * // Delete a few Taxons
     * const { count } = await prisma.taxon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxonDeleteManyArgs>(args?: SelectSubset<T, TaxonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxons
     * const taxon = await prisma.taxon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxonUpdateManyArgs>(args: SelectSubset<T, TaxonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxons and returns the data updated in the database.
     * @param {TaxonUpdateManyAndReturnArgs} args - Arguments to update many Taxons.
     * @example
     * // Update many Taxons
     * const taxon = await prisma.taxon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taxons and only return the `id`
     * const taxonWithIdOnly = await prisma.taxon.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxonUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taxon.
     * @param {TaxonUpsertArgs} args - Arguments to update or create a Taxon.
     * @example
     * // Update or create a Taxon
     * const taxon = await prisma.taxon.upsert({
     *   create: {
     *     // ... data to create a Taxon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taxon we want to update
     *   }
     * })
     */
    upsert<T extends TaxonUpsertArgs>(args: SelectSubset<T, TaxonUpsertArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCountArgs} args - Arguments to filter Taxons to count.
     * @example
     * // Count the number of Taxons
     * const count = await prisma.taxon.count({
     *   where: {
     *     // ... the filter for the Taxons we want to count
     *   }
     * })
    **/
    count<T extends TaxonCountArgs>(
      args?: Subset<T, TaxonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taxon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonAggregateArgs>(args: Subset<T, TaxonAggregateArgs>): Prisma.PrismaPromise<GetTaxonAggregateType<T>>

    /**
     * Group by Taxon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TaxonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonGroupByArgs['orderBy'] }
        : { orderBy?: TaxonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taxon model
   */
  readonly fields: TaxonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taxon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Taxon$parentArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$parentArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Taxon$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    synonyms<T extends Taxon$synonymsArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$synonymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commonNames<T extends Taxon$commonNamesArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$commonNamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Taxon$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provinces<T extends Taxon$provincesArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$provincesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends Taxon$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Taxon$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Taxon model
   */
  interface TaxonFieldRefs {
    readonly id: FieldRef<"Taxon", 'Int'>
    readonly slug: FieldRef<"Taxon", 'String'>
    readonly canonicalName: FieldRef<"Taxon", 'String'>
    readonly scientificName: FieldRef<"Taxon", 'String'>
    readonly author: FieldRef<"Taxon", 'String'>
    readonly vietnameseName: FieldRef<"Taxon", 'String'>
    readonly primaryImageUrl: FieldRef<"Taxon", 'String'>
    readonly rank: FieldRef<"Taxon", 'TaxonomyRank'>
    readonly plantGroup: FieldRef<"Taxon", 'PlantGroup'>
    readonly parentId: FieldRef<"Taxon", 'Int'>
    readonly status: FieldRef<"Taxon", 'PublishStatus'>
    readonly hasVietnamRecord: FieldRef<"Taxon", 'Boolean'>
    readonly description: FieldRef<"Taxon", 'String'>
    readonly descriptionLang: FieldRef<"Taxon", 'String'>
    readonly habit: FieldRef<"Taxon", 'String'>
    readonly leaf: FieldRef<"Taxon", 'String'>
    readonly reproduction: FieldRef<"Taxon", 'String'>
    readonly phenology: FieldRef<"Taxon", 'String'>
    readonly value: FieldRef<"Taxon", 'String'>
    readonly distributionText: FieldRef<"Taxon", 'String'>
    readonly note: FieldRef<"Taxon", 'String'>
    readonly sourceName: FieldRef<"Taxon", 'String'>
    readonly externalId: FieldRef<"Taxon", 'String'>
    readonly orderInBook: FieldRef<"Taxon", 'String'>
    readonly rawDescriptionInBook: FieldRef<"Taxon", 'String'>
    readonly createdAt: FieldRef<"Taxon", 'DateTime'>
    readonly updatedAt: FieldRef<"Taxon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Taxon findUnique
   */
  export type TaxonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * Filter, which Taxon to fetch.
     */
    where: TaxonWhereUniqueInput
  }

  /**
   * Taxon findUniqueOrThrow
   */
  export type TaxonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * Filter, which Taxon to fetch.
     */
    where: TaxonWhereUniqueInput
  }

  /**
   * Taxon findFirst
   */
  export type TaxonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * Filter, which Taxon to fetch.
     */
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     */
    orderBy?: TaxonOrderByWithRelationInput | TaxonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxons.
     */
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxons.
     */
    distinct?: TaxonScalarFieldEnum | TaxonScalarFieldEnum[]
  }

  /**
   * Taxon findFirstOrThrow
   */
  export type TaxonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * Filter, which Taxon to fetch.
     */
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     */
    orderBy?: TaxonOrderByWithRelationInput | TaxonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxons.
     */
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxons.
     */
    distinct?: TaxonScalarFieldEnum | TaxonScalarFieldEnum[]
  }

  /**
   * Taxon findMany
   */
  export type TaxonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * Filter, which Taxons to fetch.
     */
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     */
    orderBy?: TaxonOrderByWithRelationInput | TaxonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taxons.
     */
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     */
    skip?: number
    distinct?: TaxonScalarFieldEnum | TaxonScalarFieldEnum[]
  }

  /**
   * Taxon create
   */
  export type TaxonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * The data needed to create a Taxon.
     */
    data: XOR<TaxonCreateInput, TaxonUncheckedCreateInput>
  }

  /**
   * Taxon createMany
   */
  export type TaxonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taxons.
     */
    data: TaxonCreateManyInput | TaxonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taxon createManyAndReturn
   */
  export type TaxonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * The data used to create many Taxons.
     */
    data: TaxonCreateManyInput | TaxonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taxon update
   */
  export type TaxonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * The data needed to update a Taxon.
     */
    data: XOR<TaxonUpdateInput, TaxonUncheckedUpdateInput>
    /**
     * Choose, which Taxon to update.
     */
    where: TaxonWhereUniqueInput
  }

  /**
   * Taxon updateMany
   */
  export type TaxonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taxons.
     */
    data: XOR<TaxonUpdateManyMutationInput, TaxonUncheckedUpdateManyInput>
    /**
     * Filter which Taxons to update
     */
    where?: TaxonWhereInput
    /**
     * Limit how many Taxons to update.
     */
    limit?: number
  }

  /**
   * Taxon updateManyAndReturn
   */
  export type TaxonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * The data used to update Taxons.
     */
    data: XOR<TaxonUpdateManyMutationInput, TaxonUncheckedUpdateManyInput>
    /**
     * Filter which Taxons to update
     */
    where?: TaxonWhereInput
    /**
     * Limit how many Taxons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taxon upsert
   */
  export type TaxonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * The filter to search for the Taxon to update in case it exists.
     */
    where: TaxonWhereUniqueInput
    /**
     * In case the Taxon found by the `where` argument doesn't exist, create a new Taxon with this data.
     */
    create: XOR<TaxonCreateInput, TaxonUncheckedCreateInput>
    /**
     * In case the Taxon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxonUpdateInput, TaxonUncheckedUpdateInput>
  }

  /**
   * Taxon delete
   */
  export type TaxonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    /**
     * Filter which Taxon to delete.
     */
    where: TaxonWhereUniqueInput
  }

  /**
   * Taxon deleteMany
   */
  export type TaxonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taxons to delete
     */
    where?: TaxonWhereInput
    /**
     * Limit how many Taxons to delete.
     */
    limit?: number
  }

  /**
   * Taxon.parent
   */
  export type Taxon$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    where?: TaxonWhereInput
  }

  /**
   * Taxon.children
   */
  export type Taxon$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    where?: TaxonWhereInput
    orderBy?: TaxonOrderByWithRelationInput | TaxonOrderByWithRelationInput[]
    cursor?: TaxonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonScalarFieldEnum | TaxonScalarFieldEnum[]
  }

  /**
   * Taxon.synonyms
   */
  export type Taxon$synonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    where?: TaxonSynonymWhereInput
    orderBy?: TaxonSynonymOrderByWithRelationInput | TaxonSynonymOrderByWithRelationInput[]
    cursor?: TaxonSynonymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonSynonymScalarFieldEnum | TaxonSynonymScalarFieldEnum[]
  }

  /**
   * Taxon.commonNames
   */
  export type Taxon$commonNamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    where?: TaxonCommonNameWhereInput
    orderBy?: TaxonCommonNameOrderByWithRelationInput | TaxonCommonNameOrderByWithRelationInput[]
    cursor?: TaxonCommonNameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonCommonNameScalarFieldEnum | TaxonCommonNameScalarFieldEnum[]
  }

  /**
   * Taxon.images
   */
  export type Taxon$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    where?: TaxonImageWhereInput
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    cursor?: TaxonImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonImageScalarFieldEnum | TaxonImageScalarFieldEnum[]
  }

  /**
   * Taxon.provinces
   */
  export type Taxon$provincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    where?: TaxonProvinceWhereInput
    orderBy?: TaxonProvinceOrderByWithRelationInput | TaxonProvinceOrderByWithRelationInput[]
    cursor?: TaxonProvinceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonProvinceScalarFieldEnum | TaxonProvinceScalarFieldEnum[]
  }

  /**
   * Taxon.bookmarks
   */
  export type Taxon$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Taxon without action
   */
  export type TaxonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
  }


  /**
   * Model TaxonSynonym
   */

  export type AggregateTaxonSynonym = {
    _count: TaxonSynonymCountAggregateOutputType | null
    _avg: TaxonSynonymAvgAggregateOutputType | null
    _sum: TaxonSynonymSumAggregateOutputType | null
    _min: TaxonSynonymMinAggregateOutputType | null
    _max: TaxonSynonymMaxAggregateOutputType | null
  }

  export type TaxonSynonymAvgAggregateOutputType = {
    id: number | null
    taxonId: number | null
  }

  export type TaxonSynonymSumAggregateOutputType = {
    id: number | null
    taxonId: number | null
  }

  export type TaxonSynonymMinAggregateOutputType = {
    id: number | null
    taxonId: number | null
    scientificName: string | null
    sourceName: string | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonSynonymMaxAggregateOutputType = {
    id: number | null
    taxonId: number | null
    scientificName: string | null
    sourceName: string | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonSynonymCountAggregateOutputType = {
    id: number
    taxonId: number
    scientificName: number
    sourceName: number
    externalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxonSynonymAvgAggregateInputType = {
    id?: true
    taxonId?: true
  }

  export type TaxonSynonymSumAggregateInputType = {
    id?: true
    taxonId?: true
  }

  export type TaxonSynonymMinAggregateInputType = {
    id?: true
    taxonId?: true
    scientificName?: true
    sourceName?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonSynonymMaxAggregateInputType = {
    id?: true
    taxonId?: true
    scientificName?: true
    sourceName?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonSynonymCountAggregateInputType = {
    id?: true
    taxonId?: true
    scientificName?: true
    sourceName?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxonSynonymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonSynonym to aggregate.
     */
    where?: TaxonSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonSynonyms to fetch.
     */
    orderBy?: TaxonSynonymOrderByWithRelationInput | TaxonSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxonSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonSynonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxonSynonyms
    **/
    _count?: true | TaxonSynonymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxonSynonymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxonSynonymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonSynonymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonSynonymMaxAggregateInputType
  }

  export type GetTaxonSynonymAggregateType<T extends TaxonSynonymAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxonSynonym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxonSynonym[P]>
      : GetScalarType<T[P], AggregateTaxonSynonym[P]>
  }




  export type TaxonSynonymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonSynonymWhereInput
    orderBy?: TaxonSynonymOrderByWithAggregationInput | TaxonSynonymOrderByWithAggregationInput[]
    by: TaxonSynonymScalarFieldEnum[] | TaxonSynonymScalarFieldEnum
    having?: TaxonSynonymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonSynonymCountAggregateInputType | true
    _avg?: TaxonSynonymAvgAggregateInputType
    _sum?: TaxonSynonymSumAggregateInputType
    _min?: TaxonSynonymMinAggregateInputType
    _max?: TaxonSynonymMaxAggregateInputType
  }

  export type TaxonSynonymGroupByOutputType = {
    id: number
    taxonId: number | null
    scientificName: string
    sourceName: string | null
    externalId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaxonSynonymCountAggregateOutputType | null
    _avg: TaxonSynonymAvgAggregateOutputType | null
    _sum: TaxonSynonymSumAggregateOutputType | null
    _min: TaxonSynonymMinAggregateOutputType | null
    _max: TaxonSynonymMaxAggregateOutputType | null
  }

  type GetTaxonSynonymGroupByPayload<T extends TaxonSynonymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxonSynonymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonSynonymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonSynonymGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonSynonymGroupByOutputType[P]>
        }
      >
    >


  export type TaxonSynonymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    scientificName?: boolean
    sourceName?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonSynonym$taxonArgs<ExtArgs>
  }, ExtArgs["result"]["taxonSynonym"]>

  export type TaxonSynonymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    scientificName?: boolean
    sourceName?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonSynonym$taxonArgs<ExtArgs>
  }, ExtArgs["result"]["taxonSynonym"]>

  export type TaxonSynonymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    scientificName?: boolean
    sourceName?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonSynonym$taxonArgs<ExtArgs>
  }, ExtArgs["result"]["taxonSynonym"]>

  export type TaxonSynonymSelectScalar = {
    id?: boolean
    taxonId?: boolean
    scientificName?: boolean
    sourceName?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaxonSynonymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taxonId" | "scientificName" | "sourceName" | "externalId" | "createdAt" | "updatedAt", ExtArgs["result"]["taxonSynonym"]>
  export type TaxonSynonymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonSynonym$taxonArgs<ExtArgs>
  }
  export type TaxonSynonymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonSynonym$taxonArgs<ExtArgs>
  }
  export type TaxonSynonymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonSynonym$taxonArgs<ExtArgs>
  }

  export type $TaxonSynonymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxonSynonym"
    objects: {
      taxon: Prisma.$TaxonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taxonId: number | null
      scientificName: string
      sourceName: string | null
      externalId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taxonSynonym"]>
    composites: {}
  }

  type TaxonSynonymGetPayload<S extends boolean | null | undefined | TaxonSynonymDefaultArgs> = $Result.GetResult<Prisma.$TaxonSynonymPayload, S>

  type TaxonSynonymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxonSynonymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxonSynonymCountAggregateInputType | true
    }

  export interface TaxonSynonymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxonSynonym'], meta: { name: 'TaxonSynonym' } }
    /**
     * Find zero or one TaxonSynonym that matches the filter.
     * @param {TaxonSynonymFindUniqueArgs} args - Arguments to find a TaxonSynonym
     * @example
     * // Get one TaxonSynonym
     * const taxonSynonym = await prisma.taxonSynonym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonSynonymFindUniqueArgs>(args: SelectSubset<T, TaxonSynonymFindUniqueArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxonSynonym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonSynonymFindUniqueOrThrowArgs} args - Arguments to find a TaxonSynonym
     * @example
     * // Get one TaxonSynonym
     * const taxonSynonym = await prisma.taxonSynonym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonSynonymFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxonSynonymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonSynonym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymFindFirstArgs} args - Arguments to find a TaxonSynonym
     * @example
     * // Get one TaxonSynonym
     * const taxonSynonym = await prisma.taxonSynonym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonSynonymFindFirstArgs>(args?: SelectSubset<T, TaxonSynonymFindFirstArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonSynonym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymFindFirstOrThrowArgs} args - Arguments to find a TaxonSynonym
     * @example
     * // Get one TaxonSynonym
     * const taxonSynonym = await prisma.taxonSynonym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonSynonymFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxonSynonymFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxonSynonyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonSynonyms
     * const taxonSynonyms = await prisma.taxonSynonym.findMany()
     * 
     * // Get first 10 TaxonSynonyms
     * const taxonSynonyms = await prisma.taxonSynonym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxonSynonymWithIdOnly = await prisma.taxonSynonym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxonSynonymFindManyArgs>(args?: SelectSubset<T, TaxonSynonymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxonSynonym.
     * @param {TaxonSynonymCreateArgs} args - Arguments to create a TaxonSynonym.
     * @example
     * // Create one TaxonSynonym
     * const TaxonSynonym = await prisma.taxonSynonym.create({
     *   data: {
     *     // ... data to create a TaxonSynonym
     *   }
     * })
     * 
     */
    create<T extends TaxonSynonymCreateArgs>(args: SelectSubset<T, TaxonSynonymCreateArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxonSynonyms.
     * @param {TaxonSynonymCreateManyArgs} args - Arguments to create many TaxonSynonyms.
     * @example
     * // Create many TaxonSynonyms
     * const taxonSynonym = await prisma.taxonSynonym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxonSynonymCreateManyArgs>(args?: SelectSubset<T, TaxonSynonymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxonSynonyms and returns the data saved in the database.
     * @param {TaxonSynonymCreateManyAndReturnArgs} args - Arguments to create many TaxonSynonyms.
     * @example
     * // Create many TaxonSynonyms
     * const taxonSynonym = await prisma.taxonSynonym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxonSynonyms and only return the `id`
     * const taxonSynonymWithIdOnly = await prisma.taxonSynonym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxonSynonymCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxonSynonymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxonSynonym.
     * @param {TaxonSynonymDeleteArgs} args - Arguments to delete one TaxonSynonym.
     * @example
     * // Delete one TaxonSynonym
     * const TaxonSynonym = await prisma.taxonSynonym.delete({
     *   where: {
     *     // ... filter to delete one TaxonSynonym
     *   }
     * })
     * 
     */
    delete<T extends TaxonSynonymDeleteArgs>(args: SelectSubset<T, TaxonSynonymDeleteArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxonSynonym.
     * @param {TaxonSynonymUpdateArgs} args - Arguments to update one TaxonSynonym.
     * @example
     * // Update one TaxonSynonym
     * const taxonSynonym = await prisma.taxonSynonym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxonSynonymUpdateArgs>(args: SelectSubset<T, TaxonSynonymUpdateArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxonSynonyms.
     * @param {TaxonSynonymDeleteManyArgs} args - Arguments to filter TaxonSynonyms to delete.
     * @example
     * // Delete a few TaxonSynonyms
     * const { count } = await prisma.taxonSynonym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxonSynonymDeleteManyArgs>(args?: SelectSubset<T, TaxonSynonymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonSynonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonSynonyms
     * const taxonSynonym = await prisma.taxonSynonym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxonSynonymUpdateManyArgs>(args: SelectSubset<T, TaxonSynonymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonSynonyms and returns the data updated in the database.
     * @param {TaxonSynonymUpdateManyAndReturnArgs} args - Arguments to update many TaxonSynonyms.
     * @example
     * // Update many TaxonSynonyms
     * const taxonSynonym = await prisma.taxonSynonym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxonSynonyms and only return the `id`
     * const taxonSynonymWithIdOnly = await prisma.taxonSynonym.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxonSynonymUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxonSynonymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxonSynonym.
     * @param {TaxonSynonymUpsertArgs} args - Arguments to update or create a TaxonSynonym.
     * @example
     * // Update or create a TaxonSynonym
     * const taxonSynonym = await prisma.taxonSynonym.upsert({
     *   create: {
     *     // ... data to create a TaxonSynonym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonSynonym we want to update
     *   }
     * })
     */
    upsert<T extends TaxonSynonymUpsertArgs>(args: SelectSubset<T, TaxonSynonymUpsertArgs<ExtArgs>>): Prisma__TaxonSynonymClient<$Result.GetResult<Prisma.$TaxonSynonymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxonSynonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymCountArgs} args - Arguments to filter TaxonSynonyms to count.
     * @example
     * // Count the number of TaxonSynonyms
     * const count = await prisma.taxonSynonym.count({
     *   where: {
     *     // ... the filter for the TaxonSynonyms we want to count
     *   }
     * })
    **/
    count<T extends TaxonSynonymCountArgs>(
      args?: Subset<T, TaxonSynonymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonSynonymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxonSynonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonSynonymAggregateArgs>(args: Subset<T, TaxonSynonymAggregateArgs>): Prisma.PrismaPromise<GetTaxonSynonymAggregateType<T>>

    /**
     * Group by TaxonSynonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonSynonymGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TaxonSynonymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonSynonymGroupByArgs['orderBy'] }
        : { orderBy?: TaxonSynonymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonSynonymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonSynonymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxonSynonym model
   */
  readonly fields: TaxonSynonymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxonSynonym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxonSynonymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxon<T extends TaxonSynonym$taxonArgs<ExtArgs> = {}>(args?: Subset<T, TaxonSynonym$taxonArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxonSynonym model
   */
  interface TaxonSynonymFieldRefs {
    readonly id: FieldRef<"TaxonSynonym", 'Int'>
    readonly taxonId: FieldRef<"TaxonSynonym", 'Int'>
    readonly scientificName: FieldRef<"TaxonSynonym", 'String'>
    readonly sourceName: FieldRef<"TaxonSynonym", 'String'>
    readonly externalId: FieldRef<"TaxonSynonym", 'String'>
    readonly createdAt: FieldRef<"TaxonSynonym", 'DateTime'>
    readonly updatedAt: FieldRef<"TaxonSynonym", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxonSynonym findUnique
   */
  export type TaxonSynonymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * Filter, which TaxonSynonym to fetch.
     */
    where: TaxonSynonymWhereUniqueInput
  }

  /**
   * TaxonSynonym findUniqueOrThrow
   */
  export type TaxonSynonymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * Filter, which TaxonSynonym to fetch.
     */
    where: TaxonSynonymWhereUniqueInput
  }

  /**
   * TaxonSynonym findFirst
   */
  export type TaxonSynonymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * Filter, which TaxonSynonym to fetch.
     */
    where?: TaxonSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonSynonyms to fetch.
     */
    orderBy?: TaxonSynonymOrderByWithRelationInput | TaxonSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonSynonyms.
     */
    cursor?: TaxonSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonSynonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonSynonyms.
     */
    distinct?: TaxonSynonymScalarFieldEnum | TaxonSynonymScalarFieldEnum[]
  }

  /**
   * TaxonSynonym findFirstOrThrow
   */
  export type TaxonSynonymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * Filter, which TaxonSynonym to fetch.
     */
    where?: TaxonSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonSynonyms to fetch.
     */
    orderBy?: TaxonSynonymOrderByWithRelationInput | TaxonSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonSynonyms.
     */
    cursor?: TaxonSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonSynonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonSynonyms.
     */
    distinct?: TaxonSynonymScalarFieldEnum | TaxonSynonymScalarFieldEnum[]
  }

  /**
   * TaxonSynonym findMany
   */
  export type TaxonSynonymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * Filter, which TaxonSynonyms to fetch.
     */
    where?: TaxonSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonSynonyms to fetch.
     */
    orderBy?: TaxonSynonymOrderByWithRelationInput | TaxonSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxonSynonyms.
     */
    cursor?: TaxonSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonSynonyms.
     */
    skip?: number
    distinct?: TaxonSynonymScalarFieldEnum | TaxonSynonymScalarFieldEnum[]
  }

  /**
   * TaxonSynonym create
   */
  export type TaxonSynonymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * The data needed to create a TaxonSynonym.
     */
    data: XOR<TaxonSynonymCreateInput, TaxonSynonymUncheckedCreateInput>
  }

  /**
   * TaxonSynonym createMany
   */
  export type TaxonSynonymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonSynonyms.
     */
    data: TaxonSynonymCreateManyInput | TaxonSynonymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxonSynonym createManyAndReturn
   */
  export type TaxonSynonymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * The data used to create many TaxonSynonyms.
     */
    data: TaxonSynonymCreateManyInput | TaxonSynonymCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonSynonym update
   */
  export type TaxonSynonymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * The data needed to update a TaxonSynonym.
     */
    data: XOR<TaxonSynonymUpdateInput, TaxonSynonymUncheckedUpdateInput>
    /**
     * Choose, which TaxonSynonym to update.
     */
    where: TaxonSynonymWhereUniqueInput
  }

  /**
   * TaxonSynonym updateMany
   */
  export type TaxonSynonymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonSynonyms.
     */
    data: XOR<TaxonSynonymUpdateManyMutationInput, TaxonSynonymUncheckedUpdateManyInput>
    /**
     * Filter which TaxonSynonyms to update
     */
    where?: TaxonSynonymWhereInput
    /**
     * Limit how many TaxonSynonyms to update.
     */
    limit?: number
  }

  /**
   * TaxonSynonym updateManyAndReturn
   */
  export type TaxonSynonymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * The data used to update TaxonSynonyms.
     */
    data: XOR<TaxonSynonymUpdateManyMutationInput, TaxonSynonymUncheckedUpdateManyInput>
    /**
     * Filter which TaxonSynonyms to update
     */
    where?: TaxonSynonymWhereInput
    /**
     * Limit how many TaxonSynonyms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonSynonym upsert
   */
  export type TaxonSynonymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * The filter to search for the TaxonSynonym to update in case it exists.
     */
    where: TaxonSynonymWhereUniqueInput
    /**
     * In case the TaxonSynonym found by the `where` argument doesn't exist, create a new TaxonSynonym with this data.
     */
    create: XOR<TaxonSynonymCreateInput, TaxonSynonymUncheckedCreateInput>
    /**
     * In case the TaxonSynonym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxonSynonymUpdateInput, TaxonSynonymUncheckedUpdateInput>
  }

  /**
   * TaxonSynonym delete
   */
  export type TaxonSynonymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
    /**
     * Filter which TaxonSynonym to delete.
     */
    where: TaxonSynonymWhereUniqueInput
  }

  /**
   * TaxonSynonym deleteMany
   */
  export type TaxonSynonymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonSynonyms to delete
     */
    where?: TaxonSynonymWhereInput
    /**
     * Limit how many TaxonSynonyms to delete.
     */
    limit?: number
  }

  /**
   * TaxonSynonym.taxon
   */
  export type TaxonSynonym$taxonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taxon
     */
    select?: TaxonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taxon
     */
    omit?: TaxonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonInclude<ExtArgs> | null
    where?: TaxonWhereInput
  }

  /**
   * TaxonSynonym without action
   */
  export type TaxonSynonymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonSynonym
     */
    select?: TaxonSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonSynonym
     */
    omit?: TaxonSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonSynonymInclude<ExtArgs> | null
  }


  /**
   * Model TaxonCommonName
   */

  export type AggregateTaxonCommonName = {
    _count: TaxonCommonNameCountAggregateOutputType | null
    _avg: TaxonCommonNameAvgAggregateOutputType | null
    _sum: TaxonCommonNameSumAggregateOutputType | null
    _min: TaxonCommonNameMinAggregateOutputType | null
    _max: TaxonCommonNameMaxAggregateOutputType | null
  }

  export type TaxonCommonNameAvgAggregateOutputType = {
    id: number | null
    taxonId: number | null
  }

  export type TaxonCommonNameSumAggregateOutputType = {
    id: number | null
    taxonId: number | null
  }

  export type TaxonCommonNameMinAggregateOutputType = {
    id: number | null
    taxonId: number | null
    name: string | null
    language: string | null
    isPrimary: boolean | null
    regionNote: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonCommonNameMaxAggregateOutputType = {
    id: number | null
    taxonId: number | null
    name: string | null
    language: string | null
    isPrimary: boolean | null
    regionNote: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonCommonNameCountAggregateOutputType = {
    id: number
    taxonId: number
    name: number
    language: number
    isPrimary: number
    regionNote: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxonCommonNameAvgAggregateInputType = {
    id?: true
    taxonId?: true
  }

  export type TaxonCommonNameSumAggregateInputType = {
    id?: true
    taxonId?: true
  }

  export type TaxonCommonNameMinAggregateInputType = {
    id?: true
    taxonId?: true
    name?: true
    language?: true
    isPrimary?: true
    regionNote?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonCommonNameMaxAggregateInputType = {
    id?: true
    taxonId?: true
    name?: true
    language?: true
    isPrimary?: true
    regionNote?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonCommonNameCountAggregateInputType = {
    id?: true
    taxonId?: true
    name?: true
    language?: true
    isPrimary?: true
    regionNote?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxonCommonNameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonCommonName to aggregate.
     */
    where?: TaxonCommonNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonCommonNames to fetch.
     */
    orderBy?: TaxonCommonNameOrderByWithRelationInput | TaxonCommonNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxonCommonNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonCommonNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonCommonNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxonCommonNames
    **/
    _count?: true | TaxonCommonNameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxonCommonNameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxonCommonNameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonCommonNameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonCommonNameMaxAggregateInputType
  }

  export type GetTaxonCommonNameAggregateType<T extends TaxonCommonNameAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxonCommonName]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxonCommonName[P]>
      : GetScalarType<T[P], AggregateTaxonCommonName[P]>
  }




  export type TaxonCommonNameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonCommonNameWhereInput
    orderBy?: TaxonCommonNameOrderByWithAggregationInput | TaxonCommonNameOrderByWithAggregationInput[]
    by: TaxonCommonNameScalarFieldEnum[] | TaxonCommonNameScalarFieldEnum
    having?: TaxonCommonNameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonCommonNameCountAggregateInputType | true
    _avg?: TaxonCommonNameAvgAggregateInputType
    _sum?: TaxonCommonNameSumAggregateInputType
    _min?: TaxonCommonNameMinAggregateInputType
    _max?: TaxonCommonNameMaxAggregateInputType
  }

  export type TaxonCommonNameGroupByOutputType = {
    id: number
    taxonId: number
    name: string
    language: string | null
    isPrimary: boolean
    regionNote: string | null
    source: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaxonCommonNameCountAggregateOutputType | null
    _avg: TaxonCommonNameAvgAggregateOutputType | null
    _sum: TaxonCommonNameSumAggregateOutputType | null
    _min: TaxonCommonNameMinAggregateOutputType | null
    _max: TaxonCommonNameMaxAggregateOutputType | null
  }

  type GetTaxonCommonNameGroupByPayload<T extends TaxonCommonNameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxonCommonNameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonCommonNameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonCommonNameGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonCommonNameGroupByOutputType[P]>
        }
      >
    >


  export type TaxonCommonNameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    name?: boolean
    language?: boolean
    isPrimary?: boolean
    regionNote?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonCommonName"]>

  export type TaxonCommonNameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    name?: boolean
    language?: boolean
    isPrimary?: boolean
    regionNote?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonCommonName"]>

  export type TaxonCommonNameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    name?: boolean
    language?: boolean
    isPrimary?: boolean
    regionNote?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonCommonName"]>

  export type TaxonCommonNameSelectScalar = {
    id?: boolean
    taxonId?: boolean
    name?: boolean
    language?: boolean
    isPrimary?: boolean
    regionNote?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaxonCommonNameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taxonId" | "name" | "language" | "isPrimary" | "regionNote" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["taxonCommonName"]>
  export type TaxonCommonNameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }
  export type TaxonCommonNameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }
  export type TaxonCommonNameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }

  export type $TaxonCommonNamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxonCommonName"
    objects: {
      taxon: Prisma.$TaxonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taxonId: number
      name: string
      language: string | null
      isPrimary: boolean
      regionNote: string | null
      source: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taxonCommonName"]>
    composites: {}
  }

  type TaxonCommonNameGetPayload<S extends boolean | null | undefined | TaxonCommonNameDefaultArgs> = $Result.GetResult<Prisma.$TaxonCommonNamePayload, S>

  type TaxonCommonNameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxonCommonNameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxonCommonNameCountAggregateInputType | true
    }

  export interface TaxonCommonNameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxonCommonName'], meta: { name: 'TaxonCommonName' } }
    /**
     * Find zero or one TaxonCommonName that matches the filter.
     * @param {TaxonCommonNameFindUniqueArgs} args - Arguments to find a TaxonCommonName
     * @example
     * // Get one TaxonCommonName
     * const taxonCommonName = await prisma.taxonCommonName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonCommonNameFindUniqueArgs>(args: SelectSubset<T, TaxonCommonNameFindUniqueArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxonCommonName that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonCommonNameFindUniqueOrThrowArgs} args - Arguments to find a TaxonCommonName
     * @example
     * // Get one TaxonCommonName
     * const taxonCommonName = await prisma.taxonCommonName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonCommonNameFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxonCommonNameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonCommonName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameFindFirstArgs} args - Arguments to find a TaxonCommonName
     * @example
     * // Get one TaxonCommonName
     * const taxonCommonName = await prisma.taxonCommonName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonCommonNameFindFirstArgs>(args?: SelectSubset<T, TaxonCommonNameFindFirstArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonCommonName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameFindFirstOrThrowArgs} args - Arguments to find a TaxonCommonName
     * @example
     * // Get one TaxonCommonName
     * const taxonCommonName = await prisma.taxonCommonName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonCommonNameFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxonCommonNameFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxonCommonNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonCommonNames
     * const taxonCommonNames = await prisma.taxonCommonName.findMany()
     * 
     * // Get first 10 TaxonCommonNames
     * const taxonCommonNames = await prisma.taxonCommonName.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxonCommonNameWithIdOnly = await prisma.taxonCommonName.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxonCommonNameFindManyArgs>(args?: SelectSubset<T, TaxonCommonNameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxonCommonName.
     * @param {TaxonCommonNameCreateArgs} args - Arguments to create a TaxonCommonName.
     * @example
     * // Create one TaxonCommonName
     * const TaxonCommonName = await prisma.taxonCommonName.create({
     *   data: {
     *     // ... data to create a TaxonCommonName
     *   }
     * })
     * 
     */
    create<T extends TaxonCommonNameCreateArgs>(args: SelectSubset<T, TaxonCommonNameCreateArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxonCommonNames.
     * @param {TaxonCommonNameCreateManyArgs} args - Arguments to create many TaxonCommonNames.
     * @example
     * // Create many TaxonCommonNames
     * const taxonCommonName = await prisma.taxonCommonName.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxonCommonNameCreateManyArgs>(args?: SelectSubset<T, TaxonCommonNameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxonCommonNames and returns the data saved in the database.
     * @param {TaxonCommonNameCreateManyAndReturnArgs} args - Arguments to create many TaxonCommonNames.
     * @example
     * // Create many TaxonCommonNames
     * const taxonCommonName = await prisma.taxonCommonName.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxonCommonNames and only return the `id`
     * const taxonCommonNameWithIdOnly = await prisma.taxonCommonName.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxonCommonNameCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxonCommonNameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxonCommonName.
     * @param {TaxonCommonNameDeleteArgs} args - Arguments to delete one TaxonCommonName.
     * @example
     * // Delete one TaxonCommonName
     * const TaxonCommonName = await prisma.taxonCommonName.delete({
     *   where: {
     *     // ... filter to delete one TaxonCommonName
     *   }
     * })
     * 
     */
    delete<T extends TaxonCommonNameDeleteArgs>(args: SelectSubset<T, TaxonCommonNameDeleteArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxonCommonName.
     * @param {TaxonCommonNameUpdateArgs} args - Arguments to update one TaxonCommonName.
     * @example
     * // Update one TaxonCommonName
     * const taxonCommonName = await prisma.taxonCommonName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxonCommonNameUpdateArgs>(args: SelectSubset<T, TaxonCommonNameUpdateArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxonCommonNames.
     * @param {TaxonCommonNameDeleteManyArgs} args - Arguments to filter TaxonCommonNames to delete.
     * @example
     * // Delete a few TaxonCommonNames
     * const { count } = await prisma.taxonCommonName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxonCommonNameDeleteManyArgs>(args?: SelectSubset<T, TaxonCommonNameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonCommonNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonCommonNames
     * const taxonCommonName = await prisma.taxonCommonName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxonCommonNameUpdateManyArgs>(args: SelectSubset<T, TaxonCommonNameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonCommonNames and returns the data updated in the database.
     * @param {TaxonCommonNameUpdateManyAndReturnArgs} args - Arguments to update many TaxonCommonNames.
     * @example
     * // Update many TaxonCommonNames
     * const taxonCommonName = await prisma.taxonCommonName.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxonCommonNames and only return the `id`
     * const taxonCommonNameWithIdOnly = await prisma.taxonCommonName.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxonCommonNameUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxonCommonNameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxonCommonName.
     * @param {TaxonCommonNameUpsertArgs} args - Arguments to update or create a TaxonCommonName.
     * @example
     * // Update or create a TaxonCommonName
     * const taxonCommonName = await prisma.taxonCommonName.upsert({
     *   create: {
     *     // ... data to create a TaxonCommonName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonCommonName we want to update
     *   }
     * })
     */
    upsert<T extends TaxonCommonNameUpsertArgs>(args: SelectSubset<T, TaxonCommonNameUpsertArgs<ExtArgs>>): Prisma__TaxonCommonNameClient<$Result.GetResult<Prisma.$TaxonCommonNamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxonCommonNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameCountArgs} args - Arguments to filter TaxonCommonNames to count.
     * @example
     * // Count the number of TaxonCommonNames
     * const count = await prisma.taxonCommonName.count({
     *   where: {
     *     // ... the filter for the TaxonCommonNames we want to count
     *   }
     * })
    **/
    count<T extends TaxonCommonNameCountArgs>(
      args?: Subset<T, TaxonCommonNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonCommonNameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxonCommonName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonCommonNameAggregateArgs>(args: Subset<T, TaxonCommonNameAggregateArgs>): Prisma.PrismaPromise<GetTaxonCommonNameAggregateType<T>>

    /**
     * Group by TaxonCommonName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCommonNameGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TaxonCommonNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonCommonNameGroupByArgs['orderBy'] }
        : { orderBy?: TaxonCommonNameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonCommonNameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonCommonNameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxonCommonName model
   */
  readonly fields: TaxonCommonNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxonCommonName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxonCommonNameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxon<T extends TaxonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaxonDefaultArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxonCommonName model
   */
  interface TaxonCommonNameFieldRefs {
    readonly id: FieldRef<"TaxonCommonName", 'Int'>
    readonly taxonId: FieldRef<"TaxonCommonName", 'Int'>
    readonly name: FieldRef<"TaxonCommonName", 'String'>
    readonly language: FieldRef<"TaxonCommonName", 'String'>
    readonly isPrimary: FieldRef<"TaxonCommonName", 'Boolean'>
    readonly regionNote: FieldRef<"TaxonCommonName", 'String'>
    readonly source: FieldRef<"TaxonCommonName", 'String'>
    readonly createdAt: FieldRef<"TaxonCommonName", 'DateTime'>
    readonly updatedAt: FieldRef<"TaxonCommonName", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxonCommonName findUnique
   */
  export type TaxonCommonNameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * Filter, which TaxonCommonName to fetch.
     */
    where: TaxonCommonNameWhereUniqueInput
  }

  /**
   * TaxonCommonName findUniqueOrThrow
   */
  export type TaxonCommonNameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * Filter, which TaxonCommonName to fetch.
     */
    where: TaxonCommonNameWhereUniqueInput
  }

  /**
   * TaxonCommonName findFirst
   */
  export type TaxonCommonNameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * Filter, which TaxonCommonName to fetch.
     */
    where?: TaxonCommonNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonCommonNames to fetch.
     */
    orderBy?: TaxonCommonNameOrderByWithRelationInput | TaxonCommonNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonCommonNames.
     */
    cursor?: TaxonCommonNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonCommonNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonCommonNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonCommonNames.
     */
    distinct?: TaxonCommonNameScalarFieldEnum | TaxonCommonNameScalarFieldEnum[]
  }

  /**
   * TaxonCommonName findFirstOrThrow
   */
  export type TaxonCommonNameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * Filter, which TaxonCommonName to fetch.
     */
    where?: TaxonCommonNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonCommonNames to fetch.
     */
    orderBy?: TaxonCommonNameOrderByWithRelationInput | TaxonCommonNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonCommonNames.
     */
    cursor?: TaxonCommonNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonCommonNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonCommonNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonCommonNames.
     */
    distinct?: TaxonCommonNameScalarFieldEnum | TaxonCommonNameScalarFieldEnum[]
  }

  /**
   * TaxonCommonName findMany
   */
  export type TaxonCommonNameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * Filter, which TaxonCommonNames to fetch.
     */
    where?: TaxonCommonNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonCommonNames to fetch.
     */
    orderBy?: TaxonCommonNameOrderByWithRelationInput | TaxonCommonNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxonCommonNames.
     */
    cursor?: TaxonCommonNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonCommonNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonCommonNames.
     */
    skip?: number
    distinct?: TaxonCommonNameScalarFieldEnum | TaxonCommonNameScalarFieldEnum[]
  }

  /**
   * TaxonCommonName create
   */
  export type TaxonCommonNameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * The data needed to create a TaxonCommonName.
     */
    data: XOR<TaxonCommonNameCreateInput, TaxonCommonNameUncheckedCreateInput>
  }

  /**
   * TaxonCommonName createMany
   */
  export type TaxonCommonNameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonCommonNames.
     */
    data: TaxonCommonNameCreateManyInput | TaxonCommonNameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxonCommonName createManyAndReturn
   */
  export type TaxonCommonNameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * The data used to create many TaxonCommonNames.
     */
    data: TaxonCommonNameCreateManyInput | TaxonCommonNameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonCommonName update
   */
  export type TaxonCommonNameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * The data needed to update a TaxonCommonName.
     */
    data: XOR<TaxonCommonNameUpdateInput, TaxonCommonNameUncheckedUpdateInput>
    /**
     * Choose, which TaxonCommonName to update.
     */
    where: TaxonCommonNameWhereUniqueInput
  }

  /**
   * TaxonCommonName updateMany
   */
  export type TaxonCommonNameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonCommonNames.
     */
    data: XOR<TaxonCommonNameUpdateManyMutationInput, TaxonCommonNameUncheckedUpdateManyInput>
    /**
     * Filter which TaxonCommonNames to update
     */
    where?: TaxonCommonNameWhereInput
    /**
     * Limit how many TaxonCommonNames to update.
     */
    limit?: number
  }

  /**
   * TaxonCommonName updateManyAndReturn
   */
  export type TaxonCommonNameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * The data used to update TaxonCommonNames.
     */
    data: XOR<TaxonCommonNameUpdateManyMutationInput, TaxonCommonNameUncheckedUpdateManyInput>
    /**
     * Filter which TaxonCommonNames to update
     */
    where?: TaxonCommonNameWhereInput
    /**
     * Limit how many TaxonCommonNames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonCommonName upsert
   */
  export type TaxonCommonNameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * The filter to search for the TaxonCommonName to update in case it exists.
     */
    where: TaxonCommonNameWhereUniqueInput
    /**
     * In case the TaxonCommonName found by the `where` argument doesn't exist, create a new TaxonCommonName with this data.
     */
    create: XOR<TaxonCommonNameCreateInput, TaxonCommonNameUncheckedCreateInput>
    /**
     * In case the TaxonCommonName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxonCommonNameUpdateInput, TaxonCommonNameUncheckedUpdateInput>
  }

  /**
   * TaxonCommonName delete
   */
  export type TaxonCommonNameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
    /**
     * Filter which TaxonCommonName to delete.
     */
    where: TaxonCommonNameWhereUniqueInput
  }

  /**
   * TaxonCommonName deleteMany
   */
  export type TaxonCommonNameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonCommonNames to delete
     */
    where?: TaxonCommonNameWhereInput
    /**
     * Limit how many TaxonCommonNames to delete.
     */
    limit?: number
  }

  /**
   * TaxonCommonName without action
   */
  export type TaxonCommonNameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonCommonName
     */
    select?: TaxonCommonNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonCommonName
     */
    omit?: TaxonCommonNameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonCommonNameInclude<ExtArgs> | null
  }


  /**
   * Model TaxonImage
   */

  export type AggregateTaxonImage = {
    _count: TaxonImageCountAggregateOutputType | null
    _avg: TaxonImageAvgAggregateOutputType | null
    _sum: TaxonImageSumAggregateOutputType | null
    _min: TaxonImageMinAggregateOutputType | null
    _max: TaxonImageMaxAggregateOutputType | null
  }

  export type TaxonImageAvgAggregateOutputType = {
    id: number | null
    taxonId: number | null
    width: number | null
    height: number | null
    sortOrder: number | null
  }

  export type TaxonImageSumAggregateOutputType = {
    id: number | null
    taxonId: number | null
    width: number | null
    height: number | null
    sortOrder: number | null
  }

  export type TaxonImageMinAggregateOutputType = {
    id: number | null
    taxonId: number | null
    url: string | null
    storageKey: string | null
    externalSource: string | null
    externalId: string | null
    caption: string | null
    blurHash: string | null
    width: number | null
    height: number | null
    author: string | null
    license: string | null
    isPrimary: boolean | null
    sortOrder: number | null
    status: $Enums.ImageStatus | null
    recordNote: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
    contributorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonImageMaxAggregateOutputType = {
    id: number | null
    taxonId: number | null
    url: string | null
    storageKey: string | null
    externalSource: string | null
    externalId: string | null
    caption: string | null
    blurHash: string | null
    width: number | null
    height: number | null
    author: string | null
    license: string | null
    isPrimary: boolean | null
    sortOrder: number | null
    status: $Enums.ImageStatus | null
    recordNote: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
    contributorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxonImageCountAggregateOutputType = {
    id: number
    taxonId: number
    url: number
    storageKey: number
    externalSource: number
    externalId: number
    caption: number
    blurHash: number
    width: number
    height: number
    author: number
    license: number
    isPrimary: number
    sortOrder: number
    status: number
    recordNote: number
    reviewedAt: number
    reviewedBy: number
    contributorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxonImageAvgAggregateInputType = {
    id?: true
    taxonId?: true
    width?: true
    height?: true
    sortOrder?: true
  }

  export type TaxonImageSumAggregateInputType = {
    id?: true
    taxonId?: true
    width?: true
    height?: true
    sortOrder?: true
  }

  export type TaxonImageMinAggregateInputType = {
    id?: true
    taxonId?: true
    url?: true
    storageKey?: true
    externalSource?: true
    externalId?: true
    caption?: true
    blurHash?: true
    width?: true
    height?: true
    author?: true
    license?: true
    isPrimary?: true
    sortOrder?: true
    status?: true
    recordNote?: true
    reviewedAt?: true
    reviewedBy?: true
    contributorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonImageMaxAggregateInputType = {
    id?: true
    taxonId?: true
    url?: true
    storageKey?: true
    externalSource?: true
    externalId?: true
    caption?: true
    blurHash?: true
    width?: true
    height?: true
    author?: true
    license?: true
    isPrimary?: true
    sortOrder?: true
    status?: true
    recordNote?: true
    reviewedAt?: true
    reviewedBy?: true
    contributorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxonImageCountAggregateInputType = {
    id?: true
    taxonId?: true
    url?: true
    storageKey?: true
    externalSource?: true
    externalId?: true
    caption?: true
    blurHash?: true
    width?: true
    height?: true
    author?: true
    license?: true
    isPrimary?: true
    sortOrder?: true
    status?: true
    recordNote?: true
    reviewedAt?: true
    reviewedBy?: true
    contributorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxonImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonImage to aggregate.
     */
    where?: TaxonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxonImages
    **/
    _count?: true | TaxonImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxonImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxonImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonImageMaxAggregateInputType
  }

  export type GetTaxonImageAggregateType<T extends TaxonImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxonImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxonImage[P]>
      : GetScalarType<T[P], AggregateTaxonImage[P]>
  }




  export type TaxonImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageWhereInput
    orderBy?: TaxonImageOrderByWithAggregationInput | TaxonImageOrderByWithAggregationInput[]
    by: TaxonImageScalarFieldEnum[] | TaxonImageScalarFieldEnum
    having?: TaxonImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonImageCountAggregateInputType | true
    _avg?: TaxonImageAvgAggregateInputType
    _sum?: TaxonImageSumAggregateInputType
    _min?: TaxonImageMinAggregateInputType
    _max?: TaxonImageMaxAggregateInputType
  }

  export type TaxonImageGroupByOutputType = {
    id: number
    taxonId: number
    url: string
    storageKey: string | null
    externalSource: string | null
    externalId: string | null
    caption: string | null
    blurHash: string | null
    width: number | null
    height: number | null
    author: string | null
    license: string | null
    isPrimary: boolean
    sortOrder: number
    status: $Enums.ImageStatus
    recordNote: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
    contributorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaxonImageCountAggregateOutputType | null
    _avg: TaxonImageAvgAggregateOutputType | null
    _sum: TaxonImageSumAggregateOutputType | null
    _min: TaxonImageMinAggregateOutputType | null
    _max: TaxonImageMaxAggregateOutputType | null
  }

  type GetTaxonImageGroupByPayload<T extends TaxonImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxonImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonImageGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonImageGroupByOutputType[P]>
        }
      >
    >


  export type TaxonImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    url?: boolean
    storageKey?: boolean
    externalSource?: boolean
    externalId?: boolean
    caption?: boolean
    blurHash?: boolean
    width?: boolean
    height?: boolean
    author?: boolean
    license?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    status?: boolean
    recordNote?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    contributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    contributor?: boolean | TaxonImage$contributorArgs<ExtArgs>
    reviewer?: boolean | TaxonImage$reviewerArgs<ExtArgs>
    likes?: boolean | TaxonImage$likesArgs<ExtArgs>
    _count?: boolean | TaxonImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonImage"]>

  export type TaxonImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    url?: boolean
    storageKey?: boolean
    externalSource?: boolean
    externalId?: boolean
    caption?: boolean
    blurHash?: boolean
    width?: boolean
    height?: boolean
    author?: boolean
    license?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    status?: boolean
    recordNote?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    contributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    contributor?: boolean | TaxonImage$contributorArgs<ExtArgs>
    reviewer?: boolean | TaxonImage$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["taxonImage"]>

  export type TaxonImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxonId?: boolean
    url?: boolean
    storageKey?: boolean
    externalSource?: boolean
    externalId?: boolean
    caption?: boolean
    blurHash?: boolean
    width?: boolean
    height?: boolean
    author?: boolean
    license?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    status?: boolean
    recordNote?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    contributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    contributor?: boolean | TaxonImage$contributorArgs<ExtArgs>
    reviewer?: boolean | TaxonImage$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["taxonImage"]>

  export type TaxonImageSelectScalar = {
    id?: boolean
    taxonId?: boolean
    url?: boolean
    storageKey?: boolean
    externalSource?: boolean
    externalId?: boolean
    caption?: boolean
    blurHash?: boolean
    width?: boolean
    height?: boolean
    author?: boolean
    license?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    status?: boolean
    recordNote?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    contributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaxonImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taxonId" | "url" | "storageKey" | "externalSource" | "externalId" | "caption" | "blurHash" | "width" | "height" | "author" | "license" | "isPrimary" | "sortOrder" | "status" | "recordNote" | "reviewedAt" | "reviewedBy" | "contributorId" | "createdAt" | "updatedAt", ExtArgs["result"]["taxonImage"]>
  export type TaxonImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    contributor?: boolean | TaxonImage$contributorArgs<ExtArgs>
    reviewer?: boolean | TaxonImage$reviewerArgs<ExtArgs>
    likes?: boolean | TaxonImage$likesArgs<ExtArgs>
    _count?: boolean | TaxonImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaxonImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    contributor?: boolean | TaxonImage$contributorArgs<ExtArgs>
    reviewer?: boolean | TaxonImage$reviewerArgs<ExtArgs>
  }
  export type TaxonImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    contributor?: boolean | TaxonImage$contributorArgs<ExtArgs>
    reviewer?: boolean | TaxonImage$reviewerArgs<ExtArgs>
  }

  export type $TaxonImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxonImage"
    objects: {
      taxon: Prisma.$TaxonPayload<ExtArgs>
      contributor: Prisma.$UserPayload<ExtArgs> | null
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      likes: Prisma.$TaxonImageLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taxonId: number
      url: string
      storageKey: string | null
      externalSource: string | null
      externalId: string | null
      caption: string | null
      blurHash: string | null
      width: number | null
      height: number | null
      author: string | null
      license: string | null
      isPrimary: boolean
      sortOrder: number
      status: $Enums.ImageStatus
      recordNote: string | null
      reviewedAt: Date | null
      reviewedBy: string | null
      contributorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taxonImage"]>
    composites: {}
  }

  type TaxonImageGetPayload<S extends boolean | null | undefined | TaxonImageDefaultArgs> = $Result.GetResult<Prisma.$TaxonImagePayload, S>

  type TaxonImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxonImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxonImageCountAggregateInputType | true
    }

  export interface TaxonImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxonImage'], meta: { name: 'TaxonImage' } }
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
    findUnique<T extends TaxonImageFindUniqueArgs>(args: SelectSubset<T, TaxonImageFindUniqueArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends TaxonImageFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxonImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends TaxonImageFindFirstArgs>(args?: SelectSubset<T, TaxonImageFindFirstArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends TaxonImageFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxonImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends TaxonImageFindManyArgs>(args?: SelectSubset<T, TaxonImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends TaxonImageCreateArgs>(args: SelectSubset<T, TaxonImageCreateArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends TaxonImageCreateManyArgs>(args?: SelectSubset<T, TaxonImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends TaxonImageCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxonImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends TaxonImageDeleteArgs>(args: SelectSubset<T, TaxonImageDeleteArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends TaxonImageUpdateArgs>(args: SelectSubset<T, TaxonImageUpdateArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends TaxonImageDeleteManyArgs>(args?: SelectSubset<T, TaxonImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends TaxonImageUpdateManyArgs>(args: SelectSubset<T, TaxonImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends TaxonImageUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxonImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends TaxonImageUpsertArgs>(args: SelectSubset<T, TaxonImageUpsertArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    count<T extends TaxonImageCountArgs>(
      args?: Subset<T, TaxonImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonImageCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends TaxonImageAggregateArgs>(args: Subset<T, TaxonImageAggregateArgs>): Prisma.PrismaPromise<GetTaxonImageAggregateType<T>>

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
    groupBy<
      T extends TaxonImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonImageGroupByArgs['orderBy'] }
        : { orderBy?: TaxonImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__TaxonImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxon<T extends TaxonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaxonDefaultArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contributor<T extends TaxonImage$contributorArgs<ExtArgs> = {}>(args?: Subset<T, TaxonImage$contributorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends TaxonImage$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, TaxonImage$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    likes<T extends TaxonImage$likesArgs<ExtArgs> = {}>(args?: Subset<T, TaxonImage$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxonImage model
   */
  interface TaxonImageFieldRefs {
    readonly id: FieldRef<"TaxonImage", 'Int'>
    readonly taxonId: FieldRef<"TaxonImage", 'Int'>
    readonly url: FieldRef<"TaxonImage", 'String'>
    readonly storageKey: FieldRef<"TaxonImage", 'String'>
    readonly externalSource: FieldRef<"TaxonImage", 'String'>
    readonly externalId: FieldRef<"TaxonImage", 'String'>
    readonly caption: FieldRef<"TaxonImage", 'String'>
    readonly blurHash: FieldRef<"TaxonImage", 'String'>
    readonly width: FieldRef<"TaxonImage", 'Int'>
    readonly height: FieldRef<"TaxonImage", 'Int'>
    readonly author: FieldRef<"TaxonImage", 'String'>
    readonly license: FieldRef<"TaxonImage", 'String'>
    readonly isPrimary: FieldRef<"TaxonImage", 'Boolean'>
    readonly sortOrder: FieldRef<"TaxonImage", 'Int'>
    readonly status: FieldRef<"TaxonImage", 'ImageStatus'>
    readonly recordNote: FieldRef<"TaxonImage", 'String'>
    readonly reviewedAt: FieldRef<"TaxonImage", 'DateTime'>
    readonly reviewedBy: FieldRef<"TaxonImage", 'String'>
    readonly contributorId: FieldRef<"TaxonImage", 'String'>
    readonly createdAt: FieldRef<"TaxonImage", 'DateTime'>
    readonly updatedAt: FieldRef<"TaxonImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxonImage findUnique
   */
  export type TaxonImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImage to fetch.
     */
    where: TaxonImageWhereUniqueInput
  }

  /**
   * TaxonImage findUniqueOrThrow
   */
  export type TaxonImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImage to fetch.
     */
    where: TaxonImageWhereUniqueInput
  }

  /**
   * TaxonImage findFirst
   */
  export type TaxonImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImage to fetch.
     */
    where?: TaxonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonImages.
     */
    cursor?: TaxonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonImages.
     */
    distinct?: TaxonImageScalarFieldEnum | TaxonImageScalarFieldEnum[]
  }

  /**
   * TaxonImage findFirstOrThrow
   */
  export type TaxonImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImage to fetch.
     */
    where?: TaxonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonImages.
     */
    cursor?: TaxonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonImages.
     */
    distinct?: TaxonImageScalarFieldEnum | TaxonImageScalarFieldEnum[]
  }

  /**
   * TaxonImage findMany
   */
  export type TaxonImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImages to fetch.
     */
    where?: TaxonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImages to fetch.
     */
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxonImages.
     */
    cursor?: TaxonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImages.
     */
    skip?: number
    distinct?: TaxonImageScalarFieldEnum | TaxonImageScalarFieldEnum[]
  }

  /**
   * TaxonImage create
   */
  export type TaxonImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TaxonImage.
     */
    data: XOR<TaxonImageCreateInput, TaxonImageUncheckedCreateInput>
  }

  /**
   * TaxonImage createMany
   */
  export type TaxonImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonImages.
     */
    data: TaxonImageCreateManyInput | TaxonImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxonImage createManyAndReturn
   */
  export type TaxonImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * The data used to create many TaxonImages.
     */
    data: TaxonImageCreateManyInput | TaxonImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonImage update
   */
  export type TaxonImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TaxonImage.
     */
    data: XOR<TaxonImageUpdateInput, TaxonImageUncheckedUpdateInput>
    /**
     * Choose, which TaxonImage to update.
     */
    where: TaxonImageWhereUniqueInput
  }

  /**
   * TaxonImage updateMany
   */
  export type TaxonImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonImages.
     */
    data: XOR<TaxonImageUpdateManyMutationInput, TaxonImageUncheckedUpdateManyInput>
    /**
     * Filter which TaxonImages to update
     */
    where?: TaxonImageWhereInput
    /**
     * Limit how many TaxonImages to update.
     */
    limit?: number
  }

  /**
   * TaxonImage updateManyAndReturn
   */
  export type TaxonImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * The data used to update TaxonImages.
     */
    data: XOR<TaxonImageUpdateManyMutationInput, TaxonImageUncheckedUpdateManyInput>
    /**
     * Filter which TaxonImages to update
     */
    where?: TaxonImageWhereInput
    /**
     * Limit how many TaxonImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonImage upsert
   */
  export type TaxonImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TaxonImage to update in case it exists.
     */
    where: TaxonImageWhereUniqueInput
    /**
     * In case the TaxonImage found by the `where` argument doesn't exist, create a new TaxonImage with this data.
     */
    create: XOR<TaxonImageCreateInput, TaxonImageUncheckedCreateInput>
    /**
     * In case the TaxonImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxonImageUpdateInput, TaxonImageUncheckedUpdateInput>
  }

  /**
   * TaxonImage delete
   */
  export type TaxonImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    /**
     * Filter which TaxonImage to delete.
     */
    where: TaxonImageWhereUniqueInput
  }

  /**
   * TaxonImage deleteMany
   */
  export type TaxonImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonImages to delete
     */
    where?: TaxonImageWhereInput
    /**
     * Limit how many TaxonImages to delete.
     */
    limit?: number
  }

  /**
   * TaxonImage.contributor
   */
  export type TaxonImage$contributorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TaxonImage.reviewer
   */
  export type TaxonImage$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TaxonImage.likes
   */
  export type TaxonImage$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    where?: TaxonImageLikeWhereInput
    orderBy?: TaxonImageLikeOrderByWithRelationInput | TaxonImageLikeOrderByWithRelationInput[]
    cursor?: TaxonImageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonImageLikeScalarFieldEnum | TaxonImageLikeScalarFieldEnum[]
  }

  /**
   * TaxonImage without action
   */
  export type TaxonImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: number
    name: string
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    taxa?: boolean | Province$taxaArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["province"]>
  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxa?: boolean | Province$taxaArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      taxa: Prisma.$TaxonProvincePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {ProvinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {ProvinceUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProvinceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxa<T extends Province$taxaArgs<ExtArgs> = {}>(args?: Subset<T, Province$taxaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Province model
   */
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'Int'>
    readonly name: FieldRef<"Province", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province createManyAndReturn
   */
  export type ProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province updateManyAndReturn
   */
  export type ProvinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Province.taxa
   */
  export type Province$taxaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    where?: TaxonProvinceWhereInput
    orderBy?: TaxonProvinceOrderByWithRelationInput | TaxonProvinceOrderByWithRelationInput[]
    cursor?: TaxonProvinceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonProvinceScalarFieldEnum | TaxonProvinceScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model TaxonProvince
   */

  export type AggregateTaxonProvince = {
    _count: TaxonProvinceCountAggregateOutputType | null
    _avg: TaxonProvinceAvgAggregateOutputType | null
    _sum: TaxonProvinceSumAggregateOutputType | null
    _min: TaxonProvinceMinAggregateOutputType | null
    _max: TaxonProvinceMaxAggregateOutputType | null
  }

  export type TaxonProvinceAvgAggregateOutputType = {
    taxonId: number | null
    provinceId: number | null
  }

  export type TaxonProvinceSumAggregateOutputType = {
    taxonId: number | null
    provinceId: number | null
  }

  export type TaxonProvinceMinAggregateOutputType = {
    taxonId: number | null
    provinceId: number | null
  }

  export type TaxonProvinceMaxAggregateOutputType = {
    taxonId: number | null
    provinceId: number | null
  }

  export type TaxonProvinceCountAggregateOutputType = {
    taxonId: number
    provinceId: number
    _all: number
  }


  export type TaxonProvinceAvgAggregateInputType = {
    taxonId?: true
    provinceId?: true
  }

  export type TaxonProvinceSumAggregateInputType = {
    taxonId?: true
    provinceId?: true
  }

  export type TaxonProvinceMinAggregateInputType = {
    taxonId?: true
    provinceId?: true
  }

  export type TaxonProvinceMaxAggregateInputType = {
    taxonId?: true
    provinceId?: true
  }

  export type TaxonProvinceCountAggregateInputType = {
    taxonId?: true
    provinceId?: true
    _all?: true
  }

  export type TaxonProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonProvince to aggregate.
     */
    where?: TaxonProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonProvinces to fetch.
     */
    orderBy?: TaxonProvinceOrderByWithRelationInput | TaxonProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxonProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonProvinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxonProvinces
    **/
    _count?: true | TaxonProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxonProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxonProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonProvinceMaxAggregateInputType
  }

  export type GetTaxonProvinceAggregateType<T extends TaxonProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxonProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxonProvince[P]>
      : GetScalarType<T[P], AggregateTaxonProvince[P]>
  }




  export type TaxonProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonProvinceWhereInput
    orderBy?: TaxonProvinceOrderByWithAggregationInput | TaxonProvinceOrderByWithAggregationInput[]
    by: TaxonProvinceScalarFieldEnum[] | TaxonProvinceScalarFieldEnum
    having?: TaxonProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonProvinceCountAggregateInputType | true
    _avg?: TaxonProvinceAvgAggregateInputType
    _sum?: TaxonProvinceSumAggregateInputType
    _min?: TaxonProvinceMinAggregateInputType
    _max?: TaxonProvinceMaxAggregateInputType
  }

  export type TaxonProvinceGroupByOutputType = {
    taxonId: number
    provinceId: number
    _count: TaxonProvinceCountAggregateOutputType | null
    _avg: TaxonProvinceAvgAggregateOutputType | null
    _sum: TaxonProvinceSumAggregateOutputType | null
    _min: TaxonProvinceMinAggregateOutputType | null
    _max: TaxonProvinceMaxAggregateOutputType | null
  }

  type GetTaxonProvinceGroupByPayload<T extends TaxonProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxonProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonProvinceGroupByOutputType[P]>
        }
      >
    >


  export type TaxonProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taxonId?: boolean
    provinceId?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonProvince"]>

  export type TaxonProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taxonId?: boolean
    provinceId?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonProvince"]>

  export type TaxonProvinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taxonId?: boolean
    provinceId?: boolean
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonProvince"]>

  export type TaxonProvinceSelectScalar = {
    taxonId?: boolean
    provinceId?: boolean
  }

  export type TaxonProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taxonId" | "provinceId", ExtArgs["result"]["taxonProvince"]>
  export type TaxonProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type TaxonProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type TaxonProvinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $TaxonProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxonProvince"
    objects: {
      taxon: Prisma.$TaxonPayload<ExtArgs>
      province: Prisma.$ProvincePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taxonId: number
      provinceId: number
    }, ExtArgs["result"]["taxonProvince"]>
    composites: {}
  }

  type TaxonProvinceGetPayload<S extends boolean | null | undefined | TaxonProvinceDefaultArgs> = $Result.GetResult<Prisma.$TaxonProvincePayload, S>

  type TaxonProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxonProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxonProvinceCountAggregateInputType | true
    }

  export interface TaxonProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxonProvince'], meta: { name: 'TaxonProvince' } }
    /**
     * Find zero or one TaxonProvince that matches the filter.
     * @param {TaxonProvinceFindUniqueArgs} args - Arguments to find a TaxonProvince
     * @example
     * // Get one TaxonProvince
     * const taxonProvince = await prisma.taxonProvince.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonProvinceFindUniqueArgs>(args: SelectSubset<T, TaxonProvinceFindUniqueArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxonProvince that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonProvinceFindUniqueOrThrowArgs} args - Arguments to find a TaxonProvince
     * @example
     * // Get one TaxonProvince
     * const taxonProvince = await prisma.taxonProvince.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxonProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonProvince that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceFindFirstArgs} args - Arguments to find a TaxonProvince
     * @example
     * // Get one TaxonProvince
     * const taxonProvince = await prisma.taxonProvince.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonProvinceFindFirstArgs>(args?: SelectSubset<T, TaxonProvinceFindFirstArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonProvince that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceFindFirstOrThrowArgs} args - Arguments to find a TaxonProvince
     * @example
     * // Get one TaxonProvince
     * const taxonProvince = await prisma.taxonProvince.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxonProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxonProvinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonProvinces
     * const taxonProvinces = await prisma.taxonProvince.findMany()
     * 
     * // Get first 10 TaxonProvinces
     * const taxonProvinces = await prisma.taxonProvince.findMany({ take: 10 })
     * 
     * // Only select the `taxonId`
     * const taxonProvinceWithTaxonIdOnly = await prisma.taxonProvince.findMany({ select: { taxonId: true } })
     * 
     */
    findMany<T extends TaxonProvinceFindManyArgs>(args?: SelectSubset<T, TaxonProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxonProvince.
     * @param {TaxonProvinceCreateArgs} args - Arguments to create a TaxonProvince.
     * @example
     * // Create one TaxonProvince
     * const TaxonProvince = await prisma.taxonProvince.create({
     *   data: {
     *     // ... data to create a TaxonProvince
     *   }
     * })
     * 
     */
    create<T extends TaxonProvinceCreateArgs>(args: SelectSubset<T, TaxonProvinceCreateArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxonProvinces.
     * @param {TaxonProvinceCreateManyArgs} args - Arguments to create many TaxonProvinces.
     * @example
     * // Create many TaxonProvinces
     * const taxonProvince = await prisma.taxonProvince.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxonProvinceCreateManyArgs>(args?: SelectSubset<T, TaxonProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxonProvinces and returns the data saved in the database.
     * @param {TaxonProvinceCreateManyAndReturnArgs} args - Arguments to create many TaxonProvinces.
     * @example
     * // Create many TaxonProvinces
     * const taxonProvince = await prisma.taxonProvince.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxonProvinces and only return the `taxonId`
     * const taxonProvinceWithTaxonIdOnly = await prisma.taxonProvince.createManyAndReturn({
     *   select: { taxonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxonProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxonProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxonProvince.
     * @param {TaxonProvinceDeleteArgs} args - Arguments to delete one TaxonProvince.
     * @example
     * // Delete one TaxonProvince
     * const TaxonProvince = await prisma.taxonProvince.delete({
     *   where: {
     *     // ... filter to delete one TaxonProvince
     *   }
     * })
     * 
     */
    delete<T extends TaxonProvinceDeleteArgs>(args: SelectSubset<T, TaxonProvinceDeleteArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxonProvince.
     * @param {TaxonProvinceUpdateArgs} args - Arguments to update one TaxonProvince.
     * @example
     * // Update one TaxonProvince
     * const taxonProvince = await prisma.taxonProvince.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxonProvinceUpdateArgs>(args: SelectSubset<T, TaxonProvinceUpdateArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxonProvinces.
     * @param {TaxonProvinceDeleteManyArgs} args - Arguments to filter TaxonProvinces to delete.
     * @example
     * // Delete a few TaxonProvinces
     * const { count } = await prisma.taxonProvince.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxonProvinceDeleteManyArgs>(args?: SelectSubset<T, TaxonProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonProvinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonProvinces
     * const taxonProvince = await prisma.taxonProvince.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxonProvinceUpdateManyArgs>(args: SelectSubset<T, TaxonProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonProvinces and returns the data updated in the database.
     * @param {TaxonProvinceUpdateManyAndReturnArgs} args - Arguments to update many TaxonProvinces.
     * @example
     * // Update many TaxonProvinces
     * const taxonProvince = await prisma.taxonProvince.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxonProvinces and only return the `taxonId`
     * const taxonProvinceWithTaxonIdOnly = await prisma.taxonProvince.updateManyAndReturn({
     *   select: { taxonId: true },
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
    updateManyAndReturn<T extends TaxonProvinceUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxonProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxonProvince.
     * @param {TaxonProvinceUpsertArgs} args - Arguments to update or create a TaxonProvince.
     * @example
     * // Update or create a TaxonProvince
     * const taxonProvince = await prisma.taxonProvince.upsert({
     *   create: {
     *     // ... data to create a TaxonProvince
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonProvince we want to update
     *   }
     * })
     */
    upsert<T extends TaxonProvinceUpsertArgs>(args: SelectSubset<T, TaxonProvinceUpsertArgs<ExtArgs>>): Prisma__TaxonProvinceClient<$Result.GetResult<Prisma.$TaxonProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxonProvinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceCountArgs} args - Arguments to filter TaxonProvinces to count.
     * @example
     * // Count the number of TaxonProvinces
     * const count = await prisma.taxonProvince.count({
     *   where: {
     *     // ... the filter for the TaxonProvinces we want to count
     *   }
     * })
    **/
    count<T extends TaxonProvinceCountArgs>(
      args?: Subset<T, TaxonProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxonProvince.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonProvinceAggregateArgs>(args: Subset<T, TaxonProvinceAggregateArgs>): Prisma.PrismaPromise<GetTaxonProvinceAggregateType<T>>

    /**
     * Group by TaxonProvince.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonProvinceGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TaxonProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonProvinceGroupByArgs['orderBy'] }
        : { orderBy?: TaxonProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxonProvince model
   */
  readonly fields: TaxonProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxonProvince.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxonProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxon<T extends TaxonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaxonDefaultArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxonProvince model
   */
  interface TaxonProvinceFieldRefs {
    readonly taxonId: FieldRef<"TaxonProvince", 'Int'>
    readonly provinceId: FieldRef<"TaxonProvince", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaxonProvince findUnique
   */
  export type TaxonProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * Filter, which TaxonProvince to fetch.
     */
    where: TaxonProvinceWhereUniqueInput
  }

  /**
   * TaxonProvince findUniqueOrThrow
   */
  export type TaxonProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * Filter, which TaxonProvince to fetch.
     */
    where: TaxonProvinceWhereUniqueInput
  }

  /**
   * TaxonProvince findFirst
   */
  export type TaxonProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * Filter, which TaxonProvince to fetch.
     */
    where?: TaxonProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonProvinces to fetch.
     */
    orderBy?: TaxonProvinceOrderByWithRelationInput | TaxonProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonProvinces.
     */
    cursor?: TaxonProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonProvinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonProvinces.
     */
    distinct?: TaxonProvinceScalarFieldEnum | TaxonProvinceScalarFieldEnum[]
  }

  /**
   * TaxonProvince findFirstOrThrow
   */
  export type TaxonProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * Filter, which TaxonProvince to fetch.
     */
    where?: TaxonProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonProvinces to fetch.
     */
    orderBy?: TaxonProvinceOrderByWithRelationInput | TaxonProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonProvinces.
     */
    cursor?: TaxonProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonProvinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonProvinces.
     */
    distinct?: TaxonProvinceScalarFieldEnum | TaxonProvinceScalarFieldEnum[]
  }

  /**
   * TaxonProvince findMany
   */
  export type TaxonProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * Filter, which TaxonProvinces to fetch.
     */
    where?: TaxonProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonProvinces to fetch.
     */
    orderBy?: TaxonProvinceOrderByWithRelationInput | TaxonProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxonProvinces.
     */
    cursor?: TaxonProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonProvinces.
     */
    skip?: number
    distinct?: TaxonProvinceScalarFieldEnum | TaxonProvinceScalarFieldEnum[]
  }

  /**
   * TaxonProvince create
   */
  export type TaxonProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a TaxonProvince.
     */
    data: XOR<TaxonProvinceCreateInput, TaxonProvinceUncheckedCreateInput>
  }

  /**
   * TaxonProvince createMany
   */
  export type TaxonProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonProvinces.
     */
    data: TaxonProvinceCreateManyInput | TaxonProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxonProvince createManyAndReturn
   */
  export type TaxonProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * The data used to create many TaxonProvinces.
     */
    data: TaxonProvinceCreateManyInput | TaxonProvinceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonProvince update
   */
  export type TaxonProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a TaxonProvince.
     */
    data: XOR<TaxonProvinceUpdateInput, TaxonProvinceUncheckedUpdateInput>
    /**
     * Choose, which TaxonProvince to update.
     */
    where: TaxonProvinceWhereUniqueInput
  }

  /**
   * TaxonProvince updateMany
   */
  export type TaxonProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonProvinces.
     */
    data: XOR<TaxonProvinceUpdateManyMutationInput, TaxonProvinceUncheckedUpdateManyInput>
    /**
     * Filter which TaxonProvinces to update
     */
    where?: TaxonProvinceWhereInput
    /**
     * Limit how many TaxonProvinces to update.
     */
    limit?: number
  }

  /**
   * TaxonProvince updateManyAndReturn
   */
  export type TaxonProvinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * The data used to update TaxonProvinces.
     */
    data: XOR<TaxonProvinceUpdateManyMutationInput, TaxonProvinceUncheckedUpdateManyInput>
    /**
     * Filter which TaxonProvinces to update
     */
    where?: TaxonProvinceWhereInput
    /**
     * Limit how many TaxonProvinces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonProvince upsert
   */
  export type TaxonProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the TaxonProvince to update in case it exists.
     */
    where: TaxonProvinceWhereUniqueInput
    /**
     * In case the TaxonProvince found by the `where` argument doesn't exist, create a new TaxonProvince with this data.
     */
    create: XOR<TaxonProvinceCreateInput, TaxonProvinceUncheckedCreateInput>
    /**
     * In case the TaxonProvince was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxonProvinceUpdateInput, TaxonProvinceUncheckedUpdateInput>
  }

  /**
   * TaxonProvince delete
   */
  export type TaxonProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
    /**
     * Filter which TaxonProvince to delete.
     */
    where: TaxonProvinceWhereUniqueInput
  }

  /**
   * TaxonProvince deleteMany
   */
  export type TaxonProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonProvinces to delete
     */
    where?: TaxonProvinceWhereInput
    /**
     * Limit how many TaxonProvinces to delete.
     */
    limit?: number
  }

  /**
   * TaxonProvince without action
   */
  export type TaxonProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonProvince
     */
    select?: TaxonProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonProvince
     */
    omit?: TaxonProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonProvinceInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    displayName: number
    avatarUrl: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    avatarUrl?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    avatarUrl?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    avatarUrl?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    displayName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    uploadedImages?: boolean | User$uploadedImagesArgs<ExtArgs>
    reviewedImages?: boolean | User$reviewedImagesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    imageLikes?: boolean | User$imageLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "displayName" | "avatarUrl" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    uploadedImages?: boolean | User$uploadedImagesArgs<ExtArgs>
    reviewedImages?: boolean | User$reviewedImagesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    imageLikes?: boolean | User$imageLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      uploadedImages: Prisma.$TaxonImagePayload<ExtArgs>[]
      reviewedImages: Prisma.$TaxonImagePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      imageLikes: Prisma.$TaxonImageLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      displayName: string | null
      avatarUrl: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadedImages<T extends User$uploadedImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedImages<T extends User$reviewedImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imageLikes<T extends User$imageLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$imageLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User.uploadedImages
   */
  export type User$uploadedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    where?: TaxonImageWhereInput
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    cursor?: TaxonImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonImageScalarFieldEnum | TaxonImageScalarFieldEnum[]
  }

  /**
   * User.reviewedImages
   */
  export type User$reviewedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImage
     */
    select?: TaxonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImage
     */
    omit?: TaxonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageInclude<ExtArgs> | null
    where?: TaxonImageWhereInput
    orderBy?: TaxonImageOrderByWithRelationInput | TaxonImageOrderByWithRelationInput[]
    cursor?: TaxonImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonImageScalarFieldEnum | TaxonImageScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.imageLikes
   */
  export type User$imageLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    where?: TaxonImageLikeWhereInput
    orderBy?: TaxonImageLikeOrderByWithRelationInput | TaxonImageLikeOrderByWithRelationInput[]
    cursor?: TaxonImageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxonImageLikeScalarFieldEnum | TaxonImageLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    userAgent: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    userAgent: string | null
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "userAgent" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      userAgent: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly userAgent: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    provider: string
    providerAccountId: string
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      providerAccountId: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkAvgAggregateOutputType = {
    id: number | null
    taxonId: number | null
  }

  export type BookmarkSumAggregateOutputType = {
    id: number | null
    taxonId: number | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: number | null
    userId: string | null
    taxonId: number | null
    createdAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    taxonId: number | null
    createdAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    taxonId: number
    createdAt: number
    _all: number
  }


  export type BookmarkAvgAggregateInputType = {
    id?: true
    taxonId?: true
  }

  export type BookmarkSumAggregateInputType = {
    id?: true
    taxonId?: true
  }

  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    taxonId?: true
    createdAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    taxonId?: true
    createdAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    taxonId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _avg?: BookmarkAvgAggregateInputType
    _sum?: BookmarkSumAggregateInputType
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: number
    userId: string
    taxonId: number
    createdAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taxonId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taxonId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taxonId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    taxonId?: boolean
    createdAt?: boolean
  }

  export type BookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "taxonId" | "createdAt", ExtArgs["result"]["bookmark"]>
  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    taxon?: boolean | TaxonDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      taxon: Prisma.$TaxonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      taxonId: number
      createdAt: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarkUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taxon<T extends TaxonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaxonDefaultArgs<ExtArgs>>): Prisma__TaxonClient<$Result.GetResult<Prisma.$TaxonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookmark model
   */
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'Int'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly taxonId: FieldRef<"Bookmark", 'Int'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmark updateManyAndReturn
   */
  export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
  }


  /**
   * Model TaxonImageLike
   */

  export type AggregateTaxonImageLike = {
    _count: TaxonImageLikeCountAggregateOutputType | null
    _avg: TaxonImageLikeAvgAggregateOutputType | null
    _sum: TaxonImageLikeSumAggregateOutputType | null
    _min: TaxonImageLikeMinAggregateOutputType | null
    _max: TaxonImageLikeMaxAggregateOutputType | null
  }

  export type TaxonImageLikeAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type TaxonImageLikeSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type TaxonImageLikeMinAggregateOutputType = {
    id: number | null
    userId: string | null
    imageId: number | null
    createdAt: Date | null
  }

  export type TaxonImageLikeMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    imageId: number | null
    createdAt: Date | null
  }

  export type TaxonImageLikeCountAggregateOutputType = {
    id: number
    userId: number
    imageId: number
    createdAt: number
    _all: number
  }


  export type TaxonImageLikeAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type TaxonImageLikeSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type TaxonImageLikeMinAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type TaxonImageLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type TaxonImageLikeCountAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
    _all?: true
  }

  export type TaxonImageLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonImageLike to aggregate.
     */
    where?: TaxonImageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImageLikes to fetch.
     */
    orderBy?: TaxonImageLikeOrderByWithRelationInput | TaxonImageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxonImageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxonImageLikes
    **/
    _count?: true | TaxonImageLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxonImageLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxonImageLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonImageLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonImageLikeMaxAggregateInputType
  }

  export type GetTaxonImageLikeAggregateType<T extends TaxonImageLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxonImageLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxonImageLike[P]>
      : GetScalarType<T[P], AggregateTaxonImageLike[P]>
  }




  export type TaxonImageLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxonImageLikeWhereInput
    orderBy?: TaxonImageLikeOrderByWithAggregationInput | TaxonImageLikeOrderByWithAggregationInput[]
    by: TaxonImageLikeScalarFieldEnum[] | TaxonImageLikeScalarFieldEnum
    having?: TaxonImageLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonImageLikeCountAggregateInputType | true
    _avg?: TaxonImageLikeAvgAggregateInputType
    _sum?: TaxonImageLikeSumAggregateInputType
    _min?: TaxonImageLikeMinAggregateInputType
    _max?: TaxonImageLikeMaxAggregateInputType
  }

  export type TaxonImageLikeGroupByOutputType = {
    id: number
    userId: string
    imageId: number
    createdAt: Date
    _count: TaxonImageLikeCountAggregateOutputType | null
    _avg: TaxonImageLikeAvgAggregateOutputType | null
    _sum: TaxonImageLikeSumAggregateOutputType | null
    _min: TaxonImageLikeMinAggregateOutputType | null
    _max: TaxonImageLikeMaxAggregateOutputType | null
  }

  type GetTaxonImageLikeGroupByPayload<T extends TaxonImageLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxonImageLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonImageLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonImageLikeGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonImageLikeGroupByOutputType[P]>
        }
      >
    >


  export type TaxonImageLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | TaxonImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonImageLike"]>

  export type TaxonImageLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | TaxonImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonImageLike"]>

  export type TaxonImageLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | TaxonImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxonImageLike"]>

  export type TaxonImageLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
  }

  export type TaxonImageLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageId" | "createdAt", ExtArgs["result"]["taxonImageLike"]>
  export type TaxonImageLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | TaxonImageDefaultArgs<ExtArgs>
  }
  export type TaxonImageLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | TaxonImageDefaultArgs<ExtArgs>
  }
  export type TaxonImageLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | TaxonImageDefaultArgs<ExtArgs>
  }

  export type $TaxonImageLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxonImageLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      image: Prisma.$TaxonImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      imageId: number
      createdAt: Date
    }, ExtArgs["result"]["taxonImageLike"]>
    composites: {}
  }

  type TaxonImageLikeGetPayload<S extends boolean | null | undefined | TaxonImageLikeDefaultArgs> = $Result.GetResult<Prisma.$TaxonImageLikePayload, S>

  type TaxonImageLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxonImageLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxonImageLikeCountAggregateInputType | true
    }

  export interface TaxonImageLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxonImageLike'], meta: { name: 'TaxonImageLike' } }
    /**
     * Find zero or one TaxonImageLike that matches the filter.
     * @param {TaxonImageLikeFindUniqueArgs} args - Arguments to find a TaxonImageLike
     * @example
     * // Get one TaxonImageLike
     * const taxonImageLike = await prisma.taxonImageLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxonImageLikeFindUniqueArgs>(args: SelectSubset<T, TaxonImageLikeFindUniqueArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxonImageLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxonImageLikeFindUniqueOrThrowArgs} args - Arguments to find a TaxonImageLike
     * @example
     * // Get one TaxonImageLike
     * const taxonImageLike = await prisma.taxonImageLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxonImageLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxonImageLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonImageLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeFindFirstArgs} args - Arguments to find a TaxonImageLike
     * @example
     * // Get one TaxonImageLike
     * const taxonImageLike = await prisma.taxonImageLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxonImageLikeFindFirstArgs>(args?: SelectSubset<T, TaxonImageLikeFindFirstArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxonImageLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeFindFirstOrThrowArgs} args - Arguments to find a TaxonImageLike
     * @example
     * // Get one TaxonImageLike
     * const taxonImageLike = await prisma.taxonImageLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxonImageLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxonImageLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxonImageLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxonImageLikes
     * const taxonImageLikes = await prisma.taxonImageLike.findMany()
     * 
     * // Get first 10 TaxonImageLikes
     * const taxonImageLikes = await prisma.taxonImageLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxonImageLikeWithIdOnly = await prisma.taxonImageLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxonImageLikeFindManyArgs>(args?: SelectSubset<T, TaxonImageLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxonImageLike.
     * @param {TaxonImageLikeCreateArgs} args - Arguments to create a TaxonImageLike.
     * @example
     * // Create one TaxonImageLike
     * const TaxonImageLike = await prisma.taxonImageLike.create({
     *   data: {
     *     // ... data to create a TaxonImageLike
     *   }
     * })
     * 
     */
    create<T extends TaxonImageLikeCreateArgs>(args: SelectSubset<T, TaxonImageLikeCreateArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxonImageLikes.
     * @param {TaxonImageLikeCreateManyArgs} args - Arguments to create many TaxonImageLikes.
     * @example
     * // Create many TaxonImageLikes
     * const taxonImageLike = await prisma.taxonImageLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxonImageLikeCreateManyArgs>(args?: SelectSubset<T, TaxonImageLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxonImageLikes and returns the data saved in the database.
     * @param {TaxonImageLikeCreateManyAndReturnArgs} args - Arguments to create many TaxonImageLikes.
     * @example
     * // Create many TaxonImageLikes
     * const taxonImageLike = await prisma.taxonImageLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxonImageLikes and only return the `id`
     * const taxonImageLikeWithIdOnly = await prisma.taxonImageLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxonImageLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxonImageLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxonImageLike.
     * @param {TaxonImageLikeDeleteArgs} args - Arguments to delete one TaxonImageLike.
     * @example
     * // Delete one TaxonImageLike
     * const TaxonImageLike = await prisma.taxonImageLike.delete({
     *   where: {
     *     // ... filter to delete one TaxonImageLike
     *   }
     * })
     * 
     */
    delete<T extends TaxonImageLikeDeleteArgs>(args: SelectSubset<T, TaxonImageLikeDeleteArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxonImageLike.
     * @param {TaxonImageLikeUpdateArgs} args - Arguments to update one TaxonImageLike.
     * @example
     * // Update one TaxonImageLike
     * const taxonImageLike = await prisma.taxonImageLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxonImageLikeUpdateArgs>(args: SelectSubset<T, TaxonImageLikeUpdateArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxonImageLikes.
     * @param {TaxonImageLikeDeleteManyArgs} args - Arguments to filter TaxonImageLikes to delete.
     * @example
     * // Delete a few TaxonImageLikes
     * const { count } = await prisma.taxonImageLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxonImageLikeDeleteManyArgs>(args?: SelectSubset<T, TaxonImageLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonImageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxonImageLikes
     * const taxonImageLike = await prisma.taxonImageLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxonImageLikeUpdateManyArgs>(args: SelectSubset<T, TaxonImageLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxonImageLikes and returns the data updated in the database.
     * @param {TaxonImageLikeUpdateManyAndReturnArgs} args - Arguments to update many TaxonImageLikes.
     * @example
     * // Update many TaxonImageLikes
     * const taxonImageLike = await prisma.taxonImageLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxonImageLikes and only return the `id`
     * const taxonImageLikeWithIdOnly = await prisma.taxonImageLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxonImageLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxonImageLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxonImageLike.
     * @param {TaxonImageLikeUpsertArgs} args - Arguments to update or create a TaxonImageLike.
     * @example
     * // Update or create a TaxonImageLike
     * const taxonImageLike = await prisma.taxonImageLike.upsert({
     *   create: {
     *     // ... data to create a TaxonImageLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxonImageLike we want to update
     *   }
     * })
     */
    upsert<T extends TaxonImageLikeUpsertArgs>(args: SelectSubset<T, TaxonImageLikeUpsertArgs<ExtArgs>>): Prisma__TaxonImageLikeClient<$Result.GetResult<Prisma.$TaxonImageLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxonImageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeCountArgs} args - Arguments to filter TaxonImageLikes to count.
     * @example
     * // Count the number of TaxonImageLikes
     * const count = await prisma.taxonImageLike.count({
     *   where: {
     *     // ... the filter for the TaxonImageLikes we want to count
     *   }
     * })
    **/
    count<T extends TaxonImageLikeCountArgs>(
      args?: Subset<T, TaxonImageLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonImageLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxonImageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxonImageLikeAggregateArgs>(args: Subset<T, TaxonImageLikeAggregateArgs>): Prisma.PrismaPromise<GetTaxonImageLikeAggregateType<T>>

    /**
     * Group by TaxonImageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonImageLikeGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TaxonImageLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonImageLikeGroupByArgs['orderBy'] }
        : { orderBy?: TaxonImageLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonImageLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonImageLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxonImageLike model
   */
  readonly fields: TaxonImageLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxonImageLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxonImageLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends TaxonImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaxonImageDefaultArgs<ExtArgs>>): Prisma__TaxonImageClient<$Result.GetResult<Prisma.$TaxonImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxonImageLike model
   */
  interface TaxonImageLikeFieldRefs {
    readonly id: FieldRef<"TaxonImageLike", 'Int'>
    readonly userId: FieldRef<"TaxonImageLike", 'String'>
    readonly imageId: FieldRef<"TaxonImageLike", 'Int'>
    readonly createdAt: FieldRef<"TaxonImageLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxonImageLike findUnique
   */
  export type TaxonImageLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImageLike to fetch.
     */
    where: TaxonImageLikeWhereUniqueInput
  }

  /**
   * TaxonImageLike findUniqueOrThrow
   */
  export type TaxonImageLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImageLike to fetch.
     */
    where: TaxonImageLikeWhereUniqueInput
  }

  /**
   * TaxonImageLike findFirst
   */
  export type TaxonImageLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImageLike to fetch.
     */
    where?: TaxonImageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImageLikes to fetch.
     */
    orderBy?: TaxonImageLikeOrderByWithRelationInput | TaxonImageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonImageLikes.
     */
    cursor?: TaxonImageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonImageLikes.
     */
    distinct?: TaxonImageLikeScalarFieldEnum | TaxonImageLikeScalarFieldEnum[]
  }

  /**
   * TaxonImageLike findFirstOrThrow
   */
  export type TaxonImageLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImageLike to fetch.
     */
    where?: TaxonImageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImageLikes to fetch.
     */
    orderBy?: TaxonImageLikeOrderByWithRelationInput | TaxonImageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxonImageLikes.
     */
    cursor?: TaxonImageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxonImageLikes.
     */
    distinct?: TaxonImageLikeScalarFieldEnum | TaxonImageLikeScalarFieldEnum[]
  }

  /**
   * TaxonImageLike findMany
   */
  export type TaxonImageLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * Filter, which TaxonImageLikes to fetch.
     */
    where?: TaxonImageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxonImageLikes to fetch.
     */
    orderBy?: TaxonImageLikeOrderByWithRelationInput | TaxonImageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxonImageLikes.
     */
    cursor?: TaxonImageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxonImageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxonImageLikes.
     */
    skip?: number
    distinct?: TaxonImageLikeScalarFieldEnum | TaxonImageLikeScalarFieldEnum[]
  }

  /**
   * TaxonImageLike create
   */
  export type TaxonImageLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a TaxonImageLike.
     */
    data: XOR<TaxonImageLikeCreateInput, TaxonImageLikeUncheckedCreateInput>
  }

  /**
   * TaxonImageLike createMany
   */
  export type TaxonImageLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxonImageLikes.
     */
    data: TaxonImageLikeCreateManyInput | TaxonImageLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxonImageLike createManyAndReturn
   */
  export type TaxonImageLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * The data used to create many TaxonImageLikes.
     */
    data: TaxonImageLikeCreateManyInput | TaxonImageLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonImageLike update
   */
  export type TaxonImageLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a TaxonImageLike.
     */
    data: XOR<TaxonImageLikeUpdateInput, TaxonImageLikeUncheckedUpdateInput>
    /**
     * Choose, which TaxonImageLike to update.
     */
    where: TaxonImageLikeWhereUniqueInput
  }

  /**
   * TaxonImageLike updateMany
   */
  export type TaxonImageLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxonImageLikes.
     */
    data: XOR<TaxonImageLikeUpdateManyMutationInput, TaxonImageLikeUncheckedUpdateManyInput>
    /**
     * Filter which TaxonImageLikes to update
     */
    where?: TaxonImageLikeWhereInput
    /**
     * Limit how many TaxonImageLikes to update.
     */
    limit?: number
  }

  /**
   * TaxonImageLike updateManyAndReturn
   */
  export type TaxonImageLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * The data used to update TaxonImageLikes.
     */
    data: XOR<TaxonImageLikeUpdateManyMutationInput, TaxonImageLikeUncheckedUpdateManyInput>
    /**
     * Filter which TaxonImageLikes to update
     */
    where?: TaxonImageLikeWhereInput
    /**
     * Limit how many TaxonImageLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxonImageLike upsert
   */
  export type TaxonImageLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the TaxonImageLike to update in case it exists.
     */
    where: TaxonImageLikeWhereUniqueInput
    /**
     * In case the TaxonImageLike found by the `where` argument doesn't exist, create a new TaxonImageLike with this data.
     */
    create: XOR<TaxonImageLikeCreateInput, TaxonImageLikeUncheckedCreateInput>
    /**
     * In case the TaxonImageLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxonImageLikeUpdateInput, TaxonImageLikeUncheckedUpdateInput>
  }

  /**
   * TaxonImageLike delete
   */
  export type TaxonImageLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
    /**
     * Filter which TaxonImageLike to delete.
     */
    where: TaxonImageLikeWhereUniqueInput
  }

  /**
   * TaxonImageLike deleteMany
   */
  export type TaxonImageLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxonImageLikes to delete
     */
    where?: TaxonImageLikeWhereInput
    /**
     * Limit how many TaxonImageLikes to delete.
     */
    limit?: number
  }

  /**
   * TaxonImageLike without action
   */
  export type TaxonImageLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxonImageLike
     */
    select?: TaxonImageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxonImageLike
     */
    omit?: TaxonImageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxonImageLikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TaxonScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    canonicalName: 'canonicalName',
    scientificName: 'scientificName',
    author: 'author',
    vietnameseName: 'vietnameseName',
    primaryImageUrl: 'primaryImageUrl',
    rank: 'rank',
    plantGroup: 'plantGroup',
    parentId: 'parentId',
    status: 'status',
    hasVietnamRecord: 'hasVietnamRecord',
    description: 'description',
    descriptionLang: 'descriptionLang',
    habit: 'habit',
    leaf: 'leaf',
    reproduction: 'reproduction',
    phenology: 'phenology',
    value: 'value',
    distributionText: 'distributionText',
    note: 'note',
    sourceName: 'sourceName',
    externalId: 'externalId',
    orderInBook: 'orderInBook',
    rawDescriptionInBook: 'rawDescriptionInBook',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxonScalarFieldEnum = (typeof TaxonScalarFieldEnum)[keyof typeof TaxonScalarFieldEnum]


  export const TaxonSynonymScalarFieldEnum: {
    id: 'id',
    taxonId: 'taxonId',
    scientificName: 'scientificName',
    sourceName: 'sourceName',
    externalId: 'externalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxonSynonymScalarFieldEnum = (typeof TaxonSynonymScalarFieldEnum)[keyof typeof TaxonSynonymScalarFieldEnum]


  export const TaxonCommonNameScalarFieldEnum: {
    id: 'id',
    taxonId: 'taxonId',
    name: 'name',
    language: 'language',
    isPrimary: 'isPrimary',
    regionNote: 'regionNote',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxonCommonNameScalarFieldEnum = (typeof TaxonCommonNameScalarFieldEnum)[keyof typeof TaxonCommonNameScalarFieldEnum]


  export const TaxonImageScalarFieldEnum: {
    id: 'id',
    taxonId: 'taxonId',
    url: 'url',
    storageKey: 'storageKey',
    externalSource: 'externalSource',
    externalId: 'externalId',
    caption: 'caption',
    blurHash: 'blurHash',
    width: 'width',
    height: 'height',
    author: 'author',
    license: 'license',
    isPrimary: 'isPrimary',
    sortOrder: 'sortOrder',
    status: 'status',
    recordNote: 'recordNote',
    reviewedAt: 'reviewedAt',
    reviewedBy: 'reviewedBy',
    contributorId: 'contributorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxonImageScalarFieldEnum = (typeof TaxonImageScalarFieldEnum)[keyof typeof TaxonImageScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const TaxonProvinceScalarFieldEnum: {
    taxonId: 'taxonId',
    provinceId: 'provinceId'
  };

  export type TaxonProvinceScalarFieldEnum = (typeof TaxonProvinceScalarFieldEnum)[keyof typeof TaxonProvinceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taxonId: 'taxonId',
    createdAt: 'createdAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const TaxonImageLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageId: 'imageId',
    createdAt: 'createdAt'
  };

  export type TaxonImageLikeScalarFieldEnum = (typeof TaxonImageLikeScalarFieldEnum)[keyof typeof TaxonImageLikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TaxonomyRank'
   */
  export type EnumTaxonomyRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaxonomyRank'>
    


  /**
   * Reference to a field of type 'TaxonomyRank[]'
   */
  export type ListEnumTaxonomyRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaxonomyRank[]'>
    


  /**
   * Reference to a field of type 'PlantGroup'
   */
  export type EnumPlantGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlantGroup'>
    


  /**
   * Reference to a field of type 'PlantGroup[]'
   */
  export type ListEnumPlantGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlantGroup[]'>
    


  /**
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ImageStatus'
   */
  export type EnumImageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageStatus'>
    


  /**
   * Reference to a field of type 'ImageStatus[]'
   */
  export type ListEnumImageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TaxonWhereInput = {
    AND?: TaxonWhereInput | TaxonWhereInput[]
    OR?: TaxonWhereInput[]
    NOT?: TaxonWhereInput | TaxonWhereInput[]
    id?: IntFilter<"Taxon"> | number
    slug?: StringFilter<"Taxon"> | string
    canonicalName?: StringFilter<"Taxon"> | string
    scientificName?: StringFilter<"Taxon"> | string
    author?: StringNullableFilter<"Taxon"> | string | null
    vietnameseName?: StringNullableFilter<"Taxon"> | string | null
    primaryImageUrl?: StringNullableFilter<"Taxon"> | string | null
    rank?: EnumTaxonomyRankFilter<"Taxon"> | $Enums.TaxonomyRank
    plantGroup?: EnumPlantGroupNullableFilter<"Taxon"> | $Enums.PlantGroup | null
    parentId?: IntNullableFilter<"Taxon"> | number | null
    status?: EnumPublishStatusFilter<"Taxon"> | $Enums.PublishStatus
    hasVietnamRecord?: BoolFilter<"Taxon"> | boolean
    description?: StringNullableFilter<"Taxon"> | string | null
    descriptionLang?: StringNullableFilter<"Taxon"> | string | null
    habit?: StringNullableFilter<"Taxon"> | string | null
    leaf?: StringNullableFilter<"Taxon"> | string | null
    reproduction?: StringNullableFilter<"Taxon"> | string | null
    phenology?: StringNullableFilter<"Taxon"> | string | null
    value?: StringNullableFilter<"Taxon"> | string | null
    distributionText?: StringNullableFilter<"Taxon"> | string | null
    note?: StringNullableFilter<"Taxon"> | string | null
    sourceName?: StringNullableFilter<"Taxon"> | string | null
    externalId?: StringNullableFilter<"Taxon"> | string | null
    orderInBook?: StringNullableFilter<"Taxon"> | string | null
    rawDescriptionInBook?: StringNullableFilter<"Taxon"> | string | null
    createdAt?: DateTimeFilter<"Taxon"> | Date | string
    updatedAt?: DateTimeFilter<"Taxon"> | Date | string
    parent?: XOR<TaxonNullableScalarRelationFilter, TaxonWhereInput> | null
    children?: TaxonListRelationFilter
    synonyms?: TaxonSynonymListRelationFilter
    commonNames?: TaxonCommonNameListRelationFilter
    images?: TaxonImageListRelationFilter
    provinces?: TaxonProvinceListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }

  export type TaxonOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    canonicalName?: SortOrder
    scientificName?: SortOrder
    author?: SortOrderInput | SortOrder
    vietnameseName?: SortOrderInput | SortOrder
    primaryImageUrl?: SortOrderInput | SortOrder
    rank?: SortOrder
    plantGroup?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    status?: SortOrder
    hasVietnamRecord?: SortOrder
    description?: SortOrderInput | SortOrder
    descriptionLang?: SortOrderInput | SortOrder
    habit?: SortOrderInput | SortOrder
    leaf?: SortOrderInput | SortOrder
    reproduction?: SortOrderInput | SortOrder
    phenology?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    distributionText?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    sourceName?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    orderInBook?: SortOrderInput | SortOrder
    rawDescriptionInBook?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: TaxonOrderByWithRelationInput
    children?: TaxonOrderByRelationAggregateInput
    synonyms?: TaxonSynonymOrderByRelationAggregateInput
    commonNames?: TaxonCommonNameOrderByRelationAggregateInput
    images?: TaxonImageOrderByRelationAggregateInput
    provinces?: TaxonProvinceOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
  }

  export type TaxonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    scientificName?: string
    AND?: TaxonWhereInput | TaxonWhereInput[]
    OR?: TaxonWhereInput[]
    NOT?: TaxonWhereInput | TaxonWhereInput[]
    canonicalName?: StringFilter<"Taxon"> | string
    author?: StringNullableFilter<"Taxon"> | string | null
    vietnameseName?: StringNullableFilter<"Taxon"> | string | null
    primaryImageUrl?: StringNullableFilter<"Taxon"> | string | null
    rank?: EnumTaxonomyRankFilter<"Taxon"> | $Enums.TaxonomyRank
    plantGroup?: EnumPlantGroupNullableFilter<"Taxon"> | $Enums.PlantGroup | null
    parentId?: IntNullableFilter<"Taxon"> | number | null
    status?: EnumPublishStatusFilter<"Taxon"> | $Enums.PublishStatus
    hasVietnamRecord?: BoolFilter<"Taxon"> | boolean
    description?: StringNullableFilter<"Taxon"> | string | null
    descriptionLang?: StringNullableFilter<"Taxon"> | string | null
    habit?: StringNullableFilter<"Taxon"> | string | null
    leaf?: StringNullableFilter<"Taxon"> | string | null
    reproduction?: StringNullableFilter<"Taxon"> | string | null
    phenology?: StringNullableFilter<"Taxon"> | string | null
    value?: StringNullableFilter<"Taxon"> | string | null
    distributionText?: StringNullableFilter<"Taxon"> | string | null
    note?: StringNullableFilter<"Taxon"> | string | null
    sourceName?: StringNullableFilter<"Taxon"> | string | null
    externalId?: StringNullableFilter<"Taxon"> | string | null
    orderInBook?: StringNullableFilter<"Taxon"> | string | null
    rawDescriptionInBook?: StringNullableFilter<"Taxon"> | string | null
    createdAt?: DateTimeFilter<"Taxon"> | Date | string
    updatedAt?: DateTimeFilter<"Taxon"> | Date | string
    parent?: XOR<TaxonNullableScalarRelationFilter, TaxonWhereInput> | null
    children?: TaxonListRelationFilter
    synonyms?: TaxonSynonymListRelationFilter
    commonNames?: TaxonCommonNameListRelationFilter
    images?: TaxonImageListRelationFilter
    provinces?: TaxonProvinceListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }, "id" | "slug" | "scientificName">

  export type TaxonOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    canonicalName?: SortOrder
    scientificName?: SortOrder
    author?: SortOrderInput | SortOrder
    vietnameseName?: SortOrderInput | SortOrder
    primaryImageUrl?: SortOrderInput | SortOrder
    rank?: SortOrder
    plantGroup?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    status?: SortOrder
    hasVietnamRecord?: SortOrder
    description?: SortOrderInput | SortOrder
    descriptionLang?: SortOrderInput | SortOrder
    habit?: SortOrderInput | SortOrder
    leaf?: SortOrderInput | SortOrder
    reproduction?: SortOrderInput | SortOrder
    phenology?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    distributionText?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    sourceName?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    orderInBook?: SortOrderInput | SortOrder
    rawDescriptionInBook?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxonCountOrderByAggregateInput
    _avg?: TaxonAvgOrderByAggregateInput
    _max?: TaxonMaxOrderByAggregateInput
    _min?: TaxonMinOrderByAggregateInput
    _sum?: TaxonSumOrderByAggregateInput
  }

  export type TaxonScalarWhereWithAggregatesInput = {
    AND?: TaxonScalarWhereWithAggregatesInput | TaxonScalarWhereWithAggregatesInput[]
    OR?: TaxonScalarWhereWithAggregatesInput[]
    NOT?: TaxonScalarWhereWithAggregatesInput | TaxonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taxon"> | number
    slug?: StringWithAggregatesFilter<"Taxon"> | string
    canonicalName?: StringWithAggregatesFilter<"Taxon"> | string
    scientificName?: StringWithAggregatesFilter<"Taxon"> | string
    author?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    vietnameseName?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    primaryImageUrl?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    rank?: EnumTaxonomyRankWithAggregatesFilter<"Taxon"> | $Enums.TaxonomyRank
    plantGroup?: EnumPlantGroupNullableWithAggregatesFilter<"Taxon"> | $Enums.PlantGroup | null
    parentId?: IntNullableWithAggregatesFilter<"Taxon"> | number | null
    status?: EnumPublishStatusWithAggregatesFilter<"Taxon"> | $Enums.PublishStatus
    hasVietnamRecord?: BoolWithAggregatesFilter<"Taxon"> | boolean
    description?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    descriptionLang?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    habit?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    leaf?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    reproduction?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    phenology?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    value?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    distributionText?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    note?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    sourceName?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    externalId?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    orderInBook?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    rawDescriptionInBook?: StringNullableWithAggregatesFilter<"Taxon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Taxon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Taxon"> | Date | string
  }

  export type TaxonSynonymWhereInput = {
    AND?: TaxonSynonymWhereInput | TaxonSynonymWhereInput[]
    OR?: TaxonSynonymWhereInput[]
    NOT?: TaxonSynonymWhereInput | TaxonSynonymWhereInput[]
    id?: IntFilter<"TaxonSynonym"> | number
    taxonId?: IntNullableFilter<"TaxonSynonym"> | number | null
    scientificName?: StringFilter<"TaxonSynonym"> | string
    sourceName?: StringNullableFilter<"TaxonSynonym"> | string | null
    externalId?: StringNullableFilter<"TaxonSynonym"> | string | null
    createdAt?: DateTimeFilter<"TaxonSynonym"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonSynonym"> | Date | string
    taxon?: XOR<TaxonNullableScalarRelationFilter, TaxonWhereInput> | null
  }

  export type TaxonSynonymOrderByWithRelationInput = {
    id?: SortOrder
    taxonId?: SortOrderInput | SortOrder
    scientificName?: SortOrder
    sourceName?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taxon?: TaxonOrderByWithRelationInput
  }

  export type TaxonSynonymWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    taxonId_scientificName?: TaxonSynonymTaxonIdScientificNameCompoundUniqueInput
    AND?: TaxonSynonymWhereInput | TaxonSynonymWhereInput[]
    OR?: TaxonSynonymWhereInput[]
    NOT?: TaxonSynonymWhereInput | TaxonSynonymWhereInput[]
    taxonId?: IntNullableFilter<"TaxonSynonym"> | number | null
    scientificName?: StringFilter<"TaxonSynonym"> | string
    sourceName?: StringNullableFilter<"TaxonSynonym"> | string | null
    externalId?: StringNullableFilter<"TaxonSynonym"> | string | null
    createdAt?: DateTimeFilter<"TaxonSynonym"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonSynonym"> | Date | string
    taxon?: XOR<TaxonNullableScalarRelationFilter, TaxonWhereInput> | null
  }, "id" | "taxonId_scientificName">

  export type TaxonSynonymOrderByWithAggregationInput = {
    id?: SortOrder
    taxonId?: SortOrderInput | SortOrder
    scientificName?: SortOrder
    sourceName?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxonSynonymCountOrderByAggregateInput
    _avg?: TaxonSynonymAvgOrderByAggregateInput
    _max?: TaxonSynonymMaxOrderByAggregateInput
    _min?: TaxonSynonymMinOrderByAggregateInput
    _sum?: TaxonSynonymSumOrderByAggregateInput
  }

  export type TaxonSynonymScalarWhereWithAggregatesInput = {
    AND?: TaxonSynonymScalarWhereWithAggregatesInput | TaxonSynonymScalarWhereWithAggregatesInput[]
    OR?: TaxonSynonymScalarWhereWithAggregatesInput[]
    NOT?: TaxonSynonymScalarWhereWithAggregatesInput | TaxonSynonymScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxonSynonym"> | number
    taxonId?: IntNullableWithAggregatesFilter<"TaxonSynonym"> | number | null
    scientificName?: StringWithAggregatesFilter<"TaxonSynonym"> | string
    sourceName?: StringNullableWithAggregatesFilter<"TaxonSynonym"> | string | null
    externalId?: StringNullableWithAggregatesFilter<"TaxonSynonym"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaxonSynonym"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaxonSynonym"> | Date | string
  }

  export type TaxonCommonNameWhereInput = {
    AND?: TaxonCommonNameWhereInput | TaxonCommonNameWhereInput[]
    OR?: TaxonCommonNameWhereInput[]
    NOT?: TaxonCommonNameWhereInput | TaxonCommonNameWhereInput[]
    id?: IntFilter<"TaxonCommonName"> | number
    taxonId?: IntFilter<"TaxonCommonName"> | number
    name?: StringFilter<"TaxonCommonName"> | string
    language?: StringNullableFilter<"TaxonCommonName"> | string | null
    isPrimary?: BoolFilter<"TaxonCommonName"> | boolean
    regionNote?: StringNullableFilter<"TaxonCommonName"> | string | null
    source?: StringNullableFilter<"TaxonCommonName"> | string | null
    createdAt?: DateTimeFilter<"TaxonCommonName"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonCommonName"> | Date | string
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
  }

  export type TaxonCommonNameOrderByWithRelationInput = {
    id?: SortOrder
    taxonId?: SortOrder
    name?: SortOrder
    language?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    regionNote?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taxon?: TaxonOrderByWithRelationInput
  }

  export type TaxonCommonNameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    taxonId_name_language?: TaxonCommonNameTaxonIdNameLanguageCompoundUniqueInput
    AND?: TaxonCommonNameWhereInput | TaxonCommonNameWhereInput[]
    OR?: TaxonCommonNameWhereInput[]
    NOT?: TaxonCommonNameWhereInput | TaxonCommonNameWhereInput[]
    taxonId?: IntFilter<"TaxonCommonName"> | number
    name?: StringFilter<"TaxonCommonName"> | string
    language?: StringNullableFilter<"TaxonCommonName"> | string | null
    isPrimary?: BoolFilter<"TaxonCommonName"> | boolean
    regionNote?: StringNullableFilter<"TaxonCommonName"> | string | null
    source?: StringNullableFilter<"TaxonCommonName"> | string | null
    createdAt?: DateTimeFilter<"TaxonCommonName"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonCommonName"> | Date | string
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
  }, "id" | "taxonId_name_language">

  export type TaxonCommonNameOrderByWithAggregationInput = {
    id?: SortOrder
    taxonId?: SortOrder
    name?: SortOrder
    language?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    regionNote?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxonCommonNameCountOrderByAggregateInput
    _avg?: TaxonCommonNameAvgOrderByAggregateInput
    _max?: TaxonCommonNameMaxOrderByAggregateInput
    _min?: TaxonCommonNameMinOrderByAggregateInput
    _sum?: TaxonCommonNameSumOrderByAggregateInput
  }

  export type TaxonCommonNameScalarWhereWithAggregatesInput = {
    AND?: TaxonCommonNameScalarWhereWithAggregatesInput | TaxonCommonNameScalarWhereWithAggregatesInput[]
    OR?: TaxonCommonNameScalarWhereWithAggregatesInput[]
    NOT?: TaxonCommonNameScalarWhereWithAggregatesInput | TaxonCommonNameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxonCommonName"> | number
    taxonId?: IntWithAggregatesFilter<"TaxonCommonName"> | number
    name?: StringWithAggregatesFilter<"TaxonCommonName"> | string
    language?: StringNullableWithAggregatesFilter<"TaxonCommonName"> | string | null
    isPrimary?: BoolWithAggregatesFilter<"TaxonCommonName"> | boolean
    regionNote?: StringNullableWithAggregatesFilter<"TaxonCommonName"> | string | null
    source?: StringNullableWithAggregatesFilter<"TaxonCommonName"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaxonCommonName"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaxonCommonName"> | Date | string
  }

  export type TaxonImageWhereInput = {
    AND?: TaxonImageWhereInput | TaxonImageWhereInput[]
    OR?: TaxonImageWhereInput[]
    NOT?: TaxonImageWhereInput | TaxonImageWhereInput[]
    id?: IntFilter<"TaxonImage"> | number
    taxonId?: IntFilter<"TaxonImage"> | number
    url?: StringFilter<"TaxonImage"> | string
    storageKey?: StringNullableFilter<"TaxonImage"> | string | null
    externalSource?: StringNullableFilter<"TaxonImage"> | string | null
    externalId?: StringNullableFilter<"TaxonImage"> | string | null
    caption?: StringNullableFilter<"TaxonImage"> | string | null
    blurHash?: StringNullableFilter<"TaxonImage"> | string | null
    width?: IntNullableFilter<"TaxonImage"> | number | null
    height?: IntNullableFilter<"TaxonImage"> | number | null
    author?: StringNullableFilter<"TaxonImage"> | string | null
    license?: StringNullableFilter<"TaxonImage"> | string | null
    isPrimary?: BoolFilter<"TaxonImage"> | boolean
    sortOrder?: IntFilter<"TaxonImage"> | number
    status?: EnumImageStatusFilter<"TaxonImage"> | $Enums.ImageStatus
    recordNote?: StringNullableFilter<"TaxonImage"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TaxonImage"> | Date | string | null
    reviewedBy?: UuidNullableFilter<"TaxonImage"> | string | null
    contributorId?: UuidNullableFilter<"TaxonImage"> | string | null
    createdAt?: DateTimeFilter<"TaxonImage"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonImage"> | Date | string
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
    contributor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    likes?: TaxonImageLikeListRelationFilter
  }

  export type TaxonImageOrderByWithRelationInput = {
    id?: SortOrder
    taxonId?: SortOrder
    url?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    externalSource?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    blurHash?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    license?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    recordNote?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    contributorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taxon?: TaxonOrderByWithRelationInput
    contributor?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    likes?: TaxonImageLikeOrderByRelationAggregateInput
  }

  export type TaxonImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    storageKey?: string
    taxonId_externalSource_externalId?: TaxonImageTaxonIdExternalSourceExternalIdCompoundUniqueInput
    AND?: TaxonImageWhereInput | TaxonImageWhereInput[]
    OR?: TaxonImageWhereInput[]
    NOT?: TaxonImageWhereInput | TaxonImageWhereInput[]
    taxonId?: IntFilter<"TaxonImage"> | number
    url?: StringFilter<"TaxonImage"> | string
    externalSource?: StringNullableFilter<"TaxonImage"> | string | null
    externalId?: StringNullableFilter<"TaxonImage"> | string | null
    caption?: StringNullableFilter<"TaxonImage"> | string | null
    blurHash?: StringNullableFilter<"TaxonImage"> | string | null
    width?: IntNullableFilter<"TaxonImage"> | number | null
    height?: IntNullableFilter<"TaxonImage"> | number | null
    author?: StringNullableFilter<"TaxonImage"> | string | null
    license?: StringNullableFilter<"TaxonImage"> | string | null
    isPrimary?: BoolFilter<"TaxonImage"> | boolean
    sortOrder?: IntFilter<"TaxonImage"> | number
    status?: EnumImageStatusFilter<"TaxonImage"> | $Enums.ImageStatus
    recordNote?: StringNullableFilter<"TaxonImage"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TaxonImage"> | Date | string | null
    reviewedBy?: UuidNullableFilter<"TaxonImage"> | string | null
    contributorId?: UuidNullableFilter<"TaxonImage"> | string | null
    createdAt?: DateTimeFilter<"TaxonImage"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonImage"> | Date | string
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
    contributor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    likes?: TaxonImageLikeListRelationFilter
  }, "id" | "storageKey" | "taxonId_externalSource_externalId">

  export type TaxonImageOrderByWithAggregationInput = {
    id?: SortOrder
    taxonId?: SortOrder
    url?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    externalSource?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    blurHash?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    license?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    recordNote?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    contributorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxonImageCountOrderByAggregateInput
    _avg?: TaxonImageAvgOrderByAggregateInput
    _max?: TaxonImageMaxOrderByAggregateInput
    _min?: TaxonImageMinOrderByAggregateInput
    _sum?: TaxonImageSumOrderByAggregateInput
  }

  export type TaxonImageScalarWhereWithAggregatesInput = {
    AND?: TaxonImageScalarWhereWithAggregatesInput | TaxonImageScalarWhereWithAggregatesInput[]
    OR?: TaxonImageScalarWhereWithAggregatesInput[]
    NOT?: TaxonImageScalarWhereWithAggregatesInput | TaxonImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxonImage"> | number
    taxonId?: IntWithAggregatesFilter<"TaxonImage"> | number
    url?: StringWithAggregatesFilter<"TaxonImage"> | string
    storageKey?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    externalSource?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    externalId?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    caption?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    blurHash?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    width?: IntNullableWithAggregatesFilter<"TaxonImage"> | number | null
    height?: IntNullableWithAggregatesFilter<"TaxonImage"> | number | null
    author?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    license?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    isPrimary?: BoolWithAggregatesFilter<"TaxonImage"> | boolean
    sortOrder?: IntWithAggregatesFilter<"TaxonImage"> | number
    status?: EnumImageStatusWithAggregatesFilter<"TaxonImage"> | $Enums.ImageStatus
    recordNote?: StringNullableWithAggregatesFilter<"TaxonImage"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"TaxonImage"> | Date | string | null
    reviewedBy?: UuidNullableWithAggregatesFilter<"TaxonImage"> | string | null
    contributorId?: UuidNullableWithAggregatesFilter<"TaxonImage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaxonImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaxonImage"> | Date | string
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: IntFilter<"Province"> | number
    name?: StringFilter<"Province"> | string
    taxa?: TaxonProvinceListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    taxa?: TaxonProvinceOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    name?: StringFilter<"Province"> | string
    taxa?: TaxonProvinceListRelationFilter
  }, "id">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _avg?: ProvinceAvgOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
    _sum?: ProvinceSumOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Province"> | number
    name?: StringWithAggregatesFilter<"Province"> | string
  }

  export type TaxonProvinceWhereInput = {
    AND?: TaxonProvinceWhereInput | TaxonProvinceWhereInput[]
    OR?: TaxonProvinceWhereInput[]
    NOT?: TaxonProvinceWhereInput | TaxonProvinceWhereInput[]
    taxonId?: IntFilter<"TaxonProvince"> | number
    provinceId?: IntFilter<"TaxonProvince"> | number
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
  }

  export type TaxonProvinceOrderByWithRelationInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
    taxon?: TaxonOrderByWithRelationInput
    province?: ProvinceOrderByWithRelationInput
  }

  export type TaxonProvinceWhereUniqueInput = Prisma.AtLeast<{
    taxonId_provinceId?: TaxonProvinceTaxonIdProvinceIdCompoundUniqueInput
    AND?: TaxonProvinceWhereInput | TaxonProvinceWhereInput[]
    OR?: TaxonProvinceWhereInput[]
    NOT?: TaxonProvinceWhereInput | TaxonProvinceWhereInput[]
    taxonId?: IntFilter<"TaxonProvince"> | number
    provinceId?: IntFilter<"TaxonProvince"> | number
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
  }, "taxonId_provinceId">

  export type TaxonProvinceOrderByWithAggregationInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
    _count?: TaxonProvinceCountOrderByAggregateInput
    _avg?: TaxonProvinceAvgOrderByAggregateInput
    _max?: TaxonProvinceMaxOrderByAggregateInput
    _min?: TaxonProvinceMinOrderByAggregateInput
    _sum?: TaxonProvinceSumOrderByAggregateInput
  }

  export type TaxonProvinceScalarWhereWithAggregatesInput = {
    AND?: TaxonProvinceScalarWhereWithAggregatesInput | TaxonProvinceScalarWhereWithAggregatesInput[]
    OR?: TaxonProvinceScalarWhereWithAggregatesInput[]
    NOT?: TaxonProvinceScalarWhereWithAggregatesInput | TaxonProvinceScalarWhereWithAggregatesInput[]
    taxonId?: IntWithAggregatesFilter<"TaxonProvince"> | number
    provinceId?: IntWithAggregatesFilter<"TaxonProvince"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    uploadedImages?: TaxonImageListRelationFilter
    reviewedImages?: TaxonImageListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    imageLikes?: TaxonImageLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
    uploadedImages?: TaxonImageOrderByRelationAggregateInput
    reviewedImages?: TaxonImageOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    imageLikes?: TaxonImageLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    uploadedImages?: TaxonImageListRelationFilter
    reviewedImages?: TaxonImageListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    imageLikes?: TaxonImageLikeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: UuidFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefreshToken"> | string
    userId?: UuidWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    userAgent?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: UuidFilter<"Account"> | string
    userId?: UuidFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: UuidFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Account"> | string
    userId?: UuidWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: IntFilter<"Bookmark"> | number
    userId?: UuidFilter<"Bookmark"> | string
    taxonId?: IntFilter<"Bookmark"> | number
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taxonId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    taxon?: TaxonOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_taxonId?: BookmarkUserIdTaxonIdCompoundUniqueInput
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: UuidFilter<"Bookmark"> | string
    taxonId?: IntFilter<"Bookmark"> | number
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    taxon?: XOR<TaxonScalarRelationFilter, TaxonWhereInput>
  }, "id" | "userId_taxonId">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taxonId?: SortOrder
    createdAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _avg?: BookmarkAvgOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
    _sum?: BookmarkSumOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bookmark"> | number
    userId?: UuidWithAggregatesFilter<"Bookmark"> | string
    taxonId?: IntWithAggregatesFilter<"Bookmark"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type TaxonImageLikeWhereInput = {
    AND?: TaxonImageLikeWhereInput | TaxonImageLikeWhereInput[]
    OR?: TaxonImageLikeWhereInput[]
    NOT?: TaxonImageLikeWhereInput | TaxonImageLikeWhereInput[]
    id?: IntFilter<"TaxonImageLike"> | number
    userId?: UuidFilter<"TaxonImageLike"> | string
    imageId?: IntFilter<"TaxonImageLike"> | number
    createdAt?: DateTimeFilter<"TaxonImageLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<TaxonImageScalarRelationFilter, TaxonImageWhereInput>
  }

  export type TaxonImageLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    image?: TaxonImageOrderByWithRelationInput
  }

  export type TaxonImageLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_imageId?: TaxonImageLikeUserIdImageIdCompoundUniqueInput
    AND?: TaxonImageLikeWhereInput | TaxonImageLikeWhereInput[]
    OR?: TaxonImageLikeWhereInput[]
    NOT?: TaxonImageLikeWhereInput | TaxonImageLikeWhereInput[]
    userId?: UuidFilter<"TaxonImageLike"> | string
    imageId?: IntFilter<"TaxonImageLike"> | number
    createdAt?: DateTimeFilter<"TaxonImageLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<TaxonImageScalarRelationFilter, TaxonImageWhereInput>
  }, "id" | "userId_imageId">

  export type TaxonImageLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    _count?: TaxonImageLikeCountOrderByAggregateInput
    _avg?: TaxonImageLikeAvgOrderByAggregateInput
    _max?: TaxonImageLikeMaxOrderByAggregateInput
    _min?: TaxonImageLikeMinOrderByAggregateInput
    _sum?: TaxonImageLikeSumOrderByAggregateInput
  }

  export type TaxonImageLikeScalarWhereWithAggregatesInput = {
    AND?: TaxonImageLikeScalarWhereWithAggregatesInput | TaxonImageLikeScalarWhereWithAggregatesInput[]
    OR?: TaxonImageLikeScalarWhereWithAggregatesInput[]
    NOT?: TaxonImageLikeScalarWhereWithAggregatesInput | TaxonImageLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxonImageLike"> | number
    userId?: UuidWithAggregatesFilter<"TaxonImageLike"> | string
    imageId?: IntWithAggregatesFilter<"TaxonImageLike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TaxonImageLike"> | Date | string
  }

  export type TaxonCreateInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    children?: TaxonCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    children?: TaxonUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonCreateManyInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonSynonymCreateInput = {
    scientificName: string
    sourceName?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxon?: TaxonCreateNestedOneWithoutSynonymsInput
  }

  export type TaxonSynonymUncheckedCreateInput = {
    id?: number
    taxonId?: number | null
    scientificName: string
    sourceName?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonSynonymUpdateInput = {
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneWithoutSynonymsNestedInput
  }

  export type TaxonSynonymUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: NullableIntFieldUpdateOperationsInput | number | null
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonSynonymCreateManyInput = {
    id?: number
    taxonId?: number | null
    scientificName: string
    sourceName?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonSynonymUpdateManyMutationInput = {
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonSynonymUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: NullableIntFieldUpdateOperationsInput | number | null
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCommonNameCreateInput = {
    name: string
    language?: string | null
    isPrimary?: boolean
    regionNote?: string | null
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxon: TaxonCreateNestedOneWithoutCommonNamesInput
  }

  export type TaxonCommonNameUncheckedCreateInput = {
    id?: number
    taxonId: number
    name: string
    language?: string | null
    isPrimary?: boolean
    regionNote?: string | null
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonCommonNameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneRequiredWithoutCommonNamesNestedInput
  }

  export type TaxonCommonNameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCommonNameCreateManyInput = {
    id?: number
    taxonId: number
    name: string
    language?: string | null
    isPrimary?: boolean
    regionNote?: string | null
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonCommonNameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCommonNameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageCreateInput = {
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxon: TaxonCreateNestedOneWithoutImagesInput
    contributor?: UserCreateNestedOneWithoutUploadedImagesInput
    reviewer?: UserCreateNestedOneWithoutReviewedImagesInput
    likes?: TaxonImageLikeCreateNestedManyWithoutImageInput
  }

  export type TaxonImageUncheckedCreateInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: TaxonImageLikeUncheckedCreateNestedManyWithoutImageInput
  }

  export type TaxonImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneRequiredWithoutImagesNestedInput
    contributor?: UserUpdateOneWithoutUploadedImagesNestedInput
    reviewer?: UserUpdateOneWithoutReviewedImagesNestedInput
    likes?: TaxonImageLikeUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: TaxonImageLikeUncheckedUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageCreateManyInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinceCreateInput = {
    name: string
    taxa?: TaxonProvinceCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id?: number
    name: string
    taxa?: TaxonProvinceUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    taxa?: TaxonProvinceUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    taxa?: TaxonProvinceUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id?: number
    name: string
  }

  export type ProvinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaxonProvinceCreateInput = {
    taxon: TaxonCreateNestedOneWithoutProvincesInput
    province: ProvinceCreateNestedOneWithoutTaxaInput
  }

  export type TaxonProvinceUncheckedCreateInput = {
    taxonId: number
    provinceId: number
  }

  export type TaxonProvinceUpdateInput = {
    taxon?: TaxonUpdateOneRequiredWithoutProvincesNestedInput
    province?: ProvinceUpdateOneRequiredWithoutTaxaNestedInput
  }

  export type TaxonProvinceUncheckedUpdateInput = {
    taxonId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type TaxonProvinceCreateManyInput = {
    taxonId: number
    provinceId: number
  }

  export type TaxonProvinceUpdateManyMutationInput = {

  }

  export type TaxonProvinceUncheckedUpdateManyInput = {
    taxonId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageUncheckedCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageUncheckedCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUncheckedUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type BookmarkCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    taxon: TaxonCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: number
    userId: string
    taxonId: number
    createdAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    taxon?: TaxonUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    taxonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: number
    userId: string
    taxonId: number
    createdAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    taxonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImageLikesInput
    image: TaxonImageCreateNestedOneWithoutLikesInput
  }

  export type TaxonImageLikeUncheckedCreateInput = {
    id?: number
    userId: string
    imageId: number
    createdAt?: Date | string
  }

  export type TaxonImageLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImageLikesNestedInput
    image?: TaxonImageUpdateOneRequiredWithoutLikesNestedInput
  }

  export type TaxonImageLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeCreateManyInput = {
    id?: number
    userId: string
    imageId: number
    createdAt?: Date | string
  }

  export type TaxonImageLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTaxonomyRankFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxonomyRank | EnumTaxonomyRankFieldRefInput<$PrismaModel>
    in?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxonomyRankFilter<$PrismaModel> | $Enums.TaxonomyRank
  }

  export type EnumPlantGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PlantGroup | EnumPlantGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlantGroupNullableFilter<$PrismaModel> | $Enums.PlantGroup | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaxonNullableScalarRelationFilter = {
    is?: TaxonWhereInput | null
    isNot?: TaxonWhereInput | null
  }

  export type TaxonListRelationFilter = {
    every?: TaxonWhereInput
    some?: TaxonWhereInput
    none?: TaxonWhereInput
  }

  export type TaxonSynonymListRelationFilter = {
    every?: TaxonSynonymWhereInput
    some?: TaxonSynonymWhereInput
    none?: TaxonSynonymWhereInput
  }

  export type TaxonCommonNameListRelationFilter = {
    every?: TaxonCommonNameWhereInput
    some?: TaxonCommonNameWhereInput
    none?: TaxonCommonNameWhereInput
  }

  export type TaxonImageListRelationFilter = {
    every?: TaxonImageWhereInput
    some?: TaxonImageWhereInput
    none?: TaxonImageWhereInput
  }

  export type TaxonProvinceListRelationFilter = {
    every?: TaxonProvinceWhereInput
    some?: TaxonProvinceWhereInput
    none?: TaxonProvinceWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaxonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxonSynonymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxonCommonNameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxonImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxonProvinceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxonCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    canonicalName?: SortOrder
    scientificName?: SortOrder
    author?: SortOrder
    vietnameseName?: SortOrder
    primaryImageUrl?: SortOrder
    rank?: SortOrder
    plantGroup?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    hasVietnamRecord?: SortOrder
    description?: SortOrder
    descriptionLang?: SortOrder
    habit?: SortOrder
    leaf?: SortOrder
    reproduction?: SortOrder
    phenology?: SortOrder
    value?: SortOrder
    distributionText?: SortOrder
    note?: SortOrder
    sourceName?: SortOrder
    externalId?: SortOrder
    orderInBook?: SortOrder
    rawDescriptionInBook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type TaxonMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    canonicalName?: SortOrder
    scientificName?: SortOrder
    author?: SortOrder
    vietnameseName?: SortOrder
    primaryImageUrl?: SortOrder
    rank?: SortOrder
    plantGroup?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    hasVietnamRecord?: SortOrder
    description?: SortOrder
    descriptionLang?: SortOrder
    habit?: SortOrder
    leaf?: SortOrder
    reproduction?: SortOrder
    phenology?: SortOrder
    value?: SortOrder
    distributionText?: SortOrder
    note?: SortOrder
    sourceName?: SortOrder
    externalId?: SortOrder
    orderInBook?: SortOrder
    rawDescriptionInBook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    canonicalName?: SortOrder
    scientificName?: SortOrder
    author?: SortOrder
    vietnameseName?: SortOrder
    primaryImageUrl?: SortOrder
    rank?: SortOrder
    plantGroup?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    hasVietnamRecord?: SortOrder
    description?: SortOrder
    descriptionLang?: SortOrder
    habit?: SortOrder
    leaf?: SortOrder
    reproduction?: SortOrder
    phenology?: SortOrder
    value?: SortOrder
    distributionText?: SortOrder
    note?: SortOrder
    sourceName?: SortOrder
    externalId?: SortOrder
    orderInBook?: SortOrder
    rawDescriptionInBook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTaxonomyRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxonomyRank | EnumTaxonomyRankFieldRefInput<$PrismaModel>
    in?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxonomyRankWithAggregatesFilter<$PrismaModel> | $Enums.TaxonomyRank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaxonomyRankFilter<$PrismaModel>
    _max?: NestedEnumTaxonomyRankFilter<$PrismaModel>
  }

  export type EnumPlantGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlantGroup | EnumPlantGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlantGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.PlantGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlantGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumPlantGroupNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TaxonSynonymTaxonIdScientificNameCompoundUniqueInput = {
    taxonId: number
    scientificName: string
  }

  export type TaxonSynonymCountOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    scientificName?: SortOrder
    sourceName?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonSynonymAvgOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
  }

  export type TaxonSynonymMaxOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    scientificName?: SortOrder
    sourceName?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonSynonymMinOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    scientificName?: SortOrder
    sourceName?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonSynonymSumOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
  }

  export type TaxonScalarRelationFilter = {
    is?: TaxonWhereInput
    isNot?: TaxonWhereInput
  }

  export type TaxonCommonNameTaxonIdNameLanguageCompoundUniqueInput = {
    taxonId: number
    name: string
    language: string
  }

  export type TaxonCommonNameCountOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    name?: SortOrder
    language?: SortOrder
    isPrimary?: SortOrder
    regionNote?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonCommonNameAvgOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
  }

  export type TaxonCommonNameMaxOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    name?: SortOrder
    language?: SortOrder
    isPrimary?: SortOrder
    regionNote?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonCommonNameMinOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    name?: SortOrder
    language?: SortOrder
    isPrimary?: SortOrder
    regionNote?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonCommonNameSumOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
  }

  export type EnumImageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusFilter<$PrismaModel> | $Enums.ImageStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TaxonImageLikeListRelationFilter = {
    every?: TaxonImageLikeWhereInput
    some?: TaxonImageLikeWhereInput
    none?: TaxonImageLikeWhereInput
  }

  export type TaxonImageLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxonImageTaxonIdExternalSourceExternalIdCompoundUniqueInput = {
    taxonId: number
    externalSource: string
    externalId: string
  }

  export type TaxonImageCountOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    url?: SortOrder
    storageKey?: SortOrder
    externalSource?: SortOrder
    externalId?: SortOrder
    caption?: SortOrder
    blurHash?: SortOrder
    width?: SortOrder
    height?: SortOrder
    author?: SortOrder
    license?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    recordNote?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
    contributorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonImageAvgOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    sortOrder?: SortOrder
  }

  export type TaxonImageMaxOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    url?: SortOrder
    storageKey?: SortOrder
    externalSource?: SortOrder
    externalId?: SortOrder
    caption?: SortOrder
    blurHash?: SortOrder
    width?: SortOrder
    height?: SortOrder
    author?: SortOrder
    license?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    recordNote?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
    contributorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonImageMinOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    url?: SortOrder
    storageKey?: SortOrder
    externalSource?: SortOrder
    externalId?: SortOrder
    caption?: SortOrder
    blurHash?: SortOrder
    width?: SortOrder
    height?: SortOrder
    author?: SortOrder
    license?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    recordNote?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
    contributorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxonImageSumOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumImageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusWithAggregatesFilter<$PrismaModel> | $Enums.ImageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageStatusFilter<$PrismaModel>
    _max?: NestedEnumImageStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceScalarRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type TaxonProvinceTaxonIdProvinceIdCompoundUniqueInput = {
    taxonId: number
    provinceId: number
  }

  export type TaxonProvinceCountOrderByAggregateInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
  }

  export type TaxonProvinceAvgOrderByAggregateInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
  }

  export type TaxonProvinceMaxOrderByAggregateInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
  }

  export type TaxonProvinceMinOrderByAggregateInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
  }

  export type TaxonProvinceSumOrderByAggregateInput = {
    taxonId?: SortOrder
    provinceId?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type BookmarkUserIdTaxonIdCompoundUniqueInput = {
    userId: string
    taxonId: number
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taxonId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkAvgOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taxonId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taxonId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkSumOrderByAggregateInput = {
    id?: SortOrder
    taxonId?: SortOrder
  }

  export type TaxonImageScalarRelationFilter = {
    is?: TaxonImageWhereInput
    isNot?: TaxonImageWhereInput
  }

  export type TaxonImageLikeUserIdImageIdCompoundUniqueInput = {
    userId: string
    imageId: number
  }

  export type TaxonImageLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxonImageLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type TaxonImageLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxonImageLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxonImageLikeSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type TaxonCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TaxonCreateWithoutChildrenInput, TaxonUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutChildrenInput
    connect?: TaxonWhereUniqueInput
  }

  export type TaxonCreateNestedManyWithoutParentInput = {
    create?: XOR<TaxonCreateWithoutParentInput, TaxonUncheckedCreateWithoutParentInput> | TaxonCreateWithoutParentInput[] | TaxonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaxonCreateOrConnectWithoutParentInput | TaxonCreateOrConnectWithoutParentInput[]
    createMany?: TaxonCreateManyParentInputEnvelope
    connect?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
  }

  export type TaxonSynonymCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonSynonymCreateWithoutTaxonInput, TaxonSynonymUncheckedCreateWithoutTaxonInput> | TaxonSynonymCreateWithoutTaxonInput[] | TaxonSynonymUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonSynonymCreateOrConnectWithoutTaxonInput | TaxonSynonymCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonSynonymCreateManyTaxonInputEnvelope
    connect?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
  }

  export type TaxonCommonNameCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonCommonNameCreateWithoutTaxonInput, TaxonCommonNameUncheckedCreateWithoutTaxonInput> | TaxonCommonNameCreateWithoutTaxonInput[] | TaxonCommonNameUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonCommonNameCreateOrConnectWithoutTaxonInput | TaxonCommonNameCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonCommonNameCreateManyTaxonInputEnvelope
    connect?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
  }

  export type TaxonImageCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonImageCreateWithoutTaxonInput, TaxonImageUncheckedCreateWithoutTaxonInput> | TaxonImageCreateWithoutTaxonInput[] | TaxonImageUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutTaxonInput | TaxonImageCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonImageCreateManyTaxonInputEnvelope
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
  }

  export type TaxonProvinceCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonProvinceCreateWithoutTaxonInput, TaxonProvinceUncheckedCreateWithoutTaxonInput> | TaxonProvinceCreateWithoutTaxonInput[] | TaxonProvinceUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutTaxonInput | TaxonProvinceCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonProvinceCreateManyTaxonInputEnvelope
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutTaxonInput = {
    create?: XOR<BookmarkCreateWithoutTaxonInput, BookmarkUncheckedCreateWithoutTaxonInput> | BookmarkCreateWithoutTaxonInput[] | BookmarkUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTaxonInput | BookmarkCreateOrConnectWithoutTaxonInput[]
    createMany?: BookmarkCreateManyTaxonInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type TaxonUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TaxonCreateWithoutParentInput, TaxonUncheckedCreateWithoutParentInput> | TaxonCreateWithoutParentInput[] | TaxonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaxonCreateOrConnectWithoutParentInput | TaxonCreateOrConnectWithoutParentInput[]
    createMany?: TaxonCreateManyParentInputEnvelope
    connect?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
  }

  export type TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonSynonymCreateWithoutTaxonInput, TaxonSynonymUncheckedCreateWithoutTaxonInput> | TaxonSynonymCreateWithoutTaxonInput[] | TaxonSynonymUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonSynonymCreateOrConnectWithoutTaxonInput | TaxonSynonymCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonSynonymCreateManyTaxonInputEnvelope
    connect?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
  }

  export type TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonCommonNameCreateWithoutTaxonInput, TaxonCommonNameUncheckedCreateWithoutTaxonInput> | TaxonCommonNameCreateWithoutTaxonInput[] | TaxonCommonNameUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonCommonNameCreateOrConnectWithoutTaxonInput | TaxonCommonNameCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonCommonNameCreateManyTaxonInputEnvelope
    connect?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
  }

  export type TaxonImageUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonImageCreateWithoutTaxonInput, TaxonImageUncheckedCreateWithoutTaxonInput> | TaxonImageCreateWithoutTaxonInput[] | TaxonImageUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutTaxonInput | TaxonImageCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonImageCreateManyTaxonInputEnvelope
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
  }

  export type TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: XOR<TaxonProvinceCreateWithoutTaxonInput, TaxonProvinceUncheckedCreateWithoutTaxonInput> | TaxonProvinceCreateWithoutTaxonInput[] | TaxonProvinceUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutTaxonInput | TaxonProvinceCreateOrConnectWithoutTaxonInput[]
    createMany?: TaxonProvinceCreateManyTaxonInputEnvelope
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutTaxonInput = {
    create?: XOR<BookmarkCreateWithoutTaxonInput, BookmarkUncheckedCreateWithoutTaxonInput> | BookmarkCreateWithoutTaxonInput[] | BookmarkUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTaxonInput | BookmarkCreateOrConnectWithoutTaxonInput[]
    createMany?: BookmarkCreateManyTaxonInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTaxonomyRankFieldUpdateOperationsInput = {
    set?: $Enums.TaxonomyRank
  }

  export type NullableEnumPlantGroupFieldUpdateOperationsInput = {
    set?: $Enums.PlantGroup | null
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaxonUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TaxonCreateWithoutChildrenInput, TaxonUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutChildrenInput
    upsert?: TaxonUpsertWithoutChildrenInput
    disconnect?: TaxonWhereInput | boolean
    delete?: TaxonWhereInput | boolean
    connect?: TaxonWhereUniqueInput
    update?: XOR<XOR<TaxonUpdateToOneWithWhereWithoutChildrenInput, TaxonUpdateWithoutChildrenInput>, TaxonUncheckedUpdateWithoutChildrenInput>
  }

  export type TaxonUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaxonCreateWithoutParentInput, TaxonUncheckedCreateWithoutParentInput> | TaxonCreateWithoutParentInput[] | TaxonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaxonCreateOrConnectWithoutParentInput | TaxonCreateOrConnectWithoutParentInput[]
    upsert?: TaxonUpsertWithWhereUniqueWithoutParentInput | TaxonUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaxonCreateManyParentInputEnvelope
    set?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    disconnect?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    delete?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    connect?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    update?: TaxonUpdateWithWhereUniqueWithoutParentInput | TaxonUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaxonUpdateManyWithWhereWithoutParentInput | TaxonUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaxonScalarWhereInput | TaxonScalarWhereInput[]
  }

  export type TaxonSynonymUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonSynonymCreateWithoutTaxonInput, TaxonSynonymUncheckedCreateWithoutTaxonInput> | TaxonSynonymCreateWithoutTaxonInput[] | TaxonSynonymUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonSynonymCreateOrConnectWithoutTaxonInput | TaxonSynonymCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonSynonymUpsertWithWhereUniqueWithoutTaxonInput | TaxonSynonymUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonSynonymCreateManyTaxonInputEnvelope
    set?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    disconnect?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    delete?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    connect?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    update?: TaxonSynonymUpdateWithWhereUniqueWithoutTaxonInput | TaxonSynonymUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonSynonymUpdateManyWithWhereWithoutTaxonInput | TaxonSynonymUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonSynonymScalarWhereInput | TaxonSynonymScalarWhereInput[]
  }

  export type TaxonCommonNameUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonCommonNameCreateWithoutTaxonInput, TaxonCommonNameUncheckedCreateWithoutTaxonInput> | TaxonCommonNameCreateWithoutTaxonInput[] | TaxonCommonNameUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonCommonNameCreateOrConnectWithoutTaxonInput | TaxonCommonNameCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonCommonNameUpsertWithWhereUniqueWithoutTaxonInput | TaxonCommonNameUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonCommonNameCreateManyTaxonInputEnvelope
    set?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    disconnect?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    delete?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    connect?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    update?: TaxonCommonNameUpdateWithWhereUniqueWithoutTaxonInput | TaxonCommonNameUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonCommonNameUpdateManyWithWhereWithoutTaxonInput | TaxonCommonNameUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonCommonNameScalarWhereInput | TaxonCommonNameScalarWhereInput[]
  }

  export type TaxonImageUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonImageCreateWithoutTaxonInput, TaxonImageUncheckedCreateWithoutTaxonInput> | TaxonImageCreateWithoutTaxonInput[] | TaxonImageUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutTaxonInput | TaxonImageCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonImageUpsertWithWhereUniqueWithoutTaxonInput | TaxonImageUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonImageCreateManyTaxonInputEnvelope
    set?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    disconnect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    delete?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    update?: TaxonImageUpdateWithWhereUniqueWithoutTaxonInput | TaxonImageUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonImageUpdateManyWithWhereWithoutTaxonInput | TaxonImageUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
  }

  export type TaxonProvinceUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonProvinceCreateWithoutTaxonInput, TaxonProvinceUncheckedCreateWithoutTaxonInput> | TaxonProvinceCreateWithoutTaxonInput[] | TaxonProvinceUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutTaxonInput | TaxonProvinceCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonProvinceUpsertWithWhereUniqueWithoutTaxonInput | TaxonProvinceUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonProvinceCreateManyTaxonInputEnvelope
    set?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    disconnect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    delete?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    update?: TaxonProvinceUpdateWithWhereUniqueWithoutTaxonInput | TaxonProvinceUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonProvinceUpdateManyWithWhereWithoutTaxonInput | TaxonProvinceUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonProvinceScalarWhereInput | TaxonProvinceScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<BookmarkCreateWithoutTaxonInput, BookmarkUncheckedCreateWithoutTaxonInput> | BookmarkCreateWithoutTaxonInput[] | BookmarkUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTaxonInput | BookmarkCreateOrConnectWithoutTaxonInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutTaxonInput | BookmarkUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: BookmarkCreateManyTaxonInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutTaxonInput | BookmarkUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutTaxonInput | BookmarkUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaxonUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaxonCreateWithoutParentInput, TaxonUncheckedCreateWithoutParentInput> | TaxonCreateWithoutParentInput[] | TaxonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaxonCreateOrConnectWithoutParentInput | TaxonCreateOrConnectWithoutParentInput[]
    upsert?: TaxonUpsertWithWhereUniqueWithoutParentInput | TaxonUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaxonCreateManyParentInputEnvelope
    set?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    disconnect?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    delete?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    connect?: TaxonWhereUniqueInput | TaxonWhereUniqueInput[]
    update?: TaxonUpdateWithWhereUniqueWithoutParentInput | TaxonUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaxonUpdateManyWithWhereWithoutParentInput | TaxonUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaxonScalarWhereInput | TaxonScalarWhereInput[]
  }

  export type TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonSynonymCreateWithoutTaxonInput, TaxonSynonymUncheckedCreateWithoutTaxonInput> | TaxonSynonymCreateWithoutTaxonInput[] | TaxonSynonymUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonSynonymCreateOrConnectWithoutTaxonInput | TaxonSynonymCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonSynonymUpsertWithWhereUniqueWithoutTaxonInput | TaxonSynonymUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonSynonymCreateManyTaxonInputEnvelope
    set?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    disconnect?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    delete?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    connect?: TaxonSynonymWhereUniqueInput | TaxonSynonymWhereUniqueInput[]
    update?: TaxonSynonymUpdateWithWhereUniqueWithoutTaxonInput | TaxonSynonymUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonSynonymUpdateManyWithWhereWithoutTaxonInput | TaxonSynonymUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonSynonymScalarWhereInput | TaxonSynonymScalarWhereInput[]
  }

  export type TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonCommonNameCreateWithoutTaxonInput, TaxonCommonNameUncheckedCreateWithoutTaxonInput> | TaxonCommonNameCreateWithoutTaxonInput[] | TaxonCommonNameUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonCommonNameCreateOrConnectWithoutTaxonInput | TaxonCommonNameCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonCommonNameUpsertWithWhereUniqueWithoutTaxonInput | TaxonCommonNameUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonCommonNameCreateManyTaxonInputEnvelope
    set?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    disconnect?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    delete?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    connect?: TaxonCommonNameWhereUniqueInput | TaxonCommonNameWhereUniqueInput[]
    update?: TaxonCommonNameUpdateWithWhereUniqueWithoutTaxonInput | TaxonCommonNameUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonCommonNameUpdateManyWithWhereWithoutTaxonInput | TaxonCommonNameUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonCommonNameScalarWhereInput | TaxonCommonNameScalarWhereInput[]
  }

  export type TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonImageCreateWithoutTaxonInput, TaxonImageUncheckedCreateWithoutTaxonInput> | TaxonImageCreateWithoutTaxonInput[] | TaxonImageUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutTaxonInput | TaxonImageCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonImageUpsertWithWhereUniqueWithoutTaxonInput | TaxonImageUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonImageCreateManyTaxonInputEnvelope
    set?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    disconnect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    delete?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    update?: TaxonImageUpdateWithWhereUniqueWithoutTaxonInput | TaxonImageUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonImageUpdateManyWithWhereWithoutTaxonInput | TaxonImageUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
  }

  export type TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<TaxonProvinceCreateWithoutTaxonInput, TaxonProvinceUncheckedCreateWithoutTaxonInput> | TaxonProvinceCreateWithoutTaxonInput[] | TaxonProvinceUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutTaxonInput | TaxonProvinceCreateOrConnectWithoutTaxonInput[]
    upsert?: TaxonProvinceUpsertWithWhereUniqueWithoutTaxonInput | TaxonProvinceUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: TaxonProvinceCreateManyTaxonInputEnvelope
    set?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    disconnect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    delete?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    update?: TaxonProvinceUpdateWithWhereUniqueWithoutTaxonInput | TaxonProvinceUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: TaxonProvinceUpdateManyWithWhereWithoutTaxonInput | TaxonProvinceUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: TaxonProvinceScalarWhereInput | TaxonProvinceScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutTaxonNestedInput = {
    create?: XOR<BookmarkCreateWithoutTaxonInput, BookmarkUncheckedCreateWithoutTaxonInput> | BookmarkCreateWithoutTaxonInput[] | BookmarkUncheckedCreateWithoutTaxonInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTaxonInput | BookmarkCreateOrConnectWithoutTaxonInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutTaxonInput | BookmarkUpsertWithWhereUniqueWithoutTaxonInput[]
    createMany?: BookmarkCreateManyTaxonInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutTaxonInput | BookmarkUpdateWithWhereUniqueWithoutTaxonInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutTaxonInput | BookmarkUpdateManyWithWhereWithoutTaxonInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type TaxonCreateNestedOneWithoutSynonymsInput = {
    create?: XOR<TaxonCreateWithoutSynonymsInput, TaxonUncheckedCreateWithoutSynonymsInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutSynonymsInput
    connect?: TaxonWhereUniqueInput
  }

  export type TaxonUpdateOneWithoutSynonymsNestedInput = {
    create?: XOR<TaxonCreateWithoutSynonymsInput, TaxonUncheckedCreateWithoutSynonymsInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutSynonymsInput
    upsert?: TaxonUpsertWithoutSynonymsInput
    disconnect?: TaxonWhereInput | boolean
    delete?: TaxonWhereInput | boolean
    connect?: TaxonWhereUniqueInput
    update?: XOR<XOR<TaxonUpdateToOneWithWhereWithoutSynonymsInput, TaxonUpdateWithoutSynonymsInput>, TaxonUncheckedUpdateWithoutSynonymsInput>
  }

  export type TaxonCreateNestedOneWithoutCommonNamesInput = {
    create?: XOR<TaxonCreateWithoutCommonNamesInput, TaxonUncheckedCreateWithoutCommonNamesInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutCommonNamesInput
    connect?: TaxonWhereUniqueInput
  }

  export type TaxonUpdateOneRequiredWithoutCommonNamesNestedInput = {
    create?: XOR<TaxonCreateWithoutCommonNamesInput, TaxonUncheckedCreateWithoutCommonNamesInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutCommonNamesInput
    upsert?: TaxonUpsertWithoutCommonNamesInput
    connect?: TaxonWhereUniqueInput
    update?: XOR<XOR<TaxonUpdateToOneWithWhereWithoutCommonNamesInput, TaxonUpdateWithoutCommonNamesInput>, TaxonUncheckedUpdateWithoutCommonNamesInput>
  }

  export type TaxonCreateNestedOneWithoutImagesInput = {
    create?: XOR<TaxonCreateWithoutImagesInput, TaxonUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutImagesInput
    connect?: TaxonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUploadedImagesInput = {
    create?: XOR<UserCreateWithoutUploadedImagesInput, UserUncheckedCreateWithoutUploadedImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedImagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedImagesInput = {
    create?: XOR<UserCreateWithoutReviewedImagesInput, UserUncheckedCreateWithoutReviewedImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedImagesInput
    connect?: UserWhereUniqueInput
  }

  export type TaxonImageLikeCreateNestedManyWithoutImageInput = {
    create?: XOR<TaxonImageLikeCreateWithoutImageInput, TaxonImageLikeUncheckedCreateWithoutImageInput> | TaxonImageLikeCreateWithoutImageInput[] | TaxonImageLikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutImageInput | TaxonImageLikeCreateOrConnectWithoutImageInput[]
    createMany?: TaxonImageLikeCreateManyImageInputEnvelope
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
  }

  export type TaxonImageLikeUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<TaxonImageLikeCreateWithoutImageInput, TaxonImageLikeUncheckedCreateWithoutImageInput> | TaxonImageLikeCreateWithoutImageInput[] | TaxonImageLikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutImageInput | TaxonImageLikeCreateOrConnectWithoutImageInput[]
    createMany?: TaxonImageLikeCreateManyImageInputEnvelope
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
  }

  export type EnumImageStatusFieldUpdateOperationsInput = {
    set?: $Enums.ImageStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaxonUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<TaxonCreateWithoutImagesInput, TaxonUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutImagesInput
    upsert?: TaxonUpsertWithoutImagesInput
    connect?: TaxonWhereUniqueInput
    update?: XOR<XOR<TaxonUpdateToOneWithWhereWithoutImagesInput, TaxonUpdateWithoutImagesInput>, TaxonUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateOneWithoutUploadedImagesNestedInput = {
    create?: XOR<UserCreateWithoutUploadedImagesInput, UserUncheckedCreateWithoutUploadedImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedImagesInput
    upsert?: UserUpsertWithoutUploadedImagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedImagesInput, UserUpdateWithoutUploadedImagesInput>, UserUncheckedUpdateWithoutUploadedImagesInput>
  }

  export type UserUpdateOneWithoutReviewedImagesNestedInput = {
    create?: XOR<UserCreateWithoutReviewedImagesInput, UserUncheckedCreateWithoutReviewedImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedImagesInput
    upsert?: UserUpsertWithoutReviewedImagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedImagesInput, UserUpdateWithoutReviewedImagesInput>, UserUncheckedUpdateWithoutReviewedImagesInput>
  }

  export type TaxonImageLikeUpdateManyWithoutImageNestedInput = {
    create?: XOR<TaxonImageLikeCreateWithoutImageInput, TaxonImageLikeUncheckedCreateWithoutImageInput> | TaxonImageLikeCreateWithoutImageInput[] | TaxonImageLikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutImageInput | TaxonImageLikeCreateOrConnectWithoutImageInput[]
    upsert?: TaxonImageLikeUpsertWithWhereUniqueWithoutImageInput | TaxonImageLikeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: TaxonImageLikeCreateManyImageInputEnvelope
    set?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    disconnect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    delete?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    update?: TaxonImageLikeUpdateWithWhereUniqueWithoutImageInput | TaxonImageLikeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: TaxonImageLikeUpdateManyWithWhereWithoutImageInput | TaxonImageLikeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: TaxonImageLikeScalarWhereInput | TaxonImageLikeScalarWhereInput[]
  }

  export type TaxonImageLikeUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<TaxonImageLikeCreateWithoutImageInput, TaxonImageLikeUncheckedCreateWithoutImageInput> | TaxonImageLikeCreateWithoutImageInput[] | TaxonImageLikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutImageInput | TaxonImageLikeCreateOrConnectWithoutImageInput[]
    upsert?: TaxonImageLikeUpsertWithWhereUniqueWithoutImageInput | TaxonImageLikeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: TaxonImageLikeCreateManyImageInputEnvelope
    set?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    disconnect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    delete?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    update?: TaxonImageLikeUpdateWithWhereUniqueWithoutImageInput | TaxonImageLikeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: TaxonImageLikeUpdateManyWithWhereWithoutImageInput | TaxonImageLikeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: TaxonImageLikeScalarWhereInput | TaxonImageLikeScalarWhereInput[]
  }

  export type TaxonProvinceCreateNestedManyWithoutProvinceInput = {
    create?: XOR<TaxonProvinceCreateWithoutProvinceInput, TaxonProvinceUncheckedCreateWithoutProvinceInput> | TaxonProvinceCreateWithoutProvinceInput[] | TaxonProvinceUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutProvinceInput | TaxonProvinceCreateOrConnectWithoutProvinceInput[]
    createMany?: TaxonProvinceCreateManyProvinceInputEnvelope
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
  }

  export type TaxonProvinceUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<TaxonProvinceCreateWithoutProvinceInput, TaxonProvinceUncheckedCreateWithoutProvinceInput> | TaxonProvinceCreateWithoutProvinceInput[] | TaxonProvinceUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutProvinceInput | TaxonProvinceCreateOrConnectWithoutProvinceInput[]
    createMany?: TaxonProvinceCreateManyProvinceInputEnvelope
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
  }

  export type TaxonProvinceUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<TaxonProvinceCreateWithoutProvinceInput, TaxonProvinceUncheckedCreateWithoutProvinceInput> | TaxonProvinceCreateWithoutProvinceInput[] | TaxonProvinceUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutProvinceInput | TaxonProvinceCreateOrConnectWithoutProvinceInput[]
    upsert?: TaxonProvinceUpsertWithWhereUniqueWithoutProvinceInput | TaxonProvinceUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: TaxonProvinceCreateManyProvinceInputEnvelope
    set?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    disconnect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    delete?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    update?: TaxonProvinceUpdateWithWhereUniqueWithoutProvinceInput | TaxonProvinceUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: TaxonProvinceUpdateManyWithWhereWithoutProvinceInput | TaxonProvinceUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: TaxonProvinceScalarWhereInput | TaxonProvinceScalarWhereInput[]
  }

  export type TaxonProvinceUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<TaxonProvinceCreateWithoutProvinceInput, TaxonProvinceUncheckedCreateWithoutProvinceInput> | TaxonProvinceCreateWithoutProvinceInput[] | TaxonProvinceUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: TaxonProvinceCreateOrConnectWithoutProvinceInput | TaxonProvinceCreateOrConnectWithoutProvinceInput[]
    upsert?: TaxonProvinceUpsertWithWhereUniqueWithoutProvinceInput | TaxonProvinceUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: TaxonProvinceCreateManyProvinceInputEnvelope
    set?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    disconnect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    delete?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    connect?: TaxonProvinceWhereUniqueInput | TaxonProvinceWhereUniqueInput[]
    update?: TaxonProvinceUpdateWithWhereUniqueWithoutProvinceInput | TaxonProvinceUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: TaxonProvinceUpdateManyWithWhereWithoutProvinceInput | TaxonProvinceUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: TaxonProvinceScalarWhereInput | TaxonProvinceScalarWhereInput[]
  }

  export type TaxonCreateNestedOneWithoutProvincesInput = {
    create?: XOR<TaxonCreateWithoutProvincesInput, TaxonUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutProvincesInput
    connect?: TaxonWhereUniqueInput
  }

  export type ProvinceCreateNestedOneWithoutTaxaInput = {
    create?: XOR<ProvinceCreateWithoutTaxaInput, ProvinceUncheckedCreateWithoutTaxaInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutTaxaInput
    connect?: ProvinceWhereUniqueInput
  }

  export type TaxonUpdateOneRequiredWithoutProvincesNestedInput = {
    create?: XOR<TaxonCreateWithoutProvincesInput, TaxonUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutProvincesInput
    upsert?: TaxonUpsertWithoutProvincesInput
    connect?: TaxonWhereUniqueInput
    update?: XOR<XOR<TaxonUpdateToOneWithWhereWithoutProvincesInput, TaxonUpdateWithoutProvincesInput>, TaxonUncheckedUpdateWithoutProvincesInput>
  }

  export type ProvinceUpdateOneRequiredWithoutTaxaNestedInput = {
    create?: XOR<ProvinceCreateWithoutTaxaInput, ProvinceUncheckedCreateWithoutTaxaInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutTaxaInput
    upsert?: ProvinceUpsertWithoutTaxaInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutTaxaInput, ProvinceUpdateWithoutTaxaInput>, ProvinceUncheckedUpdateWithoutTaxaInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type TaxonImageCreateNestedManyWithoutContributorInput = {
    create?: XOR<TaxonImageCreateWithoutContributorInput, TaxonImageUncheckedCreateWithoutContributorInput> | TaxonImageCreateWithoutContributorInput[] | TaxonImageUncheckedCreateWithoutContributorInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutContributorInput | TaxonImageCreateOrConnectWithoutContributorInput[]
    createMany?: TaxonImageCreateManyContributorInputEnvelope
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
  }

  export type TaxonImageCreateNestedManyWithoutReviewerInput = {
    create?: XOR<TaxonImageCreateWithoutReviewerInput, TaxonImageUncheckedCreateWithoutReviewerInput> | TaxonImageCreateWithoutReviewerInput[] | TaxonImageUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutReviewerInput | TaxonImageCreateOrConnectWithoutReviewerInput[]
    createMany?: TaxonImageCreateManyReviewerInputEnvelope
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type TaxonImageLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<TaxonImageLikeCreateWithoutUserInput, TaxonImageLikeUncheckedCreateWithoutUserInput> | TaxonImageLikeCreateWithoutUserInput[] | TaxonImageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutUserInput | TaxonImageLikeCreateOrConnectWithoutUserInput[]
    createMany?: TaxonImageLikeCreateManyUserInputEnvelope
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type TaxonImageUncheckedCreateNestedManyWithoutContributorInput = {
    create?: XOR<TaxonImageCreateWithoutContributorInput, TaxonImageUncheckedCreateWithoutContributorInput> | TaxonImageCreateWithoutContributorInput[] | TaxonImageUncheckedCreateWithoutContributorInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutContributorInput | TaxonImageCreateOrConnectWithoutContributorInput[]
    createMany?: TaxonImageCreateManyContributorInputEnvelope
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
  }

  export type TaxonImageUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<TaxonImageCreateWithoutReviewerInput, TaxonImageUncheckedCreateWithoutReviewerInput> | TaxonImageCreateWithoutReviewerInput[] | TaxonImageUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutReviewerInput | TaxonImageCreateOrConnectWithoutReviewerInput[]
    createMany?: TaxonImageCreateManyReviewerInputEnvelope
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaxonImageLikeCreateWithoutUserInput, TaxonImageLikeUncheckedCreateWithoutUserInput> | TaxonImageLikeCreateWithoutUserInput[] | TaxonImageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutUserInput | TaxonImageLikeCreateOrConnectWithoutUserInput[]
    createMany?: TaxonImageLikeCreateManyUserInputEnvelope
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type TaxonImageUpdateManyWithoutContributorNestedInput = {
    create?: XOR<TaxonImageCreateWithoutContributorInput, TaxonImageUncheckedCreateWithoutContributorInput> | TaxonImageCreateWithoutContributorInput[] | TaxonImageUncheckedCreateWithoutContributorInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutContributorInput | TaxonImageCreateOrConnectWithoutContributorInput[]
    upsert?: TaxonImageUpsertWithWhereUniqueWithoutContributorInput | TaxonImageUpsertWithWhereUniqueWithoutContributorInput[]
    createMany?: TaxonImageCreateManyContributorInputEnvelope
    set?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    disconnect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    delete?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    update?: TaxonImageUpdateWithWhereUniqueWithoutContributorInput | TaxonImageUpdateWithWhereUniqueWithoutContributorInput[]
    updateMany?: TaxonImageUpdateManyWithWhereWithoutContributorInput | TaxonImageUpdateManyWithWhereWithoutContributorInput[]
    deleteMany?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
  }

  export type TaxonImageUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<TaxonImageCreateWithoutReviewerInput, TaxonImageUncheckedCreateWithoutReviewerInput> | TaxonImageCreateWithoutReviewerInput[] | TaxonImageUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutReviewerInput | TaxonImageCreateOrConnectWithoutReviewerInput[]
    upsert?: TaxonImageUpsertWithWhereUniqueWithoutReviewerInput | TaxonImageUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: TaxonImageCreateManyReviewerInputEnvelope
    set?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    disconnect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    delete?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    update?: TaxonImageUpdateWithWhereUniqueWithoutReviewerInput | TaxonImageUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: TaxonImageUpdateManyWithWhereWithoutReviewerInput | TaxonImageUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type TaxonImageLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaxonImageLikeCreateWithoutUserInput, TaxonImageLikeUncheckedCreateWithoutUserInput> | TaxonImageLikeCreateWithoutUserInput[] | TaxonImageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutUserInput | TaxonImageLikeCreateOrConnectWithoutUserInput[]
    upsert?: TaxonImageLikeUpsertWithWhereUniqueWithoutUserInput | TaxonImageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaxonImageLikeCreateManyUserInputEnvelope
    set?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    disconnect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    delete?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    update?: TaxonImageLikeUpdateWithWhereUniqueWithoutUserInput | TaxonImageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaxonImageLikeUpdateManyWithWhereWithoutUserInput | TaxonImageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaxonImageLikeScalarWhereInput | TaxonImageLikeScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type TaxonImageUncheckedUpdateManyWithoutContributorNestedInput = {
    create?: XOR<TaxonImageCreateWithoutContributorInput, TaxonImageUncheckedCreateWithoutContributorInput> | TaxonImageCreateWithoutContributorInput[] | TaxonImageUncheckedCreateWithoutContributorInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutContributorInput | TaxonImageCreateOrConnectWithoutContributorInput[]
    upsert?: TaxonImageUpsertWithWhereUniqueWithoutContributorInput | TaxonImageUpsertWithWhereUniqueWithoutContributorInput[]
    createMany?: TaxonImageCreateManyContributorInputEnvelope
    set?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    disconnect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    delete?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    update?: TaxonImageUpdateWithWhereUniqueWithoutContributorInput | TaxonImageUpdateWithWhereUniqueWithoutContributorInput[]
    updateMany?: TaxonImageUpdateManyWithWhereWithoutContributorInput | TaxonImageUpdateManyWithWhereWithoutContributorInput[]
    deleteMany?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
  }

  export type TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<TaxonImageCreateWithoutReviewerInput, TaxonImageUncheckedCreateWithoutReviewerInput> | TaxonImageCreateWithoutReviewerInput[] | TaxonImageUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaxonImageCreateOrConnectWithoutReviewerInput | TaxonImageCreateOrConnectWithoutReviewerInput[]
    upsert?: TaxonImageUpsertWithWhereUniqueWithoutReviewerInput | TaxonImageUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: TaxonImageCreateManyReviewerInputEnvelope
    set?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    disconnect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    delete?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    connect?: TaxonImageWhereUniqueInput | TaxonImageWhereUniqueInput[]
    update?: TaxonImageUpdateWithWhereUniqueWithoutReviewerInput | TaxonImageUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: TaxonImageUpdateManyWithWhereWithoutReviewerInput | TaxonImageUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaxonImageLikeCreateWithoutUserInput, TaxonImageLikeUncheckedCreateWithoutUserInput> | TaxonImageLikeCreateWithoutUserInput[] | TaxonImageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaxonImageLikeCreateOrConnectWithoutUserInput | TaxonImageLikeCreateOrConnectWithoutUserInput[]
    upsert?: TaxonImageLikeUpsertWithWhereUniqueWithoutUserInput | TaxonImageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaxonImageLikeCreateManyUserInputEnvelope
    set?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    disconnect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    delete?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    connect?: TaxonImageLikeWhereUniqueInput | TaxonImageLikeWhereUniqueInput[]
    update?: TaxonImageLikeUpdateWithWhereUniqueWithoutUserInput | TaxonImageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaxonImageLikeUpdateManyWithWhereWithoutUserInput | TaxonImageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaxonImageLikeScalarWhereInput | TaxonImageLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type TaxonCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<TaxonCreateWithoutBookmarksInput, TaxonUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutBookmarksInput
    connect?: TaxonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type TaxonUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<TaxonCreateWithoutBookmarksInput, TaxonUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: TaxonCreateOrConnectWithoutBookmarksInput
    upsert?: TaxonUpsertWithoutBookmarksInput
    connect?: TaxonWhereUniqueInput
    update?: XOR<XOR<TaxonUpdateToOneWithWhereWithoutBookmarksInput, TaxonUpdateWithoutBookmarksInput>, TaxonUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserCreateNestedOneWithoutImageLikesInput = {
    create?: XOR<UserCreateWithoutImageLikesInput, UserUncheckedCreateWithoutImageLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageLikesInput
    connect?: UserWhereUniqueInput
  }

  export type TaxonImageCreateNestedOneWithoutLikesInput = {
    create?: XOR<TaxonImageCreateWithoutLikesInput, TaxonImageUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TaxonImageCreateOrConnectWithoutLikesInput
    connect?: TaxonImageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutImageLikesNestedInput = {
    create?: XOR<UserCreateWithoutImageLikesInput, UserUncheckedCreateWithoutImageLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageLikesInput
    upsert?: UserUpsertWithoutImageLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImageLikesInput, UserUpdateWithoutImageLikesInput>, UserUncheckedUpdateWithoutImageLikesInput>
  }

  export type TaxonImageUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<TaxonImageCreateWithoutLikesInput, TaxonImageUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TaxonImageCreateOrConnectWithoutLikesInput
    upsert?: TaxonImageUpsertWithoutLikesInput
    connect?: TaxonImageWhereUniqueInput
    update?: XOR<XOR<TaxonImageUpdateToOneWithWhereWithoutLikesInput, TaxonImageUpdateWithoutLikesInput>, TaxonImageUncheckedUpdateWithoutLikesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTaxonomyRankFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxonomyRank | EnumTaxonomyRankFieldRefInput<$PrismaModel>
    in?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxonomyRankFilter<$PrismaModel> | $Enums.TaxonomyRank
  }

  export type NestedEnumPlantGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PlantGroup | EnumPlantGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlantGroupNullableFilter<$PrismaModel> | $Enums.PlantGroup | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaxonomyRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxonomyRank | EnumTaxonomyRankFieldRefInput<$PrismaModel>
    in?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxonomyRank[] | ListEnumTaxonomyRankFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxonomyRankWithAggregatesFilter<$PrismaModel> | $Enums.TaxonomyRank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaxonomyRankFilter<$PrismaModel>
    _max?: NestedEnumTaxonomyRankFilter<$PrismaModel>
  }

  export type NestedEnumPlantGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlantGroup | EnumPlantGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PlantGroup[] | ListEnumPlantGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlantGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.PlantGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlantGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumPlantGroupNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumImageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusFilter<$PrismaModel> | $Enums.ImageStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumImageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusWithAggregatesFilter<$PrismaModel> | $Enums.ImageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageStatusFilter<$PrismaModel>
    _max?: NestedEnumImageStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type TaxonCreateWithoutChildrenInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutChildrenInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutChildrenInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutChildrenInput, TaxonUncheckedCreateWithoutChildrenInput>
  }

  export type TaxonCreateWithoutParentInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutParentInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutParentInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutParentInput, TaxonUncheckedCreateWithoutParentInput>
  }

  export type TaxonCreateManyParentInputEnvelope = {
    data: TaxonCreateManyParentInput | TaxonCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type TaxonSynonymCreateWithoutTaxonInput = {
    scientificName: string
    sourceName?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonSynonymUncheckedCreateWithoutTaxonInput = {
    id?: number
    scientificName: string
    sourceName?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonSynonymCreateOrConnectWithoutTaxonInput = {
    where: TaxonSynonymWhereUniqueInput
    create: XOR<TaxonSynonymCreateWithoutTaxonInput, TaxonSynonymUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonSynonymCreateManyTaxonInputEnvelope = {
    data: TaxonSynonymCreateManyTaxonInput | TaxonSynonymCreateManyTaxonInput[]
    skipDuplicates?: boolean
  }

  export type TaxonCommonNameCreateWithoutTaxonInput = {
    name: string
    language?: string | null
    isPrimary?: boolean
    regionNote?: string | null
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonCommonNameUncheckedCreateWithoutTaxonInput = {
    id?: number
    name: string
    language?: string | null
    isPrimary?: boolean
    regionNote?: string | null
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonCommonNameCreateOrConnectWithoutTaxonInput = {
    where: TaxonCommonNameWhereUniqueInput
    create: XOR<TaxonCommonNameCreateWithoutTaxonInput, TaxonCommonNameUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonCommonNameCreateManyTaxonInputEnvelope = {
    data: TaxonCommonNameCreateManyTaxonInput | TaxonCommonNameCreateManyTaxonInput[]
    skipDuplicates?: boolean
  }

  export type TaxonImageCreateWithoutTaxonInput = {
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributor?: UserCreateNestedOneWithoutUploadedImagesInput
    reviewer?: UserCreateNestedOneWithoutReviewedImagesInput
    likes?: TaxonImageLikeCreateNestedManyWithoutImageInput
  }

  export type TaxonImageUncheckedCreateWithoutTaxonInput = {
    id?: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: TaxonImageLikeUncheckedCreateNestedManyWithoutImageInput
  }

  export type TaxonImageCreateOrConnectWithoutTaxonInput = {
    where: TaxonImageWhereUniqueInput
    create: XOR<TaxonImageCreateWithoutTaxonInput, TaxonImageUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonImageCreateManyTaxonInputEnvelope = {
    data: TaxonImageCreateManyTaxonInput | TaxonImageCreateManyTaxonInput[]
    skipDuplicates?: boolean
  }

  export type TaxonProvinceCreateWithoutTaxonInput = {
    province: ProvinceCreateNestedOneWithoutTaxaInput
  }

  export type TaxonProvinceUncheckedCreateWithoutTaxonInput = {
    provinceId: number
  }

  export type TaxonProvinceCreateOrConnectWithoutTaxonInput = {
    where: TaxonProvinceWhereUniqueInput
    create: XOR<TaxonProvinceCreateWithoutTaxonInput, TaxonProvinceUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonProvinceCreateManyTaxonInputEnvelope = {
    data: TaxonProvinceCreateManyTaxonInput | TaxonProvinceCreateManyTaxonInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutTaxonInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutTaxonInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutTaxonInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutTaxonInput, BookmarkUncheckedCreateWithoutTaxonInput>
  }

  export type BookmarkCreateManyTaxonInputEnvelope = {
    data: BookmarkCreateManyTaxonInput | BookmarkCreateManyTaxonInput[]
    skipDuplicates?: boolean
  }

  export type TaxonUpsertWithoutChildrenInput = {
    update: XOR<TaxonUpdateWithoutChildrenInput, TaxonUncheckedUpdateWithoutChildrenInput>
    create: XOR<TaxonCreateWithoutChildrenInput, TaxonUncheckedCreateWithoutChildrenInput>
    where?: TaxonWhereInput
  }

  export type TaxonUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TaxonWhereInput
    data: XOR<TaxonUpdateWithoutChildrenInput, TaxonUncheckedUpdateWithoutChildrenInput>
  }

  export type TaxonUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUpsertWithWhereUniqueWithoutParentInput = {
    where: TaxonWhereUniqueInput
    update: XOR<TaxonUpdateWithoutParentInput, TaxonUncheckedUpdateWithoutParentInput>
    create: XOR<TaxonCreateWithoutParentInput, TaxonUncheckedCreateWithoutParentInput>
  }

  export type TaxonUpdateWithWhereUniqueWithoutParentInput = {
    where: TaxonWhereUniqueInput
    data: XOR<TaxonUpdateWithoutParentInput, TaxonUncheckedUpdateWithoutParentInput>
  }

  export type TaxonUpdateManyWithWhereWithoutParentInput = {
    where: TaxonScalarWhereInput
    data: XOR<TaxonUpdateManyMutationInput, TaxonUncheckedUpdateManyWithoutParentInput>
  }

  export type TaxonScalarWhereInput = {
    AND?: TaxonScalarWhereInput | TaxonScalarWhereInput[]
    OR?: TaxonScalarWhereInput[]
    NOT?: TaxonScalarWhereInput | TaxonScalarWhereInput[]
    id?: IntFilter<"Taxon"> | number
    slug?: StringFilter<"Taxon"> | string
    canonicalName?: StringFilter<"Taxon"> | string
    scientificName?: StringFilter<"Taxon"> | string
    author?: StringNullableFilter<"Taxon"> | string | null
    vietnameseName?: StringNullableFilter<"Taxon"> | string | null
    primaryImageUrl?: StringNullableFilter<"Taxon"> | string | null
    rank?: EnumTaxonomyRankFilter<"Taxon"> | $Enums.TaxonomyRank
    plantGroup?: EnumPlantGroupNullableFilter<"Taxon"> | $Enums.PlantGroup | null
    parentId?: IntNullableFilter<"Taxon"> | number | null
    status?: EnumPublishStatusFilter<"Taxon"> | $Enums.PublishStatus
    hasVietnamRecord?: BoolFilter<"Taxon"> | boolean
    description?: StringNullableFilter<"Taxon"> | string | null
    descriptionLang?: StringNullableFilter<"Taxon"> | string | null
    habit?: StringNullableFilter<"Taxon"> | string | null
    leaf?: StringNullableFilter<"Taxon"> | string | null
    reproduction?: StringNullableFilter<"Taxon"> | string | null
    phenology?: StringNullableFilter<"Taxon"> | string | null
    value?: StringNullableFilter<"Taxon"> | string | null
    distributionText?: StringNullableFilter<"Taxon"> | string | null
    note?: StringNullableFilter<"Taxon"> | string | null
    sourceName?: StringNullableFilter<"Taxon"> | string | null
    externalId?: StringNullableFilter<"Taxon"> | string | null
    orderInBook?: StringNullableFilter<"Taxon"> | string | null
    rawDescriptionInBook?: StringNullableFilter<"Taxon"> | string | null
    createdAt?: DateTimeFilter<"Taxon"> | Date | string
    updatedAt?: DateTimeFilter<"Taxon"> | Date | string
  }

  export type TaxonSynonymUpsertWithWhereUniqueWithoutTaxonInput = {
    where: TaxonSynonymWhereUniqueInput
    update: XOR<TaxonSynonymUpdateWithoutTaxonInput, TaxonSynonymUncheckedUpdateWithoutTaxonInput>
    create: XOR<TaxonSynonymCreateWithoutTaxonInput, TaxonSynonymUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonSynonymUpdateWithWhereUniqueWithoutTaxonInput = {
    where: TaxonSynonymWhereUniqueInput
    data: XOR<TaxonSynonymUpdateWithoutTaxonInput, TaxonSynonymUncheckedUpdateWithoutTaxonInput>
  }

  export type TaxonSynonymUpdateManyWithWhereWithoutTaxonInput = {
    where: TaxonSynonymScalarWhereInput
    data: XOR<TaxonSynonymUpdateManyMutationInput, TaxonSynonymUncheckedUpdateManyWithoutTaxonInput>
  }

  export type TaxonSynonymScalarWhereInput = {
    AND?: TaxonSynonymScalarWhereInput | TaxonSynonymScalarWhereInput[]
    OR?: TaxonSynonymScalarWhereInput[]
    NOT?: TaxonSynonymScalarWhereInput | TaxonSynonymScalarWhereInput[]
    id?: IntFilter<"TaxonSynonym"> | number
    taxonId?: IntNullableFilter<"TaxonSynonym"> | number | null
    scientificName?: StringFilter<"TaxonSynonym"> | string
    sourceName?: StringNullableFilter<"TaxonSynonym"> | string | null
    externalId?: StringNullableFilter<"TaxonSynonym"> | string | null
    createdAt?: DateTimeFilter<"TaxonSynonym"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonSynonym"> | Date | string
  }

  export type TaxonCommonNameUpsertWithWhereUniqueWithoutTaxonInput = {
    where: TaxonCommonNameWhereUniqueInput
    update: XOR<TaxonCommonNameUpdateWithoutTaxonInput, TaxonCommonNameUncheckedUpdateWithoutTaxonInput>
    create: XOR<TaxonCommonNameCreateWithoutTaxonInput, TaxonCommonNameUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonCommonNameUpdateWithWhereUniqueWithoutTaxonInput = {
    where: TaxonCommonNameWhereUniqueInput
    data: XOR<TaxonCommonNameUpdateWithoutTaxonInput, TaxonCommonNameUncheckedUpdateWithoutTaxonInput>
  }

  export type TaxonCommonNameUpdateManyWithWhereWithoutTaxonInput = {
    where: TaxonCommonNameScalarWhereInput
    data: XOR<TaxonCommonNameUpdateManyMutationInput, TaxonCommonNameUncheckedUpdateManyWithoutTaxonInput>
  }

  export type TaxonCommonNameScalarWhereInput = {
    AND?: TaxonCommonNameScalarWhereInput | TaxonCommonNameScalarWhereInput[]
    OR?: TaxonCommonNameScalarWhereInput[]
    NOT?: TaxonCommonNameScalarWhereInput | TaxonCommonNameScalarWhereInput[]
    id?: IntFilter<"TaxonCommonName"> | number
    taxonId?: IntFilter<"TaxonCommonName"> | number
    name?: StringFilter<"TaxonCommonName"> | string
    language?: StringNullableFilter<"TaxonCommonName"> | string | null
    isPrimary?: BoolFilter<"TaxonCommonName"> | boolean
    regionNote?: StringNullableFilter<"TaxonCommonName"> | string | null
    source?: StringNullableFilter<"TaxonCommonName"> | string | null
    createdAt?: DateTimeFilter<"TaxonCommonName"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonCommonName"> | Date | string
  }

  export type TaxonImageUpsertWithWhereUniqueWithoutTaxonInput = {
    where: TaxonImageWhereUniqueInput
    update: XOR<TaxonImageUpdateWithoutTaxonInput, TaxonImageUncheckedUpdateWithoutTaxonInput>
    create: XOR<TaxonImageCreateWithoutTaxonInput, TaxonImageUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonImageUpdateWithWhereUniqueWithoutTaxonInput = {
    where: TaxonImageWhereUniqueInput
    data: XOR<TaxonImageUpdateWithoutTaxonInput, TaxonImageUncheckedUpdateWithoutTaxonInput>
  }

  export type TaxonImageUpdateManyWithWhereWithoutTaxonInput = {
    where: TaxonImageScalarWhereInput
    data: XOR<TaxonImageUpdateManyMutationInput, TaxonImageUncheckedUpdateManyWithoutTaxonInput>
  }

  export type TaxonImageScalarWhereInput = {
    AND?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
    OR?: TaxonImageScalarWhereInput[]
    NOT?: TaxonImageScalarWhereInput | TaxonImageScalarWhereInput[]
    id?: IntFilter<"TaxonImage"> | number
    taxonId?: IntFilter<"TaxonImage"> | number
    url?: StringFilter<"TaxonImage"> | string
    storageKey?: StringNullableFilter<"TaxonImage"> | string | null
    externalSource?: StringNullableFilter<"TaxonImage"> | string | null
    externalId?: StringNullableFilter<"TaxonImage"> | string | null
    caption?: StringNullableFilter<"TaxonImage"> | string | null
    blurHash?: StringNullableFilter<"TaxonImage"> | string | null
    width?: IntNullableFilter<"TaxonImage"> | number | null
    height?: IntNullableFilter<"TaxonImage"> | number | null
    author?: StringNullableFilter<"TaxonImage"> | string | null
    license?: StringNullableFilter<"TaxonImage"> | string | null
    isPrimary?: BoolFilter<"TaxonImage"> | boolean
    sortOrder?: IntFilter<"TaxonImage"> | number
    status?: EnumImageStatusFilter<"TaxonImage"> | $Enums.ImageStatus
    recordNote?: StringNullableFilter<"TaxonImage"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TaxonImage"> | Date | string | null
    reviewedBy?: UuidNullableFilter<"TaxonImage"> | string | null
    contributorId?: UuidNullableFilter<"TaxonImage"> | string | null
    createdAt?: DateTimeFilter<"TaxonImage"> | Date | string
    updatedAt?: DateTimeFilter<"TaxonImage"> | Date | string
  }

  export type TaxonProvinceUpsertWithWhereUniqueWithoutTaxonInput = {
    where: TaxonProvinceWhereUniqueInput
    update: XOR<TaxonProvinceUpdateWithoutTaxonInput, TaxonProvinceUncheckedUpdateWithoutTaxonInput>
    create: XOR<TaxonProvinceCreateWithoutTaxonInput, TaxonProvinceUncheckedCreateWithoutTaxonInput>
  }

  export type TaxonProvinceUpdateWithWhereUniqueWithoutTaxonInput = {
    where: TaxonProvinceWhereUniqueInput
    data: XOR<TaxonProvinceUpdateWithoutTaxonInput, TaxonProvinceUncheckedUpdateWithoutTaxonInput>
  }

  export type TaxonProvinceUpdateManyWithWhereWithoutTaxonInput = {
    where: TaxonProvinceScalarWhereInput
    data: XOR<TaxonProvinceUpdateManyMutationInput, TaxonProvinceUncheckedUpdateManyWithoutTaxonInput>
  }

  export type TaxonProvinceScalarWhereInput = {
    AND?: TaxonProvinceScalarWhereInput | TaxonProvinceScalarWhereInput[]
    OR?: TaxonProvinceScalarWhereInput[]
    NOT?: TaxonProvinceScalarWhereInput | TaxonProvinceScalarWhereInput[]
    taxonId?: IntFilter<"TaxonProvince"> | number
    provinceId?: IntFilter<"TaxonProvince"> | number
  }

  export type BookmarkUpsertWithWhereUniqueWithoutTaxonInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutTaxonInput, BookmarkUncheckedUpdateWithoutTaxonInput>
    create: XOR<BookmarkCreateWithoutTaxonInput, BookmarkUncheckedCreateWithoutTaxonInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutTaxonInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutTaxonInput, BookmarkUncheckedUpdateWithoutTaxonInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutTaxonInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutTaxonInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: IntFilter<"Bookmark"> | number
    userId?: UuidFilter<"Bookmark"> | string
    taxonId?: IntFilter<"Bookmark"> | number
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type TaxonCreateWithoutSynonymsInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    children?: TaxonCreateNestedManyWithoutParentInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutSynonymsInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutSynonymsInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutSynonymsInput, TaxonUncheckedCreateWithoutSynonymsInput>
  }

  export type TaxonUpsertWithoutSynonymsInput = {
    update: XOR<TaxonUpdateWithoutSynonymsInput, TaxonUncheckedUpdateWithoutSynonymsInput>
    create: XOR<TaxonCreateWithoutSynonymsInput, TaxonUncheckedCreateWithoutSynonymsInput>
    where?: TaxonWhereInput
  }

  export type TaxonUpdateToOneWithWhereWithoutSynonymsInput = {
    where?: TaxonWhereInput
    data: XOR<TaxonUpdateWithoutSynonymsInput, TaxonUncheckedUpdateWithoutSynonymsInput>
  }

  export type TaxonUpdateWithoutSynonymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    children?: TaxonUpdateManyWithoutParentNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutSynonymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonCreateWithoutCommonNamesInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    children?: TaxonCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutCommonNamesInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutCommonNamesInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutCommonNamesInput, TaxonUncheckedCreateWithoutCommonNamesInput>
  }

  export type TaxonUpsertWithoutCommonNamesInput = {
    update: XOR<TaxonUpdateWithoutCommonNamesInput, TaxonUncheckedUpdateWithoutCommonNamesInput>
    create: XOR<TaxonCreateWithoutCommonNamesInput, TaxonUncheckedCreateWithoutCommonNamesInput>
    where?: TaxonWhereInput
  }

  export type TaxonUpdateToOneWithWhereWithoutCommonNamesInput = {
    where?: TaxonWhereInput
    data: XOR<TaxonUpdateWithoutCommonNamesInput, TaxonUncheckedUpdateWithoutCommonNamesInput>
  }

  export type TaxonUpdateWithoutCommonNamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    children?: TaxonUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutCommonNamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonCreateWithoutImagesInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    children?: TaxonCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutImagesInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutImagesInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutImagesInput, TaxonUncheckedCreateWithoutImagesInput>
  }

  export type UserCreateWithoutUploadedImagesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    reviewedImages?: TaxonImageCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploadedImagesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    reviewedImages?: TaxonImageUncheckedCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploadedImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedImagesInput, UserUncheckedCreateWithoutUploadedImagesInput>
  }

  export type UserCreateWithoutReviewedImagesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageCreateNestedManyWithoutContributorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewedImagesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageUncheckedCreateNestedManyWithoutContributorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewedImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedImagesInput, UserUncheckedCreateWithoutReviewedImagesInput>
  }

  export type TaxonImageLikeCreateWithoutImageInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImageLikesInput
  }

  export type TaxonImageLikeUncheckedCreateWithoutImageInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type TaxonImageLikeCreateOrConnectWithoutImageInput = {
    where: TaxonImageLikeWhereUniqueInput
    create: XOR<TaxonImageLikeCreateWithoutImageInput, TaxonImageLikeUncheckedCreateWithoutImageInput>
  }

  export type TaxonImageLikeCreateManyImageInputEnvelope = {
    data: TaxonImageLikeCreateManyImageInput | TaxonImageLikeCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type TaxonUpsertWithoutImagesInput = {
    update: XOR<TaxonUpdateWithoutImagesInput, TaxonUncheckedUpdateWithoutImagesInput>
    create: XOR<TaxonCreateWithoutImagesInput, TaxonUncheckedCreateWithoutImagesInput>
    where?: TaxonWhereInput
  }

  export type TaxonUpdateToOneWithWhereWithoutImagesInput = {
    where?: TaxonWhereInput
    data: XOR<TaxonUpdateWithoutImagesInput, TaxonUncheckedUpdateWithoutImagesInput>
  }

  export type TaxonUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    children?: TaxonUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type UserUpsertWithoutUploadedImagesInput = {
    update: XOR<UserUpdateWithoutUploadedImagesInput, UserUncheckedUpdateWithoutUploadedImagesInput>
    create: XOR<UserCreateWithoutUploadedImagesInput, UserUncheckedCreateWithoutUploadedImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedImagesInput, UserUncheckedUpdateWithoutUploadedImagesInput>
  }

  export type UserUpdateWithoutUploadedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    reviewedImages?: TaxonImageUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    reviewedImages?: TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReviewedImagesInput = {
    update: XOR<UserUpdateWithoutReviewedImagesInput, UserUncheckedUpdateWithoutReviewedImagesInput>
    create: XOR<UserCreateWithoutReviewedImagesInput, UserUncheckedCreateWithoutReviewedImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedImagesInput, UserUncheckedUpdateWithoutReviewedImagesInput>
  }

  export type UserUpdateWithoutReviewedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUpdateManyWithoutContributorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUncheckedUpdateManyWithoutContributorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaxonImageLikeUpsertWithWhereUniqueWithoutImageInput = {
    where: TaxonImageLikeWhereUniqueInput
    update: XOR<TaxonImageLikeUpdateWithoutImageInput, TaxonImageLikeUncheckedUpdateWithoutImageInput>
    create: XOR<TaxonImageLikeCreateWithoutImageInput, TaxonImageLikeUncheckedCreateWithoutImageInput>
  }

  export type TaxonImageLikeUpdateWithWhereUniqueWithoutImageInput = {
    where: TaxonImageLikeWhereUniqueInput
    data: XOR<TaxonImageLikeUpdateWithoutImageInput, TaxonImageLikeUncheckedUpdateWithoutImageInput>
  }

  export type TaxonImageLikeUpdateManyWithWhereWithoutImageInput = {
    where: TaxonImageLikeScalarWhereInput
    data: XOR<TaxonImageLikeUpdateManyMutationInput, TaxonImageLikeUncheckedUpdateManyWithoutImageInput>
  }

  export type TaxonImageLikeScalarWhereInput = {
    AND?: TaxonImageLikeScalarWhereInput | TaxonImageLikeScalarWhereInput[]
    OR?: TaxonImageLikeScalarWhereInput[]
    NOT?: TaxonImageLikeScalarWhereInput | TaxonImageLikeScalarWhereInput[]
    id?: IntFilter<"TaxonImageLike"> | number
    userId?: UuidFilter<"TaxonImageLike"> | string
    imageId?: IntFilter<"TaxonImageLike"> | number
    createdAt?: DateTimeFilter<"TaxonImageLike"> | Date | string
  }

  export type TaxonProvinceCreateWithoutProvinceInput = {
    taxon: TaxonCreateNestedOneWithoutProvincesInput
  }

  export type TaxonProvinceUncheckedCreateWithoutProvinceInput = {
    taxonId: number
  }

  export type TaxonProvinceCreateOrConnectWithoutProvinceInput = {
    where: TaxonProvinceWhereUniqueInput
    create: XOR<TaxonProvinceCreateWithoutProvinceInput, TaxonProvinceUncheckedCreateWithoutProvinceInput>
  }

  export type TaxonProvinceCreateManyProvinceInputEnvelope = {
    data: TaxonProvinceCreateManyProvinceInput | TaxonProvinceCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type TaxonProvinceUpsertWithWhereUniqueWithoutProvinceInput = {
    where: TaxonProvinceWhereUniqueInput
    update: XOR<TaxonProvinceUpdateWithoutProvinceInput, TaxonProvinceUncheckedUpdateWithoutProvinceInput>
    create: XOR<TaxonProvinceCreateWithoutProvinceInput, TaxonProvinceUncheckedCreateWithoutProvinceInput>
  }

  export type TaxonProvinceUpdateWithWhereUniqueWithoutProvinceInput = {
    where: TaxonProvinceWhereUniqueInput
    data: XOR<TaxonProvinceUpdateWithoutProvinceInput, TaxonProvinceUncheckedUpdateWithoutProvinceInput>
  }

  export type TaxonProvinceUpdateManyWithWhereWithoutProvinceInput = {
    where: TaxonProvinceScalarWhereInput
    data: XOR<TaxonProvinceUpdateManyMutationInput, TaxonProvinceUncheckedUpdateManyWithoutProvinceInput>
  }

  export type TaxonCreateWithoutProvincesInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    children?: TaxonCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutProvincesInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutProvincesInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutProvincesInput, TaxonUncheckedCreateWithoutProvincesInput>
  }

  export type ProvinceCreateWithoutTaxaInput = {
    name: string
  }

  export type ProvinceUncheckedCreateWithoutTaxaInput = {
    id?: number
    name: string
  }

  export type ProvinceCreateOrConnectWithoutTaxaInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutTaxaInput, ProvinceUncheckedCreateWithoutTaxaInput>
  }

  export type TaxonUpsertWithoutProvincesInput = {
    update: XOR<TaxonUpdateWithoutProvincesInput, TaxonUncheckedUpdateWithoutProvincesInput>
    create: XOR<TaxonCreateWithoutProvincesInput, TaxonUncheckedCreateWithoutProvincesInput>
    where?: TaxonWhereInput
  }

  export type TaxonUpdateToOneWithWhereWithoutProvincesInput = {
    where?: TaxonWhereInput
    data: XOR<TaxonUpdateWithoutProvincesInput, TaxonUncheckedUpdateWithoutProvincesInput>
  }

  export type TaxonUpdateWithoutProvincesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    children?: TaxonUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutProvincesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type ProvinceUpsertWithoutTaxaInput = {
    update: XOR<ProvinceUpdateWithoutTaxaInput, ProvinceUncheckedUpdateWithoutTaxaInput>
    create: XOR<ProvinceCreateWithoutTaxaInput, ProvinceUncheckedCreateWithoutTaxaInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutTaxaInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutTaxaInput, ProvinceUncheckedUpdateWithoutTaxaInput>
  }

  export type ProvinceUpdateWithoutTaxaInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateWithoutTaxaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutUserInput = {
    createdAt?: Date | string
    taxon: TaxonCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: number
    taxonId: number
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaxonImageCreateWithoutContributorInput = {
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxon: TaxonCreateNestedOneWithoutImagesInput
    reviewer?: UserCreateNestedOneWithoutReviewedImagesInput
    likes?: TaxonImageLikeCreateNestedManyWithoutImageInput
  }

  export type TaxonImageUncheckedCreateWithoutContributorInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: TaxonImageLikeUncheckedCreateNestedManyWithoutImageInput
  }

  export type TaxonImageCreateOrConnectWithoutContributorInput = {
    where: TaxonImageWhereUniqueInput
    create: XOR<TaxonImageCreateWithoutContributorInput, TaxonImageUncheckedCreateWithoutContributorInput>
  }

  export type TaxonImageCreateManyContributorInputEnvelope = {
    data: TaxonImageCreateManyContributorInput | TaxonImageCreateManyContributorInput[]
    skipDuplicates?: boolean
  }

  export type TaxonImageCreateWithoutReviewerInput = {
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxon: TaxonCreateNestedOneWithoutImagesInput
    contributor?: UserCreateNestedOneWithoutUploadedImagesInput
    likes?: TaxonImageLikeCreateNestedManyWithoutImageInput
  }

  export type TaxonImageUncheckedCreateWithoutReviewerInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: TaxonImageLikeUncheckedCreateNestedManyWithoutImageInput
  }

  export type TaxonImageCreateOrConnectWithoutReviewerInput = {
    where: TaxonImageWhereUniqueInput
    create: XOR<TaxonImageCreateWithoutReviewerInput, TaxonImageUncheckedCreateWithoutReviewerInput>
  }

  export type TaxonImageCreateManyReviewerInputEnvelope = {
    data: TaxonImageCreateManyReviewerInput | TaxonImageCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaxonImageLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    image: TaxonImageCreateNestedOneWithoutLikesInput
  }

  export type TaxonImageLikeUncheckedCreateWithoutUserInput = {
    id?: number
    imageId: number
    createdAt?: Date | string
  }

  export type TaxonImageLikeCreateOrConnectWithoutUserInput = {
    where: TaxonImageLikeWhereUniqueInput
    create: XOR<TaxonImageLikeCreateWithoutUserInput, TaxonImageLikeUncheckedCreateWithoutUserInput>
  }

  export type TaxonImageLikeCreateManyUserInputEnvelope = {
    data: TaxonImageLikeCreateManyUserInput | TaxonImageLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: UuidFilter<"Account"> | string
    userId?: UuidFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type TaxonImageUpsertWithWhereUniqueWithoutContributorInput = {
    where: TaxonImageWhereUniqueInput
    update: XOR<TaxonImageUpdateWithoutContributorInput, TaxonImageUncheckedUpdateWithoutContributorInput>
    create: XOR<TaxonImageCreateWithoutContributorInput, TaxonImageUncheckedCreateWithoutContributorInput>
  }

  export type TaxonImageUpdateWithWhereUniqueWithoutContributorInput = {
    where: TaxonImageWhereUniqueInput
    data: XOR<TaxonImageUpdateWithoutContributorInput, TaxonImageUncheckedUpdateWithoutContributorInput>
  }

  export type TaxonImageUpdateManyWithWhereWithoutContributorInput = {
    where: TaxonImageScalarWhereInput
    data: XOR<TaxonImageUpdateManyMutationInput, TaxonImageUncheckedUpdateManyWithoutContributorInput>
  }

  export type TaxonImageUpsertWithWhereUniqueWithoutReviewerInput = {
    where: TaxonImageWhereUniqueInput
    update: XOR<TaxonImageUpdateWithoutReviewerInput, TaxonImageUncheckedUpdateWithoutReviewerInput>
    create: XOR<TaxonImageCreateWithoutReviewerInput, TaxonImageUncheckedCreateWithoutReviewerInput>
  }

  export type TaxonImageUpdateWithWhereUniqueWithoutReviewerInput = {
    where: TaxonImageWhereUniqueInput
    data: XOR<TaxonImageUpdateWithoutReviewerInput, TaxonImageUncheckedUpdateWithoutReviewerInput>
  }

  export type TaxonImageUpdateManyWithWhereWithoutReviewerInput = {
    where: TaxonImageScalarWhereInput
    data: XOR<TaxonImageUpdateManyMutationInput, TaxonImageUncheckedUpdateManyWithoutReviewerInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type TaxonImageLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: TaxonImageLikeWhereUniqueInput
    update: XOR<TaxonImageLikeUpdateWithoutUserInput, TaxonImageLikeUncheckedUpdateWithoutUserInput>
    create: XOR<TaxonImageLikeCreateWithoutUserInput, TaxonImageLikeUncheckedCreateWithoutUserInput>
  }

  export type TaxonImageLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: TaxonImageLikeWhereUniqueInput
    data: XOR<TaxonImageLikeUpdateWithoutUserInput, TaxonImageLikeUncheckedUpdateWithoutUserInput>
  }

  export type TaxonImageLikeUpdateManyWithWhereWithoutUserInput = {
    where: TaxonImageLikeScalarWhereInput
    data: XOR<TaxonImageLikeUpdateManyMutationInput, TaxonImageLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageCreateNestedManyWithoutReviewerInput
    imageLikes?: TaxonImageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageUncheckedCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageUncheckedCreateNestedManyWithoutReviewerInput
    imageLikes?: TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUpdateManyWithoutReviewerNestedInput
    imageLikes?: TaxonImageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUncheckedUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput
    imageLikes?: TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageUncheckedCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageUncheckedCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUncheckedUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageUncheckedCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageUncheckedCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    imageLikes?: TaxonImageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type TaxonCreateWithoutBookmarksInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaxonCreateNestedOneWithoutChildrenInput
    children?: TaxonCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameCreateNestedManyWithoutTaxonInput
    images?: TaxonImageCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceCreateNestedManyWithoutTaxonInput
  }

  export type TaxonUncheckedCreateWithoutBookmarksInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    parentId?: number | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TaxonUncheckedCreateNestedManyWithoutParentInput
    synonyms?: TaxonSynonymUncheckedCreateNestedManyWithoutTaxonInput
    commonNames?: TaxonCommonNameUncheckedCreateNestedManyWithoutTaxonInput
    images?: TaxonImageUncheckedCreateNestedManyWithoutTaxonInput
    provinces?: TaxonProvinceUncheckedCreateNestedManyWithoutTaxonInput
  }

  export type TaxonCreateOrConnectWithoutBookmarksInput = {
    where: TaxonWhereUniqueInput
    create: XOR<TaxonCreateWithoutBookmarksInput, TaxonUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUncheckedUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    imageLikes?: TaxonImageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaxonUpsertWithoutBookmarksInput = {
    update: XOR<TaxonUpdateWithoutBookmarksInput, TaxonUncheckedUpdateWithoutBookmarksInput>
    create: XOR<TaxonCreateWithoutBookmarksInput, TaxonUncheckedCreateWithoutBookmarksInput>
    where?: TaxonWhereInput
  }

  export type TaxonUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: TaxonWhereInput
    data: XOR<TaxonUpdateWithoutBookmarksInput, TaxonUncheckedUpdateWithoutBookmarksInput>
  }

  export type TaxonUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaxonUpdateOneWithoutChildrenNestedInput
    children?: TaxonUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type UserCreateWithoutImageLikesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImageLikesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    uploadedImages?: TaxonImageUncheckedCreateNestedManyWithoutContributorInput
    reviewedImages?: TaxonImageUncheckedCreateNestedManyWithoutReviewerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImageLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageLikesInput, UserUncheckedCreateWithoutImageLikesInput>
  }

  export type TaxonImageCreateWithoutLikesInput = {
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxon: TaxonCreateNestedOneWithoutImagesInput
    contributor?: UserCreateNestedOneWithoutUploadedImagesInput
    reviewer?: UserCreateNestedOneWithoutReviewedImagesInput
  }

  export type TaxonImageUncheckedCreateWithoutLikesInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonImageCreateOrConnectWithoutLikesInput = {
    where: TaxonImageWhereUniqueInput
    create: XOR<TaxonImageCreateWithoutLikesInput, TaxonImageUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutImageLikesInput = {
    update: XOR<UserUpdateWithoutImageLikesInput, UserUncheckedUpdateWithoutImageLikesInput>
    create: XOR<UserCreateWithoutImageLikesInput, UserUncheckedCreateWithoutImageLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImageLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImageLikesInput, UserUncheckedUpdateWithoutImageLikesInput>
  }

  export type UserUpdateWithoutImageLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImageLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    uploadedImages?: TaxonImageUncheckedUpdateManyWithoutContributorNestedInput
    reviewedImages?: TaxonImageUncheckedUpdateManyWithoutReviewerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaxonImageUpsertWithoutLikesInput = {
    update: XOR<TaxonImageUpdateWithoutLikesInput, TaxonImageUncheckedUpdateWithoutLikesInput>
    create: XOR<TaxonImageCreateWithoutLikesInput, TaxonImageUncheckedCreateWithoutLikesInput>
    where?: TaxonImageWhereInput
  }

  export type TaxonImageUpdateToOneWithWhereWithoutLikesInput = {
    where?: TaxonImageWhereInput
    data: XOR<TaxonImageUpdateWithoutLikesInput, TaxonImageUncheckedUpdateWithoutLikesInput>
  }

  export type TaxonImageUpdateWithoutLikesInput = {
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneRequiredWithoutImagesNestedInput
    contributor?: UserUpdateOneWithoutUploadedImagesNestedInput
    reviewer?: UserUpdateOneWithoutReviewedImagesNestedInput
  }

  export type TaxonImageUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCreateManyParentInput = {
    id: number
    slug: string
    canonicalName: string
    scientificName: string
    author?: string | null
    vietnameseName?: string | null
    primaryImageUrl?: string | null
    rank: $Enums.TaxonomyRank
    plantGroup?: $Enums.PlantGroup | null
    status?: $Enums.PublishStatus
    hasVietnamRecord?: boolean
    description?: string | null
    descriptionLang?: string | null
    habit?: string | null
    leaf?: string | null
    reproduction?: string | null
    phenology?: string | null
    value?: string | null
    distributionText?: string | null
    note?: string | null
    sourceName?: string | null
    externalId?: string | null
    orderInBook?: string | null
    rawDescriptionInBook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonSynonymCreateManyTaxonInput = {
    id?: number
    scientificName: string
    sourceName?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonCommonNameCreateManyTaxonInput = {
    id?: number
    name: string
    language?: string | null
    isPrimary?: boolean
    regionNote?: string | null
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonImageCreateManyTaxonInput = {
    id?: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonProvinceCreateManyTaxonInput = {
    provinceId: number
  }

  export type BookmarkCreateManyTaxonInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type TaxonUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TaxonUncheckedUpdateManyWithoutParentNestedInput
    synonyms?: TaxonSynonymUncheckedUpdateManyWithoutTaxonNestedInput
    commonNames?: TaxonCommonNameUncheckedUpdateManyWithoutTaxonNestedInput
    images?: TaxonImageUncheckedUpdateManyWithoutTaxonNestedInput
    provinces?: TaxonProvinceUncheckedUpdateManyWithoutTaxonNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTaxonNestedInput
  }

  export type TaxonUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    vietnameseName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumTaxonomyRankFieldUpdateOperationsInput | $Enums.TaxonomyRank
    plantGroup?: NullableEnumPlantGroupFieldUpdateOperationsInput | $Enums.PlantGroup | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    hasVietnamRecord?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionLang?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: NullableStringFieldUpdateOperationsInput | string | null
    leaf?: NullableStringFieldUpdateOperationsInput | string | null
    reproduction?: NullableStringFieldUpdateOperationsInput | string | null
    phenology?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    distributionText?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    orderInBook?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescriptionInBook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonSynonymUpdateWithoutTaxonInput = {
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonSynonymUncheckedUpdateWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonSynonymUncheckedUpdateManyWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    scientificName?: StringFieldUpdateOperationsInput | string
    sourceName?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCommonNameUpdateWithoutTaxonInput = {
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCommonNameUncheckedUpdateWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonCommonNameUncheckedUpdateManyWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    regionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageUpdateWithoutTaxonInput = {
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributor?: UserUpdateOneWithoutUploadedImagesNestedInput
    reviewer?: UserUpdateOneWithoutReviewedImagesNestedInput
    likes?: TaxonImageLikeUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: TaxonImageLikeUncheckedUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateManyWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonProvinceUpdateWithoutTaxonInput = {
    province?: ProvinceUpdateOneRequiredWithoutTaxaNestedInput
  }

  export type TaxonProvinceUncheckedUpdateWithoutTaxonInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type TaxonProvinceUncheckedUpdateManyWithoutTaxonInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkUpdateWithoutTaxonInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutTaxonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeCreateManyImageInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type TaxonImageLikeUpdateWithoutImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImageLikesNestedInput
  }

  export type TaxonImageLikeUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonProvinceCreateManyProvinceInput = {
    taxonId: number
  }

  export type TaxonProvinceUpdateWithoutProvinceInput = {
    taxon?: TaxonUpdateOneRequiredWithoutProvincesNestedInput
  }

  export type TaxonProvinceUncheckedUpdateWithoutProvinceInput = {
    taxonId?: IntFieldUpdateOperationsInput | number
  }

  export type TaxonProvinceUncheckedUpdateManyWithoutProvinceInput = {
    taxonId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateManyUserInput = {
    id?: string
    provider: string
    providerAccountId: string
  }

  export type BookmarkCreateManyUserInput = {
    id?: number
    taxonId: number
    createdAt?: Date | string
  }

  export type TaxonImageCreateManyContributorInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxonImageCreateManyReviewerInput = {
    id?: number
    taxonId: number
    url: string
    storageKey?: string | null
    externalSource?: string | null
    externalId?: string | null
    caption?: string | null
    blurHash?: string | null
    width?: number | null
    height?: number | null
    author?: string | null
    license?: string | null
    isPrimary?: boolean
    sortOrder?: number
    status?: $Enums.ImageStatus
    recordNote?: string | null
    reviewedAt?: Date | string | null
    contributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TaxonImageLikeCreateManyUserInput = {
    id?: number
    imageId: number
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type BookmarkUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageUpdateWithoutContributorInput = {
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneRequiredWithoutImagesNestedInput
    reviewer?: UserUpdateOneWithoutReviewedImagesNestedInput
    likes?: TaxonImageLikeUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateWithoutContributorInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: TaxonImageLikeUncheckedUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateManyWithoutContributorInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageUpdateWithoutReviewerInput = {
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxon?: TaxonUpdateOneRequiredWithoutImagesNestedInput
    contributor?: UserUpdateOneWithoutUploadedImagesNestedInput
    likes?: TaxonImageLikeUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: TaxonImageLikeUncheckedUpdateManyWithoutImageNestedInput
  }

  export type TaxonImageUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blurHash?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    recordNote?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: TaxonImageUpdateOneRequiredWithoutLikesNestedInput
  }

  export type TaxonImageLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxonImageLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}