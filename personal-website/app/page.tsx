"use client"

import React, { useState } from "react"
import { DM_Mono as Mono } from "next/font/google"
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

  const handlePostClick = (post: Post) => {
    if (post.tags.includes("X")) {
      // Extract URL from content for X posts
      const match = post.content.match(/href="([^"]*)"/)
      if (match) {
        window.open(match[1], '_blank')
      }
    } else {
      setSelectedPost(post)
    }
  }

  return (
    <div className={`${mono.className} bg-white text-gray-900 min-h-screen flex flex-col items-center p-4`}>
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl mb-2">Idan Levin</h1>
        <div className="text-xs">+-----------------------+</div>
      </header>

      {/* Navigation */}
      <nav className="mb-8">
        <button
          onClick={() => {
            setShowIntro(true)
            setSelectedPost(null)
          }}
          className={`mx-1 px-2 py-1 text-sm ${
            showIntro ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } border border-gray-400 hover:bg-gray-200 transition-colors`}
        >
          [about]
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`mx-1 px-2 py-1 text-sm ${
              selectedTag === tag && !showIntro ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } border border-gray-400 hover:bg-gray-200 transition-colors`}
          >
            [{tag}]
          </button>
        ))}
      </nav>

      {/* Search */}
      {!showIntro && (
        <div className="w-full max-w-2xl mb-8 flex items-center">
          <span className="mr-2">$</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search posts"
            className="flex-grow bg-white border-b border-gray-400 focus:outline-none focus:border-gray-900 px-2 py-1"
          />
        </div>
      )}

      {/* Intro or Blog Posts or Selected Post */}
      <main className="w-full max-w-2xl">
        {showIntro ? (
          <div className="mb-6 p-4 border border-gray-400">
            <div className="text-center mb-8 border-y py-6">
              <div className="text-xs mb-1">―</div>
              <p className="text-base tracking-wide">Dance like no one is watching</p>
              <div className="text-xs mt-1">―</div>
            </div>
            <p className="mb-4">
              Building <a href="https://opencommerce.xyz" className="underline">OpenCommerce</a>. Venture partner at <a href="https://collider.vc" className="underline">Collider</a>, a Tel-Aviv based crypto venture firm. I&apos;m fascinated by AI, crypto, technology in general, and economics. I love to work on meaningful companies and projects in those areas.
            </p>
            <p className="mb-4">You can reach out to me on:</p>
            <ul className="list-disc list-inside">
              <li><a href="https://x.com/0xidanlevin" className="underline">X</a></li>
              <li><a href="https://warpcast.com/idanlevin" className="underline">Warpcast</a></li>
            </ul>
          </div>
        ) : selectedPost ? (
          <article className="mb-6 p-4 border border-gray-400">
            <button onClick={() => setSelectedPost(null)} className="mb-4 text-sm underline">
              &lt; Back to all posts
            </button>
            <div className="text-xs mb-1">{selectedPost.date}</div>
            <h2 className="text-xl mb-2">{selectedPost.title}</h2>
            <div className="text-xs mb-4">[{selectedPost.tags.join(" · ")}]</div>
            <div 
              className="text-sm whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ 
                __html: selectedPost.content.replace(
                  /## (.*?)\n/g, 
                  '<h2 class="text-lg font-bold mt-6 mb-3">$1</h2>'
                ).replace(
                  /### (.*?)\n/g, 
                  '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>'
                )
              }}
            />
          </article>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="mb-6 p-4 border border-gray-200 hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <div className="text-xs mb-1">{post.date}</div>
              <h2 className="text-lg mb-1">{post.title}</h2>
              <div className="text-xs">[{post.tags.join(" · ")}]</div>
            </article>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-center text-xs">
        <div className="mb-2">+--------------------+</div>
        <div>2025</div>
      </footer>
    </div>
  )
}

