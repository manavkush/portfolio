"use client"
import { useSetActiveSection } from "../lib/hooks"
import { blogsData } from "@/src/lib/data"
import SectionHeading from "./SectionHeading"
import { useEffect, useState } from "react"

const Blog = () => {
  const ref = useSetActiveSection('Blogs')
  const [blogs, setBlogs] = useState<{ title: string, url: string, tags?: string[] }[]>(blogsData)

  const fetchBlogFromServer = async () => {
    const blogsFromServer = await fetch("https://dev.to/search/feed_content?per_page=15&page=0&user_id=537783&class_name=Article&sort_by=published_at&sort_direction=desc&approved=")
    let serverBlogs: any
    try {
      serverBlogs = await blogsFromServer.json().then((data) => data.result)
    } catch (err) {
      console.error(err)
      return
    }

    if (serverBlogs) {
      if (serverBlogs.length > 5) {
        serverBlogs = serverBlogs.slice(0, 5)
      }
      let newBlogs = serverBlogs.map((blogItem: any) => {
        return {
          title: blogItem.title,
          url: "https://dev.to" + blogItem.path,
          ...blogItem.tag_list && { tags: blogItem.tag_list },
        }
      })
      setBlogs(newBlogs)
    }
  }

  useEffect(() => {
    fetchBlogFromServer()
  }, [])

  return (
    <section ref={ref} id='blogs' className='mt-20 scroll-mt-28 mx-8 mb-28'>
        <SectionHeading>My Recent Blogs</SectionHeading>
        <div className="blog-container flex flex-col w-full m-auto gap-3 sm:w-3/4">
          {
            blogs.map((blog, idx) => (
              <div key={idx} className='blog bg-gray-100 border border-black/5 p-4 mb-4 rounded-xl flex flex-col gap-3'>
                <h3 className='font-medium text-xl align-middle text-center'>
                  <a href={blog.url} target='_blank' className='hover:underline'>
                    {blog.title}
                  </a>
                </h3>

                {blog.tags && (
                  <ul className="flex flex-wrap mt-4 gap-2 justify-center">
                    {blog.tags.map((tag, idx) => (
                      <li className='bg-black/70 text-white 
                          px-3 py-1 text-[0.7rem] 
                          uppercase tracking-wider 
                          rounded-full' key={idx} >
                        {tag}
                      </li>))}
                  </ul>
                )}
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Blog
