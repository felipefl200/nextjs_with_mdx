import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getBlogs } from '@lib/blogs'
import { Blog } from '@interfaces/Blog'

import { BaseLayout } from '@components/layouts'
import { BlogList } from '@components/blogs'
import { PortifolioList } from '@components/portifolios'
import { saveSearchData } from '@lib/md'
import { getPortfolios } from '@lib/portfolios'
import { Portfolio } from '@interfaces/Portfolio'


type Props = {
  blogs: Blog[],
  portfolios: Portfolio[]
}

function Home({ blogs, portfolios }: Props) {
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
      <PortifolioList portfolios={portfolios} />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs()
  const portfolios = getPortfolios()

  const content = {
    blogs: blogs.slice(0, 4),
    portfolios: portfolios.slice(0, 4)
  }

  saveSearchData(content)

  return {
    props: { blogs, portfolios }
  }
}

export default Home