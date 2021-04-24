import React from 'react'

import { IChallenge } from '../../../services/challenges/interface'

import { NavBar } from '../../shared/NavBar'
import { ChallengeInfo } from './ChallengeInfo'

export const Challenge = ({ challenge }: { challenge: IChallenge }) => {
    return (
        <>
            <NavBar />
            <ChallengeInfo challenge={challenge} />
        </>
    )
}
