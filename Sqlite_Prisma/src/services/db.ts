import '@prisma/react-native';
import { PrismaClient } from '@prisma/client/react-native';
import { reactiveHooksExtension } from '@prisma/react-native';

const baseClient = new PrismaClient({
    log: ["query", "info", "warn"]
});

export const prismaClient = baseClient.$extends(reactiveHooksExtension());

export async function initializeDb(){
    try {
        baseClient.$applyPendingMigrations()
    } catch (error) {
        console.log(error)
        throw new Error("falha na inicialização do bd")
    }
}