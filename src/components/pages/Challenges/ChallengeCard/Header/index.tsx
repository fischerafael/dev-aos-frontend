import React from 'react'
import { Flex } from '../../../../design-system/container'
import { colors } from '../../../../styles/Theme'

export const Header = ({ thumbnail }) => {
    return (
        <Flex
            as="header"
            style={{
                background: 'transparent',
                padding: '2rem',
                height: '10rem'
            }}
        >
            <Flex
                as="img"
                src={thumbnail}
                style={{
                    width: '7.5rem',
                    height: '7.5rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: `solid .5rem ${colors.primary}`
                }}
            />
        </Flex>
    )
}
