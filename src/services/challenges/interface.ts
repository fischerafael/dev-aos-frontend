interface ICategory {
    id: string
    title: string
}

export interface IChallenge {
    categories: ICategory[]
    id: string
    slug: string
    description: string
    title: string
    thumbnail: string
}
