import React from 'react'
import { colors } from '../../../styles/Theme'

import { Flex } from '../../../design-system/container'
import { Text } from '../../../design-system/typography'

export const HeroSection = () => {
    return (
        <Flex
            as="main"
            style={{
                minHeight: '70vh',
                padding: '1rem',
                background: `${colors.darker}`
            }}
        >
            <Flex
                as="section"
                style={{ maxWidth: '50rem', flexDirection: 'column' }}
            >
                <Text
                    as="h1"
                    style={{
                        fontSize: '5rem',
                        maxWidth: '30rem',
                        textAlign: 'center'
                    }}
                >
                    DEVAOS
                </Text>
                <Text
                    as="h2"
                    style={{
                        fontSize: '1rem',
                        maxWidth: '30rem',
                        textAlign: 'center',
                        fontWeight: 'normal'
                    }}
                >
                    O ponto de encontro de quem quer migrar para a área de
                    tecnologia.
                </Text>
            </Flex>
        </Flex>
    )
}
