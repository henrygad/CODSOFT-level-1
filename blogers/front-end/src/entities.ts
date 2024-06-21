export type User ={
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
