import React from 'react'

import { NavBar } from '../../shared/NavBar'
import { HeroSection } from './HeroSection'
import { NavSection } from './NavSection'

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <NavSection />
        </>
    )
}
