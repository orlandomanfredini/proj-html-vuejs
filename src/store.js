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
    streamIcon: [
        ['fab', 'spotify'],
        ['fab', 'youtube'],
        ['fas', 'music'],
        ['fab', 'soundcloud'],
        ['fab', 'safari'],
    ],
    albumOut: {
        title: 'ALBUM OUT NOW',
        strong:'INSTRUMENTAL ROCK',
        src: '../public/assetsImg/cms_parallax.jpg'
    },
    reportsConcerts: [
        {
            icon: '../public/assetsImg/imageReport.svg',
            number: 163,
            id: 'CONCERTS'
        },
        {
            icon: '../public/assetsImg/imageReport2.svg',
            number: 145,
            id: 'HAPPY CLIENTS'
        },
        {
            icon: '../public/assetsImg/imageReport3.svg',
            number: 72,
            id: 'MUSIC AWARDS'
        },
        {
            icon: '../public/assetsImg/imageReport4.svg',
            number: 182,
            id: 'TOTAL SONGS'
        }
    ],
    blog: {
        strong: 'MUSIC BLOG',
        title: 'BEST MUSIC BLOG',
        best: [
            {
                src: '../public/assetsImg/blog2.jpg',
                title: 'HIP HOP WIRED TO DANCE MAKE',
                icon: ['fas', 'calendar'],
                date: '06 November 2021',
                text: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

            },
            {
                src: '../public/assetsImg/blog.jpg',
                title: 'MUSIC BUISNESS WORLD WIDE',
                icon: ['fas', 'calendar'],
                date: '27 May 2022',
                text: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
            },
            {
                src: '../public/assetsImg/blog3.jpg',
                title: 'GIVEAWAYS ROCK AND ROLL',
                icon: ['fas', 'calendar'],
                date: '07 May 2022',
                text: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
        ]
    },
    postImg: [
        '../public/assetsImg/instagram_img1.jpg',
        '../public/assetsImg/instagram_img2.jpg',
        '../public/assetsImg/instagram_img3.jpg',
        '../public/assetsImg/instagram_img4.jpg',
        '../public/assetsImg/instagram_img5.jpg',
        '../public/assetsImg/instagram_img6.jpg'
    ],
    bookings:
        {
            title: 'BOOKINGS',
            info: [
                '502 new Disign Str.',
                'Melbourne, San Francisco',
                'CA. 94110, Unitend States of America Australia',
                'T: 1123-456-789',
                'e-mail: demo.example.com'
            ],
            icon: [
                '../public/assetsImg/instagram.svg',
                '../public/assetsImg/facebook.svg',
                '../public/assetsImg/twitter.svg',
                '../public/assetsImg/youtube.svg'
                
            ]
    },
    linkFooter: [
        {
            title: 'INFORMATION',
            src: '#',
            links: [
                'Product support',
                'Checkout',
                'Report Abuse',
                'Redeem Voucher',
                'Order Status'
            ]
        },
        {
            title: 'SUPPORT',
            src:'#',
            links:[
                'Policeis & Rule',
                'Privacy Policy',
                'License Policy',
                'My account',
                'Locality'
            ]
        }
    ]


    

})

