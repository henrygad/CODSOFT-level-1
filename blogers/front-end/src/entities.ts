export type User = {
    id: number,
    name: string,
    isAdmin?: boolean
}

export type Userauthentication = {
    token: string
    userName: string
}

export type Login = {
    userName: string
    email: string
    password: string
}

export type Signup = {
    userName: string
    email: string
    password: string
}

export type Userprops = {
    id: string;
    userName: string;
    name: string;
    image: string;
    birthday: string;
    bio: string;
    email: string;
    country: string;
    phonenumber: number;
    website: string;
    followers: string[];
    following: string[];
    interested: string[];
    timeline: string[];
    notifications: {
        type: string;
        userName: string;
        blogpostTitle?: string;
        blogpostSlug?: string,
        commentId?: string,
        views?: number,
    }[];
}

export type Blogpostprops = {
    id: string
    authorUserName: string
    slug: string
    title: string
    body: string
    cartigory: string[]
    tags: string[]
    image: string
    date: string
    likes: number
    views: number
    Published: boolean
}

export type Commentprops = {
    id: string;
    blogpostId: string;
    commentorUsername: string;
    body: string;
}