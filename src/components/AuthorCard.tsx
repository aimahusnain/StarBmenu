'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Author {
  name: string
  role: string
  image: string
  bio: string
  social: {
    twitter?: string
    linkedin?: string
  }
}

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="h-32 bg-gradient-to-r from-[#1d3932] to-[#1d3932]" />
        </CardHeader>
        <CardContent className="p-6 pt-0 text-center">
          <Avatar className="w-[140px] h-[140px] border-4 border-white -mt-12 mx-auto">
            <AvatarImage draggable={false} src={`/Authors/${author.image}`} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-2xl font-semibold mt-4">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{author.role}</p>
          <p className="mt-4 text-sm">{author.bio}</p>
          {/* <div className="flex justify-center space-x-2 mt-6">
            {author.social.twitter && (
              <Button variant="outline" size="icon" asChild>
                <a href={author.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            )}
            {author.social.linkedin && (
              <Button variant="outline" size="icon" asChild>
                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            )}
          </div> */}
        </CardContent>
      </Card>
    </motion.div>
  )
}

