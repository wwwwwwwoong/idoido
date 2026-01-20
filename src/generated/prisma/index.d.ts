
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model WalletLedger
 * 
 */
export type WalletLedger = $Result.DefaultSelection<Prisma.$WalletLedgerPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model Scene
 * 
 */
export type Scene = $Result.DefaultSelection<Prisma.$ScenePayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model ProjectSeed
 * 
 */
export type ProjectSeed = $Result.DefaultSelection<Prisma.$ProjectSeedPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model GenerationJob
 * 
 */
export type GenerationJob = $Result.DefaultSelection<Prisma.$GenerationJobPayload>
/**
 * Model SeedLedger
 * 
 */
export type SeedLedger = $Result.DefaultSelection<Prisma.$SeedLedgerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ResultChoice: {
  SUCCESS: 'SUCCESS',
  SILLY: 'SILLY',
  NEXT: 'NEXT'
};

export type ResultChoice = (typeof ResultChoice)[keyof typeof ResultChoice]


export const CurrencyType: {
  WATER_DROP: 'WATER_DROP',
  MAGIC_SEED: 'MAGIC_SEED'
};

export type CurrencyType = (typeof CurrencyType)[keyof typeof CurrencyType]


export const BookStatus: {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED'
};

export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus]

}

export type ResultChoice = $Enums.ResultChoice

export const ResultChoice: typeof $Enums.ResultChoice

export type CurrencyType = $Enums.CurrencyType

export const CurrencyType: typeof $Enums.CurrencyType

export type BookStatus = $Enums.BookStatus

