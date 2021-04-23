import React from 'react'

import { NavBar } from '../../shared/NavBar'
import { CardSection } from '../../shared/CardSection'

import { Card } from '../../shared/Card'

export const Challenges = () => {
    return (
        <>
            <NavBar />
            <CardSection title="Desafios">
                <Card
                    title="Design"
                    description="Pratique suas habilidades como UI / UX Designer"
                />
                <Card
                    title="Frontend"
                    description="Pratique suas habilidades como desenvolvedor frontend"
                />
                <Card
                    title="Backend"
                    description="Pratique suas habilidades como desenvolvedor backend"
                />
            </CardSection>
        </>
    )
}
