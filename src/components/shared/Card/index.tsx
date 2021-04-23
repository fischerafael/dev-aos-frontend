import React from 'react'
import { Flex } from '../../design-system/container'
import { Text } from '../../design-system/typography'
import { CustomLink } from '../CustomLink'

interface Props {
    title: string
    description: string
    button?: string
    url?: string
}

export const Card = ({ title, description, button, url }: Props) => {
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
            {button && (
                <CustomLink url={url}>
                    <Text
                        as="button"
                        style={{ textAlign: 'center', fontSize: '.75rem' }}
                    >
                        {button}
                    </Text>
                </CustomLink>
            )}
        </Flex>
    )
}
