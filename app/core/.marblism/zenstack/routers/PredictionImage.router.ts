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

        createMany: procedure.input($Schema.PredictionImageInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).predictionImage.createMany(input as any))),

        create: procedure.input($Schema.PredictionImageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).predictionImage.create(input as any))),

        deleteMany: procedure.input($Schema.PredictionImageInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).predictionImage.deleteMany(input as any))),

        delete: procedure.input($Schema.PredictionImageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).predictionImage.delete(input as any))),

        findFirst: procedure.input($Schema.PredictionImageInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).predictionImage.findFirst(input as any))),

        findMany: procedure.input($Schema.PredictionImageInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).predictionImage.findMany(input as any))),

        findUnique: procedure.input($Schema.PredictionImageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).predictionImage.findUnique(input as any))),

        updateMany: procedure.input($Schema.PredictionImageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).predictionImage.updateMany(input as any))),

        update: procedure.input($Schema.PredictionImageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).predictionImage.update(input as any))),

        count: procedure.input($Schema.PredictionImageInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).predictionImage.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PredictionImageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionImageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionImageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionImageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PredictionImageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionImageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PredictionImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PredictionImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionImageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionImageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PredictionImageGetPayload<T>, Context>) => Promise<Prisma.PredictionImageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PredictionImageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionImageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionImageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionImageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PredictionImageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionImageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PredictionImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PredictionImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionImageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionImageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PredictionImageGetPayload<T>, Context>) => Promise<Prisma.PredictionImageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PredictionImageFindFirstArgs, TData = Prisma.PredictionImageGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PredictionImageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PredictionImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PredictionImageFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PredictionImageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PredictionImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PredictionImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PredictionImageFindManyArgs, TData = Array<Prisma.PredictionImageGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PredictionImageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PredictionImageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PredictionImageFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PredictionImageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PredictionImageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PredictionImageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PredictionImageFindUniqueArgs, TData = Prisma.PredictionImageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PredictionImageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PredictionImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PredictionImageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PredictionImageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PredictionImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PredictionImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PredictionImageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionImageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionImageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionImageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PredictionImageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PredictionImageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PredictionImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PredictionImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PredictionImageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PredictionImageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PredictionImageGetPayload<T>, Context>) => Promise<Prisma.PredictionImageGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PredictionImageCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PredictionImageCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PredictionImageCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PredictionImageCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PredictionImageCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PredictionImageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PredictionImageCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PredictionImageCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
