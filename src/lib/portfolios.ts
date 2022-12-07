import { getAllItems, getDir, getFileNames, getItemInPath, markdownToHtml } from './md'
import { Portfolio } from '@interfaces/Portfolio'
import { join } from 'path'

const PORTFOLIO_DIR = getDir('/src/content/portfolios')

const getPortfolios = (): Portfolio[] => {
    const names = getPortfoliosFileNames()
    return getAllItems(names, getPortfolio) as Portfolio[]
}

const getPortfoliosFileNames = () => {
    return getFileNames(PORTFOLIO_DIR)
}

const getPortfolio = (fileName: string): Portfolio => {
    const portfolio = getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio
    portfolio.slug = fileName.replace(/\.md$/, '')
    return portfolio
}

const getPortfolioBySlugWithMarkdown = async (slug: string): Promise<Portfolio> => {
    const portfolio = getPortfolioBySlug(slug)
    portfolio.content = await markdownToHtml(portfolio.content)
    return portfolio
}

const getPortfolioBySlug = (slug: string) => {
    const fileName = slug + '.md'
    return getPortfolio(fileName)
}

const getPortfolioSlugs = () => {
    return getPortfoliosFileNames().map(fileName => fileName.replace(/\.md$/, ''))
}

export {
    getPortfolios,
    getPortfolioBySlugWithMarkdown,
    getPortfolioSlugs
}