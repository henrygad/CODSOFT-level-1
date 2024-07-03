import { lazy } from "react";
const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))
const Contact = lazy(()=> import('./Contact'))
const Search = lazy(()=> import('./Search'))
const Profile = lazy(()=> import('./Profile'))
const Editeprofile = lazy(()=> import('./Editeprofile'))
const Creatablogpost = lazy(()=> import('./Creatablogpost'))
const Singleblogpostpage = lazy(()=> import('./Singleblogpostpage'))
const Editblogpost = lazy(()=> import('./Editblogpost'))
const Settings = lazy(()=> import('./Settings'))
const Page404 = lazy(()=> import('./Page404'))
const Timeline = lazy(()=> import('./Timeline'))
const Notification = lazy(()=> import('./Notification'))
const Messages = lazy(()=> import('./Messages'))


export {
  Home,
  About,
  Contact,
  Search,
  Profile,
  Editeprofile,
  Creatablogpost,
  Singleblogpostpage,
  Editblogpost,
  Settings,
  Page404,
  Timeline,
  Notification,
  Messages,
}