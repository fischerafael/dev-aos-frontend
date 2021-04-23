import React from 'react'
import { IChallenge } from '../../../services/challenges/interface'

import { NavBar } from '../../shared/NavBar'
import { CardSection } from '../../shared/CardSection'
import { ChallengeCard } from './ChallengeCard'

export const Challenges = ({ challenges }: { challenges: IChallenge[] }) => {
    return (
        <>
            <NavBar />
            <CardSection
                title="Desafios"
                style={{
                    minHeight: '90vh',
                    padding: '2rem',
                    alignItems: 'flex-start'
                }}
            >
                {challenges.map((challenge) => (
                    <ChallengeCard
                        key={challenge.id}
                        title={challenge.title}
                        thumbnail={challenge.thumbnail}
                    />
                ))}
            </CardSection>
        </>
    )
}
