export default {
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: './src/index.html',
                projects: './src/projects/index.html',
                simpleJournal: './src/projects/simple-journal/index.html',
                simpleJournalPP: './src/projects/simple-journal/privacy-policy.html',
                basketRush: './src/projects/basket-rush/index.html',
                basketRushPP: './src/projects/basket-rush/privacy-policy.html'
            }
        }
    }
}