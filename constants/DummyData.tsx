export interface Post {
    id: string;
    posterName: string;
    posterPosition: string;
    caption: string;
    story: string;
    imageUrl: string;
    timestamp: string;
};

export const posts: Post[] = [
{
    id: "1",
    posterName: "John Doe",
    posterPosition: "Frontend Developer at Wolt",
    caption: "Just launched a new feature!",
    story:
    "Worked on the new checkout UI to improve user experience. It was challenging but rewarding to see the improvement in conversion rates. Looking forward to tackling more frontend challenges!",
    imageUrl: "https://via.placeholder.com/300x200",
    timestamp: "2025-01-18T12:34:00Z",
},
{
    id: "2",
    posterName: "Jane Smith",
    posterPosition: "Backend Engineer at Spotify",
    caption: "Optimizing API performance",
    story:
    "Spent the last sprint reducing latency for our core APIs. Leveraged caching and database indexing to make our systems faster. The result? Over 20% speed improvement!",
    imageUrl: "https://via.placeholder.com/300x200",
    timestamp: "2025-01-17T09:20:00Z",
},
{
    id: "3",
    posterName: "Michael Brown",
    posterPosition: "Full Stack Developer at Stripe",
    caption: "Scaling our systems for growth 🚀",
    story:
    "Helped scale our microservices architecture to handle increased traffic during the holiday season. Collaborated with a great team to ensure zero downtime!",
    imageUrl: "https://via.placeholder.com/300x200",
    timestamp: "2025-01-16T15:50:00Z",
},
{
    id: "4",
    posterName: "Alice Johnson",
    posterPosition: "UI/UX Designer at Airbnb",
    caption: "Improving accessibility for everyone",
    story:
    "Worked on making our app more accessible for users with disabilities. Ensured compliance with WCAG guidelines and added new features to support better navigation.",
    imageUrl: "https://via.placeholder.com/300x200",
    timestamp: "2025-01-15T14:10:00Z",
},
];