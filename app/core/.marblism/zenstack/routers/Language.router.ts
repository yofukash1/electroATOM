/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.LanguageInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.createMany(input as any))),

        create: procedure.input($Schema.LanguageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.create(input as any))),

        deleteMany: procedure.input($Schema.LanguageInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.deleteMany(input as any))),

        delete: procedure.input($Schema.LanguageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.delete(input as any))),

        findFirst: procedure.input($Schema.LanguageInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).language.findFirst(input as any))),

        findMany: procedure.input($Schema.LanguageInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).language.findMany(input as any))),

        findUnique: procedure.input($Schema.LanguageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).language.findUnique(input as any))),

        updateMany: procedure.input($Schema.LanguageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.updateMany(input as any))),

        update: procedure.input($Schema.LanguageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.update(input as any))),

        count: procedure.input($Schema.LanguageInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).language.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LanguageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LanguageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LanguageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LanguageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LanguageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LanguageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LanguageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LanguageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LanguageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>) => Promise<Prisma.LanguageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LanguageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LanguageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LanguageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LanguageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LanguageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LanguageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LanguageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LanguageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LanguageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>) => Promise<Prisma.LanguageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LanguageFindFirstArgs, TData = Prisma.LanguageGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.LanguageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LanguageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LanguageFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LanguageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LanguageFindManyArgs, TData = Array<Prisma.LanguageGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.LanguageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LanguageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LanguageFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LanguageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LanguageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LanguageFindUniqueArgs, TData = Prisma.LanguageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LanguageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LanguageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LanguageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LanguageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LanguageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LanguageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LanguageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LanguageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LanguageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LanguageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LanguageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LanguageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LanguageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>) => Promise<Prisma.LanguageGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.LanguageCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.LanguageCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.LanguageCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.LanguageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
