// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Baby Name Generator',
            meta: [
                {
                    name: 'description',
                    content: ' Choose Options to Generate a baby Name'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}            ]
        }
    },
})
