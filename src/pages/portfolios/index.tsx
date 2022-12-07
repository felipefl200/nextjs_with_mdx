import { PageLayout } from '@components/layouts'
import { PortifolioList } from '@components/portifolios'
import { Portfolio } from '@interfaces/Portfolio'
import { getPortfolios } from '@lib/portfolios'
import { GetStaticProps, NextPage } from 'next'

type Props = {
    portfolios: Portfolio[]
}

const PortfoliosPage: NextPage<Props> = ({ portfolios }) => {
    return (
        <PageLayout pageTitle='All Blogs'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                All PortFolios
            </h2>
            <PortifolioList portfolios={portfolios} />
        </PageLayout>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const portfolios = getPortfolios()
    return {
        props: { portfolios }
    }
}

export default PortfoliosPage