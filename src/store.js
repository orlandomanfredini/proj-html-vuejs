import { reactive } from 'vue'

export const store = reactive ({
    logo: '/assetsImg/Logo.png',
    linkHeader: [
        {
            src: '#',
            name: 'HOME',

        },
        {
            src: '#',
            name: 'BLOG',

        },
        {
            src: '#',
            name: 'EVENTS',
            events: [
                {
                    name: 'Summer festival',
                },
                {
                    name: 'Christmas band'
                },
                {
                    name: 'Barccellona bus party'
                }
            ]

        },
        {
            src: '#',
            name: 'GALLERY',

        },
        {
            src: '#',
            name: 'ABOUT US',

        },
        {
            src: '#',
            name: 'CONTACT US',

        },
        {
            src: '#',
            name: 'SHOP',
            shop: [
                {
                    title: 'New arrivals'
                },
                {
                    title: 'Woman trend'
                },
                {
                    title: 'Kids'
                },
                {
                    title: 'T-shirt roadmap'
                }
            ]

        },
    ]

})

