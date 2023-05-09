

const linksData = [
    {
        id: 1,
        text: "home",
        path: "#home"
    },
    {
        id: 2,
        text: "about",
        path: "#about"
    },
    {
        id: 3,
        text: "services",
        path: "#services"
    },
    {
        id: 4,
        text: "tours",
        path: "#tours"
    }
]

const socialLinksData = [
    {
        id: 1,
        icon: "fab fa-facebook-square",
        url: "https://www.facebook.com",
    },
    {
        id: 2,
        icon: "fab fa-twitter-square",
        url: "https://www.twitter.com",
    },
    {
        id: 3,
        icon: "fab fa-squarespace",
        url: "https://www.squarespace.com",
    },
    {
        id: 4,
        icon: "fab fa-instagram",
        url: "https://www.instagram.com",
    }
];

const servicesData = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        // text: faker.lorem.lines(10),
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        // text: faker.lorem.lines(10),
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        // text: faker.lorem.lines(10),
    }
];

const toursData = [
    {
        id: 1,
        img: "./images/tour-1.jpeg",
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "china",
        duration: "6 days",
        price: "$2100",
    },
    {
        id: 2,
        img: "./images/tour-2.jpeg",
        date: "october 1th, 2020",
        title: "Best of Java",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "indonesia",
        duration: "11 days",
        price: "$1400",
    },
    {
        id: 3,
        img: "./images/tour-3.jpeg",
        date: "september 15th, 2020",
        title: "Explore Hong Kong",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "hong kong",
        duration: "8 days",
        price: "$5000",
    },
    {
        id: 4,
        img: "./images/tour-4.jpeg",
        date: "december 5th, 2019",
        title: "Kenya Highlights",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "kenya",
        duration: "20 days",
        price: "$3300",
    },
];


export { linksData, socialLinksData, servicesData, toursData };