import React from 'react'

import { colors } from '../../../../styles/Theme'

import { Flex } from '../../../../design-system/container'
import { Text } from '../../../../design-system/typography'

export const Footer = ({ categories }) => {
    return (
        <Flex
            as="footer"
            style={{
                background: 'transparent',
                borderTop: `solid .05rem ${colors.darker}`,
                paddingTop: '1rem',
                flexWrap: 'wrap',
                height: '5rem'
            }}
        >
            {categories.map((category) => (
                <Text
                    key={category.id}
                    as="span"
                    style={{
                        padding: '0 1rem',
                        height: '1.5rem',
                        margin: '.125rem',
                        fontSize: '.75rem',
                        borderRadius: '.75rem',
                        background: colors.darker,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    {category.title}
                </Text>
            ))}
        </Flex>
    )
}
