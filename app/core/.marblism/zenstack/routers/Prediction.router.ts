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

        createMany: procedure.input($Schema.PredictionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prediction.createMany(input as any))),

        create: procedure.input($Schema.PredictionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prediction.create(input as any))),

        deleteMany: procedure.input($Schema.PredictionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prediction.deleteMany(input as any))),

        delete: procedure.input($Schema.PredictionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prediction.delete(input as any))),

        findFirst: procedure.input($Schema.PredictionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).prediction.findFirst(input as any))),

        findMany: procedure.input($Schema.PredictionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).prediction.findMany(input as any))),

        findUnique: procedure.input($Schema.PredictionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).prediction.findUnique(input as any))),

        updateMany: procedure.input($Schema.PredictionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prediction.updateMany(input as any))),

        update: procedure.input($Schema.PredictionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prediction.update(input as any))),

        count: procedure.input($Schema.PredictionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).prediction.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PredictionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PredictionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PredictionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PredictionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PredictionGetPayload<T>, Context>) => Promise<Prisma.PredictionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PredictionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PredictionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PredictionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PredictionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PredictionGetPayload<T>, Context>) => Promise<Prisma.PredictionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PredictionFindFirstArgs, TData = Prisma.PredictionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PredictionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PredictionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PredictionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PredictionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PredictionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PredictionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PredictionFindManyArgs, TData = Array<Prisma.PredictionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PredictionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PredictionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PredictionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PredictionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PredictionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PredictionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PredictionFindUniqueArgs, TData = Prisma.PredictionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PredictionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PredictionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PredictionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PredictionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PredictionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PredictionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PredictionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PredictionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PredictionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PredictionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PredictionGetPayload<T>, Context>) => Promise<Prisma.PredictionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PredictionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PredictionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PredictionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PredictionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PredictionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PredictionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PredictionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PredictionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
