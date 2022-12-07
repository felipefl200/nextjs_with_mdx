export interface MarkdownItem {
    title: string
    description: string
    content: string
    slug: string
    date: string
    // coverImage: string
}

export interface SearchContent extends Partial<MarkdownItem> {
    category: string
}