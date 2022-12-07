import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getBlogs } from '@lib/blogs'
import { Blog } from '@interfaces/Blog'

import { BaseLayout } from '@components/layouts'
import { BlogList } from '@components/blogs'
import { PortifolioList } from '@components/portifolios'
import { saveSearchData } from '@lib/md'


type Props = {
  blogs: Blog[]
}

function Home({ blogs }: Props) {
  return (
    <BaseLayout>
      <h2
        className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link href="/blogs" className='text-sm ml-1 text-indigo-600'>
          (See All)
        </Link>
      </h2>
      <BlogList blogs={blogs} />
      <br></br>
      <h2
        className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolios
        <Link href="/portfolios" className='text-sm ml-1 text-indigo-600'>
          (See All)
        </Link>
      </h2>
      <PortifolioList />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs()

  saveSearchData(blogs)

  return {
    props: { blogs }
  }
}

export default Home