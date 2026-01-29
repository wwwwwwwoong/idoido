import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Fixing missing covers...');

    const books = await prisma.book.findMany({
        where: {
            coverPath: null,
        },
        include: {
            scenes: {
                orderBy: {
                    order: 'asc',
                },
                take: 1,
            },
        },
    });

    console.log(`Found ${books.length} books with missing covers.`);

    let updatedCount = 0;

    for (const book of books) {
        if (book.scenes.length > 0 && book.scenes[0].sceneImagePath) {
            await prisma.book.update({
                where: { id: book.id },
                data: {
                    coverPath: book.scenes[0].sceneImagePath,
                },
            });
            updatedCount++;
            console.log(`Updated book "${book.title}" (${book.id}) with scene image.`);
        } else {
            console.log(`Skipping book "${book.title}" (${book.id}) - No scene image found.`);
        }
    }

    console.log(`Finished! Updated ${updatedCount} books.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
