import { Blog } from './Blog'
import { Portfolio } from './Portfolio'

export interface MarkdownItem {
    title: string
    description: string
    content: string
    slug: string
    date: string
    // coverImage: string
}

export interface MarkdownContent {
    blogs: Blog[]
    portfolio: Portfolio[]
}

export type ContentItemName = keyof MarkdownContent

export interface SearchContent extends Partial<MarkdownItem> {
    category: ContentItemName
}