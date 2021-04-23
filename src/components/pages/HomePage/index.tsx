import React from 'react'

import { NavBar } from '../../shared/NavBar'
import { Challenges } from './Challenges'
import { HeroSection } from './HeroSection'

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Challenges />
        </>
    )
}
