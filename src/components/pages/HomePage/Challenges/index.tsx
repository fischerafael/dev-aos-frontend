import React from 'react'
import { Flex, Grid } from '../../../design-system/container'
import { Text } from '../../../design-system/typography'

import { ChallengeCard } from './ChallengeCard'

export const Challenges = () => {
    return (
        <Flex as="main" style={{ padding: '1rem' }}>
            <Flex
                as="section"
                style={{
                    minHeight: '70vh',
                    maxWidth: '50rem',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
            >
                <Text
                    as="h2"
                    style={{
                        fontSize: '2rem',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Desafios
                </Text>
                <br />

                <Grid as="section">
                    <ChallengeCard
                        title="Design"
                        description="Pratique suas habilidades como UI / UX Designer"
                    />
                    <ChallengeCard
                        title="Frontend"
                        description="Pratique suas habilidades como desenvolvedor frontend"
                    />
                    <ChallengeCard
                        title="Backend"
                        description="Pratique suas habilidades como desenvolvedor backend"
                    />
                </Grid>
            </Flex>
        </Flex>
    )
}
