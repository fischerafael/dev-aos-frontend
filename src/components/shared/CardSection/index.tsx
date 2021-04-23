import React from 'react'
import { Flex, Grid } from '../../design-system/container'
import { Text } from '../../design-system/typography'

export const CardSection = ({ title, children }) => {
    return (
        <Flex as="main" style={{ padding: '1rem' }}>
            <Flex
                as="section"
                style={{
                    minHeight: '70vh',
                    maxWidth: '50rem',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
            >
                <Text
                    as="h2"
                    style={{
                        fontSize: '2rem',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    {title}
                </Text>
                <br />
                <Grid as="section">{children}</Grid>
            </Flex>
        </Flex>
    )
}
