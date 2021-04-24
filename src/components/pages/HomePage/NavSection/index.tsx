import React from 'react'
import { colors } from '../../../styles/Theme'

import { Card } from '../../../shared/Card'
import { CardSection } from '../../../shared/CardSection'

export const NavSection = () => {
    return (
        <CardSection
            title="Como o DEVAOS pode te ajudar"
            style={{ padding: '2rem', background: `${colors.darker}` }}
        >
            <Card
                url="/challenges"
                title="Desafios"
                description="Pratique suas habilidades de UI / UX Designer, Desenvolvedor Frontend e Desenvolvedor Backend"
                button="Ver desafios"
            />
            <Card
                url="https://www.youtube.com/channel/UCz75xXTimMhZkbK__XOM8hQ"
                title="Youtube"
                description="Confira tutoriais sobre UI / UX Design, Desenvolvimento Frontend e Desenvolvimento Backend no Youtube"
                button="Ir para o canal"
            />
            <Card
                title="Comunidade"
                description="Crie seu perfil, conecte-se com outras pessoas que também estão migrando para área e mostre para empresas e recrutadores sua experiência"
                button="Participar"
                url="/app"
            />
        </CardSection>
    )
}
