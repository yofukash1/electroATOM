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

        createMany: procedure.input($Schema.TranslationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.createMany(input as any))),

        create: procedure.input($Schema.TranslationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.create(input as any))),

        deleteMany: procedure.input($Schema.TranslationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.deleteMany(input as any))),

        delete: procedure.input($Schema.TranslationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.delete(input as any))),

        findFirst: procedure.input($Schema.TranslationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).translation.findFirst(input as any))),

        findMany: procedure.input($Schema.TranslationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).translation.findMany(input as any))),

        findUnique: procedure.input($Schema.TranslationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).translation.findUnique(input as any))),

        updateMany: procedure.input($Schema.TranslationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.updateMany(input as any))),

        update: procedure.input($Schema.TranslationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.update(input as any))),

        count: procedure.input($Schema.TranslationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).translation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TranslationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TranslationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TranslationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TranslationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TranslationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TranslationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TranslationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TranslationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TranslationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TranslationGetPayload<T>, Context>) => Promise<Prisma.TranslationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TranslationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TranslationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TranslationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TranslationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TranslationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TranslationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TranslationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TranslationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TranslationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TranslationGetPayload<T>, Context>) => Promise<Prisma.TranslationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TranslationFindFirstArgs, TData = Prisma.TranslationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.TranslationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TranslationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TranslationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TranslationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TranslationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TranslationFindManyArgs, TData = Array<Prisma.TranslationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.TranslationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TranslationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TranslationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TranslationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TranslationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TranslationFindUniqueArgs, TData = Prisma.TranslationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TranslationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TranslationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TranslationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TranslationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TranslationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TranslationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TranslationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TranslationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TranslationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TranslationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TranslationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TranslationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TranslationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TranslationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TranslationGetPayload<T>, Context>) => Promise<Prisma.TranslationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TranslationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.TranslationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TranslationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.TranslationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