export const BookStatus: typeof $Enums.BookStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletLedger`: Exposes CRUD operations for the **WalletLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletLedgers
    * const walletLedgers = await prisma.walletLedger.findMany()
    * ```
    */
  get walletLedger(): Prisma.WalletLedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scene`: Exposes CRUD operations for the **Scene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenes
    * const scenes = await prisma.scene.findMany()
    * ```
    */
  get scene(): Prisma.SceneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectSeed`: Exposes CRUD operations for the **ProjectSeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSeeds
    * const projectSeeds = await prisma.projectSeed.findMany()
    * ```
    */
  get projectSeed(): Prisma.ProjectSeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generationJob`: Exposes CRUD operations for the **GenerationJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenerationJobs
    * const generationJobs = await prisma.generationJob.findMany()
    * ```
    */
  get generationJob(): Prisma.GenerationJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seedLedger`: Exposes CRUD operations for the **SeedLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeedLedgers
    * const seedLedgers = await prisma.seedLedger.findMany()
    * ```
    */
  get seedLedger(): Prisma.SeedLedgerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    Profile: 'Profile',
    WalletLedger: 'WalletLedger',
    Character: 'Character',
    Scene: 'Scene',
    Book: 'Book',
    ProjectSeed: 'ProjectSeed',
    Card: 'Card',
    GenerationJob: 'GenerationJob',
    SeedLedger: 'SeedLedger'
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
      modelProps: "profile" | "walletLedger" | "character" | "scene" | "book" | "projectSeed" | "card" | "generationJob" | "seedLedger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      WalletLedger: {
        payload: Prisma.$WalletLedgerPayload<ExtArgs>
        fields: Prisma.WalletLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>
          }
          findFirst: {
            args: Prisma.WalletLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>
          }
          findMany: {
            args: Prisma.WalletLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>[]
          }
          create: {
            args: Prisma.WalletLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>
          }
          createMany: {
            args: Prisma.WalletLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>[]
          }
          delete: {
            args: Prisma.WalletLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>
          }
          update: {
            args: Prisma.WalletLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>
          }
          deleteMany: {
            args: Prisma.WalletLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletLedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>[]
          }
          upsert: {
            args: Prisma.WalletLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerPayload>
          }
          aggregate: {
            args: Prisma.WalletLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletLedger>
          }
          groupBy: {
            args: Prisma.WalletLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<WalletLedgerCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      Scene: {
        payload: Prisma.$ScenePayload<ExtArgs>
        fields: Prisma.SceneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SceneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SceneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          findFirst: {
            args: Prisma.SceneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SceneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          findMany: {
            args: Prisma.SceneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          create: {
            args: Prisma.SceneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          createMany: {
            args: Prisma.SceneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SceneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          delete: {
            args: Prisma.SceneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          update: {
            args: Prisma.SceneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          deleteMany: {
            args: Prisma.SceneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SceneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SceneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          upsert: {
            args: Prisma.SceneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          aggregate: {
            args: Prisma.SceneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScene>
          }
          groupBy: {
            args: Prisma.SceneGroupByArgs<ExtArgs>
            result: $Utils.Optional<SceneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SceneCountArgs<ExtArgs>
            result: $Utils.Optional<SceneCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      ProjectSeed: {
        payload: Prisma.$ProjectSeedPayload<ExtArgs>
        fields: Prisma.ProjectSeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>
          }
          findFirst: {
            args: Prisma.ProjectSeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>
          }
          findMany: {
            args: Prisma.ProjectSeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>[]
          }
          create: {
            args: Prisma.ProjectSeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>
          }
          createMany: {
            args: Prisma.ProjectSeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectSeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>[]
          }
          delete: {
            args: Prisma.ProjectSeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>
          }
          update: {
            args: Prisma.ProjectSeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectSeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>[]
          }
          upsert: {
            args: Prisma.ProjectSeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSeedPayload>
          }
          aggregate: {
            args: Prisma.ProjectSeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSeed>
          }
          groupBy: {
            args: Prisma.ProjectSeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSeedCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSeedCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      GenerationJob: {
        payload: Prisma.$GenerationJobPayload<ExtArgs>
        fields: Prisma.GenerationJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>
          }
          findFirst: {
            args: Prisma.GenerationJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>
          }
          findMany: {
            args: Prisma.GenerationJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>[]
          }
          create: {
            args: Prisma.GenerationJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>
          }
          createMany: {
            args: Prisma.GenerationJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenerationJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>[]
          }
          delete: {
            args: Prisma.GenerationJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>
          }
          update: {
            args: Prisma.GenerationJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>
          }
          deleteMany: {
            args: Prisma.GenerationJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenerationJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>[]
          }
          upsert: {
            args: Prisma.GenerationJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobPayload>
          }
          aggregate: {
            args: Prisma.GenerationJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenerationJob>
          }
          groupBy: {
            args: Prisma.GenerationJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationJobCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationJobCountAggregateOutputType> | number
          }
        }
      }
      SeedLedger: {
        payload: Prisma.$SeedLedgerPayload<ExtArgs>
        fields: Prisma.SeedLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeedLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeedLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>
          }
          findFirst: {
            args: Prisma.SeedLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeedLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>
          }
          findMany: {
            args: Prisma.SeedLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>[]
          }
          create: {
            args: Prisma.SeedLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>
          }
          createMany: {
            args: Prisma.SeedLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeedLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>[]
          }
          delete: {
            args: Prisma.SeedLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>
          }
          update: {
            args: Prisma.SeedLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>
          }
          deleteMany: {
            args: Prisma.SeedLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeedLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeedLedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>[]
          }
          upsert: {
            args: Prisma.SeedLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLedgerPayload>
          }
          aggregate: {
            args: Prisma.SeedLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeedLedger>
          }
          groupBy: {
            args: Prisma.SeedLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeedLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeedLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<SeedLedgerCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    walletLedger?: WalletLedgerOmit
    character?: CharacterOmit
    scene?: SceneOmit
    book?: BookOmit
    projectSeed?: ProjectSeedOmit
    card?: CardOmit
    generationJob?: GenerationJobOmit
    seedLedger?: SeedLedgerOmit
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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    characters: number
    scenes: number
    walletLedger: number
    books: number
    cards: number
    seedLedger: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | ProfileCountOutputTypeCountCharactersArgs
    scenes?: boolean | ProfileCountOutputTypeCountScenesArgs
    walletLedger?: boolean | ProfileCountOutputTypeCountWalletLedgerArgs
    books?: boolean | ProfileCountOutputTypeCountBooksArgs
    cards?: boolean | ProfileCountOutputTypeCountCardsArgs
    seedLedger?: boolean | ProfileCountOutputTypeCountSeedLedgerArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWalletLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletLedgerWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSeedLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedLedgerWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    scenes: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenes?: boolean | CharacterCountOutputTypeCountScenesArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    scenes: number
    seeds: number
    cards: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenes?: boolean | BookCountOutputTypeCountScenesArgs
    seeds?: boolean | BookCountOutputTypeCountSeedsArgs
    cards?: boolean | BookCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountSeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSeedWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    waterDrops: number | null
    magicSeeds: number | null
  }

  export type ProfileSumAggregateOutputType = {
    waterDrops: number | null
    magicSeeds: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    waterDrops: number | null
    magicSeeds: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    waterDrops: number | null
    magicSeeds: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    waterDrops: number
    magicSeeds: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    waterDrops?: true
    magicSeeds?: true
  }

  export type ProfileSumAggregateInputType = {
    waterDrops?: true
    magicSeeds?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    waterDrops?: true
    magicSeeds?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    waterDrops?: true
    magicSeeds?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    waterDrops?: true
    magicSeeds?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    createdAt: Date
    waterDrops: number
    magicSeeds: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    waterDrops?: boolean
    magicSeeds?: boolean
    characters?: boolean | Profile$charactersArgs<ExtArgs>
    scenes?: boolean | Profile$scenesArgs<ExtArgs>
    walletLedger?: boolean | Profile$walletLedgerArgs<ExtArgs>
    books?: boolean | Profile$booksArgs<ExtArgs>
    cards?: boolean | Profile$cardsArgs<ExtArgs>
    seedLedger?: boolean | Profile$seedLedgerArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    waterDrops?: boolean
    magicSeeds?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    waterDrops?: boolean
    magicSeeds?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    waterDrops?: boolean
    magicSeeds?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "waterDrops" | "magicSeeds", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | Profile$charactersArgs<ExtArgs>
    scenes?: boolean | Profile$scenesArgs<ExtArgs>
    walletLedger?: boolean | Profile$walletLedgerArgs<ExtArgs>
    books?: boolean | Profile$booksArgs<ExtArgs>
    cards?: boolean | Profile$cardsArgs<ExtArgs>
    seedLedger?: boolean | Profile$seedLedgerArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[]
      scenes: Prisma.$ScenePayload<ExtArgs>[]
      walletLedger: Prisma.$WalletLedgerPayload<ExtArgs>[]
      books: Prisma.$BookPayload<ExtArgs>[]
      cards: Prisma.$CardPayload<ExtArgs>[]
      seedLedger: Prisma.$SeedLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Supabase auth.users.id (UUID)
       */
      id: string
      createdAt: Date
      waterDrops: number
      magicSeeds: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends Profile$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenes<T extends Profile$scenesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    walletLedger<T extends Profile$walletLedgerArgs<ExtArgs> = {}>(args?: Subset<T, Profile$walletLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    books<T extends Profile$booksArgs<ExtArgs> = {}>(args?: Subset<T, Profile$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cards<T extends Profile$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seedLedger<T extends Profile$seedLedgerArgs<ExtArgs> = {}>(args?: Subset<T, Profile$seedLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly waterDrops: FieldRef<"Profile", 'Int'>
    readonly magicSeeds: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.characters
   */
  export type Profile$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Profile.scenes
   */
  export type Profile$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Profile.walletLedger
   */
  export type Profile$walletLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    where?: WalletLedgerWhereInput
    orderBy?: WalletLedgerOrderByWithRelationInput | WalletLedgerOrderByWithRelationInput[]
    cursor?: WalletLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletLedgerScalarFieldEnum | WalletLedgerScalarFieldEnum[]
  }

  /**
   * Profile.books
   */
  export type Profile$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Profile.cards
   */
  export type Profile$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Profile.seedLedger
   */
  export type Profile$seedLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    where?: SeedLedgerWhereInput
    orderBy?: SeedLedgerOrderByWithRelationInput | SeedLedgerOrderByWithRelationInput[]
    cursor?: SeedLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeedLedgerScalarFieldEnum | SeedLedgerScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model WalletLedger
   */

  export type AggregateWalletLedger = {
    _count: WalletLedgerCountAggregateOutputType | null
    _avg: WalletLedgerAvgAggregateOutputType | null
    _sum: WalletLedgerSumAggregateOutputType | null
    _min: WalletLedgerMinAggregateOutputType | null
    _max: WalletLedgerMaxAggregateOutputType | null
  }

  export type WalletLedgerAvgAggregateOutputType = {
    delta: number | null
  }

  export type WalletLedgerSumAggregateOutputType = {
    delta: number | null
  }

  export type WalletLedgerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currencyType: $Enums.CurrencyType | null
    delta: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type WalletLedgerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currencyType: $Enums.CurrencyType | null
    delta: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type WalletLedgerCountAggregateOutputType = {
    id: number
    userId: number
    currencyType: number
    delta: number
    reason: number
    createdAt: number
    _all: number
  }


  export type WalletLedgerAvgAggregateInputType = {
    delta?: true
  }

  export type WalletLedgerSumAggregateInputType = {
    delta?: true
  }

  export type WalletLedgerMinAggregateInputType = {
    id?: true
    userId?: true
    currencyType?: true
    delta?: true
    reason?: true
    createdAt?: true
  }

  export type WalletLedgerMaxAggregateInputType = {
    id?: true
    userId?: true
    currencyType?: true
    delta?: true
    reason?: true
    createdAt?: true
  }

  export type WalletLedgerCountAggregateInputType = {
    id?: true
    userId?: true
    currencyType?: true
    delta?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type WalletLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletLedger to aggregate.
     */
    where?: WalletLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgers to fetch.
     */
    orderBy?: WalletLedgerOrderByWithRelationInput | WalletLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletLedgers
    **/
    _count?: true | WalletLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletLedgerMaxAggregateInputType
  }

  export type GetWalletLedgerAggregateType<T extends WalletLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletLedger[P]>
      : GetScalarType<T[P], AggregateWalletLedger[P]>
  }




  export type WalletLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletLedgerWhereInput
    orderBy?: WalletLedgerOrderByWithAggregationInput | WalletLedgerOrderByWithAggregationInput[]
    by: WalletLedgerScalarFieldEnum[] | WalletLedgerScalarFieldEnum
    having?: WalletLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletLedgerCountAggregateInputType | true
    _avg?: WalletLedgerAvgAggregateInputType
    _sum?: WalletLedgerSumAggregateInputType
    _min?: WalletLedgerMinAggregateInputType
    _max?: WalletLedgerMaxAggregateInputType
  }

  export type WalletLedgerGroupByOutputType = {
    id: string
    userId: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt: Date
    _count: WalletLedgerCountAggregateOutputType | null
    _avg: WalletLedgerAvgAggregateOutputType | null
    _sum: WalletLedgerSumAggregateOutputType | null
    _min: WalletLedgerMinAggregateOutputType | null
    _max: WalletLedgerMaxAggregateOutputType | null
  }

  type GetWalletLedgerGroupByPayload<T extends WalletLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], WalletLedgerGroupByOutputType[P]>
        }
      >
    >


  export type WalletLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyType?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletLedger"]>

  export type WalletLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyType?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletLedger"]>

  export type WalletLedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyType?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletLedger"]>

  export type WalletLedgerSelectScalar = {
    id?: boolean
    userId?: boolean
    currencyType?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type WalletLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currencyType" | "delta" | "reason" | "createdAt", ExtArgs["result"]["walletLedger"]>
  export type WalletLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WalletLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WalletLedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WalletLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletLedger"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currencyType: $Enums.CurrencyType
      delta: number
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["walletLedger"]>
    composites: {}
  }

  type WalletLedgerGetPayload<S extends boolean | null | undefined | WalletLedgerDefaultArgs> = $Result.GetResult<Prisma.$WalletLedgerPayload, S>

  type WalletLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletLedgerCountAggregateInputType | true
    }

  export interface WalletLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletLedger'], meta: { name: 'WalletLedger' } }
    /**
     * Find zero or one WalletLedger that matches the filter.
     * @param {WalletLedgerFindUniqueArgs} args - Arguments to find a WalletLedger
     * @example
     * // Get one WalletLedger
     * const walletLedger = await prisma.walletLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletLedgerFindUniqueArgs>(args: SelectSubset<T, WalletLedgerFindUniqueArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletLedgerFindUniqueOrThrowArgs} args - Arguments to find a WalletLedger
     * @example
     * // Get one WalletLedger
     * const walletLedger = await prisma.walletLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerFindFirstArgs} args - Arguments to find a WalletLedger
     * @example
     * // Get one WalletLedger
     * const walletLedger = await prisma.walletLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletLedgerFindFirstArgs>(args?: SelectSubset<T, WalletLedgerFindFirstArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerFindFirstOrThrowArgs} args - Arguments to find a WalletLedger
     * @example
     * // Get one WalletLedger
     * const walletLedger = await prisma.walletLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletLedgers
     * const walletLedgers = await prisma.walletLedger.findMany()
     * 
     * // Get first 10 WalletLedgers
     * const walletLedgers = await prisma.walletLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletLedgerWithIdOnly = await prisma.walletLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletLedgerFindManyArgs>(args?: SelectSubset<T, WalletLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletLedger.
     * @param {WalletLedgerCreateArgs} args - Arguments to create a WalletLedger.
     * @example
     * // Create one WalletLedger
     * const WalletLedger = await prisma.walletLedger.create({
     *   data: {
     *     // ... data to create a WalletLedger
     *   }
     * })
     * 
     */
    create<T extends WalletLedgerCreateArgs>(args: SelectSubset<T, WalletLedgerCreateArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletLedgers.
     * @param {WalletLedgerCreateManyArgs} args - Arguments to create many WalletLedgers.
     * @example
     * // Create many WalletLedgers
     * const walletLedger = await prisma.walletLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletLedgerCreateManyArgs>(args?: SelectSubset<T, WalletLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletLedgers and returns the data saved in the database.
     * @param {WalletLedgerCreateManyAndReturnArgs} args - Arguments to create many WalletLedgers.
     * @example
     * // Create many WalletLedgers
     * const walletLedger = await prisma.walletLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletLedgers and only return the `id`
     * const walletLedgerWithIdOnly = await prisma.walletLedger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletLedger.
     * @param {WalletLedgerDeleteArgs} args - Arguments to delete one WalletLedger.
     * @example
     * // Delete one WalletLedger
     * const WalletLedger = await prisma.walletLedger.delete({
     *   where: {
     *     // ... filter to delete one WalletLedger
     *   }
     * })
     * 
     */
    delete<T extends WalletLedgerDeleteArgs>(args: SelectSubset<T, WalletLedgerDeleteArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletLedger.
     * @param {WalletLedgerUpdateArgs} args - Arguments to update one WalletLedger.
     * @example
     * // Update one WalletLedger
     * const walletLedger = await prisma.walletLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletLedgerUpdateArgs>(args: SelectSubset<T, WalletLedgerUpdateArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletLedgers.
     * @param {WalletLedgerDeleteManyArgs} args - Arguments to filter WalletLedgers to delete.
     * @example
     * // Delete a few WalletLedgers
     * const { count } = await prisma.walletLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletLedgerDeleteManyArgs>(args?: SelectSubset<T, WalletLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletLedgers
     * const walletLedger = await prisma.walletLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletLedgerUpdateManyArgs>(args: SelectSubset<T, WalletLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletLedgers and returns the data updated in the database.
     * @param {WalletLedgerUpdateManyAndReturnArgs} args - Arguments to update many WalletLedgers.
     * @example
     * // Update many WalletLedgers
     * const walletLedger = await prisma.walletLedger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletLedgers and only return the `id`
     * const walletLedgerWithIdOnly = await prisma.walletLedger.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletLedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletLedger.
     * @param {WalletLedgerUpsertArgs} args - Arguments to update or create a WalletLedger.
     * @example
     * // Update or create a WalletLedger
     * const walletLedger = await prisma.walletLedger.upsert({
     *   create: {
     *     // ... data to create a WalletLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletLedger we want to update
     *   }
     * })
     */
    upsert<T extends WalletLedgerUpsertArgs>(args: SelectSubset<T, WalletLedgerUpsertArgs<ExtArgs>>): Prisma__WalletLedgerClient<$Result.GetResult<Prisma.$WalletLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerCountArgs} args - Arguments to filter WalletLedgers to count.
     * @example
     * // Count the number of WalletLedgers
     * const count = await prisma.walletLedger.count({
     *   where: {
     *     // ... the filter for the WalletLedgers we want to count
     *   }
     * })
    **/
    count<T extends WalletLedgerCountArgs>(
      args?: Subset<T, WalletLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletLedgerAggregateArgs>(args: Subset<T, WalletLedgerAggregateArgs>): Prisma.PrismaPromise<GetWalletLedgerAggregateType<T>>

    /**
     * Group by WalletLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerGroupByArgs} args - Group by arguments.
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
      T extends WalletLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletLedgerGroupByArgs['orderBy'] }
        : { orderBy?: WalletLedgerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletLedger model
   */
  readonly fields: WalletLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WalletLedger model
   */
  interface WalletLedgerFieldRefs {
    readonly id: FieldRef<"WalletLedger", 'String'>
    readonly userId: FieldRef<"WalletLedger", 'String'>
    readonly currencyType: FieldRef<"WalletLedger", 'CurrencyType'>
    readonly delta: FieldRef<"WalletLedger", 'Int'>
    readonly reason: FieldRef<"WalletLedger", 'String'>
    readonly createdAt: FieldRef<"WalletLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletLedger findUnique
   */
  export type WalletLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedger to fetch.
     */
    where: WalletLedgerWhereUniqueInput
  }

  /**
   * WalletLedger findUniqueOrThrow
   */
  export type WalletLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedger to fetch.
     */
    where: WalletLedgerWhereUniqueInput
  }

  /**
   * WalletLedger findFirst
   */
  export type WalletLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedger to fetch.
     */
    where?: WalletLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgers to fetch.
     */
    orderBy?: WalletLedgerOrderByWithRelationInput | WalletLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletLedgers.
     */
    cursor?: WalletLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletLedgers.
     */
    distinct?: WalletLedgerScalarFieldEnum | WalletLedgerScalarFieldEnum[]
  }

  /**
   * WalletLedger findFirstOrThrow
   */
  export type WalletLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedger to fetch.
     */
    where?: WalletLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgers to fetch.
     */
    orderBy?: WalletLedgerOrderByWithRelationInput | WalletLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletLedgers.
     */
    cursor?: WalletLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletLedgers.
     */
    distinct?: WalletLedgerScalarFieldEnum | WalletLedgerScalarFieldEnum[]
  }

  /**
   * WalletLedger findMany
   */
  export type WalletLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedgers to fetch.
     */
    where?: WalletLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgers to fetch.
     */
    orderBy?: WalletLedgerOrderByWithRelationInput | WalletLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletLedgers.
     */
    cursor?: WalletLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgers.
     */
    skip?: number
    distinct?: WalletLedgerScalarFieldEnum | WalletLedgerScalarFieldEnum[]
  }

  /**
   * WalletLedger create
   */
  export type WalletLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletLedger.
     */
    data: XOR<WalletLedgerCreateInput, WalletLedgerUncheckedCreateInput>
  }

  /**
   * WalletLedger createMany
   */
  export type WalletLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletLedgers.
     */
    data: WalletLedgerCreateManyInput | WalletLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletLedger createManyAndReturn
   */
  export type WalletLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * The data used to create many WalletLedgers.
     */
    data: WalletLedgerCreateManyInput | WalletLedgerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletLedger update
   */
  export type WalletLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletLedger.
     */
    data: XOR<WalletLedgerUpdateInput, WalletLedgerUncheckedUpdateInput>
    /**
     * Choose, which WalletLedger to update.
     */
    where: WalletLedgerWhereUniqueInput
  }

  /**
   * WalletLedger updateMany
   */
  export type WalletLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletLedgers.
     */
    data: XOR<WalletLedgerUpdateManyMutationInput, WalletLedgerUncheckedUpdateManyInput>
    /**
     * Filter which WalletLedgers to update
     */
    where?: WalletLedgerWhereInput
    /**
     * Limit how many WalletLedgers to update.
     */
    limit?: number
  }

  /**
   * WalletLedger updateManyAndReturn
   */
  export type WalletLedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * The data used to update WalletLedgers.
     */
    data: XOR<WalletLedgerUpdateManyMutationInput, WalletLedgerUncheckedUpdateManyInput>
    /**
     * Filter which WalletLedgers to update
     */
    where?: WalletLedgerWhereInput
    /**
     * Limit how many WalletLedgers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletLedger upsert
   */
  export type WalletLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletLedger to update in case it exists.
     */
    where: WalletLedgerWhereUniqueInput
    /**
     * In case the WalletLedger found by the `where` argument doesn't exist, create a new WalletLedger with this data.
     */
    create: XOR<WalletLedgerCreateInput, WalletLedgerUncheckedCreateInput>
    /**
     * In case the WalletLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletLedgerUpdateInput, WalletLedgerUncheckedUpdateInput>
  }

  /**
   * WalletLedger delete
   */
  export type WalletLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
    /**
     * Filter which WalletLedger to delete.
     */
    where: WalletLedgerWhereUniqueInput
  }

  /**
   * WalletLedger deleteMany
   */
  export type WalletLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletLedgers to delete
     */
    where?: WalletLedgerWhereInput
    /**
     * Limit how many WalletLedgers to delete.
     */
    limit?: number
  }

  /**
   * WalletLedger without action
   */
  export type WalletLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedger
     */
    select?: WalletLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletLedger
     */
    omit?: WalletLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    styleId: string | null
    role: string | null
    personality: string | null
    doodlePath: string | null
    renderPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    styleId: string | null
    role: string | null
    personality: string | null
    doodlePath: string | null
    renderPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    styleId: number
    role: number
    personality: number
    likes: number
    doodlePath: number
    renderPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    styleId?: true
    role?: true
    personality?: true
    doodlePath?: true
    renderPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    styleId?: true
    role?: true
    personality?: true
    doodlePath?: true
    renderPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    styleId?: true
    role?: true
    personality?: true
    likes?: true
    doodlePath?: true
    renderPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    styleId: string | null
    role: string | null
    personality: string | null
    likes: string[]
    doodlePath: string
    renderPath: string | null
    createdAt: Date
    updatedAt: Date
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    styleId?: boolean
    role?: boolean
    personality?: boolean
    likes?: boolean
    doodlePath?: boolean
    renderPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    scenes?: boolean | Character$scenesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    styleId?: boolean
    role?: boolean
    personality?: boolean
    likes?: boolean
    doodlePath?: boolean
    renderPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    styleId?: boolean
    role?: boolean
    personality?: boolean
    likes?: boolean
    doodlePath?: boolean
    renderPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    styleId?: boolean
    role?: boolean
    personality?: boolean
    likes?: boolean
    doodlePath?: boolean
    renderPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "styleId" | "role" | "personality" | "likes" | "doodlePath" | "renderPath" | "createdAt" | "updatedAt", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    scenes?: boolean | Character$scenesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      scenes: Prisma.$ScenePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      styleId: string | null
      role: string | null
      personality: string | null
      likes: string[]
      doodlePath: string
      renderPath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
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
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scenes<T extends Character$scenesArgs<ExtArgs> = {}>(args?: Subset<T, Character$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly userId: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly styleId: FieldRef<"Character", 'String'>
    readonly role: FieldRef<"Character", 'String'>
    readonly personality: FieldRef<"Character", 'String'>
    readonly likes: FieldRef<"Character", 'String[]'>
    readonly doodlePath: FieldRef<"Character", 'String'>
    readonly renderPath: FieldRef<"Character", 'String'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.scenes
   */
  export type Character$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model Scene
   */

  export type AggregateScene = {
    _count: SceneCountAggregateOutputType | null
    _avg: SceneAvgAggregateOutputType | null
    _sum: SceneSumAggregateOutputType | null
    _min: SceneMinAggregateOutputType | null
    _max: SceneMaxAggregateOutputType | null
  }

  export type SceneAvgAggregateOutputType = {
    order: number | null
  }

  export type SceneSumAggregateOutputType = {
    order: number | null
  }

  export type SceneMinAggregateOutputType = {
    id: string | null
    userId: string | null
    characterId: string | null
    bookId: string | null
    backgroundId: string | null
    itemId: string | null
    verbId: string | null
    resultChoice: $Enums.ResultChoice | null
    storyText: string | null
    sceneImagePath: string | null
    order: number | null
    textEn: string | null
    beatType: string | null
    sceneHint: string | null
    layoutTemplate: string | null
    audioUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SceneMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    characterId: string | null
    bookId: string | null
    backgroundId: string | null
    itemId: string | null
    verbId: string | null
    resultChoice: $Enums.ResultChoice | null
    storyText: string | null
    sceneImagePath: string | null
    order: number | null
    textEn: string | null
    beatType: string | null
    sceneHint: string | null
    layoutTemplate: string | null
    audioUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SceneCountAggregateOutputType = {
    id: number
    userId: number
    characterId: number
    bookId: number
    backgroundId: number
    itemId: number
    verbId: number
    resultChoice: number
    storyText: number
    sceneImagePath: number
    order: number
    textEn: number
    beatType: number
    sceneHint: number
    learningTags: number
    layoutTemplate: number
    objects: number
    audioUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SceneAvgAggregateInputType = {
    order?: true
  }

  export type SceneSumAggregateInputType = {
    order?: true
  }

  export type SceneMinAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    bookId?: true
    backgroundId?: true
    itemId?: true
    verbId?: true
    resultChoice?: true
    storyText?: true
    sceneImagePath?: true
    order?: true
    textEn?: true
    beatType?: true
    sceneHint?: true
    layoutTemplate?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SceneMaxAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    bookId?: true
    backgroundId?: true
    itemId?: true
    verbId?: true
    resultChoice?: true
    storyText?: true
    sceneImagePath?: true
    order?: true
    textEn?: true
    beatType?: true
    sceneHint?: true
    layoutTemplate?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SceneCountAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    bookId?: true
    backgroundId?: true
    itemId?: true
    verbId?: true
    resultChoice?: true
    storyText?: true
    sceneImagePath?: true
    order?: true
    textEn?: true
    beatType?: true
    sceneHint?: true
    learningTags?: true
    layoutTemplate?: true
    objects?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SceneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scene to aggregate.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenes
    **/
    _count?: true | SceneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SceneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SceneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SceneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SceneMaxAggregateInputType
  }

  export type GetSceneAggregateType<T extends SceneAggregateArgs> = {
        [P in keyof T & keyof AggregateScene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScene[P]>
      : GetScalarType<T[P], AggregateScene[P]>
  }




  export type SceneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithAggregationInput | SceneOrderByWithAggregationInput[]
    by: SceneScalarFieldEnum[] | SceneScalarFieldEnum
    having?: SceneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SceneCountAggregateInputType | true
    _avg?: SceneAvgAggregateInputType
    _sum?: SceneSumAggregateInputType
    _min?: SceneMinAggregateInputType
    _max?: SceneMaxAggregateInputType
  }

  export type SceneGroupByOutputType = {
    id: string
    userId: string
    characterId: string | null
    bookId: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText: string | null
    sceneImagePath: string | null
    order: number | null
    textEn: string | null
    beatType: string | null
    sceneHint: string | null
    learningTags: JsonValue | null
    layoutTemplate: string | null
    objects: JsonValue | null
    audioUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: SceneCountAggregateOutputType | null
    _avg: SceneAvgAggregateOutputType | null
    _sum: SceneSumAggregateOutputType | null
    _min: SceneMinAggregateOutputType | null
    _max: SceneMaxAggregateOutputType | null
  }

  type GetSceneGroupByPayload<T extends SceneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SceneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SceneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SceneGroupByOutputType[P]>
            : GetScalarType<T[P], SceneGroupByOutputType[P]>
        }
      >
    >


  export type SceneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterId?: boolean
    bookId?: boolean
    backgroundId?: boolean
    itemId?: boolean
    verbId?: boolean
    resultChoice?: boolean
    storyText?: boolean
    sceneImagePath?: boolean
    order?: boolean
    textEn?: boolean
    beatType?: boolean
    sceneHint?: boolean
    learningTags?: boolean
    layoutTemplate?: boolean
    objects?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    character?: boolean | Scene$characterArgs<ExtArgs>
    book?: boolean | Scene$bookArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterId?: boolean
    bookId?: boolean
    backgroundId?: boolean
    itemId?: boolean
    verbId?: boolean
    resultChoice?: boolean
    storyText?: boolean
    sceneImagePath?: boolean
    order?: boolean
    textEn?: boolean
    beatType?: boolean
    sceneHint?: boolean
    learningTags?: boolean
    layoutTemplate?: boolean
    objects?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    character?: boolean | Scene$characterArgs<ExtArgs>
    book?: boolean | Scene$bookArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterId?: boolean
    bookId?: boolean
    backgroundId?: boolean
    itemId?: boolean
    verbId?: boolean
    resultChoice?: boolean
    storyText?: boolean
    sceneImagePath?: boolean
    order?: boolean
    textEn?: boolean
    beatType?: boolean
    sceneHint?: boolean
    learningTags?: boolean
    layoutTemplate?: boolean
    objects?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    character?: boolean | Scene$characterArgs<ExtArgs>
    book?: boolean | Scene$bookArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectScalar = {
    id?: boolean
    userId?: boolean
    characterId?: boolean
    bookId?: boolean
    backgroundId?: boolean
    itemId?: boolean
    verbId?: boolean
    resultChoice?: boolean
    storyText?: boolean
    sceneImagePath?: boolean
    order?: boolean
    textEn?: boolean
    beatType?: boolean
    sceneHint?: boolean
    learningTags?: boolean
    layoutTemplate?: boolean
    objects?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SceneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "characterId" | "bookId" | "backgroundId" | "itemId" | "verbId" | "resultChoice" | "storyText" | "sceneImagePath" | "order" | "textEn" | "beatType" | "sceneHint" | "learningTags" | "layoutTemplate" | "objects" | "audioUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["scene"]>
  export type SceneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    character?: boolean | Scene$characterArgs<ExtArgs>
    book?: boolean | Scene$bookArgs<ExtArgs>
  }
  export type SceneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    character?: boolean | Scene$characterArgs<ExtArgs>
    book?: boolean | Scene$bookArgs<ExtArgs>
  }
  export type SceneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    character?: boolean | Scene$characterArgs<ExtArgs>
    book?: boolean | Scene$bookArgs<ExtArgs>
  }

  export type $ScenePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scene"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      character: Prisma.$CharacterPayload<ExtArgs> | null
      book: Prisma.$BookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      characterId: string | null
      bookId: string | null
      backgroundId: string
      itemId: string
      verbId: string
      resultChoice: $Enums.ResultChoice
      storyText: string | null
      sceneImagePath: string | null
      order: number | null
      textEn: string | null
      beatType: string | null
      sceneHint: string | null
      learningTags: Prisma.JsonValue | null
      layoutTemplate: string | null
      objects: Prisma.JsonValue | null
      audioUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scene"]>
    composites: {}
  }

  type SceneGetPayload<S extends boolean | null | undefined | SceneDefaultArgs> = $Result.GetResult<Prisma.$ScenePayload, S>

  type SceneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SceneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SceneCountAggregateInputType | true
    }

  export interface SceneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scene'], meta: { name: 'Scene' } }
    /**
     * Find zero or one Scene that matches the filter.
     * @param {SceneFindUniqueArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SceneFindUniqueArgs>(args: SelectSubset<T, SceneFindUniqueArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scene that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SceneFindUniqueOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SceneFindUniqueOrThrowArgs>(args: SelectSubset<T, SceneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SceneFindFirstArgs>(args?: SelectSubset<T, SceneFindFirstArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SceneFindFirstOrThrowArgs>(args?: SelectSubset<T, SceneFindFirstOrThrowArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenes
     * const scenes = await prisma.scene.findMany()
     * 
     * // Get first 10 Scenes
     * const scenes = await prisma.scene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sceneWithIdOnly = await prisma.scene.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SceneFindManyArgs>(args?: SelectSubset<T, SceneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scene.
     * @param {SceneCreateArgs} args - Arguments to create a Scene.
     * @example
     * // Create one Scene
     * const Scene = await prisma.scene.create({
     *   data: {
     *     // ... data to create a Scene
     *   }
     * })
     * 
     */
    create<T extends SceneCreateArgs>(args: SelectSubset<T, SceneCreateArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenes.
     * @param {SceneCreateManyArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SceneCreateManyArgs>(args?: SelectSubset<T, SceneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenes and returns the data saved in the database.
     * @param {SceneCreateManyAndReturnArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SceneCreateManyAndReturnArgs>(args?: SelectSubset<T, SceneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scene.
     * @param {SceneDeleteArgs} args - Arguments to delete one Scene.
     * @example
     * // Delete one Scene
     * const Scene = await prisma.scene.delete({
     *   where: {
     *     // ... filter to delete one Scene
     *   }
     * })
     * 
     */
    delete<T extends SceneDeleteArgs>(args: SelectSubset<T, SceneDeleteArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scene.
     * @param {SceneUpdateArgs} args - Arguments to update one Scene.
     * @example
     * // Update one Scene
     * const scene = await prisma.scene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SceneUpdateArgs>(args: SelectSubset<T, SceneUpdateArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenes.
     * @param {SceneDeleteManyArgs} args - Arguments to filter Scenes to delete.
     * @example
     * // Delete a few Scenes
     * const { count } = await prisma.scene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SceneDeleteManyArgs>(args?: SelectSubset<T, SceneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SceneUpdateManyArgs>(args: SelectSubset<T, SceneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenes and returns the data updated in the database.
     * @param {SceneUpdateManyAndReturnArgs} args - Arguments to update many Scenes.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.updateManyAndReturn({
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
    updateManyAndReturn<T extends SceneUpdateManyAndReturnArgs>(args: SelectSubset<T, SceneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scene.
     * @param {SceneUpsertArgs} args - Arguments to update or create a Scene.
     * @example
     * // Update or create a Scene
     * const scene = await prisma.scene.upsert({
     *   create: {
     *     // ... data to create a Scene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scene we want to update
     *   }
     * })
     */
    upsert<T extends SceneUpsertArgs>(args: SelectSubset<T, SceneUpsertArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneCountArgs} args - Arguments to filter Scenes to count.
     * @example
     * // Count the number of Scenes
     * const count = await prisma.scene.count({
     *   where: {
     *     // ... the filter for the Scenes we want to count
     *   }
     * })
    **/
    count<T extends SceneCountArgs>(
      args?: Subset<T, SceneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SceneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SceneAggregateArgs>(args: Subset<T, SceneAggregateArgs>): Prisma.PrismaPromise<GetSceneAggregateType<T>>

    /**
     * Group by Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneGroupByArgs} args - Group by arguments.
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
      T extends SceneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SceneGroupByArgs['orderBy'] }
        : { orderBy?: SceneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scene model
   */
  readonly fields: SceneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SceneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    character<T extends Scene$characterArgs<ExtArgs> = {}>(args?: Subset<T, Scene$characterArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book<T extends Scene$bookArgs<ExtArgs> = {}>(args?: Subset<T, Scene$bookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Scene model
   */
  interface SceneFieldRefs {
    readonly id: FieldRef<"Scene", 'String'>
    readonly userId: FieldRef<"Scene", 'String'>
    readonly characterId: FieldRef<"Scene", 'String'>
    readonly bookId: FieldRef<"Scene", 'String'>
    readonly backgroundId: FieldRef<"Scene", 'String'>
    readonly itemId: FieldRef<"Scene", 'String'>
    readonly verbId: FieldRef<"Scene", 'String'>
    readonly resultChoice: FieldRef<"Scene", 'ResultChoice'>
    readonly storyText: FieldRef<"Scene", 'String'>
    readonly sceneImagePath: FieldRef<"Scene", 'String'>
    readonly order: FieldRef<"Scene", 'Int'>
    readonly textEn: FieldRef<"Scene", 'String'>
    readonly beatType: FieldRef<"Scene", 'String'>
    readonly sceneHint: FieldRef<"Scene", 'String'>
    readonly learningTags: FieldRef<"Scene", 'Json'>
    readonly layoutTemplate: FieldRef<"Scene", 'String'>
    readonly objects: FieldRef<"Scene", 'Json'>
    readonly audioUrl: FieldRef<"Scene", 'String'>
    readonly createdAt: FieldRef<"Scene", 'DateTime'>
    readonly updatedAt: FieldRef<"Scene", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scene findUnique
   */
  export type SceneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene findUniqueOrThrow
   */
  export type SceneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene findFirst
   */
  export type SceneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenes.
     */
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene findFirstOrThrow
   */
  export type SceneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenes.
     */
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene findMany
   */
  export type SceneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scenes to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene create
   */
  export type SceneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data needed to create a Scene.
     */
    data: XOR<SceneCreateInput, SceneUncheckedCreateInput>
  }

  /**
   * Scene createMany
   */
  export type SceneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenes.
     */
    data: SceneCreateManyInput | SceneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scene createManyAndReturn
   */
  export type SceneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * The data used to create many Scenes.
     */
    data: SceneCreateManyInput | SceneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scene update
   */
  export type SceneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data needed to update a Scene.
     */
    data: XOR<SceneUpdateInput, SceneUncheckedUpdateInput>
    /**
     * Choose, which Scene to update.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene updateMany
   */
  export type SceneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenes.
     */
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyInput>
    /**
     * Filter which Scenes to update
     */
    where?: SceneWhereInput
    /**
     * Limit how many Scenes to update.
     */
    limit?: number
  }

  /**
   * Scene updateManyAndReturn
   */
  export type SceneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * The data used to update Scenes.
     */
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyInput>
    /**
     * Filter which Scenes to update
     */
    where?: SceneWhereInput
    /**
     * Limit how many Scenes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scene upsert
   */
  export type SceneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The filter to search for the Scene to update in case it exists.
     */
    where: SceneWhereUniqueInput
    /**
     * In case the Scene found by the `where` argument doesn't exist, create a new Scene with this data.
     */
    create: XOR<SceneCreateInput, SceneUncheckedCreateInput>
    /**
     * In case the Scene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SceneUpdateInput, SceneUncheckedUpdateInput>
  }

  /**
   * Scene delete
   */
  export type SceneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter which Scene to delete.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene deleteMany
   */
  export type SceneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenes to delete
     */
    where?: SceneWhereInput
    /**
     * Limit how many Scenes to delete.
     */
    limit?: number
  }

  /**
   * Scene.character
   */
  export type Scene$characterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
  }

  /**
   * Scene.book
   */
  export type Scene$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * Scene without action
   */
  export type SceneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    targetSceneCount: number | null
    pageLength: number | null
  }

  export type BookSumAggregateOutputType = {
    targetSceneCount: number | null
    pageLength: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    coverPath: string | null
    status: $Enums.BookStatus | null
    topicId: string | null
    lesson: string | null
    targetSceneCount: number | null
    pageLength: number | null
    language: string | null
    ageRange: string | null
    mixerTale: string | null
    mixerCulture: string | null
    mixerSetting: string | null
    mixerTone: string | null
    mixerPack: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    coverPath: string | null
    status: $Enums.BookStatus | null
    topicId: string | null
    lesson: string | null
    targetSceneCount: number | null
    pageLength: number | null
    language: string | null
    ageRange: string | null
    mixerTale: string | null
    mixerCulture: string | null
    mixerSetting: string | null
    mixerTone: string | null
    mixerPack: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    coverPath: number
    status: number
    topicId: number
    lesson: number
    targetSceneCount: number
    outline: number
    pageLength: number
    language: number
    ageRange: number
    mixerTale: number
    mixerCulture: number
    mixerSetting: number
    mixerTone: number
    mixerPack: number
    storyBible: number
    storyChars: number
    storyObjs: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    targetSceneCount?: true
    pageLength?: true
  }

  export type BookSumAggregateInputType = {
    targetSceneCount?: true
    pageLength?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    coverPath?: true
    status?: true
    topicId?: true
    lesson?: true
    targetSceneCount?: true
    pageLength?: true
    language?: true
    ageRange?: true
    mixerTale?: true
    mixerCulture?: true
    mixerSetting?: true
    mixerTone?: true
    mixerPack?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    coverPath?: true
    status?: true
    topicId?: true
    lesson?: true
    targetSceneCount?: true
    pageLength?: true
    language?: true
    ageRange?: true
    mixerTale?: true
    mixerCulture?: true
    mixerSetting?: true
    mixerTone?: true
    mixerPack?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    coverPath?: true
    status?: true
    topicId?: true
    lesson?: true
    targetSceneCount?: true
    outline?: true
    pageLength?: true
    language?: true
    ageRange?: true
    mixerTale?: true
    mixerCulture?: true
    mixerSetting?: true
    mixerTone?: true
    mixerPack?: true
    storyBible?: true
    storyChars?: true
    storyObjs?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    coverPath: string | null
    status: $Enums.BookStatus
    topicId: string | null
    lesson: string | null
    targetSceneCount: number
    outline: JsonValue | null
    pageLength: number
    language: string
    ageRange: string
    mixerTale: string | null
    mixerCulture: string | null
    mixerSetting: string | null
    mixerTone: string | null
    mixerPack: string | null
    storyBible: JsonValue | null
    storyChars: JsonValue | null
    storyObjs: JsonValue | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    coverPath?: boolean
    status?: boolean
    topicId?: boolean
    lesson?: boolean
    targetSceneCount?: boolean
    outline?: boolean
    pageLength?: boolean
    language?: boolean
    ageRange?: boolean
    mixerTale?: boolean
    mixerCulture?: boolean
    mixerSetting?: boolean
    mixerTone?: boolean
    mixerPack?: boolean
    storyBible?: boolean
    storyChars?: boolean
    storyObjs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    scenes?: boolean | Book$scenesArgs<ExtArgs>
    seeds?: boolean | Book$seedsArgs<ExtArgs>
    cards?: boolean | Book$cardsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    coverPath?: boolean
    status?: boolean
    topicId?: boolean
    lesson?: boolean
    targetSceneCount?: boolean
    outline?: boolean
    pageLength?: boolean
    language?: boolean
    ageRange?: boolean
    mixerTale?: boolean
    mixerCulture?: boolean
    mixerSetting?: boolean
    mixerTone?: boolean
    mixerPack?: boolean
    storyBible?: boolean
    storyChars?: boolean
    storyObjs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    coverPath?: boolean
    status?: boolean
    topicId?: boolean
    lesson?: boolean
    targetSceneCount?: boolean
    outline?: boolean
    pageLength?: boolean
    language?: boolean
    ageRange?: boolean
    mixerTale?: boolean
    mixerCulture?: boolean
    mixerSetting?: boolean
    mixerTone?: boolean
    mixerPack?: boolean
    storyBible?: boolean
    storyChars?: boolean
    storyObjs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    coverPath?: boolean
    status?: boolean
    topicId?: boolean
    lesson?: boolean
    targetSceneCount?: boolean
    outline?: boolean
    pageLength?: boolean
    language?: boolean
    ageRange?: boolean
    mixerTale?: boolean
    mixerCulture?: boolean
    mixerSetting?: boolean
    mixerTone?: boolean
    mixerPack?: boolean
    storyBible?: boolean
    storyChars?: boolean
    storyObjs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "coverPath" | "status" | "topicId" | "lesson" | "targetSceneCount" | "outline" | "pageLength" | "language" | "ageRange" | "mixerTale" | "mixerCulture" | "mixerSetting" | "mixerTone" | "mixerPack" | "storyBible" | "storyChars" | "storyObjs" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    scenes?: boolean | Book$scenesArgs<ExtArgs>
    seeds?: boolean | Book$seedsArgs<ExtArgs>
    cards?: boolean | Book$cardsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      scenes: Prisma.$ScenePayload<ExtArgs>[]
      seeds: Prisma.$ProjectSeedPayload<ExtArgs>[]
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      coverPath: string | null
      status: $Enums.BookStatus
      topicId: string | null
      lesson: string | null
      targetSceneCount: number
      outline: Prisma.JsonValue | null
      pageLength: number
      language: string
      ageRange: string
      mixerTale: string | null
      mixerCulture: string | null
      mixerSetting: string | null
      mixerTone: string | null
      mixerPack: string | null
      storyBible: Prisma.JsonValue | null
      storyChars: Prisma.JsonValue | null
      storyObjs: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scenes<T extends Book$scenesArgs<ExtArgs> = {}>(args?: Subset<T, Book$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seeds<T extends Book$seedsArgs<ExtArgs> = {}>(args?: Subset<T, Book$seedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cards<T extends Book$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Book$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly userId: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly coverPath: FieldRef<"Book", 'String'>
    readonly status: FieldRef<"Book", 'BookStatus'>
    readonly topicId: FieldRef<"Book", 'String'>
    readonly lesson: FieldRef<"Book", 'String'>
    readonly targetSceneCount: FieldRef<"Book", 'Int'>
    readonly outline: FieldRef<"Book", 'Json'>
    readonly pageLength: FieldRef<"Book", 'Int'>
    readonly language: FieldRef<"Book", 'String'>
    readonly ageRange: FieldRef<"Book", 'String'>
    readonly mixerTale: FieldRef<"Book", 'String'>
    readonly mixerCulture: FieldRef<"Book", 'String'>
    readonly mixerSetting: FieldRef<"Book", 'String'>
    readonly mixerTone: FieldRef<"Book", 'String'>
    readonly mixerPack: FieldRef<"Book", 'String'>
    readonly storyBible: FieldRef<"Book", 'Json'>
    readonly storyChars: FieldRef<"Book", 'Json'>
    readonly storyObjs: FieldRef<"Book", 'Json'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
    readonly completedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.scenes
   */
  export type Book$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Book.seeds
   */
  export type Book$seedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    where?: ProjectSeedWhereInput
    orderBy?: ProjectSeedOrderByWithRelationInput | ProjectSeedOrderByWithRelationInput[]
    cursor?: ProjectSeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSeedScalarFieldEnum | ProjectSeedScalarFieldEnum[]
  }

  /**
   * Book.cards
   */
  export type Book$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSeed
   */

  export type AggregateProjectSeed = {
    _count: ProjectSeedCountAggregateOutputType | null
    _min: ProjectSeedMinAggregateOutputType | null
    _max: ProjectSeedMaxAggregateOutputType | null
  }

  export type ProjectSeedMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    imageUrl: string | null
    seedType: string | null
    audioUrl: string | null
    createdAt: Date | null
  }

  export type ProjectSeedMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    imageUrl: string | null
    seedType: string | null
    audioUrl: string | null
    createdAt: Date | null
  }

  export type ProjectSeedCountAggregateOutputType = {
    id: number
    bookId: number
    imageUrl: number
    seedType: number
    audioUrl: number
    createdAt: number
    _all: number
  }


  export type ProjectSeedMinAggregateInputType = {
    id?: true
    bookId?: true
    imageUrl?: true
    seedType?: true
    audioUrl?: true
    createdAt?: true
  }

  export type ProjectSeedMaxAggregateInputType = {
    id?: true
    bookId?: true
    imageUrl?: true
    seedType?: true
    audioUrl?: true
    createdAt?: true
  }

  export type ProjectSeedCountAggregateInputType = {
    id?: true
    bookId?: true
    imageUrl?: true
    seedType?: true
    audioUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectSeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSeed to aggregate.
     */
    where?: ProjectSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSeeds to fetch.
     */
    orderBy?: ProjectSeedOrderByWithRelationInput | ProjectSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSeeds
    **/
    _count?: true | ProjectSeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSeedMaxAggregateInputType
  }

  export type GetProjectSeedAggregateType<T extends ProjectSeedAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSeed[P]>
      : GetScalarType<T[P], AggregateProjectSeed[P]>
  }




  export type ProjectSeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSeedWhereInput
    orderBy?: ProjectSeedOrderByWithAggregationInput | ProjectSeedOrderByWithAggregationInput[]
    by: ProjectSeedScalarFieldEnum[] | ProjectSeedScalarFieldEnum
    having?: ProjectSeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSeedCountAggregateInputType | true
    _min?: ProjectSeedMinAggregateInputType
    _max?: ProjectSeedMaxAggregateInputType
  }

  export type ProjectSeedGroupByOutputType = {
    id: string
    bookId: string
    imageUrl: string
    seedType: string
    audioUrl: string | null
    createdAt: Date
    _count: ProjectSeedCountAggregateOutputType | null
    _min: ProjectSeedMinAggregateOutputType | null
    _max: ProjectSeedMaxAggregateOutputType | null
  }

  type GetProjectSeedGroupByPayload<T extends ProjectSeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSeedGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSeedGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    imageUrl?: boolean
    seedType?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSeed"]>

  export type ProjectSeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    imageUrl?: boolean
    seedType?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSeed"]>

  export type ProjectSeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    imageUrl?: boolean
    seedType?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSeed"]>

  export type ProjectSeedSelectScalar = {
    id?: boolean
    bookId?: boolean
    imageUrl?: boolean
    seedType?: boolean
    audioUrl?: boolean
    createdAt?: boolean
  }

  export type ProjectSeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "imageUrl" | "seedType" | "audioUrl" | "createdAt", ExtArgs["result"]["projectSeed"]>
  export type ProjectSeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ProjectSeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ProjectSeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $ProjectSeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSeed"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      imageUrl: string
      seedType: string
      audioUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["projectSeed"]>
    composites: {}
  }

  type ProjectSeedGetPayload<S extends boolean | null | undefined | ProjectSeedDefaultArgs> = $Result.GetResult<Prisma.$ProjectSeedPayload, S>

  type ProjectSeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectSeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectSeedCountAggregateInputType | true
    }

  export interface ProjectSeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSeed'], meta: { name: 'ProjectSeed' } }
    /**
     * Find zero or one ProjectSeed that matches the filter.
     * @param {ProjectSeedFindUniqueArgs} args - Arguments to find a ProjectSeed
     * @example
     * // Get one ProjectSeed
     * const projectSeed = await prisma.projectSeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSeedFindUniqueArgs>(args: SelectSubset<T, ProjectSeedFindUniqueArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectSeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectSeedFindUniqueOrThrowArgs} args - Arguments to find a ProjectSeed
     * @example
     * // Get one ProjectSeed
     * const projectSeed = await prisma.projectSeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSeedFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedFindFirstArgs} args - Arguments to find a ProjectSeed
     * @example
     * // Get one ProjectSeed
     * const projectSeed = await prisma.projectSeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSeedFindFirstArgs>(args?: SelectSubset<T, ProjectSeedFindFirstArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedFindFirstOrThrowArgs} args - Arguments to find a ProjectSeed
     * @example
     * // Get one ProjectSeed
     * const projectSeed = await prisma.projectSeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSeedFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectSeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSeeds
     * const projectSeeds = await prisma.projectSeed.findMany()
     * 
     * // Get first 10 ProjectSeeds
     * const projectSeeds = await prisma.projectSeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectSeedWithIdOnly = await prisma.projectSeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectSeedFindManyArgs>(args?: SelectSubset<T, ProjectSeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectSeed.
     * @param {ProjectSeedCreateArgs} args - Arguments to create a ProjectSeed.
     * @example
     * // Create one ProjectSeed
     * const ProjectSeed = await prisma.projectSeed.create({
     *   data: {
     *     // ... data to create a ProjectSeed
     *   }
     * })
     * 
     */
    create<T extends ProjectSeedCreateArgs>(args: SelectSubset<T, ProjectSeedCreateArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectSeeds.
     * @param {ProjectSeedCreateManyArgs} args - Arguments to create many ProjectSeeds.
     * @example
     * // Create many ProjectSeeds
     * const projectSeed = await prisma.projectSeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSeedCreateManyArgs>(args?: SelectSubset<T, ProjectSeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectSeeds and returns the data saved in the database.
     * @param {ProjectSeedCreateManyAndReturnArgs} args - Arguments to create many ProjectSeeds.
     * @example
     * // Create many ProjectSeeds
     * const projectSeed = await prisma.projectSeed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectSeeds and only return the `id`
     * const projectSeedWithIdOnly = await prisma.projectSeed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectSeedCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectSeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectSeed.
     * @param {ProjectSeedDeleteArgs} args - Arguments to delete one ProjectSeed.
     * @example
     * // Delete one ProjectSeed
     * const ProjectSeed = await prisma.projectSeed.delete({
     *   where: {
     *     // ... filter to delete one ProjectSeed
     *   }
     * })
     * 
     */
    delete<T extends ProjectSeedDeleteArgs>(args: SelectSubset<T, ProjectSeedDeleteArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectSeed.
     * @param {ProjectSeedUpdateArgs} args - Arguments to update one ProjectSeed.
     * @example
     * // Update one ProjectSeed
     * const projectSeed = await prisma.projectSeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSeedUpdateArgs>(args: SelectSubset<T, ProjectSeedUpdateArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectSeeds.
     * @param {ProjectSeedDeleteManyArgs} args - Arguments to filter ProjectSeeds to delete.
     * @example
     * // Delete a few ProjectSeeds
     * const { count } = await prisma.projectSeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSeedDeleteManyArgs>(args?: SelectSubset<T, ProjectSeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSeeds
     * const projectSeed = await prisma.projectSeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSeedUpdateManyArgs>(args: SelectSubset<T, ProjectSeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSeeds and returns the data updated in the database.
     * @param {ProjectSeedUpdateManyAndReturnArgs} args - Arguments to update many ProjectSeeds.
     * @example
     * // Update many ProjectSeeds
     * const projectSeed = await prisma.projectSeed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectSeeds and only return the `id`
     * const projectSeedWithIdOnly = await prisma.projectSeed.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectSeedUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectSeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectSeed.
     * @param {ProjectSeedUpsertArgs} args - Arguments to update or create a ProjectSeed.
     * @example
     * // Update or create a ProjectSeed
     * const projectSeed = await prisma.projectSeed.upsert({
     *   create: {
     *     // ... data to create a ProjectSeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSeed we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSeedUpsertArgs>(args: SelectSubset<T, ProjectSeedUpsertArgs<ExtArgs>>): Prisma__ProjectSeedClient<$Result.GetResult<Prisma.$ProjectSeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectSeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedCountArgs} args - Arguments to filter ProjectSeeds to count.
     * @example
     * // Count the number of ProjectSeeds
     * const count = await prisma.projectSeed.count({
     *   where: {
     *     // ... the filter for the ProjectSeeds we want to count
     *   }
     * })
    **/
    count<T extends ProjectSeedCountArgs>(
      args?: Subset<T, ProjectSeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectSeedAggregateArgs>(args: Subset<T, ProjectSeedAggregateArgs>): Prisma.PrismaPromise<GetProjectSeedAggregateType<T>>

    /**
     * Group by ProjectSeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSeedGroupByArgs} args - Group by arguments.
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
      T extends ProjectSeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSeedGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSeedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectSeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSeed model
   */
  readonly fields: ProjectSeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectSeed model
   */
  interface ProjectSeedFieldRefs {
    readonly id: FieldRef<"ProjectSeed", 'String'>
    readonly bookId: FieldRef<"ProjectSeed", 'String'>
    readonly imageUrl: FieldRef<"ProjectSeed", 'String'>
    readonly seedType: FieldRef<"ProjectSeed", 'String'>
    readonly audioUrl: FieldRef<"ProjectSeed", 'String'>
    readonly createdAt: FieldRef<"ProjectSeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSeed findUnique
   */
  export type ProjectSeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSeed to fetch.
     */
    where: ProjectSeedWhereUniqueInput
  }

  /**
   * ProjectSeed findUniqueOrThrow
   */
  export type ProjectSeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSeed to fetch.
     */
    where: ProjectSeedWhereUniqueInput
  }

  /**
   * ProjectSeed findFirst
   */
  export type ProjectSeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSeed to fetch.
     */
    where?: ProjectSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSeeds to fetch.
     */
    orderBy?: ProjectSeedOrderByWithRelationInput | ProjectSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSeeds.
     */
    cursor?: ProjectSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSeeds.
     */
    distinct?: ProjectSeedScalarFieldEnum | ProjectSeedScalarFieldEnum[]
  }

  /**
   * ProjectSeed findFirstOrThrow
   */
  export type ProjectSeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSeed to fetch.
     */
    where?: ProjectSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSeeds to fetch.
     */
    orderBy?: ProjectSeedOrderByWithRelationInput | ProjectSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSeeds.
     */
    cursor?: ProjectSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSeeds.
     */
    distinct?: ProjectSeedScalarFieldEnum | ProjectSeedScalarFieldEnum[]
  }

  /**
   * ProjectSeed findMany
   */
  export type ProjectSeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSeeds to fetch.
     */
    where?: ProjectSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSeeds to fetch.
     */
    orderBy?: ProjectSeedOrderByWithRelationInput | ProjectSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSeeds.
     */
    cursor?: ProjectSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSeeds.
     */
    skip?: number
    distinct?: ProjectSeedScalarFieldEnum | ProjectSeedScalarFieldEnum[]
  }

  /**
   * ProjectSeed create
   */
  export type ProjectSeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSeed.
     */
    data: XOR<ProjectSeedCreateInput, ProjectSeedUncheckedCreateInput>
  }

  /**
   * ProjectSeed createMany
   */
  export type ProjectSeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSeeds.
     */
    data: ProjectSeedCreateManyInput | ProjectSeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectSeed createManyAndReturn
   */
  export type ProjectSeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectSeeds.
     */
    data: ProjectSeedCreateManyInput | ProjectSeedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSeed update
   */
  export type ProjectSeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSeed.
     */
    data: XOR<ProjectSeedUpdateInput, ProjectSeedUncheckedUpdateInput>
    /**
     * Choose, which ProjectSeed to update.
     */
    where: ProjectSeedWhereUniqueInput
  }

  /**
   * ProjectSeed updateMany
   */
  export type ProjectSeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSeeds.
     */
    data: XOR<ProjectSeedUpdateManyMutationInput, ProjectSeedUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSeeds to update
     */
    where?: ProjectSeedWhereInput
    /**
     * Limit how many ProjectSeeds to update.
     */
    limit?: number
  }

  /**
   * ProjectSeed updateManyAndReturn
   */
  export type ProjectSeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * The data used to update ProjectSeeds.
     */
    data: XOR<ProjectSeedUpdateManyMutationInput, ProjectSeedUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSeeds to update
     */
    where?: ProjectSeedWhereInput
    /**
     * Limit how many ProjectSeeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSeed upsert
   */
  export type ProjectSeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSeed to update in case it exists.
     */
    where: ProjectSeedWhereUniqueInput
    /**
     * In case the ProjectSeed found by the `where` argument doesn't exist, create a new ProjectSeed with this data.
     */
    create: XOR<ProjectSeedCreateInput, ProjectSeedUncheckedCreateInput>
    /**
     * In case the ProjectSeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSeedUpdateInput, ProjectSeedUncheckedUpdateInput>
  }

  /**
   * ProjectSeed delete
   */
  export type ProjectSeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
    /**
     * Filter which ProjectSeed to delete.
     */
    where: ProjectSeedWhereUniqueInput
  }

  /**
   * ProjectSeed deleteMany
   */
  export type ProjectSeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSeeds to delete
     */
    where?: ProjectSeedWhereInput
    /**
     * Limit how many ProjectSeeds to delete.
     */
    limit?: number
  }

  /**
   * ProjectSeed without action
   */
  export type ProjectSeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSeed
     */
    select?: ProjectSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSeed
     */
    omit?: ProjectSeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSeedInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    type: string | null
    name: string | null
    desc: string | null
    color: string | null
    imagePath: string | null
    createdAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    type: string | null
    name: string | null
    desc: string | null
    color: string | null
    imagePath: string | null
    createdAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    type: number
    name: number
    desc: number
    color: number
    imagePath: number
    createdAt: number
    _all: number
  }


  export type CardMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    type?: true
    name?: true
    desc?: true
    color?: true
    imagePath?: true
    createdAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    type?: true
    name?: true
    desc?: true
    color?: true
    imagePath?: true
    createdAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    type?: true
    name?: true
    desc?: true
    color?: true
    imagePath?: true
    createdAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    userId: string
    bookId: string | null
    type: string
    name: string
    desc: string | null
    color: string | null
    imagePath: string | null
    createdAt: Date
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    type?: boolean
    name?: boolean
    desc?: boolean
    color?: boolean
    imagePath?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    book?: boolean | Card$bookArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    type?: boolean
    name?: boolean
    desc?: boolean
    color?: boolean
    imagePath?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    book?: boolean | Card$bookArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    type?: boolean
    name?: boolean
    desc?: boolean
    color?: boolean
    imagePath?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    book?: boolean | Card$bookArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    type?: boolean
    name?: boolean
    desc?: boolean
    color?: boolean
    imagePath?: boolean
    createdAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "type" | "name" | "desc" | "color" | "imagePath" | "createdAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    book?: boolean | Card$bookArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    book?: boolean | Card$bookArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    book?: boolean | Card$bookArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookId: string | null
      type: string
      name: string
      desc: string | null
      color: string | null
      imagePath: string | null
      createdAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends Card$bookArgs<ExtArgs> = {}>(args?: Subset<T, Card$bookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly userId: FieldRef<"Card", 'String'>
    readonly bookId: FieldRef<"Card", 'String'>
    readonly type: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly desc: FieldRef<"Card", 'String'>
    readonly color: FieldRef<"Card", 'String'>
    readonly imagePath: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.book
   */
  export type Card$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model GenerationJob
   */

  export type AggregateGenerationJob = {
    _count: GenerationJobCountAggregateOutputType | null
    _avg: GenerationJobAvgAggregateOutputType | null
    _sum: GenerationJobSumAggregateOutputType | null
    _min: GenerationJobMinAggregateOutputType | null
    _max: GenerationJobMaxAggregateOutputType | null
  }

  export type GenerationJobAvgAggregateOutputType = {
    costAmount: number | null
  }

  export type GenerationJobSumAggregateOutputType = {
    costAmount: number | null
  }

  export type GenerationJobMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    jobType: string | null
    status: string | null
    costType: string | null
    costAmount: number | null
    refunded: boolean | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type GenerationJobMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    jobType: string | null
    status: string | null
    costType: string | null
    costAmount: number | null
    refunded: boolean | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type GenerationJobCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    jobType: number
    status: number
    inputData: number
    outputData: number
    costType: number
    costAmount: number
    refunded: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type GenerationJobAvgAggregateInputType = {
    costAmount?: true
  }

  export type GenerationJobSumAggregateInputType = {
    costAmount?: true
  }

  export type GenerationJobMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    jobType?: true
    status?: true
    costType?: true
    costAmount?: true
    refunded?: true
    createdAt?: true
    completedAt?: true
  }

  export type GenerationJobMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    jobType?: true
    status?: true
    costType?: true
    costAmount?: true
    refunded?: true
    createdAt?: true
    completedAt?: true
  }

  export type GenerationJobCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    jobType?: true
    status?: true
    inputData?: true
    outputData?: true
    costType?: true
    costAmount?: true
    refunded?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type GenerationJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationJob to aggregate.
     */
    where?: GenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobs to fetch.
     */
    orderBy?: GenerationJobOrderByWithRelationInput | GenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenerationJobs
    **/
    _count?: true | GenerationJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerationJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerationJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationJobMaxAggregateInputType
  }

  export type GetGenerationJobAggregateType<T extends GenerationJobAggregateArgs> = {
        [P in keyof T & keyof AggregateGenerationJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenerationJob[P]>
      : GetScalarType<T[P], AggregateGenerationJob[P]>
  }




  export type GenerationJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationJobWhereInput
    orderBy?: GenerationJobOrderByWithAggregationInput | GenerationJobOrderByWithAggregationInput[]
    by: GenerationJobScalarFieldEnum[] | GenerationJobScalarFieldEnum
    having?: GenerationJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationJobCountAggregateInputType | true
    _avg?: GenerationJobAvgAggregateInputType
    _sum?: GenerationJobSumAggregateInputType
    _min?: GenerationJobMinAggregateInputType
    _max?: GenerationJobMaxAggregateInputType
  }

  export type GenerationJobGroupByOutputType = {
    id: string
    userId: string
    bookId: string | null
    jobType: string
    status: string
    inputData: JsonValue
    outputData: JsonValue | null
    costType: string
    costAmount: number
    refunded: boolean
    createdAt: Date
    completedAt: Date | null
    _count: GenerationJobCountAggregateOutputType | null
    _avg: GenerationJobAvgAggregateOutputType | null
    _sum: GenerationJobSumAggregateOutputType | null
    _min: GenerationJobMinAggregateOutputType | null
    _max: GenerationJobMaxAggregateOutputType | null
  }

  type GetGenerationJobGroupByPayload<T extends GenerationJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationJobGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationJobGroupByOutputType[P]>
        }
      >
    >


  export type GenerationJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    jobType?: boolean
    status?: boolean
    inputData?: boolean
    outputData?: boolean
    costType?: boolean
    costAmount?: boolean
    refunded?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["generationJob"]>

  export type GenerationJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    jobType?: boolean
    status?: boolean
    inputData?: boolean
    outputData?: boolean
    costType?: boolean
    costAmount?: boolean
    refunded?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["generationJob"]>

  export type GenerationJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    jobType?: boolean
    status?: boolean
    inputData?: boolean
    outputData?: boolean
    costType?: boolean
    costAmount?: boolean
    refunded?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["generationJob"]>

  export type GenerationJobSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    jobType?: boolean
    status?: boolean
    inputData?: boolean
    outputData?: boolean
    costType?: boolean
    costAmount?: boolean
    refunded?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type GenerationJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "jobType" | "status" | "inputData" | "outputData" | "costType" | "costAmount" | "refunded" | "createdAt" | "completedAt", ExtArgs["result"]["generationJob"]>

  export type $GenerationJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenerationJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookId: string | null
      jobType: string
      status: string
      inputData: Prisma.JsonValue
      outputData: Prisma.JsonValue | null
      costType: string
      costAmount: number
      refunded: boolean
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["generationJob"]>
    composites: {}
  }

  type GenerationJobGetPayload<S extends boolean | null | undefined | GenerationJobDefaultArgs> = $Result.GetResult<Prisma.$GenerationJobPayload, S>

  type GenerationJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationJobCountAggregateInputType | true
    }

  export interface GenerationJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenerationJob'], meta: { name: 'GenerationJob' } }
    /**
     * Find zero or one GenerationJob that matches the filter.
     * @param {GenerationJobFindUniqueArgs} args - Arguments to find a GenerationJob
     * @example
     * // Get one GenerationJob
     * const generationJob = await prisma.generationJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationJobFindUniqueArgs>(args: SelectSubset<T, GenerationJobFindUniqueArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenerationJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationJobFindUniqueOrThrowArgs} args - Arguments to find a GenerationJob
     * @example
     * // Get one GenerationJob
     * const generationJob = await prisma.generationJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationJobFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobFindFirstArgs} args - Arguments to find a GenerationJob
     * @example
     * // Get one GenerationJob
     * const generationJob = await prisma.generationJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationJobFindFirstArgs>(args?: SelectSubset<T, GenerationJobFindFirstArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobFindFirstOrThrowArgs} args - Arguments to find a GenerationJob
     * @example
     * // Get one GenerationJob
     * const generationJob = await prisma.generationJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationJobFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenerationJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenerationJobs
     * const generationJobs = await prisma.generationJob.findMany()
     * 
     * // Get first 10 GenerationJobs
     * const generationJobs = await prisma.generationJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationJobWithIdOnly = await prisma.generationJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationJobFindManyArgs>(args?: SelectSubset<T, GenerationJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenerationJob.
     * @param {GenerationJobCreateArgs} args - Arguments to create a GenerationJob.
     * @example
     * // Create one GenerationJob
     * const GenerationJob = await prisma.generationJob.create({
     *   data: {
     *     // ... data to create a GenerationJob
     *   }
     * })
     * 
     */
    create<T extends GenerationJobCreateArgs>(args: SelectSubset<T, GenerationJobCreateArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenerationJobs.
     * @param {GenerationJobCreateManyArgs} args - Arguments to create many GenerationJobs.
     * @example
     * // Create many GenerationJobs
     * const generationJob = await prisma.generationJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationJobCreateManyArgs>(args?: SelectSubset<T, GenerationJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GenerationJobs and returns the data saved in the database.
     * @param {GenerationJobCreateManyAndReturnArgs} args - Arguments to create many GenerationJobs.
     * @example
     * // Create many GenerationJobs
     * const generationJob = await prisma.generationJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GenerationJobs and only return the `id`
     * const generationJobWithIdOnly = await prisma.generationJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenerationJobCreateManyAndReturnArgs>(args?: SelectSubset<T, GenerationJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GenerationJob.
     * @param {GenerationJobDeleteArgs} args - Arguments to delete one GenerationJob.
     * @example
     * // Delete one GenerationJob
     * const GenerationJob = await prisma.generationJob.delete({
     *   where: {
     *     // ... filter to delete one GenerationJob
     *   }
     * })
     * 
     */
    delete<T extends GenerationJobDeleteArgs>(args: SelectSubset<T, GenerationJobDeleteArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenerationJob.
     * @param {GenerationJobUpdateArgs} args - Arguments to update one GenerationJob.
     * @example
     * // Update one GenerationJob
     * const generationJob = await prisma.generationJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationJobUpdateArgs>(args: SelectSubset<T, GenerationJobUpdateArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenerationJobs.
     * @param {GenerationJobDeleteManyArgs} args - Arguments to filter GenerationJobs to delete.
     * @example
     * // Delete a few GenerationJobs
     * const { count } = await prisma.generationJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationJobDeleteManyArgs>(args?: SelectSubset<T, GenerationJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenerationJobs
     * const generationJob = await prisma.generationJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationJobUpdateManyArgs>(args: SelectSubset<T, GenerationJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationJobs and returns the data updated in the database.
     * @param {GenerationJobUpdateManyAndReturnArgs} args - Arguments to update many GenerationJobs.
     * @example
     * // Update many GenerationJobs
     * const generationJob = await prisma.generationJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GenerationJobs and only return the `id`
     * const generationJobWithIdOnly = await prisma.generationJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenerationJobUpdateManyAndReturnArgs>(args: SelectSubset<T, GenerationJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GenerationJob.
     * @param {GenerationJobUpsertArgs} args - Arguments to update or create a GenerationJob.
     * @example
     * // Update or create a GenerationJob
     * const generationJob = await prisma.generationJob.upsert({
     *   create: {
     *     // ... data to create a GenerationJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenerationJob we want to update
     *   }
     * })
     */
    upsert<T extends GenerationJobUpsertArgs>(args: SelectSubset<T, GenerationJobUpsertArgs<ExtArgs>>): Prisma__GenerationJobClient<$Result.GetResult<Prisma.$GenerationJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenerationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobCountArgs} args - Arguments to filter GenerationJobs to count.
     * @example
     * // Count the number of GenerationJobs
     * const count = await prisma.generationJob.count({
     *   where: {
     *     // ... the filter for the GenerationJobs we want to count
     *   }
     * })
    **/
    count<T extends GenerationJobCountArgs>(
      args?: Subset<T, GenerationJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenerationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenerationJobAggregateArgs>(args: Subset<T, GenerationJobAggregateArgs>): Prisma.PrismaPromise<GetGenerationJobAggregateType<T>>

    /**
     * Group by GenerationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobGroupByArgs} args - Group by arguments.
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
      T extends GenerationJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationJobGroupByArgs['orderBy'] }
        : { orderBy?: GenerationJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenerationJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenerationJob model
   */
  readonly fields: GenerationJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenerationJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GenerationJob model
   */
  interface GenerationJobFieldRefs {
    readonly id: FieldRef<"GenerationJob", 'String'>
    readonly userId: FieldRef<"GenerationJob", 'String'>
    readonly bookId: FieldRef<"GenerationJob", 'String'>
    readonly jobType: FieldRef<"GenerationJob", 'String'>
    readonly status: FieldRef<"GenerationJob", 'String'>
    readonly inputData: FieldRef<"GenerationJob", 'Json'>
    readonly outputData: FieldRef<"GenerationJob", 'Json'>
    readonly costType: FieldRef<"GenerationJob", 'String'>
    readonly costAmount: FieldRef<"GenerationJob", 'Int'>
    readonly refunded: FieldRef<"GenerationJob", 'Boolean'>
    readonly createdAt: FieldRef<"GenerationJob", 'DateTime'>
    readonly completedAt: FieldRef<"GenerationJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GenerationJob findUnique
   */
  export type GenerationJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJob to fetch.
     */
    where: GenerationJobWhereUniqueInput
  }

  /**
   * GenerationJob findUniqueOrThrow
   */
  export type GenerationJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJob to fetch.
     */
    where: GenerationJobWhereUniqueInput
  }

  /**
   * GenerationJob findFirst
   */
  export type GenerationJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJob to fetch.
     */
    where?: GenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobs to fetch.
     */
    orderBy?: GenerationJobOrderByWithRelationInput | GenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationJobs.
     */
    cursor?: GenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationJobs.
     */
    distinct?: GenerationJobScalarFieldEnum | GenerationJobScalarFieldEnum[]
  }

  /**
   * GenerationJob findFirstOrThrow
   */
  export type GenerationJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJob to fetch.
     */
    where?: GenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobs to fetch.
     */
    orderBy?: GenerationJobOrderByWithRelationInput | GenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationJobs.
     */
    cursor?: GenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationJobs.
     */
    distinct?: GenerationJobScalarFieldEnum | GenerationJobScalarFieldEnum[]
  }

  /**
   * GenerationJob findMany
   */
  export type GenerationJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJobs to fetch.
     */
    where?: GenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobs to fetch.
     */
    orderBy?: GenerationJobOrderByWithRelationInput | GenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenerationJobs.
     */
    cursor?: GenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobs.
     */
    skip?: number
    distinct?: GenerationJobScalarFieldEnum | GenerationJobScalarFieldEnum[]
  }

  /**
   * GenerationJob create
   */
  export type GenerationJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * The data needed to create a GenerationJob.
     */
    data: XOR<GenerationJobCreateInput, GenerationJobUncheckedCreateInput>
  }

  /**
   * GenerationJob createMany
   */
  export type GenerationJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenerationJobs.
     */
    data: GenerationJobCreateManyInput | GenerationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationJob createManyAndReturn
   */
  export type GenerationJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * The data used to create many GenerationJobs.
     */
    data: GenerationJobCreateManyInput | GenerationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationJob update
   */
  export type GenerationJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * The data needed to update a GenerationJob.
     */
    data: XOR<GenerationJobUpdateInput, GenerationJobUncheckedUpdateInput>
    /**
     * Choose, which GenerationJob to update.
     */
    where: GenerationJobWhereUniqueInput
  }

  /**
   * GenerationJob updateMany
   */
  export type GenerationJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenerationJobs.
     */
    data: XOR<GenerationJobUpdateManyMutationInput, GenerationJobUncheckedUpdateManyInput>
    /**
     * Filter which GenerationJobs to update
     */
    where?: GenerationJobWhereInput
    /**
     * Limit how many GenerationJobs to update.
     */
    limit?: number
  }

  /**
   * GenerationJob updateManyAndReturn
   */
  export type GenerationJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * The data used to update GenerationJobs.
     */
    data: XOR<GenerationJobUpdateManyMutationInput, GenerationJobUncheckedUpdateManyInput>
    /**
     * Filter which GenerationJobs to update
     */
    where?: GenerationJobWhereInput
    /**
     * Limit how many GenerationJobs to update.
     */
    limit?: number
  }

  /**
   * GenerationJob upsert
   */
  export type GenerationJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * The filter to search for the GenerationJob to update in case it exists.
     */
    where: GenerationJobWhereUniqueInput
    /**
     * In case the GenerationJob found by the `where` argument doesn't exist, create a new GenerationJob with this data.
     */
    create: XOR<GenerationJobCreateInput, GenerationJobUncheckedCreateInput>
    /**
     * In case the GenerationJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationJobUpdateInput, GenerationJobUncheckedUpdateInput>
  }

  /**
   * GenerationJob delete
   */
  export type GenerationJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
    /**
     * Filter which GenerationJob to delete.
     */
    where: GenerationJobWhereUniqueInput
  }

  /**
   * GenerationJob deleteMany
   */
  export type GenerationJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationJobs to delete
     */
    where?: GenerationJobWhereInput
    /**
     * Limit how many GenerationJobs to delete.
     */
    limit?: number
  }

  /**
   * GenerationJob without action
   */
  export type GenerationJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJob
     */
    select?: GenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJob
     */
    omit?: GenerationJobOmit<ExtArgs> | null
  }


  /**
   * Model SeedLedger
   */

  export type AggregateSeedLedger = {
    _count: SeedLedgerCountAggregateOutputType | null
    _avg: SeedLedgerAvgAggregateOutputType | null
    _sum: SeedLedgerSumAggregateOutputType | null
    _min: SeedLedgerMinAggregateOutputType | null
    _max: SeedLedgerMaxAggregateOutputType | null
  }

  export type SeedLedgerAvgAggregateOutputType = {
    delta: number | null
  }

  export type SeedLedgerSumAggregateOutputType = {
    delta: number | null
  }

  export type SeedLedgerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    delta: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SeedLedgerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    delta: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SeedLedgerCountAggregateOutputType = {
    id: number
    userId: number
    delta: number
    reason: number
    createdAt: number
    _all: number
  }


  export type SeedLedgerAvgAggregateInputType = {
    delta?: true
  }

  export type SeedLedgerSumAggregateInputType = {
    delta?: true
  }

  export type SeedLedgerMinAggregateInputType = {
    id?: true
    userId?: true
    delta?: true
    reason?: true
    createdAt?: true
  }

  export type SeedLedgerMaxAggregateInputType = {
    id?: true
    userId?: true
    delta?: true
    reason?: true
    createdAt?: true
  }

  export type SeedLedgerCountAggregateInputType = {
    id?: true
    userId?: true
    delta?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type SeedLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeedLedger to aggregate.
     */
    where?: SeedLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLedgers to fetch.
     */
    orderBy?: SeedLedgerOrderByWithRelationInput | SeedLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeedLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeedLedgers
    **/
    _count?: true | SeedLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeedLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeedLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeedLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeedLedgerMaxAggregateInputType
  }

  export type GetSeedLedgerAggregateType<T extends SeedLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeedLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeedLedger[P]>
      : GetScalarType<T[P], AggregateSeedLedger[P]>
  }




  export type SeedLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedLedgerWhereInput
    orderBy?: SeedLedgerOrderByWithAggregationInput | SeedLedgerOrderByWithAggregationInput[]
    by: SeedLedgerScalarFieldEnum[] | SeedLedgerScalarFieldEnum
    having?: SeedLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeedLedgerCountAggregateInputType | true
    _avg?: SeedLedgerAvgAggregateInputType
    _sum?: SeedLedgerSumAggregateInputType
    _min?: SeedLedgerMinAggregateInputType
    _max?: SeedLedgerMaxAggregateInputType
  }

  export type SeedLedgerGroupByOutputType = {
    id: string
    userId: string
    delta: number
    reason: string
    createdAt: Date
    _count: SeedLedgerCountAggregateOutputType | null
    _avg: SeedLedgerAvgAggregateOutputType | null
    _sum: SeedLedgerSumAggregateOutputType | null
    _min: SeedLedgerMinAggregateOutputType | null
    _max: SeedLedgerMaxAggregateOutputType | null
  }

  type GetSeedLedgerGroupByPayload<T extends SeedLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeedLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeedLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeedLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], SeedLedgerGroupByOutputType[P]>
        }
      >
    >


  export type SeedLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seedLedger"]>

  export type SeedLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seedLedger"]>

  export type SeedLedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seedLedger"]>

  export type SeedLedgerSelectScalar = {
    id?: boolean
    userId?: boolean
    delta?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type SeedLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "delta" | "reason" | "createdAt", ExtArgs["result"]["seedLedger"]>
  export type SeedLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SeedLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SeedLedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $SeedLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeedLedger"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      delta: number
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["seedLedger"]>
    composites: {}
  }

  type SeedLedgerGetPayload<S extends boolean | null | undefined | SeedLedgerDefaultArgs> = $Result.GetResult<Prisma.$SeedLedgerPayload, S>

  type SeedLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeedLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeedLedgerCountAggregateInputType | true
    }

  export interface SeedLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeedLedger'], meta: { name: 'SeedLedger' } }
    /**
     * Find zero or one SeedLedger that matches the filter.
     * @param {SeedLedgerFindUniqueArgs} args - Arguments to find a SeedLedger
     * @example
     * // Get one SeedLedger
     * const seedLedger = await prisma.seedLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeedLedgerFindUniqueArgs>(args: SelectSubset<T, SeedLedgerFindUniqueArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeedLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeedLedgerFindUniqueOrThrowArgs} args - Arguments to find a SeedLedger
     * @example
     * // Get one SeedLedger
     * const seedLedger = await prisma.seedLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeedLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, SeedLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeedLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerFindFirstArgs} args - Arguments to find a SeedLedger
     * @example
     * // Get one SeedLedger
     * const seedLedger = await prisma.seedLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeedLedgerFindFirstArgs>(args?: SelectSubset<T, SeedLedgerFindFirstArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeedLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerFindFirstOrThrowArgs} args - Arguments to find a SeedLedger
     * @example
     * // Get one SeedLedger
     * const seedLedger = await prisma.seedLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeedLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, SeedLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeedLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeedLedgers
     * const seedLedgers = await prisma.seedLedger.findMany()
     * 
     * // Get first 10 SeedLedgers
     * const seedLedgers = await prisma.seedLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seedLedgerWithIdOnly = await prisma.seedLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeedLedgerFindManyArgs>(args?: SelectSubset<T, SeedLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeedLedger.
     * @param {SeedLedgerCreateArgs} args - Arguments to create a SeedLedger.
     * @example
     * // Create one SeedLedger
     * const SeedLedger = await prisma.seedLedger.create({
     *   data: {
     *     // ... data to create a SeedLedger
     *   }
     * })
     * 
     */
    create<T extends SeedLedgerCreateArgs>(args: SelectSubset<T, SeedLedgerCreateArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeedLedgers.
     * @param {SeedLedgerCreateManyArgs} args - Arguments to create many SeedLedgers.
     * @example
     * // Create many SeedLedgers
     * const seedLedger = await prisma.seedLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeedLedgerCreateManyArgs>(args?: SelectSubset<T, SeedLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeedLedgers and returns the data saved in the database.
     * @param {SeedLedgerCreateManyAndReturnArgs} args - Arguments to create many SeedLedgers.
     * @example
     * // Create many SeedLedgers
     * const seedLedger = await prisma.seedLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeedLedgers and only return the `id`
     * const seedLedgerWithIdOnly = await prisma.seedLedger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeedLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, SeedLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeedLedger.
     * @param {SeedLedgerDeleteArgs} args - Arguments to delete one SeedLedger.
     * @example
     * // Delete one SeedLedger
     * const SeedLedger = await prisma.seedLedger.delete({
     *   where: {
     *     // ... filter to delete one SeedLedger
     *   }
     * })
     * 
     */
    delete<T extends SeedLedgerDeleteArgs>(args: SelectSubset<T, SeedLedgerDeleteArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeedLedger.
     * @param {SeedLedgerUpdateArgs} args - Arguments to update one SeedLedger.
     * @example
     * // Update one SeedLedger
     * const seedLedger = await prisma.seedLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeedLedgerUpdateArgs>(args: SelectSubset<T, SeedLedgerUpdateArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeedLedgers.
     * @param {SeedLedgerDeleteManyArgs} args - Arguments to filter SeedLedgers to delete.
     * @example
     * // Delete a few SeedLedgers
     * const { count } = await prisma.seedLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeedLedgerDeleteManyArgs>(args?: SelectSubset<T, SeedLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeedLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeedLedgers
     * const seedLedger = await prisma.seedLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeedLedgerUpdateManyArgs>(args: SelectSubset<T, SeedLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeedLedgers and returns the data updated in the database.
     * @param {SeedLedgerUpdateManyAndReturnArgs} args - Arguments to update many SeedLedgers.
     * @example
     * // Update many SeedLedgers
     * const seedLedger = await prisma.seedLedger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeedLedgers and only return the `id`
     * const seedLedgerWithIdOnly = await prisma.seedLedger.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeedLedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, SeedLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeedLedger.
     * @param {SeedLedgerUpsertArgs} args - Arguments to update or create a SeedLedger.
     * @example
     * // Update or create a SeedLedger
     * const seedLedger = await prisma.seedLedger.upsert({
     *   create: {
     *     // ... data to create a SeedLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeedLedger we want to update
     *   }
     * })
     */
    upsert<T extends SeedLedgerUpsertArgs>(args: SelectSubset<T, SeedLedgerUpsertArgs<ExtArgs>>): Prisma__SeedLedgerClient<$Result.GetResult<Prisma.$SeedLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeedLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerCountArgs} args - Arguments to filter SeedLedgers to count.
     * @example
     * // Count the number of SeedLedgers
     * const count = await prisma.seedLedger.count({
     *   where: {
     *     // ... the filter for the SeedLedgers we want to count
     *   }
     * })
    **/
    count<T extends SeedLedgerCountArgs>(
      args?: Subset<T, SeedLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeedLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeedLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeedLedgerAggregateArgs>(args: Subset<T, SeedLedgerAggregateArgs>): Prisma.PrismaPromise<GetSeedLedgerAggregateType<T>>

    /**
     * Group by SeedLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLedgerGroupByArgs} args - Group by arguments.
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
      T extends SeedLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeedLedgerGroupByArgs['orderBy'] }
        : { orderBy?: SeedLedgerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeedLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeedLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeedLedger model
   */
  readonly fields: SeedLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeedLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeedLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeedLedger model
   */
  interface SeedLedgerFieldRefs {
    readonly id: FieldRef<"SeedLedger", 'String'>
    readonly userId: FieldRef<"SeedLedger", 'String'>
    readonly delta: FieldRef<"SeedLedger", 'Int'>
    readonly reason: FieldRef<"SeedLedger", 'String'>
    readonly createdAt: FieldRef<"SeedLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeedLedger findUnique
   */
  export type SeedLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SeedLedger to fetch.
     */
    where: SeedLedgerWhereUniqueInput
  }

  /**
   * SeedLedger findUniqueOrThrow
   */
  export type SeedLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SeedLedger to fetch.
     */
    where: SeedLedgerWhereUniqueInput
  }

  /**
   * SeedLedger findFirst
   */
  export type SeedLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SeedLedger to fetch.
     */
    where?: SeedLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLedgers to fetch.
     */
    orderBy?: SeedLedgerOrderByWithRelationInput | SeedLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeedLedgers.
     */
    cursor?: SeedLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeedLedgers.
     */
    distinct?: SeedLedgerScalarFieldEnum | SeedLedgerScalarFieldEnum[]
  }

  /**
   * SeedLedger findFirstOrThrow
   */
  export type SeedLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SeedLedger to fetch.
     */
    where?: SeedLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLedgers to fetch.
     */
    orderBy?: SeedLedgerOrderByWithRelationInput | SeedLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeedLedgers.
     */
    cursor?: SeedLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeedLedgers.
     */
    distinct?: SeedLedgerScalarFieldEnum | SeedLedgerScalarFieldEnum[]
  }

  /**
   * SeedLedger findMany
   */
  export type SeedLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SeedLedgers to fetch.
     */
    where?: SeedLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLedgers to fetch.
     */
    orderBy?: SeedLedgerOrderByWithRelationInput | SeedLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeedLedgers.
     */
    cursor?: SeedLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLedgers.
     */
    skip?: number
    distinct?: SeedLedgerScalarFieldEnum | SeedLedgerScalarFieldEnum[]
  }

  /**
   * SeedLedger create
   */
  export type SeedLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a SeedLedger.
     */
    data: XOR<SeedLedgerCreateInput, SeedLedgerUncheckedCreateInput>
  }

  /**
   * SeedLedger createMany
   */
  export type SeedLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeedLedgers.
     */
    data: SeedLedgerCreateManyInput | SeedLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeedLedger createManyAndReturn
   */
  export type SeedLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * The data used to create many SeedLedgers.
     */
    data: SeedLedgerCreateManyInput | SeedLedgerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeedLedger update
   */
  export type SeedLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a SeedLedger.
     */
    data: XOR<SeedLedgerUpdateInput, SeedLedgerUncheckedUpdateInput>
    /**
     * Choose, which SeedLedger to update.
     */
    where: SeedLedgerWhereUniqueInput
  }

  /**
   * SeedLedger updateMany
   */
  export type SeedLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeedLedgers.
     */
    data: XOR<SeedLedgerUpdateManyMutationInput, SeedLedgerUncheckedUpdateManyInput>
    /**
     * Filter which SeedLedgers to update
     */
    where?: SeedLedgerWhereInput
    /**
     * Limit how many SeedLedgers to update.
     */
    limit?: number
  }

  /**
   * SeedLedger updateManyAndReturn
   */
  export type SeedLedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * The data used to update SeedLedgers.
     */
    data: XOR<SeedLedgerUpdateManyMutationInput, SeedLedgerUncheckedUpdateManyInput>
    /**
     * Filter which SeedLedgers to update
     */
    where?: SeedLedgerWhereInput
    /**
     * Limit how many SeedLedgers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeedLedger upsert
   */
  export type SeedLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the SeedLedger to update in case it exists.
     */
    where: SeedLedgerWhereUniqueInput
    /**
     * In case the SeedLedger found by the `where` argument doesn't exist, create a new SeedLedger with this data.
     */
    create: XOR<SeedLedgerCreateInput, SeedLedgerUncheckedCreateInput>
    /**
     * In case the SeedLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeedLedgerUpdateInput, SeedLedgerUncheckedUpdateInput>
  }

  /**
   * SeedLedger delete
   */
  export type SeedLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
    /**
     * Filter which SeedLedger to delete.
     */
    where: SeedLedgerWhereUniqueInput
  }

  /**
   * SeedLedger deleteMany
   */
  export type SeedLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeedLedgers to delete
     */
    where?: SeedLedgerWhereInput
    /**
     * Limit how many SeedLedgers to delete.
     */
    limit?: number
  }

  /**
   * SeedLedger without action
   */
  export type SeedLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLedger
     */
    select?: SeedLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedLedger
     */
    omit?: SeedLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedLedgerInclude<ExtArgs> | null
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


  export const ProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    waterDrops: 'waterDrops',
    magicSeeds: 'magicSeeds'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const WalletLedgerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currencyType: 'currencyType',
    delta: 'delta',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type WalletLedgerScalarFieldEnum = (typeof WalletLedgerScalarFieldEnum)[keyof typeof WalletLedgerScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    styleId: 'styleId',
    role: 'role',
    personality: 'personality',
    likes: 'likes',
    doodlePath: 'doodlePath',
    renderPath: 'renderPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const SceneScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    characterId: 'characterId',
    bookId: 'bookId',
    backgroundId: 'backgroundId',
    itemId: 'itemId',
    verbId: 'verbId',
    resultChoice: 'resultChoice',
    storyText: 'storyText',
    sceneImagePath: 'sceneImagePath',
    order: 'order',
    textEn: 'textEn',
    beatType: 'beatType',
    sceneHint: 'sceneHint',
    learningTags: 'learningTags',
    layoutTemplate: 'layoutTemplate',
    objects: 'objects',
    audioUrl: 'audioUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SceneScalarFieldEnum = (typeof SceneScalarFieldEnum)[keyof typeof SceneScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    coverPath: 'coverPath',
    status: 'status',
    topicId: 'topicId',
    lesson: 'lesson',
    targetSceneCount: 'targetSceneCount',
    outline: 'outline',
    pageLength: 'pageLength',
    language: 'language',
    ageRange: 'ageRange',
    mixerTale: 'mixerTale',
    mixerCulture: 'mixerCulture',
    mixerSetting: 'mixerSetting',
    mixerTone: 'mixerTone',
    mixerPack: 'mixerPack',
    storyBible: 'storyBible',
    storyChars: 'storyChars',
    storyObjs: 'storyObjs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const ProjectSeedScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    imageUrl: 'imageUrl',
    seedType: 'seedType',
    audioUrl: 'audioUrl',
    createdAt: 'createdAt'
  };

  export type ProjectSeedScalarFieldEnum = (typeof ProjectSeedScalarFieldEnum)[keyof typeof ProjectSeedScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    type: 'type',
    name: 'name',
    desc: 'desc',
    color: 'color',
    imagePath: 'imagePath',
    createdAt: 'createdAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const GenerationJobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    jobType: 'jobType',
    status: 'status',
    inputData: 'inputData',
    outputData: 'outputData',
    costType: 'costType',
    costAmount: 'costAmount',
    refunded: 'refunded',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type GenerationJobScalarFieldEnum = (typeof GenerationJobScalarFieldEnum)[keyof typeof GenerationJobScalarFieldEnum]


  export const SeedLedgerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    delta: 'delta',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type SeedLedgerScalarFieldEnum = (typeof SeedLedgerScalarFieldEnum)[keyof typeof SeedLedgerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CurrencyType'
   */
  export type EnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType'>
    


  /**
   * Reference to a field of type 'CurrencyType[]'
   */
  export type ListEnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType[]'>
    


  /**
   * Reference to a field of type 'ResultChoice'
   */
  export type EnumResultChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultChoice'>
    


  /**
   * Reference to a field of type 'ResultChoice[]'
   */
  export type ListEnumResultChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultChoice[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BookStatus'
   */
  export type EnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus'>
    


  /**
   * Reference to a field of type 'BookStatus[]'
   */
  export type ListEnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    waterDrops?: IntFilter<"Profile"> | number
    magicSeeds?: IntFilter<"Profile"> | number
    characters?: CharacterListRelationFilter
    scenes?: SceneListRelationFilter
    walletLedger?: WalletLedgerListRelationFilter
    books?: BookListRelationFilter
    cards?: CardListRelationFilter
    seedLedger?: SeedLedgerListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
    characters?: CharacterOrderByRelationAggregateInput
    scenes?: SceneOrderByRelationAggregateInput
    walletLedger?: WalletLedgerOrderByRelationAggregateInput
    books?: BookOrderByRelationAggregateInput
    cards?: CardOrderByRelationAggregateInput
    seedLedger?: SeedLedgerOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    waterDrops?: IntFilter<"Profile"> | number
    magicSeeds?: IntFilter<"Profile"> | number
    characters?: CharacterListRelationFilter
    scenes?: SceneListRelationFilter
    walletLedger?: WalletLedgerListRelationFilter
    books?: BookListRelationFilter
    cards?: CardListRelationFilter
    seedLedger?: SeedLedgerListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    waterDrops?: IntWithAggregatesFilter<"Profile"> | number
    magicSeeds?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type WalletLedgerWhereInput = {
    AND?: WalletLedgerWhereInput | WalletLedgerWhereInput[]
    OR?: WalletLedgerWhereInput[]
    NOT?: WalletLedgerWhereInput | WalletLedgerWhereInput[]
    id?: UuidFilter<"WalletLedger"> | string
    userId?: UuidFilter<"WalletLedger"> | string
    currencyType?: EnumCurrencyTypeFilter<"WalletLedger"> | $Enums.CurrencyType
    delta?: IntFilter<"WalletLedger"> | number
    reason?: StringFilter<"WalletLedger"> | string
    createdAt?: DateTimeFilter<"WalletLedger"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type WalletLedgerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyType?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
  }

  export type WalletLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletLedgerWhereInput | WalletLedgerWhereInput[]
    OR?: WalletLedgerWhereInput[]
    NOT?: WalletLedgerWhereInput | WalletLedgerWhereInput[]
    userId?: UuidFilter<"WalletLedger"> | string
    currencyType?: EnumCurrencyTypeFilter<"WalletLedger"> | $Enums.CurrencyType
    delta?: IntFilter<"WalletLedger"> | number
    reason?: StringFilter<"WalletLedger"> | string
    createdAt?: DateTimeFilter<"WalletLedger"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type WalletLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyType?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: WalletLedgerCountOrderByAggregateInput
    _avg?: WalletLedgerAvgOrderByAggregateInput
    _max?: WalletLedgerMaxOrderByAggregateInput
    _min?: WalletLedgerMinOrderByAggregateInput
    _sum?: WalletLedgerSumOrderByAggregateInput
  }

  export type WalletLedgerScalarWhereWithAggregatesInput = {
    AND?: WalletLedgerScalarWhereWithAggregatesInput | WalletLedgerScalarWhereWithAggregatesInput[]
    OR?: WalletLedgerScalarWhereWithAggregatesInput[]
    NOT?: WalletLedgerScalarWhereWithAggregatesInput | WalletLedgerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WalletLedger"> | string
    userId?: UuidWithAggregatesFilter<"WalletLedger"> | string
    currencyType?: EnumCurrencyTypeWithAggregatesFilter<"WalletLedger"> | $Enums.CurrencyType
    delta?: IntWithAggregatesFilter<"WalletLedger"> | number
    reason?: StringWithAggregatesFilter<"WalletLedger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WalletLedger"> | Date | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: UuidFilter<"Character"> | string
    userId?: UuidFilter<"Character"> | string
    name?: StringNullableFilter<"Character"> | string | null
    styleId?: StringNullableFilter<"Character"> | string | null
    role?: StringNullableFilter<"Character"> | string | null
    personality?: StringNullableFilter<"Character"> | string | null
    likes?: StringNullableListFilter<"Character">
    doodlePath?: StringFilter<"Character"> | string
    renderPath?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    scenes?: SceneListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    styleId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    likes?: SortOrder
    doodlePath?: SortOrder
    renderPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    scenes?: SceneOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    userId?: UuidFilter<"Character"> | string
    name?: StringNullableFilter<"Character"> | string | null
    styleId?: StringNullableFilter<"Character"> | string | null
    role?: StringNullableFilter<"Character"> | string | null
    personality?: StringNullableFilter<"Character"> | string | null
    likes?: StringNullableListFilter<"Character">
    doodlePath?: StringFilter<"Character"> | string
    renderPath?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    scenes?: SceneListRelationFilter
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    styleId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    likes?: SortOrder
    doodlePath?: SortOrder
    renderPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Character"> | string
    userId?: UuidWithAggregatesFilter<"Character"> | string
    name?: StringNullableWithAggregatesFilter<"Character"> | string | null
    styleId?: StringNullableWithAggregatesFilter<"Character"> | string | null
    role?: StringNullableWithAggregatesFilter<"Character"> | string | null
    personality?: StringNullableWithAggregatesFilter<"Character"> | string | null
    likes?: StringNullableListFilter<"Character">
    doodlePath?: StringWithAggregatesFilter<"Character"> | string
    renderPath?: StringNullableWithAggregatesFilter<"Character"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
  }

  export type SceneWhereInput = {
    AND?: SceneWhereInput | SceneWhereInput[]
    OR?: SceneWhereInput[]
    NOT?: SceneWhereInput | SceneWhereInput[]
    id?: UuidFilter<"Scene"> | string
    userId?: UuidFilter<"Scene"> | string
    characterId?: UuidNullableFilter<"Scene"> | string | null
    bookId?: UuidNullableFilter<"Scene"> | string | null
    backgroundId?: StringFilter<"Scene"> | string
    itemId?: StringFilter<"Scene"> | string
    verbId?: StringFilter<"Scene"> | string
    resultChoice?: EnumResultChoiceFilter<"Scene"> | $Enums.ResultChoice
    storyText?: StringNullableFilter<"Scene"> | string | null
    sceneImagePath?: StringNullableFilter<"Scene"> | string | null
    order?: IntNullableFilter<"Scene"> | number | null
    textEn?: StringNullableFilter<"Scene"> | string | null
    beatType?: StringNullableFilter<"Scene"> | string | null
    sceneHint?: StringNullableFilter<"Scene"> | string | null
    learningTags?: JsonNullableFilter<"Scene">
    layoutTemplate?: StringNullableFilter<"Scene"> | string | null
    objects?: JsonNullableFilter<"Scene">
    audioUrl?: StringNullableFilter<"Scene"> | string | null
    createdAt?: DateTimeFilter<"Scene"> | Date | string
    updatedAt?: DateTimeFilter<"Scene"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
  }

  export type SceneOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrderInput | SortOrder
    bookId?: SortOrderInput | SortOrder
    backgroundId?: SortOrder
    itemId?: SortOrder
    verbId?: SortOrder
    resultChoice?: SortOrder
    storyText?: SortOrderInput | SortOrder
    sceneImagePath?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    textEn?: SortOrderInput | SortOrder
    beatType?: SortOrderInput | SortOrder
    sceneHint?: SortOrderInput | SortOrder
    learningTags?: SortOrderInput | SortOrder
    layoutTemplate?: SortOrderInput | SortOrder
    objects?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    character?: CharacterOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type SceneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SceneWhereInput | SceneWhereInput[]
    OR?: SceneWhereInput[]
    NOT?: SceneWhereInput | SceneWhereInput[]
    userId?: UuidFilter<"Scene"> | string
    characterId?: UuidNullableFilter<"Scene"> | string | null
    bookId?: UuidNullableFilter<"Scene"> | string | null
    backgroundId?: StringFilter<"Scene"> | string
    itemId?: StringFilter<"Scene"> | string
    verbId?: StringFilter<"Scene"> | string
    resultChoice?: EnumResultChoiceFilter<"Scene"> | $Enums.ResultChoice
    storyText?: StringNullableFilter<"Scene"> | string | null
    sceneImagePath?: StringNullableFilter<"Scene"> | string | null
    order?: IntNullableFilter<"Scene"> | number | null
    textEn?: StringNullableFilter<"Scene"> | string | null
    beatType?: StringNullableFilter<"Scene"> | string | null
    sceneHint?: StringNullableFilter<"Scene"> | string | null
    learningTags?: JsonNullableFilter<"Scene">
    layoutTemplate?: StringNullableFilter<"Scene"> | string | null
    objects?: JsonNullableFilter<"Scene">
    audioUrl?: StringNullableFilter<"Scene"> | string | null
    createdAt?: DateTimeFilter<"Scene"> | Date | string
    updatedAt?: DateTimeFilter<"Scene"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
  }, "id">

  export type SceneOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrderInput | SortOrder
    bookId?: SortOrderInput | SortOrder
    backgroundId?: SortOrder
    itemId?: SortOrder
    verbId?: SortOrder
    resultChoice?: SortOrder
    storyText?: SortOrderInput | SortOrder
    sceneImagePath?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    textEn?: SortOrderInput | SortOrder
    beatType?: SortOrderInput | SortOrder
    sceneHint?: SortOrderInput | SortOrder
    learningTags?: SortOrderInput | SortOrder
    layoutTemplate?: SortOrderInput | SortOrder
    objects?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SceneCountOrderByAggregateInput
    _avg?: SceneAvgOrderByAggregateInput
    _max?: SceneMaxOrderByAggregateInput
    _min?: SceneMinOrderByAggregateInput
    _sum?: SceneSumOrderByAggregateInput
  }

  export type SceneScalarWhereWithAggregatesInput = {
    AND?: SceneScalarWhereWithAggregatesInput | SceneScalarWhereWithAggregatesInput[]
    OR?: SceneScalarWhereWithAggregatesInput[]
    NOT?: SceneScalarWhereWithAggregatesInput | SceneScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Scene"> | string
    userId?: UuidWithAggregatesFilter<"Scene"> | string
    characterId?: UuidNullableWithAggregatesFilter<"Scene"> | string | null
    bookId?: UuidNullableWithAggregatesFilter<"Scene"> | string | null
    backgroundId?: StringWithAggregatesFilter<"Scene"> | string
    itemId?: StringWithAggregatesFilter<"Scene"> | string
    verbId?: StringWithAggregatesFilter<"Scene"> | string
    resultChoice?: EnumResultChoiceWithAggregatesFilter<"Scene"> | $Enums.ResultChoice
    storyText?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    sceneImagePath?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    order?: IntNullableWithAggregatesFilter<"Scene"> | number | null
    textEn?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    beatType?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    sceneHint?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    learningTags?: JsonNullableWithAggregatesFilter<"Scene">
    layoutTemplate?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    objects?: JsonNullableWithAggregatesFilter<"Scene">
    audioUrl?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Scene"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scene"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: UuidFilter<"Book"> | string
    userId?: UuidFilter<"Book"> | string
    title?: StringNullableFilter<"Book"> | string | null
    coverPath?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusFilter<"Book"> | $Enums.BookStatus
    topicId?: StringNullableFilter<"Book"> | string | null
    lesson?: StringNullableFilter<"Book"> | string | null
    targetSceneCount?: IntFilter<"Book"> | number
    outline?: JsonNullableFilter<"Book">
    pageLength?: IntFilter<"Book"> | number
    language?: StringFilter<"Book"> | string
    ageRange?: StringFilter<"Book"> | string
    mixerTale?: StringNullableFilter<"Book"> | string | null
    mixerCulture?: StringNullableFilter<"Book"> | string | null
    mixerSetting?: StringNullableFilter<"Book"> | string | null
    mixerTone?: StringNullableFilter<"Book"> | string | null
    mixerPack?: StringNullableFilter<"Book"> | string | null
    storyBible?: JsonNullableFilter<"Book">
    storyChars?: JsonNullableFilter<"Book">
    storyObjs?: JsonNullableFilter<"Book">
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    completedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    scenes?: SceneListRelationFilter
    seeds?: ProjectSeedListRelationFilter
    cards?: CardListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    coverPath?: SortOrderInput | SortOrder
    status?: SortOrder
    topicId?: SortOrderInput | SortOrder
    lesson?: SortOrderInput | SortOrder
    targetSceneCount?: SortOrder
    outline?: SortOrderInput | SortOrder
    pageLength?: SortOrder
    language?: SortOrder
    ageRange?: SortOrder
    mixerTale?: SortOrderInput | SortOrder
    mixerCulture?: SortOrderInput | SortOrder
    mixerSetting?: SortOrderInput | SortOrder
    mixerTone?: SortOrderInput | SortOrder
    mixerPack?: SortOrderInput | SortOrder
    storyBible?: SortOrderInput | SortOrder
    storyChars?: SortOrderInput | SortOrder
    storyObjs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: ProfileOrderByWithRelationInput
    scenes?: SceneOrderByRelationAggregateInput
    seeds?: ProjectSeedOrderByRelationAggregateInput
    cards?: CardOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    userId?: UuidFilter<"Book"> | string
    title?: StringNullableFilter<"Book"> | string | null
    coverPath?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusFilter<"Book"> | $Enums.BookStatus
    topicId?: StringNullableFilter<"Book"> | string | null
    lesson?: StringNullableFilter<"Book"> | string | null
    targetSceneCount?: IntFilter<"Book"> | number
    outline?: JsonNullableFilter<"Book">
    pageLength?: IntFilter<"Book"> | number
    language?: StringFilter<"Book"> | string
    ageRange?: StringFilter<"Book"> | string
    mixerTale?: StringNullableFilter<"Book"> | string | null
    mixerCulture?: StringNullableFilter<"Book"> | string | null
    mixerSetting?: StringNullableFilter<"Book"> | string | null
    mixerTone?: StringNullableFilter<"Book"> | string | null
    mixerPack?: StringNullableFilter<"Book"> | string | null
    storyBible?: JsonNullableFilter<"Book">
    storyChars?: JsonNullableFilter<"Book">
    storyObjs?: JsonNullableFilter<"Book">
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    completedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    scenes?: SceneListRelationFilter
    seeds?: ProjectSeedListRelationFilter
    cards?: CardListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    coverPath?: SortOrderInput | SortOrder
    status?: SortOrder
    topicId?: SortOrderInput | SortOrder
    lesson?: SortOrderInput | SortOrder
    targetSceneCount?: SortOrder
    outline?: SortOrderInput | SortOrder
    pageLength?: SortOrder
    language?: SortOrder
    ageRange?: SortOrder
    mixerTale?: SortOrderInput | SortOrder
    mixerCulture?: SortOrderInput | SortOrder
    mixerSetting?: SortOrderInput | SortOrder
    mixerTone?: SortOrderInput | SortOrder
    mixerPack?: SortOrderInput | SortOrder
    storyBible?: SortOrderInput | SortOrder
    storyChars?: SortOrderInput | SortOrder
    storyObjs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Book"> | string
    userId?: UuidWithAggregatesFilter<"Book"> | string
    title?: StringNullableWithAggregatesFilter<"Book"> | string | null
    coverPath?: StringNullableWithAggregatesFilter<"Book"> | string | null
    status?: EnumBookStatusWithAggregatesFilter<"Book"> | $Enums.BookStatus
    topicId?: StringNullableWithAggregatesFilter<"Book"> | string | null
    lesson?: StringNullableWithAggregatesFilter<"Book"> | string | null
    targetSceneCount?: IntWithAggregatesFilter<"Book"> | number
    outline?: JsonNullableWithAggregatesFilter<"Book">
    pageLength?: IntWithAggregatesFilter<"Book"> | number
    language?: StringWithAggregatesFilter<"Book"> | string
    ageRange?: StringWithAggregatesFilter<"Book"> | string
    mixerTale?: StringNullableWithAggregatesFilter<"Book"> | string | null
    mixerCulture?: StringNullableWithAggregatesFilter<"Book"> | string | null
    mixerSetting?: StringNullableWithAggregatesFilter<"Book"> | string | null
    mixerTone?: StringNullableWithAggregatesFilter<"Book"> | string | null
    mixerPack?: StringNullableWithAggregatesFilter<"Book"> | string | null
    storyBible?: JsonNullableWithAggregatesFilter<"Book">
    storyChars?: JsonNullableWithAggregatesFilter<"Book">
    storyObjs?: JsonNullableWithAggregatesFilter<"Book">
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
  }

  export type ProjectSeedWhereInput = {
    AND?: ProjectSeedWhereInput | ProjectSeedWhereInput[]
    OR?: ProjectSeedWhereInput[]
    NOT?: ProjectSeedWhereInput | ProjectSeedWhereInput[]
    id?: UuidFilter<"ProjectSeed"> | string
    bookId?: UuidFilter<"ProjectSeed"> | string
    imageUrl?: StringFilter<"ProjectSeed"> | string
    seedType?: StringFilter<"ProjectSeed"> | string
    audioUrl?: StringNullableFilter<"ProjectSeed"> | string | null
    createdAt?: DateTimeFilter<"ProjectSeed"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type ProjectSeedOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    imageUrl?: SortOrder
    seedType?: SortOrder
    audioUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type ProjectSeedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectSeedWhereInput | ProjectSeedWhereInput[]
    OR?: ProjectSeedWhereInput[]
    NOT?: ProjectSeedWhereInput | ProjectSeedWhereInput[]
    bookId?: UuidFilter<"ProjectSeed"> | string
    imageUrl?: StringFilter<"ProjectSeed"> | string
    seedType?: StringFilter<"ProjectSeed"> | string
    audioUrl?: StringNullableFilter<"ProjectSeed"> | string | null
    createdAt?: DateTimeFilter<"ProjectSeed"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type ProjectSeedOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    imageUrl?: SortOrder
    seedType?: SortOrder
    audioUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectSeedCountOrderByAggregateInput
    _max?: ProjectSeedMaxOrderByAggregateInput
    _min?: ProjectSeedMinOrderByAggregateInput
  }

  export type ProjectSeedScalarWhereWithAggregatesInput = {
    AND?: ProjectSeedScalarWhereWithAggregatesInput | ProjectSeedScalarWhereWithAggregatesInput[]
    OR?: ProjectSeedScalarWhereWithAggregatesInput[]
    NOT?: ProjectSeedScalarWhereWithAggregatesInput | ProjectSeedScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProjectSeed"> | string
    bookId?: UuidWithAggregatesFilter<"ProjectSeed"> | string
    imageUrl?: StringWithAggregatesFilter<"ProjectSeed"> | string
    seedType?: StringWithAggregatesFilter<"ProjectSeed"> | string
    audioUrl?: StringNullableWithAggregatesFilter<"ProjectSeed"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectSeed"> | Date | string
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: UuidFilter<"Card"> | string
    userId?: UuidFilter<"Card"> | string
    bookId?: UuidNullableFilter<"Card"> | string | null
    type?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    desc?: StringNullableFilter<"Card"> | string | null
    color?: StringNullableFilter<"Card"> | string | null
    imagePath?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    userId?: UuidFilter<"Card"> | string
    bookId?: UuidNullableFilter<"Card"> | string | null
    type?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    desc?: StringNullableFilter<"Card"> | string | null
    color?: StringNullableFilter<"Card"> | string | null
    imagePath?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Card"> | string
    userId?: UuidWithAggregatesFilter<"Card"> | string
    bookId?: UuidNullableWithAggregatesFilter<"Card"> | string | null
    type?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    desc?: StringNullableWithAggregatesFilter<"Card"> | string | null
    color?: StringNullableWithAggregatesFilter<"Card"> | string | null
    imagePath?: StringNullableWithAggregatesFilter<"Card"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type GenerationJobWhereInput = {
    AND?: GenerationJobWhereInput | GenerationJobWhereInput[]
    OR?: GenerationJobWhereInput[]
    NOT?: GenerationJobWhereInput | GenerationJobWhereInput[]
    id?: UuidFilter<"GenerationJob"> | string
    userId?: UuidFilter<"GenerationJob"> | string
    bookId?: UuidNullableFilter<"GenerationJob"> | string | null
    jobType?: StringFilter<"GenerationJob"> | string
    status?: StringFilter<"GenerationJob"> | string
    inputData?: JsonFilter<"GenerationJob">
    outputData?: JsonNullableFilter<"GenerationJob">
    costType?: StringFilter<"GenerationJob"> | string
    costAmount?: IntFilter<"GenerationJob"> | number
    refunded?: BoolFilter<"GenerationJob"> | boolean
    createdAt?: DateTimeFilter<"GenerationJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"GenerationJob"> | Date | string | null
  }

  export type GenerationJobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrderInput | SortOrder
    jobType?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    outputData?: SortOrderInput | SortOrder
    costType?: SortOrder
    costAmount?: SortOrder
    refunded?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type GenerationJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenerationJobWhereInput | GenerationJobWhereInput[]
    OR?: GenerationJobWhereInput[]
    NOT?: GenerationJobWhereInput | GenerationJobWhereInput[]
    userId?: UuidFilter<"GenerationJob"> | string
    bookId?: UuidNullableFilter<"GenerationJob"> | string | null
    jobType?: StringFilter<"GenerationJob"> | string
    status?: StringFilter<"GenerationJob"> | string
    inputData?: JsonFilter<"GenerationJob">
    outputData?: JsonNullableFilter<"GenerationJob">
    costType?: StringFilter<"GenerationJob"> | string
    costAmount?: IntFilter<"GenerationJob"> | number
    refunded?: BoolFilter<"GenerationJob"> | boolean
    createdAt?: DateTimeFilter<"GenerationJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"GenerationJob"> | Date | string | null
  }, "id">

  export type GenerationJobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrderInput | SortOrder
    jobType?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    outputData?: SortOrderInput | SortOrder
    costType?: SortOrder
    costAmount?: SortOrder
    refunded?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: GenerationJobCountOrderByAggregateInput
    _avg?: GenerationJobAvgOrderByAggregateInput
    _max?: GenerationJobMaxOrderByAggregateInput
    _min?: GenerationJobMinOrderByAggregateInput
    _sum?: GenerationJobSumOrderByAggregateInput
  }

  export type GenerationJobScalarWhereWithAggregatesInput = {
    AND?: GenerationJobScalarWhereWithAggregatesInput | GenerationJobScalarWhereWithAggregatesInput[]
    OR?: GenerationJobScalarWhereWithAggregatesInput[]
    NOT?: GenerationJobScalarWhereWithAggregatesInput | GenerationJobScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GenerationJob"> | string
    userId?: UuidWithAggregatesFilter<"GenerationJob"> | string
    bookId?: UuidNullableWithAggregatesFilter<"GenerationJob"> | string | null
    jobType?: StringWithAggregatesFilter<"GenerationJob"> | string
    status?: StringWithAggregatesFilter<"GenerationJob"> | string
    inputData?: JsonWithAggregatesFilter<"GenerationJob">
    outputData?: JsonNullableWithAggregatesFilter<"GenerationJob">
    costType?: StringWithAggregatesFilter<"GenerationJob"> | string
    costAmount?: IntWithAggregatesFilter<"GenerationJob"> | number
    refunded?: BoolWithAggregatesFilter<"GenerationJob"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GenerationJob"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"GenerationJob"> | Date | string | null
  }

  export type SeedLedgerWhereInput = {
    AND?: SeedLedgerWhereInput | SeedLedgerWhereInput[]
    OR?: SeedLedgerWhereInput[]
    NOT?: SeedLedgerWhereInput | SeedLedgerWhereInput[]
    id?: UuidFilter<"SeedLedger"> | string
    userId?: UuidFilter<"SeedLedger"> | string
    delta?: IntFilter<"SeedLedger"> | number
    reason?: StringFilter<"SeedLedger"> | string
    createdAt?: DateTimeFilter<"SeedLedger"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type SeedLedgerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
  }

  export type SeedLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeedLedgerWhereInput | SeedLedgerWhereInput[]
    OR?: SeedLedgerWhereInput[]
    NOT?: SeedLedgerWhereInput | SeedLedgerWhereInput[]
    userId?: UuidFilter<"SeedLedger"> | string
    delta?: IntFilter<"SeedLedger"> | number
    reason?: StringFilter<"SeedLedger"> | string
    createdAt?: DateTimeFilter<"SeedLedger"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type SeedLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: SeedLedgerCountOrderByAggregateInput
    _avg?: SeedLedgerAvgOrderByAggregateInput
    _max?: SeedLedgerMaxOrderByAggregateInput
    _min?: SeedLedgerMinOrderByAggregateInput
    _sum?: SeedLedgerSumOrderByAggregateInput
  }

  export type SeedLedgerScalarWhereWithAggregatesInput = {
    AND?: SeedLedgerScalarWhereWithAggregatesInput | SeedLedgerScalarWhereWithAggregatesInput[]
    OR?: SeedLedgerScalarWhereWithAggregatesInput[]
    NOT?: SeedLedgerScalarWhereWithAggregatesInput | SeedLedgerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SeedLedger"> | string
    userId?: UuidWithAggregatesFilter<"SeedLedger"> | string
    delta?: IntWithAggregatesFilter<"SeedLedger"> | number
    reason?: StringWithAggregatesFilter<"SeedLedger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SeedLedger"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
  }

  export type WalletLedgerCreateInput = {
    id?: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutWalletLedgerInput
  }

  export type WalletLedgerUncheckedCreateInput = {
    id?: string
    userId: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type WalletLedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutWalletLedgerNestedInput
  }

  export type WalletLedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerCreateManyInput = {
    id?: string
    userId: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type WalletLedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateInput = {
    id?: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutCharactersInput
    scenes?: SceneCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scenes?: SceneUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCharactersNestedInput
    scenes?: SceneUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: SceneUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneCreateInput = {
    id?: string
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutScenesInput
    character?: CharacterCreateNestedOneWithoutScenesInput
    book?: BookCreateNestedOneWithoutScenesInput
  }

  export type SceneUncheckedCreateInput = {
    id?: string
    userId: string
    characterId?: string | null
    bookId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutScenesNestedInput
    character?: CharacterUpdateOneWithoutScenesNestedInput
    book?: BookUpdateOneWithoutScenesNestedInput
  }

  export type SceneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneCreateManyInput = {
    id?: string
    userId: string
    characterId?: string | null
    bookId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutBooksInput
    scenes?: SceneCreateNestedManyWithoutBookInput
    seeds?: ProjectSeedCreateNestedManyWithoutBookInput
    cards?: CardCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    scenes?: SceneUncheckedCreateNestedManyWithoutBookInput
    seeds?: ProjectSeedUncheckedCreateNestedManyWithoutBookInput
    cards?: CardUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutBooksNestedInput
    scenes?: SceneUpdateManyWithoutBookNestedInput
    seeds?: ProjectSeedUpdateManyWithoutBookNestedInput
    cards?: CardUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scenes?: SceneUncheckedUpdateManyWithoutBookNestedInput
    seeds?: ProjectSeedUncheckedUpdateManyWithoutBookNestedInput
    cards?: CardUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectSeedCreateInput = {
    id?: string
    imageUrl: string
    seedType: string
    audioUrl?: string | null
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutSeedsInput
  }

  export type ProjectSeedUncheckedCreateInput = {
    id?: string
    bookId: string
    imageUrl: string
    seedType: string
    audioUrl?: string | null
    createdAt?: Date | string
  }

  export type ProjectSeedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutSeedsNestedInput
  }

  export type ProjectSeedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSeedCreateManyInput = {
    id?: string
    bookId: string
    imageUrl: string
    seedType: string
    audioUrl?: string | null
    createdAt?: Date | string
  }

  export type ProjectSeedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSeedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateInput = {
    id?: string
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutCardsInput
    book?: BookCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    userId: string
    bookId?: string | null
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCardsNestedInput
    book?: BookUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyInput = {
    id?: string
    userId: string
    bookId?: string | null
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationJobCreateInput = {
    id?: string
    userId: string
    bookId?: string | null
    jobType: string
    status?: string
    inputData: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType: string
    costAmount: number
    refunded?: boolean
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type GenerationJobUncheckedCreateInput = {
    id?: string
    userId: string
    bookId?: string | null
    jobType: string
    status?: string
    inputData: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType: string
    costAmount: number
    refunded?: boolean
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type GenerationJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType?: StringFieldUpdateOperationsInput | string
    costAmount?: IntFieldUpdateOperationsInput | number
    refunded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GenerationJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType?: StringFieldUpdateOperationsInput | string
    costAmount?: IntFieldUpdateOperationsInput | number
    refunded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GenerationJobCreateManyInput = {
    id?: string
    userId: string
    bookId?: string | null
    jobType: string
    status?: string
    inputData: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType: string
    costAmount: number
    refunded?: boolean
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type GenerationJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType?: StringFieldUpdateOperationsInput | string
    costAmount?: IntFieldUpdateOperationsInput | number
    refunded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GenerationJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    costType?: StringFieldUpdateOperationsInput | string
    costAmount?: IntFieldUpdateOperationsInput | number
    refunded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeedLedgerCreateInput = {
    id?: string
    delta: number
    reason: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutSeedLedgerInput
  }

  export type SeedLedgerUncheckedCreateInput = {
    id?: string
    userId: string
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type SeedLedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutSeedLedgerNestedInput
  }

  export type SeedLedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedLedgerCreateManyInput = {
    id?: string
    userId: string
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type SeedLedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedLedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type SceneListRelationFilter = {
    every?: SceneWhereInput
    some?: SceneWhereInput
    none?: SceneWhereInput
  }

  export type WalletLedgerListRelationFilter = {
    every?: WalletLedgerWhereInput
    some?: WalletLedgerWhereInput
    none?: WalletLedgerWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type SeedLedgerListRelationFilter = {
    every?: SeedLedgerWhereInput
    some?: SeedLedgerWhereInput
    none?: SeedLedgerWhereInput
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SceneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeedLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    waterDrops?: SortOrder
    magicSeeds?: SortOrder
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

  export type EnumCurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeFilter<$PrismaModel> | $Enums.CurrencyType
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

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type WalletLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyType?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletLedgerAvgOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type WalletLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyType?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyType?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletLedgerSumOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type EnumCurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyTypeFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    role?: SortOrder
    personality?: SortOrder
    likes?: SortOrder
    doodlePath?: SortOrder
    renderPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    role?: SortOrder
    personality?: SortOrder
    doodlePath?: SortOrder
    renderPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    role?: SortOrder
    personality?: SortOrder
    doodlePath?: SortOrder
    renderPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumResultChoiceFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultChoice | EnumResultChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumResultChoiceFilter<$PrismaModel> | $Enums.ResultChoice
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: CharacterWhereInput | null
    isNot?: CharacterWhereInput | null
  }

  export type BookNullableScalarRelationFilter = {
    is?: BookWhereInput | null
    isNot?: BookWhereInput | null
  }

  export type SceneCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    bookId?: SortOrder
    backgroundId?: SortOrder
    itemId?: SortOrder
    verbId?: SortOrder
    resultChoice?: SortOrder
    storyText?: SortOrder
    sceneImagePath?: SortOrder
    order?: SortOrder
    textEn?: SortOrder
    beatType?: SortOrder
    sceneHint?: SortOrder
    learningTags?: SortOrder
    layoutTemplate?: SortOrder
    objects?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SceneAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SceneMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    bookId?: SortOrder
    backgroundId?: SortOrder
    itemId?: SortOrder
    verbId?: SortOrder
    resultChoice?: SortOrder
    storyText?: SortOrder
    sceneImagePath?: SortOrder
    order?: SortOrder
    textEn?: SortOrder
    beatType?: SortOrder
    sceneHint?: SortOrder
    layoutTemplate?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SceneMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    bookId?: SortOrder
    backgroundId?: SortOrder
    itemId?: SortOrder
    verbId?: SortOrder
    resultChoice?: SortOrder
    storyText?: SortOrder
    sceneImagePath?: SortOrder
    order?: SortOrder
    textEn?: SortOrder
    beatType?: SortOrder
    sceneHint?: SortOrder
    layoutTemplate?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SceneSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type EnumResultChoiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultChoice | EnumResultChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumResultChoiceWithAggregatesFilter<$PrismaModel> | $Enums.ResultChoice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultChoiceFilter<$PrismaModel>
    _max?: NestedEnumResultChoiceFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumBookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusFilter<$PrismaModel> | $Enums.BookStatus
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

  export type ProjectSeedListRelationFilter = {
    every?: ProjectSeedWhereInput
    some?: ProjectSeedWhereInput
    none?: ProjectSeedWhereInput
  }

  export type ProjectSeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    coverPath?: SortOrder
    status?: SortOrder
    topicId?: SortOrder
    lesson?: SortOrder
    targetSceneCount?: SortOrder
    outline?: SortOrder
    pageLength?: SortOrder
    language?: SortOrder
    ageRange?: SortOrder
    mixerTale?: SortOrder
    mixerCulture?: SortOrder
    mixerSetting?: SortOrder
    mixerTone?: SortOrder
    mixerPack?: SortOrder
    storyBible?: SortOrder
    storyChars?: SortOrder
    storyObjs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    targetSceneCount?: SortOrder
    pageLength?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    coverPath?: SortOrder
    status?: SortOrder
    topicId?: SortOrder
    lesson?: SortOrder
    targetSceneCount?: SortOrder
    pageLength?: SortOrder
    language?: SortOrder
    ageRange?: SortOrder
    mixerTale?: SortOrder
    mixerCulture?: SortOrder
    mixerSetting?: SortOrder
    mixerTone?: SortOrder
    mixerPack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    coverPath?: SortOrder
    status?: SortOrder
    topicId?: SortOrder
    lesson?: SortOrder
    targetSceneCount?: SortOrder
    pageLength?: SortOrder
    language?: SortOrder
    ageRange?: SortOrder
    mixerTale?: SortOrder
    mixerCulture?: SortOrder
    mixerSetting?: SortOrder
    mixerTone?: SortOrder
    mixerPack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    targetSceneCount?: SortOrder
    pageLength?: SortOrder
  }

  export type EnumBookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookStatusFilter<$PrismaModel>
    _max?: NestedEnumBookStatusFilter<$PrismaModel>
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

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type ProjectSeedCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    imageUrl?: SortOrder
    seedType?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSeedMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    imageUrl?: SortOrder
    seedType?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSeedMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    imageUrl?: SortOrder
    seedType?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    color?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    color?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    color?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GenerationJobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    outputData?: SortOrder
    costType?: SortOrder
    costAmount?: SortOrder
    refunded?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type GenerationJobAvgOrderByAggregateInput = {
    costAmount?: SortOrder
  }

  export type GenerationJobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    costType?: SortOrder
    costAmount?: SortOrder
    refunded?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type GenerationJobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    costType?: SortOrder
    costAmount?: SortOrder
    refunded?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type GenerationJobSumOrderByAggregateInput = {
    costAmount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SeedLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SeedLedgerAvgOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type SeedLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SeedLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SeedLedgerSumOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type CharacterCreateNestedManyWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type SceneCreateNestedManyWithoutUserInput = {
    create?: XOR<SceneCreateWithoutUserInput, SceneUncheckedCreateWithoutUserInput> | SceneCreateWithoutUserInput[] | SceneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUserInput | SceneCreateOrConnectWithoutUserInput[]
    createMany?: SceneCreateManyUserInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type WalletLedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletLedgerCreateWithoutUserInput, WalletLedgerUncheckedCreateWithoutUserInput> | WalletLedgerCreateWithoutUserInput[] | WalletLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletLedgerCreateOrConnectWithoutUserInput | WalletLedgerCreateOrConnectWithoutUserInput[]
    createMany?: WalletLedgerCreateManyUserInputEnvelope
    connect?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SeedLedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<SeedLedgerCreateWithoutUserInput, SeedLedgerUncheckedCreateWithoutUserInput> | SeedLedgerCreateWithoutUserInput[] | SeedLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeedLedgerCreateOrConnectWithoutUserInput | SeedLedgerCreateOrConnectWithoutUserInput[]
    createMany?: SeedLedgerCreateManyUserInputEnvelope
    connect?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SceneCreateWithoutUserInput, SceneUncheckedCreateWithoutUserInput> | SceneCreateWithoutUserInput[] | SceneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUserInput | SceneCreateOrConnectWithoutUserInput[]
    createMany?: SceneCreateManyUserInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type WalletLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletLedgerCreateWithoutUserInput, WalletLedgerUncheckedCreateWithoutUserInput> | WalletLedgerCreateWithoutUserInput[] | WalletLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletLedgerCreateOrConnectWithoutUserInput | WalletLedgerCreateOrConnectWithoutUserInput[]
    createMany?: WalletLedgerCreateManyUserInputEnvelope
    connect?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SeedLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SeedLedgerCreateWithoutUserInput, SeedLedgerUncheckedCreateWithoutUserInput> | SeedLedgerCreateWithoutUserInput[] | SeedLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeedLedgerCreateOrConnectWithoutUserInput | SeedLedgerCreateOrConnectWithoutUserInput[]
    createMany?: SeedLedgerCreateManyUserInputEnvelope
    connect?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutUserInput | CharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutUserInput | CharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutUserInput | CharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type SceneUpdateManyWithoutUserNestedInput = {
    create?: XOR<SceneCreateWithoutUserInput, SceneUncheckedCreateWithoutUserInput> | SceneCreateWithoutUserInput[] | SceneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUserInput | SceneCreateOrConnectWithoutUserInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutUserInput | SceneUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SceneCreateManyUserInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutUserInput | SceneUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutUserInput | SceneUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type WalletLedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletLedgerCreateWithoutUserInput, WalletLedgerUncheckedCreateWithoutUserInput> | WalletLedgerCreateWithoutUserInput[] | WalletLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletLedgerCreateOrConnectWithoutUserInput | WalletLedgerCreateOrConnectWithoutUserInput[]
    upsert?: WalletLedgerUpsertWithWhereUniqueWithoutUserInput | WalletLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletLedgerCreateManyUserInputEnvelope
    set?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    disconnect?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    delete?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    connect?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    update?: WalletLedgerUpdateWithWhereUniqueWithoutUserInput | WalletLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletLedgerUpdateManyWithWhereWithoutUserInput | WalletLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletLedgerScalarWhereInput | WalletLedgerScalarWhereInput[]
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type CardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SeedLedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeedLedgerCreateWithoutUserInput, SeedLedgerUncheckedCreateWithoutUserInput> | SeedLedgerCreateWithoutUserInput[] | SeedLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeedLedgerCreateOrConnectWithoutUserInput | SeedLedgerCreateOrConnectWithoutUserInput[]
    upsert?: SeedLedgerUpsertWithWhereUniqueWithoutUserInput | SeedLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeedLedgerCreateManyUserInputEnvelope
    set?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    disconnect?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    delete?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    connect?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    update?: SeedLedgerUpdateWithWhereUniqueWithoutUserInput | SeedLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeedLedgerUpdateManyWithWhereWithoutUserInput | SeedLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeedLedgerScalarWhereInput | SeedLedgerScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutUserInput | CharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutUserInput | CharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutUserInput | CharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SceneCreateWithoutUserInput, SceneUncheckedCreateWithoutUserInput> | SceneCreateWithoutUserInput[] | SceneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUserInput | SceneCreateOrConnectWithoutUserInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutUserInput | SceneUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SceneCreateManyUserInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutUserInput | SceneUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutUserInput | SceneUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type WalletLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletLedgerCreateWithoutUserInput, WalletLedgerUncheckedCreateWithoutUserInput> | WalletLedgerCreateWithoutUserInput[] | WalletLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletLedgerCreateOrConnectWithoutUserInput | WalletLedgerCreateOrConnectWithoutUserInput[]
    upsert?: WalletLedgerUpsertWithWhereUniqueWithoutUserInput | WalletLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletLedgerCreateManyUserInputEnvelope
    set?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    disconnect?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    delete?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    connect?: WalletLedgerWhereUniqueInput | WalletLedgerWhereUniqueInput[]
    update?: WalletLedgerUpdateWithWhereUniqueWithoutUserInput | WalletLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletLedgerUpdateManyWithWhereWithoutUserInput | WalletLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletLedgerScalarWhereInput | WalletLedgerScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SeedLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeedLedgerCreateWithoutUserInput, SeedLedgerUncheckedCreateWithoutUserInput> | SeedLedgerCreateWithoutUserInput[] | SeedLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeedLedgerCreateOrConnectWithoutUserInput | SeedLedgerCreateOrConnectWithoutUserInput[]
    upsert?: SeedLedgerUpsertWithWhereUniqueWithoutUserInput | SeedLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeedLedgerCreateManyUserInputEnvelope
    set?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    disconnect?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    delete?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    connect?: SeedLedgerWhereUniqueInput | SeedLedgerWhereUniqueInput[]
    update?: SeedLedgerUpdateWithWhereUniqueWithoutUserInput | SeedLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeedLedgerUpdateManyWithWhereWithoutUserInput | SeedLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeedLedgerScalarWhereInput | SeedLedgerScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutWalletLedgerInput = {
    create?: XOR<ProfileCreateWithoutWalletLedgerInput, ProfileUncheckedCreateWithoutWalletLedgerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWalletLedgerInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumCurrencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyType
  }

  export type ProfileUpdateOneRequiredWithoutWalletLedgerNestedInput = {
    create?: XOR<ProfileCreateWithoutWalletLedgerInput, ProfileUncheckedCreateWithoutWalletLedgerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWalletLedgerInput
    upsert?: ProfileUpsertWithoutWalletLedgerInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWalletLedgerInput, ProfileUpdateWithoutWalletLedgerInput>, ProfileUncheckedUpdateWithoutWalletLedgerInput>
  }

  export type CharacterCreatelikesInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutCharactersInput = {
    create?: XOR<ProfileCreateWithoutCharactersInput, ProfileUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCharactersInput
    connect?: ProfileWhereUniqueInput
  }

  export type SceneCreateNestedManyWithoutCharacterInput = {
    create?: XOR<SceneCreateWithoutCharacterInput, SceneUncheckedCreateWithoutCharacterInput> | SceneCreateWithoutCharacterInput[] | SceneUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCharacterInput | SceneCreateOrConnectWithoutCharacterInput[]
    createMany?: SceneCreateManyCharacterInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<SceneCreateWithoutCharacterInput, SceneUncheckedCreateWithoutCharacterInput> | SceneCreateWithoutCharacterInput[] | SceneUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCharacterInput | SceneCreateOrConnectWithoutCharacterInput[]
    createMany?: SceneCreateManyCharacterInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CharacterUpdatelikesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<ProfileCreateWithoutCharactersInput, ProfileUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCharactersInput
    upsert?: ProfileUpsertWithoutCharactersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCharactersInput, ProfileUpdateWithoutCharactersInput>, ProfileUncheckedUpdateWithoutCharactersInput>
  }

  export type SceneUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<SceneCreateWithoutCharacterInput, SceneUncheckedCreateWithoutCharacterInput> | SceneCreateWithoutCharacterInput[] | SceneUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCharacterInput | SceneCreateOrConnectWithoutCharacterInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutCharacterInput | SceneUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: SceneCreateManyCharacterInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutCharacterInput | SceneUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutCharacterInput | SceneUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<SceneCreateWithoutCharacterInput, SceneUncheckedCreateWithoutCharacterInput> | SceneCreateWithoutCharacterInput[] | SceneUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCharacterInput | SceneCreateOrConnectWithoutCharacterInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutCharacterInput | SceneUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: SceneCreateManyCharacterInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutCharacterInput | SceneUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutCharacterInput | SceneUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutScenesInput = {
    create?: XOR<ProfileCreateWithoutScenesInput, ProfileUncheckedCreateWithoutScenesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutScenesInput
    connect?: ProfileWhereUniqueInput
  }

  export type CharacterCreateNestedOneWithoutScenesInput = {
    create?: XOR<CharacterCreateWithoutScenesInput, CharacterUncheckedCreateWithoutScenesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutScenesInput
    connect?: CharacterWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutScenesInput = {
    create?: XOR<BookCreateWithoutScenesInput, BookUncheckedCreateWithoutScenesInput>
    connectOrCreate?: BookCreateOrConnectWithoutScenesInput
    connect?: BookWhereUniqueInput
  }

  export type EnumResultChoiceFieldUpdateOperationsInput = {
    set?: $Enums.ResultChoice
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutScenesNestedInput = {
    create?: XOR<ProfileCreateWithoutScenesInput, ProfileUncheckedCreateWithoutScenesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutScenesInput
    upsert?: ProfileUpsertWithoutScenesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutScenesInput, ProfileUpdateWithoutScenesInput>, ProfileUncheckedUpdateWithoutScenesInput>
  }

  export type CharacterUpdateOneWithoutScenesNestedInput = {
    create?: XOR<CharacterCreateWithoutScenesInput, CharacterUncheckedCreateWithoutScenesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutScenesInput
    upsert?: CharacterUpsertWithoutScenesInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutScenesInput, CharacterUpdateWithoutScenesInput>, CharacterUncheckedUpdateWithoutScenesInput>
  }

  export type BookUpdateOneWithoutScenesNestedInput = {
    create?: XOR<BookCreateWithoutScenesInput, BookUncheckedCreateWithoutScenesInput>
    connectOrCreate?: BookCreateOrConnectWithoutScenesInput
    upsert?: BookUpsertWithoutScenesInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutScenesInput, BookUpdateWithoutScenesInput>, BookUncheckedUpdateWithoutScenesInput>
  }

  export type ProfileCreateNestedOneWithoutBooksInput = {
    create?: XOR<ProfileCreateWithoutBooksInput, ProfileUncheckedCreateWithoutBooksInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBooksInput
    connect?: ProfileWhereUniqueInput
  }

  export type SceneCreateNestedManyWithoutBookInput = {
    create?: XOR<SceneCreateWithoutBookInput, SceneUncheckedCreateWithoutBookInput> | SceneCreateWithoutBookInput[] | SceneUncheckedCreateWithoutBookInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutBookInput | SceneCreateOrConnectWithoutBookInput[]
    createMany?: SceneCreateManyBookInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type ProjectSeedCreateNestedManyWithoutBookInput = {
    create?: XOR<ProjectSeedCreateWithoutBookInput, ProjectSeedUncheckedCreateWithoutBookInput> | ProjectSeedCreateWithoutBookInput[] | ProjectSeedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ProjectSeedCreateOrConnectWithoutBookInput | ProjectSeedCreateOrConnectWithoutBookInput[]
    createMany?: ProjectSeedCreateManyBookInputEnvelope
    connect?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutBookInput = {
    create?: XOR<CardCreateWithoutBookInput, CardUncheckedCreateWithoutBookInput> | CardCreateWithoutBookInput[] | CardUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBookInput | CardCreateOrConnectWithoutBookInput[]
    createMany?: CardCreateManyBookInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<SceneCreateWithoutBookInput, SceneUncheckedCreateWithoutBookInput> | SceneCreateWithoutBookInput[] | SceneUncheckedCreateWithoutBookInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutBookInput | SceneCreateOrConnectWithoutBookInput[]
    createMany?: SceneCreateManyBookInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type ProjectSeedUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ProjectSeedCreateWithoutBookInput, ProjectSeedUncheckedCreateWithoutBookInput> | ProjectSeedCreateWithoutBookInput[] | ProjectSeedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ProjectSeedCreateOrConnectWithoutBookInput | ProjectSeedCreateOrConnectWithoutBookInput[]
    createMany?: ProjectSeedCreateManyBookInputEnvelope
    connect?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CardCreateWithoutBookInput, CardUncheckedCreateWithoutBookInput> | CardCreateWithoutBookInput[] | CardUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBookInput | CardCreateOrConnectWithoutBookInput[]
    createMany?: CardCreateManyBookInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type EnumBookStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfileUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<ProfileCreateWithoutBooksInput, ProfileUncheckedCreateWithoutBooksInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBooksInput
    upsert?: ProfileUpsertWithoutBooksInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutBooksInput, ProfileUpdateWithoutBooksInput>, ProfileUncheckedUpdateWithoutBooksInput>
  }

  export type SceneUpdateManyWithoutBookNestedInput = {
    create?: XOR<SceneCreateWithoutBookInput, SceneUncheckedCreateWithoutBookInput> | SceneCreateWithoutBookInput[] | SceneUncheckedCreateWithoutBookInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutBookInput | SceneCreateOrConnectWithoutBookInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutBookInput | SceneUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: SceneCreateManyBookInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutBookInput | SceneUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutBookInput | SceneUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type ProjectSeedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ProjectSeedCreateWithoutBookInput, ProjectSeedUncheckedCreateWithoutBookInput> | ProjectSeedCreateWithoutBookInput[] | ProjectSeedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ProjectSeedCreateOrConnectWithoutBookInput | ProjectSeedCreateOrConnectWithoutBookInput[]
    upsert?: ProjectSeedUpsertWithWhereUniqueWithoutBookInput | ProjectSeedUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ProjectSeedCreateManyBookInputEnvelope
    set?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    disconnect?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    delete?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    connect?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    update?: ProjectSeedUpdateWithWhereUniqueWithoutBookInput | ProjectSeedUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ProjectSeedUpdateManyWithWhereWithoutBookInput | ProjectSeedUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ProjectSeedScalarWhereInput | ProjectSeedScalarWhereInput[]
  }

  export type CardUpdateManyWithoutBookNestedInput = {
    create?: XOR<CardCreateWithoutBookInput, CardUncheckedCreateWithoutBookInput> | CardCreateWithoutBookInput[] | CardUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBookInput | CardCreateOrConnectWithoutBookInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutBookInput | CardUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CardCreateManyBookInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutBookInput | CardUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CardUpdateManyWithWhereWithoutBookInput | CardUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<SceneCreateWithoutBookInput, SceneUncheckedCreateWithoutBookInput> | SceneCreateWithoutBookInput[] | SceneUncheckedCreateWithoutBookInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutBookInput | SceneCreateOrConnectWithoutBookInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutBookInput | SceneUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: SceneCreateManyBookInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutBookInput | SceneUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutBookInput | SceneUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type ProjectSeedUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ProjectSeedCreateWithoutBookInput, ProjectSeedUncheckedCreateWithoutBookInput> | ProjectSeedCreateWithoutBookInput[] | ProjectSeedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ProjectSeedCreateOrConnectWithoutBookInput | ProjectSeedCreateOrConnectWithoutBookInput[]
    upsert?: ProjectSeedUpsertWithWhereUniqueWithoutBookInput | ProjectSeedUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ProjectSeedCreateManyBookInputEnvelope
    set?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    disconnect?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    delete?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    connect?: ProjectSeedWhereUniqueInput | ProjectSeedWhereUniqueInput[]
    update?: ProjectSeedUpdateWithWhereUniqueWithoutBookInput | ProjectSeedUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ProjectSeedUpdateManyWithWhereWithoutBookInput | ProjectSeedUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ProjectSeedScalarWhereInput | ProjectSeedScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CardCreateWithoutBookInput, CardUncheckedCreateWithoutBookInput> | CardCreateWithoutBookInput[] | CardUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBookInput | CardCreateOrConnectWithoutBookInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutBookInput | CardUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CardCreateManyBookInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutBookInput | CardUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CardUpdateManyWithWhereWithoutBookInput | CardUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutSeedsInput = {
    create?: XOR<BookCreateWithoutSeedsInput, BookUncheckedCreateWithoutSeedsInput>
    connectOrCreate?: BookCreateOrConnectWithoutSeedsInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutSeedsNestedInput = {
    create?: XOR<BookCreateWithoutSeedsInput, BookUncheckedCreateWithoutSeedsInput>
    connectOrCreate?: BookCreateOrConnectWithoutSeedsInput
    upsert?: BookUpsertWithoutSeedsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutSeedsInput, BookUpdateWithoutSeedsInput>, BookUncheckedUpdateWithoutSeedsInput>
  }

  export type ProfileCreateNestedOneWithoutCardsInput = {
    create?: XOR<ProfileCreateWithoutCardsInput, ProfileUncheckedCreateWithoutCardsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCardsInput
    connect?: ProfileWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutCardsInput = {
    create?: XOR<BookCreateWithoutCardsInput, BookUncheckedCreateWithoutCardsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCardsInput
    connect?: BookWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<ProfileCreateWithoutCardsInput, ProfileUncheckedCreateWithoutCardsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCardsInput
    upsert?: ProfileUpsertWithoutCardsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCardsInput, ProfileUpdateWithoutCardsInput>, ProfileUncheckedUpdateWithoutCardsInput>
  }

  export type BookUpdateOneWithoutCardsNestedInput = {
    create?: XOR<BookCreateWithoutCardsInput, BookUncheckedCreateWithoutCardsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCardsInput
    upsert?: BookUpsertWithoutCardsInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCardsInput, BookUpdateWithoutCardsInput>, BookUncheckedUpdateWithoutCardsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileCreateNestedOneWithoutSeedLedgerInput = {
    create?: XOR<ProfileCreateWithoutSeedLedgerInput, ProfileUncheckedCreateWithoutSeedLedgerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSeedLedgerInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutSeedLedgerNestedInput = {
    create?: XOR<ProfileCreateWithoutSeedLedgerInput, ProfileUncheckedCreateWithoutSeedLedgerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSeedLedgerInput
    upsert?: ProfileUpsertWithoutSeedLedgerInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSeedLedgerInput, ProfileUpdateWithoutSeedLedgerInput>, ProfileUncheckedUpdateWithoutSeedLedgerInput>
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

  export type NestedEnumCurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeFilter<$PrismaModel> | $Enums.CurrencyType
  }

  export type NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyTypeFilter<$PrismaModel>
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

  export type NestedEnumResultChoiceFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultChoice | EnumResultChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumResultChoiceFilter<$PrismaModel> | $Enums.ResultChoice
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

  export type NestedEnumResultChoiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultChoice | EnumResultChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultChoice[] | ListEnumResultChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumResultChoiceWithAggregatesFilter<$PrismaModel> | $Enums.ResultChoice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultChoiceFilter<$PrismaModel>
    _max?: NestedEnumResultChoiceFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumBookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusFilter<$PrismaModel> | $Enums.BookStatus
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

  export type NestedEnumBookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookStatusFilter<$PrismaModel>
    _max?: NestedEnumBookStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CharacterCreateWithoutUserInput = {
    id?: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scenes?: SceneCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scenes?: SceneUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutUserInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterCreateManyUserInputEnvelope = {
    data: CharacterCreateManyUserInput | CharacterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SceneCreateWithoutUserInput = {
    id?: string
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    character?: CharacterCreateNestedOneWithoutScenesInput
    book?: BookCreateNestedOneWithoutScenesInput
  }

  export type SceneUncheckedCreateWithoutUserInput = {
    id?: string
    characterId?: string | null
    bookId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneCreateOrConnectWithoutUserInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutUserInput, SceneUncheckedCreateWithoutUserInput>
  }

  export type SceneCreateManyUserInputEnvelope = {
    data: SceneCreateManyUserInput | SceneCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletLedgerCreateWithoutUserInput = {
    id?: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type WalletLedgerUncheckedCreateWithoutUserInput = {
    id?: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type WalletLedgerCreateOrConnectWithoutUserInput = {
    where: WalletLedgerWhereUniqueInput
    create: XOR<WalletLedgerCreateWithoutUserInput, WalletLedgerUncheckedCreateWithoutUserInput>
  }

  export type WalletLedgerCreateManyUserInputEnvelope = {
    data: WalletLedgerCreateManyUserInput | WalletLedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutUserInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    scenes?: SceneCreateNestedManyWithoutBookInput
    seeds?: ProjectSeedCreateNestedManyWithoutBookInput
    cards?: CardCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    scenes?: SceneUncheckedCreateNestedManyWithoutBookInput
    seeds?: ProjectSeedUncheckedCreateNestedManyWithoutBookInput
    cards?: CardUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
    book?: BookCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutUserInput = {
    id?: string
    bookId?: string | null
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
  }

  export type CardCreateOrConnectWithoutUserInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardCreateManyUserInputEnvelope = {
    data: CardCreateManyUserInput | CardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SeedLedgerCreateWithoutUserInput = {
    id?: string
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type SeedLedgerUncheckedCreateWithoutUserInput = {
    id?: string
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type SeedLedgerCreateOrConnectWithoutUserInput = {
    where: SeedLedgerWhereUniqueInput
    create: XOR<SeedLedgerCreateWithoutUserInput, SeedLedgerUncheckedCreateWithoutUserInput>
  }

  export type SeedLedgerCreateManyUserInputEnvelope = {
    data: SeedLedgerCreateManyUserInput | SeedLedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutUserInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutUserInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
  }

  export type CharacterUpdateManyWithWhereWithoutUserInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutUserInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: UuidFilter<"Character"> | string
    userId?: UuidFilter<"Character"> | string
    name?: StringNullableFilter<"Character"> | string | null
    styleId?: StringNullableFilter<"Character"> | string | null
    role?: StringNullableFilter<"Character"> | string | null
    personality?: StringNullableFilter<"Character"> | string | null
    likes?: StringNullableListFilter<"Character">
    doodlePath?: StringFilter<"Character"> | string
    renderPath?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
  }

  export type SceneUpsertWithWhereUniqueWithoutUserInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutUserInput, SceneUncheckedUpdateWithoutUserInput>
    create: XOR<SceneCreateWithoutUserInput, SceneUncheckedCreateWithoutUserInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutUserInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutUserInput, SceneUncheckedUpdateWithoutUserInput>
  }

  export type SceneUpdateManyWithWhereWithoutUserInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutUserInput>
  }

  export type SceneScalarWhereInput = {
    AND?: SceneScalarWhereInput | SceneScalarWhereInput[]
    OR?: SceneScalarWhereInput[]
    NOT?: SceneScalarWhereInput | SceneScalarWhereInput[]
    id?: UuidFilter<"Scene"> | string
    userId?: UuidFilter<"Scene"> | string
    characterId?: UuidNullableFilter<"Scene"> | string | null
    bookId?: UuidNullableFilter<"Scene"> | string | null
    backgroundId?: StringFilter<"Scene"> | string
    itemId?: StringFilter<"Scene"> | string
    verbId?: StringFilter<"Scene"> | string
    resultChoice?: EnumResultChoiceFilter<"Scene"> | $Enums.ResultChoice
    storyText?: StringNullableFilter<"Scene"> | string | null
    sceneImagePath?: StringNullableFilter<"Scene"> | string | null
    order?: IntNullableFilter<"Scene"> | number | null
    textEn?: StringNullableFilter<"Scene"> | string | null
    beatType?: StringNullableFilter<"Scene"> | string | null
    sceneHint?: StringNullableFilter<"Scene"> | string | null
    learningTags?: JsonNullableFilter<"Scene">
    layoutTemplate?: StringNullableFilter<"Scene"> | string | null
    objects?: JsonNullableFilter<"Scene">
    audioUrl?: StringNullableFilter<"Scene"> | string | null
    createdAt?: DateTimeFilter<"Scene"> | Date | string
    updatedAt?: DateTimeFilter<"Scene"> | Date | string
  }

  export type WalletLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletLedgerWhereUniqueInput
    update: XOR<WalletLedgerUpdateWithoutUserInput, WalletLedgerUncheckedUpdateWithoutUserInput>
    create: XOR<WalletLedgerCreateWithoutUserInput, WalletLedgerUncheckedCreateWithoutUserInput>
  }

  export type WalletLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletLedgerWhereUniqueInput
    data: XOR<WalletLedgerUpdateWithoutUserInput, WalletLedgerUncheckedUpdateWithoutUserInput>
  }

  export type WalletLedgerUpdateManyWithWhereWithoutUserInput = {
    where: WalletLedgerScalarWhereInput
    data: XOR<WalletLedgerUpdateManyMutationInput, WalletLedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletLedgerScalarWhereInput = {
    AND?: WalletLedgerScalarWhereInput | WalletLedgerScalarWhereInput[]
    OR?: WalletLedgerScalarWhereInput[]
    NOT?: WalletLedgerScalarWhereInput | WalletLedgerScalarWhereInput[]
    id?: UuidFilter<"WalletLedger"> | string
    userId?: UuidFilter<"WalletLedger"> | string
    currencyType?: EnumCurrencyTypeFilter<"WalletLedger"> | $Enums.CurrencyType
    delta?: IntFilter<"WalletLedger"> | number
    reason?: StringFilter<"WalletLedger"> | string
    createdAt?: DateTimeFilter<"WalletLedger"> | Date | string
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: UuidFilter<"Book"> | string
    userId?: UuidFilter<"Book"> | string
    title?: StringNullableFilter<"Book"> | string | null
    coverPath?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusFilter<"Book"> | $Enums.BookStatus
    topicId?: StringNullableFilter<"Book"> | string | null
    lesson?: StringNullableFilter<"Book"> | string | null
    targetSceneCount?: IntFilter<"Book"> | number
    outline?: JsonNullableFilter<"Book">
    pageLength?: IntFilter<"Book"> | number
    language?: StringFilter<"Book"> | string
    ageRange?: StringFilter<"Book"> | string
    mixerTale?: StringNullableFilter<"Book"> | string | null
    mixerCulture?: StringNullableFilter<"Book"> | string | null
    mixerSetting?: StringNullableFilter<"Book"> | string | null
    mixerTone?: StringNullableFilter<"Book"> | string | null
    mixerPack?: StringNullableFilter<"Book"> | string | null
    storyBible?: JsonNullableFilter<"Book">
    storyChars?: JsonNullableFilter<"Book">
    storyObjs?: JsonNullableFilter<"Book">
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    completedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
  }

  export type CardUpsertWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardUpdateWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
  }

  export type CardUpdateManyWithWhereWithoutUserInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutUserInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: UuidFilter<"Card"> | string
    userId?: UuidFilter<"Card"> | string
    bookId?: UuidNullableFilter<"Card"> | string | null
    type?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    desc?: StringNullableFilter<"Card"> | string | null
    color?: StringNullableFilter<"Card"> | string | null
    imagePath?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type SeedLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: SeedLedgerWhereUniqueInput
    update: XOR<SeedLedgerUpdateWithoutUserInput, SeedLedgerUncheckedUpdateWithoutUserInput>
    create: XOR<SeedLedgerCreateWithoutUserInput, SeedLedgerUncheckedCreateWithoutUserInput>
  }

  export type SeedLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: SeedLedgerWhereUniqueInput
    data: XOR<SeedLedgerUpdateWithoutUserInput, SeedLedgerUncheckedUpdateWithoutUserInput>
  }

  export type SeedLedgerUpdateManyWithWhereWithoutUserInput = {
    where: SeedLedgerScalarWhereInput
    data: XOR<SeedLedgerUpdateManyMutationInput, SeedLedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type SeedLedgerScalarWhereInput = {
    AND?: SeedLedgerScalarWhereInput | SeedLedgerScalarWhereInput[]
    OR?: SeedLedgerScalarWhereInput[]
    NOT?: SeedLedgerScalarWhereInput | SeedLedgerScalarWhereInput[]
    id?: UuidFilter<"SeedLedger"> | string
    userId?: UuidFilter<"SeedLedger"> | string
    delta?: IntFilter<"SeedLedger"> | number
    reason?: StringFilter<"SeedLedger"> | string
    createdAt?: DateTimeFilter<"SeedLedger"> | Date | string
  }

  export type ProfileCreateWithoutWalletLedgerInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutWalletLedgerInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutWalletLedgerInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWalletLedgerInput, ProfileUncheckedCreateWithoutWalletLedgerInput>
  }

  export type ProfileUpsertWithoutWalletLedgerInput = {
    update: XOR<ProfileUpdateWithoutWalletLedgerInput, ProfileUncheckedUpdateWithoutWalletLedgerInput>
    create: XOR<ProfileCreateWithoutWalletLedgerInput, ProfileUncheckedCreateWithoutWalletLedgerInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWalletLedgerInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWalletLedgerInput, ProfileUncheckedUpdateWithoutWalletLedgerInput>
  }

  export type ProfileUpdateWithoutWalletLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWalletLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutCharactersInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    scenes?: SceneCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutCharactersInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    scenes?: SceneUncheckedCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutCharactersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCharactersInput, ProfileUncheckedCreateWithoutCharactersInput>
  }

  export type SceneCreateWithoutCharacterInput = {
    id?: string
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutScenesInput
    book?: BookCreateNestedOneWithoutScenesInput
  }

  export type SceneUncheckedCreateWithoutCharacterInput = {
    id?: string
    userId: string
    bookId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneCreateOrConnectWithoutCharacterInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutCharacterInput, SceneUncheckedCreateWithoutCharacterInput>
  }

  export type SceneCreateManyCharacterInputEnvelope = {
    data: SceneCreateManyCharacterInput | SceneCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutCharactersInput = {
    update: XOR<ProfileUpdateWithoutCharactersInput, ProfileUncheckedUpdateWithoutCharactersInput>
    create: XOR<ProfileCreateWithoutCharactersInput, ProfileUncheckedCreateWithoutCharactersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCharactersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCharactersInput, ProfileUncheckedUpdateWithoutCharactersInput>
  }

  export type ProfileUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    scenes?: SceneUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    scenes?: SceneUncheckedUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SceneUpsertWithWhereUniqueWithoutCharacterInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutCharacterInput, SceneUncheckedUpdateWithoutCharacterInput>
    create: XOR<SceneCreateWithoutCharacterInput, SceneUncheckedCreateWithoutCharacterInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutCharacterInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutCharacterInput, SceneUncheckedUpdateWithoutCharacterInput>
  }

  export type SceneUpdateManyWithWhereWithoutCharacterInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutCharacterInput>
  }

  export type ProfileCreateWithoutScenesInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutScenesInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutScenesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutScenesInput, ProfileUncheckedCreateWithoutScenesInput>
  }

  export type CharacterCreateWithoutScenesInput = {
    id?: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutScenesInput = {
    id?: string
    userId: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCreateOrConnectWithoutScenesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutScenesInput, CharacterUncheckedCreateWithoutScenesInput>
  }

  export type BookCreateWithoutScenesInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutBooksInput
    seeds?: ProjectSeedCreateNestedManyWithoutBookInput
    cards?: CardCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutScenesInput = {
    id?: string
    userId: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    seeds?: ProjectSeedUncheckedCreateNestedManyWithoutBookInput
    cards?: CardUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutScenesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutScenesInput, BookUncheckedCreateWithoutScenesInput>
  }

  export type ProfileUpsertWithoutScenesInput = {
    update: XOR<ProfileUpdateWithoutScenesInput, ProfileUncheckedUpdateWithoutScenesInput>
    create: XOR<ProfileCreateWithoutScenesInput, ProfileUncheckedCreateWithoutScenesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutScenesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutScenesInput, ProfileUncheckedUpdateWithoutScenesInput>
  }

  export type ProfileUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CharacterUpsertWithoutScenesInput = {
    update: XOR<CharacterUpdateWithoutScenesInput, CharacterUncheckedUpdateWithoutScenesInput>
    create: XOR<CharacterCreateWithoutScenesInput, CharacterUncheckedCreateWithoutScenesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutScenesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutScenesInput, CharacterUncheckedUpdateWithoutScenesInput>
  }

  export type CharacterUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpsertWithoutScenesInput = {
    update: XOR<BookUpdateWithoutScenesInput, BookUncheckedUpdateWithoutScenesInput>
    create: XOR<BookCreateWithoutScenesInput, BookUncheckedCreateWithoutScenesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutScenesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutScenesInput, BookUncheckedUpdateWithoutScenesInput>
  }

  export type BookUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutBooksNestedInput
    seeds?: ProjectSeedUpdateManyWithoutBookNestedInput
    cards?: CardUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seeds?: ProjectSeedUncheckedUpdateManyWithoutBookNestedInput
    cards?: CardUncheckedUpdateManyWithoutBookNestedInput
  }

  export type ProfileCreateWithoutBooksInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutBooksInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutBooksInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutBooksInput, ProfileUncheckedCreateWithoutBooksInput>
  }

  export type SceneCreateWithoutBookInput = {
    id?: string
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutScenesInput
    character?: CharacterCreateNestedOneWithoutScenesInput
  }

  export type SceneUncheckedCreateWithoutBookInput = {
    id?: string
    userId: string
    characterId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneCreateOrConnectWithoutBookInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutBookInput, SceneUncheckedCreateWithoutBookInput>
  }

  export type SceneCreateManyBookInputEnvelope = {
    data: SceneCreateManyBookInput | SceneCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSeedCreateWithoutBookInput = {
    id?: string
    imageUrl: string
    seedType: string
    audioUrl?: string | null
    createdAt?: Date | string
  }

  export type ProjectSeedUncheckedCreateWithoutBookInput = {
    id?: string
    imageUrl: string
    seedType: string
    audioUrl?: string | null
    createdAt?: Date | string
  }

  export type ProjectSeedCreateOrConnectWithoutBookInput = {
    where: ProjectSeedWhereUniqueInput
    create: XOR<ProjectSeedCreateWithoutBookInput, ProjectSeedUncheckedCreateWithoutBookInput>
  }

  export type ProjectSeedCreateManyBookInputEnvelope = {
    data: ProjectSeedCreateManyBookInput | ProjectSeedCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutBookInput = {
    id?: string
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutBookInput = {
    id?: string
    userId: string
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
  }

  export type CardCreateOrConnectWithoutBookInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutBookInput, CardUncheckedCreateWithoutBookInput>
  }

  export type CardCreateManyBookInputEnvelope = {
    data: CardCreateManyBookInput | CardCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutBooksInput = {
    update: XOR<ProfileUpdateWithoutBooksInput, ProfileUncheckedUpdateWithoutBooksInput>
    create: XOR<ProfileCreateWithoutBooksInput, ProfileUncheckedCreateWithoutBooksInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutBooksInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutBooksInput, ProfileUncheckedUpdateWithoutBooksInput>
  }

  export type ProfileUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SceneUpsertWithWhereUniqueWithoutBookInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutBookInput, SceneUncheckedUpdateWithoutBookInput>
    create: XOR<SceneCreateWithoutBookInput, SceneUncheckedCreateWithoutBookInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutBookInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutBookInput, SceneUncheckedUpdateWithoutBookInput>
  }

  export type SceneUpdateManyWithWhereWithoutBookInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutBookInput>
  }

  export type ProjectSeedUpsertWithWhereUniqueWithoutBookInput = {
    where: ProjectSeedWhereUniqueInput
    update: XOR<ProjectSeedUpdateWithoutBookInput, ProjectSeedUncheckedUpdateWithoutBookInput>
    create: XOR<ProjectSeedCreateWithoutBookInput, ProjectSeedUncheckedCreateWithoutBookInput>
  }

  export type ProjectSeedUpdateWithWhereUniqueWithoutBookInput = {
    where: ProjectSeedWhereUniqueInput
    data: XOR<ProjectSeedUpdateWithoutBookInput, ProjectSeedUncheckedUpdateWithoutBookInput>
  }

  export type ProjectSeedUpdateManyWithWhereWithoutBookInput = {
    where: ProjectSeedScalarWhereInput
    data: XOR<ProjectSeedUpdateManyMutationInput, ProjectSeedUncheckedUpdateManyWithoutBookInput>
  }

  export type ProjectSeedScalarWhereInput = {
    AND?: ProjectSeedScalarWhereInput | ProjectSeedScalarWhereInput[]
    OR?: ProjectSeedScalarWhereInput[]
    NOT?: ProjectSeedScalarWhereInput | ProjectSeedScalarWhereInput[]
    id?: UuidFilter<"ProjectSeed"> | string
    bookId?: UuidFilter<"ProjectSeed"> | string
    imageUrl?: StringFilter<"ProjectSeed"> | string
    seedType?: StringFilter<"ProjectSeed"> | string
    audioUrl?: StringNullableFilter<"ProjectSeed"> | string | null
    createdAt?: DateTimeFilter<"ProjectSeed"> | Date | string
  }

  export type CardUpsertWithWhereUniqueWithoutBookInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutBookInput, CardUncheckedUpdateWithoutBookInput>
    create: XOR<CardCreateWithoutBookInput, CardUncheckedCreateWithoutBookInput>
  }

  export type CardUpdateWithWhereUniqueWithoutBookInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutBookInput, CardUncheckedUpdateWithoutBookInput>
  }

  export type CardUpdateManyWithWhereWithoutBookInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutBookInput>
  }

  export type BookCreateWithoutSeedsInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutBooksInput
    scenes?: SceneCreateNestedManyWithoutBookInput
    cards?: CardCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutSeedsInput = {
    id?: string
    userId: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    scenes?: SceneUncheckedCreateNestedManyWithoutBookInput
    cards?: CardUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutSeedsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutSeedsInput, BookUncheckedCreateWithoutSeedsInput>
  }

  export type BookUpsertWithoutSeedsInput = {
    update: XOR<BookUpdateWithoutSeedsInput, BookUncheckedUpdateWithoutSeedsInput>
    create: XOR<BookCreateWithoutSeedsInput, BookUncheckedCreateWithoutSeedsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutSeedsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutSeedsInput, BookUncheckedUpdateWithoutSeedsInput>
  }

  export type BookUpdateWithoutSeedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutBooksNestedInput
    scenes?: SceneUpdateManyWithoutBookNestedInput
    cards?: CardUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutSeedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scenes?: SceneUncheckedUpdateManyWithoutBookNestedInput
    cards?: CardUncheckedUpdateManyWithoutBookNestedInput
  }

  export type ProfileCreateWithoutCardsInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutCardsInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    seedLedger?: SeedLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutCardsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCardsInput, ProfileUncheckedCreateWithoutCardsInput>
  }

  export type BookCreateWithoutCardsInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutBooksInput
    scenes?: SceneCreateNestedManyWithoutBookInput
    seeds?: ProjectSeedCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCardsInput = {
    id?: string
    userId: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    scenes?: SceneUncheckedCreateNestedManyWithoutBookInput
    seeds?: ProjectSeedUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCardsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCardsInput, BookUncheckedCreateWithoutCardsInput>
  }

  export type ProfileUpsertWithoutCardsInput = {
    update: XOR<ProfileUpdateWithoutCardsInput, ProfileUncheckedUpdateWithoutCardsInput>
    create: XOR<ProfileCreateWithoutCardsInput, ProfileUncheckedCreateWithoutCardsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCardsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCardsInput, ProfileUncheckedUpdateWithoutCardsInput>
  }

  export type ProfileUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    seedLedger?: SeedLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutCardsInput = {
    update: XOR<BookUpdateWithoutCardsInput, BookUncheckedUpdateWithoutCardsInput>
    create: XOR<BookCreateWithoutCardsInput, BookUncheckedCreateWithoutCardsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCardsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCardsInput, BookUncheckedUpdateWithoutCardsInput>
  }

  export type BookUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutBooksNestedInput
    scenes?: SceneUpdateManyWithoutBookNestedInput
    seeds?: ProjectSeedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scenes?: SceneUncheckedUpdateManyWithoutBookNestedInput
    seeds?: ProjectSeedUncheckedUpdateManyWithoutBookNestedInput
  }

  export type ProfileCreateWithoutSeedLedgerInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutSeedLedgerInput = {
    id: string
    createdAt?: Date | string
    waterDrops?: number
    magicSeeds?: number
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUserInput
    walletLedger?: WalletLedgerUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutSeedLedgerInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSeedLedgerInput, ProfileUncheckedCreateWithoutSeedLedgerInput>
  }

  export type ProfileUpsertWithoutSeedLedgerInput = {
    update: XOR<ProfileUpdateWithoutSeedLedgerInput, ProfileUncheckedUpdateWithoutSeedLedgerInput>
    create: XOR<ProfileCreateWithoutSeedLedgerInput, ProfileUncheckedCreateWithoutSeedLedgerInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSeedLedgerInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSeedLedgerInput, ProfileUncheckedUpdateWithoutSeedLedgerInput>
  }

  export type ProfileUpdateWithoutSeedLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSeedLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterDrops?: IntFieldUpdateOperationsInput | number
    magicSeeds?: IntFieldUpdateOperationsInput | number
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUserNestedInput
    walletLedger?: WalletLedgerUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CharacterCreateManyUserInput = {
    id?: string
    name?: string | null
    styleId?: string | null
    role?: string | null
    personality?: string | null
    likes?: CharacterCreatelikesInput | string[]
    doodlePath: string
    renderPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneCreateManyUserInput = {
    id?: string
    characterId?: string | null
    bookId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletLedgerCreateManyUserInput = {
    id?: string
    currencyType: $Enums.CurrencyType
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type BookCreateManyUserInput = {
    id?: string
    title?: string | null
    coverPath?: string | null
    status?: $Enums.BookStatus
    topicId?: string | null
    lesson?: string | null
    targetSceneCount?: number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: number
    language?: string
    ageRange?: string
    mixerTale?: string | null
    mixerCulture?: string | null
    mixerSetting?: string | null
    mixerTone?: string | null
    mixerPack?: string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CardCreateManyUserInput = {
    id?: string
    bookId?: string | null
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
  }

  export type SeedLedgerCreateManyUserInput = {
    id?: string
    delta: number
    reason: string
    createdAt?: Date | string
  }

  export type CharacterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: SceneUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: SceneUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    styleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: CharacterUpdatelikesInput | string[]
    doodlePath?: StringFieldUpdateOperationsInput | string
    renderPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharacterUpdateOneWithoutScenesNestedInput
    book?: BookUpdateOneWithoutScenesNestedInput
  }

  export type SceneUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyType?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scenes?: SceneUpdateManyWithoutBookNestedInput
    seeds?: ProjectSeedUpdateManyWithoutBookNestedInput
    cards?: CardUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scenes?: SceneUncheckedUpdateManyWithoutBookNestedInput
    seeds?: ProjectSeedUncheckedUpdateManyWithoutBookNestedInput
    cards?: CardUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    targetSceneCount?: IntFieldUpdateOperationsInput | number
    outline?: NullableJsonNullValueInput | InputJsonValue
    pageLength?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    mixerTale?: NullableStringFieldUpdateOperationsInput | string | null
    mixerCulture?: NullableStringFieldUpdateOperationsInput | string | null
    mixerSetting?: NullableStringFieldUpdateOperationsInput | string | null
    mixerTone?: NullableStringFieldUpdateOperationsInput | string | null
    mixerPack?: NullableStringFieldUpdateOperationsInput | string | null
    storyBible?: NullableJsonNullValueInput | InputJsonValue
    storyChars?: NullableJsonNullValueInput | InputJsonValue
    storyObjs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedLedgerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedLedgerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneCreateManyCharacterInput = {
    id?: string
    userId: string
    bookId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutScenesNestedInput
    book?: BookUpdateOneWithoutScenesNestedInput
  }

  export type SceneUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneCreateManyBookInput = {
    id?: string
    userId: string
    characterId?: string | null
    backgroundId: string
    itemId: string
    verbId: string
    resultChoice: $Enums.ResultChoice
    storyText?: string | null
    sceneImagePath?: string | null
    order?: number | null
    textEn?: string | null
    beatType?: string | null
    sceneHint?: string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSeedCreateManyBookInput = {
    id?: string
    imageUrl: string
    seedType: string
    audioUrl?: string | null
    createdAt?: Date | string
  }

  export type CardCreateManyBookInput = {
    id?: string
    userId: string
    type: string
    name: string
    desc?: string | null
    color?: string | null
    imagePath?: string | null
    createdAt?: Date | string
  }

  export type SceneUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutScenesNestedInput
    character?: CharacterUpdateOneWithoutScenesNestedInput
  }

  export type SceneUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    verbId?: StringFieldUpdateOperationsInput | string
    resultChoice?: EnumResultChoiceFieldUpdateOperationsInput | $Enums.ResultChoice
    storyText?: NullableStringFieldUpdateOperationsInput | string | null
    sceneImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    textEn?: NullableStringFieldUpdateOperationsInput | string | null
    beatType?: NullableStringFieldUpdateOperationsInput | string | null
    sceneHint?: NullableStringFieldUpdateOperationsInput | string | null
    learningTags?: NullableJsonNullValueInput | InputJsonValue
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    objects?: NullableJsonNullValueInput | InputJsonValue
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSeedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSeedUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSeedUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    seedType?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
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