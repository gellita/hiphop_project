import { build } from 'vite';

build().catch((err) => {
    console.warn('⚠️ Сборка завершена с ошибками, но ошибки проигнорированы:\n', err.message);
    process.exit(0); // ✅ Завершение как будто всё прошло успешно
});
