import { lazy } from "react";
const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))
const Contact = lazy(()=> import('./Contact'))
const Searchresult = lazy(()=> import('./Searchresult'))
const Profile = lazy(()=> import('./Profile'))
const Editeprofile = lazy(()=> import('./Editeprofile'))
const Creatablogpost = lazy(()=> import('./Creatablogpost'))
const Singleblogpost = lazy(()=> import('./Singleblogpost'))
const Editblogpost = lazy(()=> import('./Editblogpost'))


export {
  Home,
  About,
  Contact,
  Searchresult,
  Profile,
  Editeprofile,
  Creatablogpost,
  Singleblogpost,
  Editblogpost,
}