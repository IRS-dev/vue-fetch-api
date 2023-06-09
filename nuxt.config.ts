
// import type { NuxtConfig } from '@nuxt/types'
// const config: NuxtConfig = {
//     build: {},
//     buildModules: [
//         '@nuxtjs/composition-api/module',
//         '@nuxt/typescript-build'
//     ],
//     css: [
//     ],
//     env: {},
//     head: {
//         title: 'nuxt-community/typescript-template',
//         meta: [
//             { charset: 'utf-8' },
//             { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//             { hid: 'description', name: 'description', content: 'A boilerplate to start a Nuxt+TS project quickly' }
//         ],
//         link: []
//     },
//     loading: { color: '#0c64c1' },
//     modules: [],
//     plugins: [
//         '~/plugins/truncate'
//     ]
// }

// export default config
export default {
    app: {
        head: {
            title: 'Vue Fetch API',
            meta: [
                { name: 'description', content: 'Everything about - Nuxt-3' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    modules: [
        "@nuxtjs/tailwindcss"
    ],
}