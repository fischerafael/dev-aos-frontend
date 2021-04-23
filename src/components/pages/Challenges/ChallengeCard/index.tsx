import React from 'react'
import { Flex } from '../../../design-system/container'
import { Text } from '../../../design-system/typography'

export const ChallengeCard = ({ title, thumbnail }) => {
    return (
        <Flex
            as="article"
            style={{
                background: '#444',
                flexDirection: 'column',
                borderRadius: '.25rem'
            }}
        >
            <Flex
                as="img"
                src={thumbnail}
                alt={title}
                style={{
                    objectFit: 'cover',
                    height: '10rem',
                    borderRadius: '.5rem .5rem 0 0'
                }}
            />
            <Flex
                as="section"
                style={{
                    background: '#444',
                    height: '10rem',
                    borderRadius: '0 0 .5rem .5rem'
                }}
            >
                <Text as="h2">{title}</Text>
            </Flex>
        </Flex>
    )
}
