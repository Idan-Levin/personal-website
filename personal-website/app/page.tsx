"use client"

import React, { useState } from "react"
import { DM_Mono as Mono } from "next/font/google"
import Link from "next/link"
import { posts } from "./posts"

interface Post {
  id: number
  date: string
  title: string
  tags: string[]
  content: string
}

const mono = Mono({ 
  weight: "400",
  subsets: ["latin"] 
})

const tags = ["entrepreneurship", "ai", "crypto", "X", "investing", "reading"]

export default function PersonalWebsite() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [showIntro, setShowIntro] = useState(true)

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    setShowIntro(false)
    setSelectedPost(null)
  }

  const filteredPosts = posts.filter(
    (post) =>
      (!selectedTag || post.tags.includes(selectedTag)) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className={`${mono.className} bg-white text-gray-900 min-h-screen flex flex-col items-center p-4`}>
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl mb-2">Idan Levin</h1>
        <div className="text-xs">+-----------------------+</div>
        <div className="mt-4">
          <Link href="/test-page" className="underline">Test Page Link</Link>
        </div>
      </header>

      {/* Simple Content */}
      <main className="w-full max-w-2xl">
        <div className="mb-6 p-4 border border-gray-400">
          <h2 className="text-xl mb-4">Welcome to my website</h2>
          <p>This is a simplified version to test routing.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-center text-xs">
        <div className="mb-2">+--------------------+</div>
        <div>2025</div>
      </footer>
    </div>
  )
} 