import React from 'react'
import { Card } from '../../../shared/Card'
import { CardSection } from '../../../shared/CardSection'

export const NavSection = () => {
    return (
        <CardSection title="Como o devaos pode te ajudar">
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
