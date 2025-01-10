import { Metadata } from 'next'
import AuthorCard from '@/components/AuthorCard'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Authors',
  description: 'Meet our talented team of authors',
}

const authors = [
  {
    name: "Ethan Alan",
    role: "Drinks Writer",
    image: "/EthanAlan.jpg",
    bio: "Ethan Alan is a drinks writer and editor with 10+ years of experience in digital publishing. He shares expert insights on beverages, making his content a go-to for drink enthusiasts and industry professionals.",
    social: {
      twitter: "https://twitter.com/ethanalan",
      linkedin: "https://linkedin.com/in/ethanalan",
    },
  },
  {
    name: "Aaron Austin",
    role: "Food Writer",
    image: "/AaronAustin.jpg",
    bio: "Aaron Austin is a passionate food writer with years of experience exploring flavors and culinary traditions. His articles inspire food lovers with recipes, tips, and insights into global cuisines.",
    social: {
      twitter: "https://twitter.com/aaronaustin",
      linkedin: "https://linkedin.com/in/aaronaustin",
    },
  },
  {
    name: "River Charlie",
    role: "At Home Coffee Writer",
    image: "/RiverCharlie.jpg",
    bio: "River Charlie is a dedicated at-home coffee writer who shares expert tips, brewing techniques, and coffee insights to help enthusiasts create café-quality coffee at home.",
    social: {
      twitter: "https://twitter.com/rivercharlie",
      linkedin: "https://linkedin.com/in/rivercharlie",
    },
  },
]

export default function AuthorsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Authors"
        description="Meet the talented individuals behind our content"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {authors.map((author) => (
          <AuthorCard key={author.name} author={author} />
        ))}
      </div>
    </div>
  )
}