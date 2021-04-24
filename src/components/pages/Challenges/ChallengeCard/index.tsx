import React from 'react'

import { Flex } from '../../../design-system/container'
import { Text } from '../../../design-system/typography'
import { Header } from './Header'
import { Footer } from './Footer'
import { DefaultButton } from '../../../design-system/button'

export const ChallengeCard = ({
    title,
    thumbnail,
    shortDescription,
    categories
}) => {
    return (
        <Flex
            as="article"
            style={{
                flexDirection: 'column',
                borderRadius: '.5rem',
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
                    textAlign: 'center'
                }}
            >
                {shortDescription}
            </Text>

            <DefaultButton style={{ margin: '1rem' }}>Detalhes</DefaultButton>

            <Footer categories={categories} />
        </Flex>
    )
}
