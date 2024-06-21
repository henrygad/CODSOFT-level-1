import image from '../assert/henryportfolioimg.png'
import image1 from '../assert/WhatsApp Image 2022-03-03 at 4.02.28 PM.jpeg'
import image2 from '../assert/profilepic.png'

export const userData = [
  {
    id: '1234567890emekaorji',
    userName: '@henrygad',
    name: 'emeka',
    image,
    birthday: '25/01/1999',
    bio: 'hi am a driven react developer and blogging',
    email: 'henrygad.orji@gmail.com',
    country: 'nigeria',
    phonenumber: +1247025672168,
    website: 'webstarter.com',
    followers: [
      '@timothy', '@gripz',
    ],
    following: [
      '@timothy',
    ],
    interested: [
      'rich', 
    ],
    timeline: [
      '@henrygad', '@timothy',
    ],
    notifications: [
      {
        type: 'follow',
        userName: '@timothy',
      },
      {
        type: 'unfollow',
        userName: '@gripz',
      },
      {
        type: 'blogpost-comment',
        userName: '@timothy',
        blogpostTitle: 'how to create a blog post in two seconds',
        blogpostSlug: 'how-to-create-a-blog-post-in-two-seconds',
        commentId: '1234567890firstcomment'
      },
      {
        type: 'blogpost-like',
        userName: '@gripz',
        blogpostTitle: 'how to create a blog post in two seconds',
        blogpostSlug: 'how-to-create-a-blog-post-in-two-seconds'
      },
      {
        type: 'blogpost-view',
        blogpostTitle: 'how to create a blog post in two seconds',
        blogpostSlug: 'how-to-create-a-blog-post-in-two-seconds',
        views: 1233,
      }
    ],
  },
  {
    id: '1234567890timothyloveday',
    userName: '@timothy',
    name: 'timothy',
    image: image1,
    birthday: '05/08/1994',
    bio: 'you will see talking about footboll and fight about how my team (ansernel) is the best',
    email: 'timothy@gmail.com',
    country: 'nigeria',
    phonenumber: +1247026572829,
    website: 'itechphone.com',
    followers: [
      '@gripz'
    ],
    following: [
      '@henrygad', '@gripz',
    ],
    interested: [
      'rich', 'money',
    ],
    timeline: [
      '@timothy', '@henrygad', '@gripz',
    ],
    notifications: [
      {
        type: 'follow',
        userName: '@gripz',
      },
    ],
  },
  {
    id: '1234567890danielobioma',
    userName: '@gripz',
    name: 'daniel',
    image: image2,
    birthday: '07/06/1989',
    bio: 'im passionte able about tech and how it will impart to humanity',
    email: 'daniel@gmail.com',
    country: 'nigeria',
    phonenumber: +12480248672168,
    website: 'gripzhomes.com',
    followers: [
      '@timothy',
    ],
    following: [
      '@henrygad',
    ],
    interested: [
      'rich',  
    ],
    timeline: [
      '@gripz', '@henrygad', '@timothy',
    ],
    notifications: [
      {
        type: 'follow',
        userName: '@timothy',
      },
    ],
  },
]