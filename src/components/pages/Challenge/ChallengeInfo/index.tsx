import React from 'react'

import { Flex } from '../../../design-system/container'
import { colors, width } from '../../../styles/Theme'

import { ChallengeCard } from '../../Challenges/ChallengeCard'

export const ChallengeInfo = ({ challenge }) => {
    return (
        <Flex
            as="main"
            style={{
                minHeight: '90vh',
                background: `${colors.darker}`
            }}
        >
            <Flex
                as="section"
                style={{
                    maxWidth: `${width.medium}`
                }}
            >
                <ChallengeCard
                    title={challenge.title}
                    thumbnail={challenge.thumbnail}
                    shortDescription={challenge.short_description}
                    categories={challenge.categories}
                />
            </Flex>
        </Flex>
    )
}
