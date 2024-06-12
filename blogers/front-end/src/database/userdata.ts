import image from '../assert/henryportfolioimg.png'
import image1 from '../assert/WhatsApp Image 2022-03-03 at 4.02.28 PM.jpeg'
import image2 from '../assert/profilepic.png'

export const userData = [
    {
        id: '1234567890emekaorji',
        userName: '@henrygad',
        name: 'emeka',
        image,
        birthday: '25',
        bio: 'hi am a driven react developer and blogging',
        email: 'henrygad.orji@gmail.com',
        country: 'nigeria',
        phonenumber: +1247025672168,
        website: 'webstarter.com',
        followers: [
          '1234567890timothyloveday', '1234567890danielobioma',
        ],
        following: [
            '1234567890timothyloveday', '1234567890danielobioma',
        ],
    },
    {
        id: '1234567890timothyloveday',
        userName: '@timothykendrick',
        name: 'timothy',
        image: image1,
        birthday: '30',
        bio: 'you will see talking about footboll and fight about how my team (ansernel) is the best',
        email: 'timothy@gmail.com',
        country: 'nigeria',
        phonenumber: +1247026572829,
        website: 'itechphone.com',
        followers: [
            '1234567890emekaorji', '1234567890danielobioma',
          ],
          following: [
              '1234567890emekaorji', '1234567890danielobioma',
          ],
    },
    {
        id: '1234567890danielobioma',
        userName: '@gripz',
        name: 'daniel',
        image: image2,
        birthday: '34',
        bio: 'im passionte able about tech and how it will impart to humanity',
        email: 'daniel@gmail.com',
        country: 'nigeria',
        phonenumber: +12480248672168,
        website: 'gripzhomes.com',
        followers: [
            '1234567890emekaorji', '1234567890timothyloveday',
          ],
          following: [
              '1234567890emekaorji', '1234567890timothyloveday',
          ],  
    },
]