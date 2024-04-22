import { reactive } from 'vue'

export const store = reactive ({
    logo: '/assetsImg/Logo.png',
    linkHeader: [
        {
            src: '#',
            name: 'Home',

        },
        {
            src: '#',
            name: 'Blog',

        },
        {
            src: '#',
            name: 'Events',
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
            name: 'Gallery',

        },
        {
            src: '#',
            name: 'About us',

        },
        {
            src: '#',
            name: 'Contact us',

        },
        {
            src: '#',
            name: 'Shop',
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

