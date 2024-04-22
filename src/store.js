import { reactive } from 'vue'

export const store = reactive ({
    logo: '/assetsImg/Logo.png',
    jumboImg: '../public/imageJumbo.png',
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
    ],
    badges: [
        {
            src: '../public/assetsImg/badge.svg',
            title: 'ORIGINAL IDEAS',
            text: 'Contray popoular Belief, Lorem Ipsum not simply random text'
        },
        {
            src: '../public/assetsImg/badge2.svg',
            title: 'MUSIC STUDIO',
            text: 'Contray popoular Belief, Lorem Ipsum not simply random text'
        },
        {
            src: '../public/assetsImg/badge3.svg',
            title: 'ACOUSTIC COVERS',
            text: 'Contray popoular Belief, Lorem Ipsum not simply random text'
        }
    ]

})

