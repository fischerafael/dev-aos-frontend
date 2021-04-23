import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    url: string
    children: ReactNode
}

export const CustomLink = ({ url, children }: Props) => {
    return (
        <Link href={url}>
            <a style={{ textDecoration: 'none' }}>{children}</a>
        </Link>
    )
}
