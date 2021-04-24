import React from 'react'

import { Flex } from '../../../design-system/container'
import { Text } from '../../../design-system/typography'
import { DefaultButton } from '../../../design-system/button'

import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
    title: string
    thumbnail: string
    shortDescription: string
    categories: object[]
    slug?: string
}

export const ChallengeCard = ({
    title,
    thumbnail,
    shortDescription,
    categories,
    slug
}: Props) => {
    return (
        <Flex
            as="article"
            style={{
                flexDirection: 'column',
                borderRadius: '1rem',
                background: '#333',
                padding: '1rem',
                justifyContent: 'space-between'
            }}
        >
            <Header thumbnail={thumbnail} />

            <Text as="h2" style={{ fontSize: '1rem' }}>
                {title}
            </Text>
            <Text
                as="p"
                style={{
                    fontSize: '.75rem',
                    fontWeight: 'normal',
                    padding: '1rem 0',
                    textAlign: 'center',
                    maxWidth: '17rem'
                }}
            >
                {shortDescription}
            </Text>

            {slug && (
                <DefaultButton style={{ margin: '1rem' }}>
                    Detalhes
                </DefaultButton>
            )}

            <Footer categories={categories} />
        </Flex>
    )
}
