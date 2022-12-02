import { Blog } from '@interfaces/Blog'
import BlogItem from './BlogItem'

type Props = {
    blogs: Blog[]
}

function index({ blogs }: Props) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {blogs.map(blog => (
                <BlogItem blog={blog} key={blog.slug} />
            ))}
        </div>
    )
}

export default index