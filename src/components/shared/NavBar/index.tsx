import React from 'react'
import { Flex } from '../../design-system/container'
import { Text } from '../../design-system/typography'
import { CustomLink } from '../CustomLink'

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
                <CustomLink url="/">
                    <Flex
                        as="img"
                        src="/assets/logo.svg"
                        alt="Dev Aos Logo"
                        style={{ width: '2rem' }}
                    />
                </CustomLink>
            </Flex>
        </Flex>
    )
}
