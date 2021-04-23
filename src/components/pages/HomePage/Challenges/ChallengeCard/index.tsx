import React from 'react'
import { Flex } from '../../../../design-system/container'
import { Text } from '../../../../design-system/typography'

interface Props {
    title: string
    description: string
    url?: string
}

export const ChallengeCard = ({ title, description, url }: Props) => {
    return (
        <Flex
            as="article"
            style={{
                background: '#444',
                padding: '2rem',
                flexDirection: 'column',
                minHeight: '17rem',
                borderRadius: '.25rem'
            }}
        >
            <Text as="h2">{title}</Text>
            <br />
            <Text as="p" style={{ textAlign: 'center', fontSize: '.75rem' }}>
                {description}
            </Text>
            <br />
            <Text
                as="button"
                style={{ textAlign: 'center', fontSize: '.75rem' }}
            >
                Saiba mais
            </Text>
        </Flex>
    )
}
