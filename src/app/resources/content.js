import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Tauhidur',
    lastName:  'Rahman',
    nickName: 'Tamim',
    get name() {
        return `${this.firstName} ${this.lastName} ${this.nickName}`;
    },
    role:      'Software & Backend Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Australia/Melbourne',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bangla']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/CodeBlack04',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/devtauhidurrahman/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'tauhidur.rahman1517@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name} | Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software & Backend Developer</>,
    subline: <>I'm Tamim, a software engineer. I provide scalable IT solutions, digital tools and development services. Alongside this, I work on my own projects.</>
}

const about = {
    label: 'About',
    title: `${person.name} | About`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/tauhidur.rahman.tamim'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a passionate software engineer who loves to learn new tools, solve real-world problems, and come up with new ways to do things. I'm a professional in enterprise software, web development, and project optimisation.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'OPZO Technologies',
                timeframe: 'Jun 2024 - Dec 2024',
                role: 'Junior Software Engineer',
                achievements: [
                    <>Lead the development of an industry-tested accounting module, driving a 60% client boost within six months.</>,
                    <>Optimized API performance, achieving a 70% reduction in response time and enhancing user experience.</>,
                    <>Contributed to the successful delivery of a comprehensive Business Enterprise Software suite, including Accounts, HR and Payroll, Inventory, and Sales Manager modules.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                   
                ]
            },
            {
                company: 'Fiverr',
                timeframe: '2020 - 2023',
                role: 'Freelance Developer',
                achievements: [
                    <>Designed and developed custom chatbots to automate customer interactions, improving response time and client satisfaction.</>,
                    <>Built e-commerce websites with features like payment gateways, product filtering, and secure user authentication, ensuring a smooth shopping experience.</>,
                    <>Created interactive dashboards for data visualization, helping clients track and analyze business performance effectively.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Deakin University',
                description: <>Studying Master of Information Technology.</>,
            },
            {
                name: 'Chittagong University of Engineering & Technology',
                description: <>Bachelor of Science in Mechanical Engineering.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Django',
                icon: 'django',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Next.js',
                icon: 'nextjs',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'TypeScript',
                icon: 'typescript',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'PostgreSQL',
                icon: 'postgresql',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'MongoDB',
                icon: 'mongodb',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Docker',
                icon: 'docker',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Express.js',
                icon: 'express',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Node.js',
                icon: 'nodejs',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Tailwind',
                icon: 'tailwindcss',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Git',
                icon: 'github',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Postman',
                icon: 'postman',
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'DigitalOcean',
                icon: 'digitalocean',
                // optional: leave the array empty if you don't want to display images
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Notes taken through the journey...',
    description: `Read what ${person.name} has been learning recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };