/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createLanguageRouter from "./Language.router";
import createPredictionRouter from "./Prediction.router";
import createPredictionImageRouter from "./PredictionImage.router";
import createTranslationRouter from "./Translation.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as LanguageClientType } from "./Language.router";
import { ClientType as PredictionClientType } from "./Prediction.router";
import { ClientType as PredictionImageClientType } from "./PredictionImage.router";
import { ClientType as TranslationClientType } from "./Translation.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        language: createLanguageRouter(router, procedure),
        prediction: createPredictionRouter(router, procedure),
        predictionImage: createPredictionImageRouter(router, procedure),
        translation: createTranslationRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    language: LanguageClientType<AppRouter>;
    prediction: PredictionClientType<AppRouter>;
    predictionImage: PredictionImageClientType<AppRouter>;
    translation: TranslationClientType<AppRouter>;
}
