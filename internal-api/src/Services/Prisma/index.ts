import { PrismaClient } from '@prisma/client';
import { fakeUsers } from './fakeInputs/fakeUsers';

export const prisma = new PrismaClient();

async function main() {
    // fakeUsers(7, prisma);
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
})

