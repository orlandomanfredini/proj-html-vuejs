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
    ],
    whoWeAre: 
        {
            strong: 'WHO WE ARE',
            title: 'Sense the Jazz',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.'
        },
    sectionVideo:{
        icon:'',
        src:  '../public/assetsImg/Video.jpg',
        title: 'NEW MUSIC VIDEO'

    },
    cardsStreaming: [
        {
            src: '../public/assetsImg/gallery1.jpg',
            title: 'A ROLL AND BANG THE FLOOR',
            
        },
        {
            src: '../public/assetsImg/gallery2.jpg',
            title: 'YOUR MELODY TO OUR MUSIC',
            
        },
        {
            src: '../public/assetsImg/gallery3.jpg',
            title: 'TOUCHING HEAVEN ON FREQUENCY',
            
        },
        {
            src: '../public/assetsImg/gallery4.jpg',
            title: 'MUSIC MAKES STRONG BEATS',
            
        },
        {
            src: '../public/assetsImg/gallery5.jpg',
            title: 'SOUND IS THE SPARK OF TIME',
            
        },
        {
            src: '../public/assetsImg/gallery6.jpg',
            title: 'MAKE YOUR NIGHT GROOVY',
            
        },
    ],
    albumOut: {
        title: 'ALBUM OUT NOW',
        strong:'INSTRUMENTAL ROCK',
        src: '../public/assetsImg/cms_parallax.jpg'
    }

    

})

