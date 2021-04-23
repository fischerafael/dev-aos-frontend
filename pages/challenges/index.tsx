import { GetStaticProps } from 'next'
import React from 'react'
import { Challenges } from '../../src/components/pages/Challenges'
import { challengesService } from '../../src/services/challenges'
import { IChallenge } from '../../src/services/challenges/interface'

const ChallengesPage = ({ challenges }: { challenges: IChallenge[] }) => {
    return <Challenges challenges={challenges} />
}

export default ChallengesPage

export const getStaticProps: GetStaticProps = async () => {
    const challenges = await challengesService.find()

    return {
        props: {
            challenges
        }
    }
}
