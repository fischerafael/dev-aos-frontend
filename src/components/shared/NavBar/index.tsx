import React from 'react'
import { Flex } from '../../design-system/container'
import { Text } from '../../design-system/typography'

export const NavBar = () => {
    return (
        <Flex as="header" style={{ height: '10vh', padding: '0 1rem' }}>
            <Flex
                as="nav"
                style={{
                    maxWidth: '50rem',
                    justifyContent: 'space-between'
                }}
            >
                <Text as="p" style={{ fontWeight: 'bold' }}>
                    DEVAOS
                </Text>
            </Flex>
        </Flex>
    )
}
