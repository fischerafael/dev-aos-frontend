import React, { ReactNode } from 'react'
import { Flex, Grid } from '../../design-system/container'
import { Text } from '../../design-system/typography'

interface Props {
    title: string
    children: ReactNode
    [x: string]: any
}

export const CardSection = ({ title, children, ...rest }: Props) => {
    return (
        <Flex as="main" {...rest}>
            <Flex
                as="section"
                style={{
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
