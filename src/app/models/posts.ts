export interface Posts {
    id: string,
    image: string,
    likes: number,
    link: string,
    owner: Owner,
    publishDate: string,
    tags: string[],
    text: string
}

export interface Owner {
    email: string
    firstName: string
    id: string
    lastName: string
    picture: string
    title: string
}


