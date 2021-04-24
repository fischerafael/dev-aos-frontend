import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Challenge } from '../../../src/components/pages/Challenge'
import { challengesService } from '../../../src/services/challenges'
import { IChallenge } from '../../../src/services/challenges/interface'

const ChallengePage = ({ challenge }: { challenge: IChallenge }) => {
    return <Challenge challenge={challenge} />
}

export default ChallengePage

export const getStaticPaths: GetStaticPaths = async () => {
    const challenges = await challengesService.find()
    const paths = challenges.map((challenge) => {
        return {
            params: {
                slug: challenge.slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params.slug as string
    const challenge = await challengesService.findOneBySlug(slug)

    return {
        props: {
            challenge: challenge[0]
        }
    }
}
