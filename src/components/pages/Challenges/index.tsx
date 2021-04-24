import React from 'react'
import { IChallenge } from '../../../services/challenges/interface'

import { NavBar } from '../../shared/NavBar'
import { CardSection } from '../../shared/CardSection'
import { ChallengeCard } from './ChallengeCard'
import { colors } from '../../styles/Theme'

export const Challenges = ({ challenges }: { challenges: IChallenge[] }) => {
    console.log(challenges)

    return (
        <>
            <NavBar />
            <CardSection
                title="Desafios"
                style={{
                    minHeight: '90vh',
                    padding: '2rem',
                    alignItems: 'flex-start',
                    background: `${colors.darker}`
                }}
            >
                {challenges.map((challenge) => (
                    <ChallengeCard
                        key={challenge.id}
                        title={challenge.title}
                        thumbnail={challenge.thumbnail}
                        shortDescription={challenge.short_description}
                        categories={challenge.categories}
                    />
                ))}
            </CardSection>
        </>
    )
}
