const API_URL = {
    production: 'https://devaos-mvp.herokuapp.com'
}

class Challenge {
    find = async () => {
        const data = await fetch(`${API_URL.production}/challenges`)
        const challenges = await data.json()
        return challenges
    }
}

export const challengesService = new Challenge()
