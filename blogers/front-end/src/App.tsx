import {Routes, Route} from "react-router-dom"
import {Home, About, Contact, Searchresult, Profile, Editeprofile, Creatablogpost, Singleblogpost, Editblogpost} from './pages'
import {Suspense} from "react"
import {Header} from './component'

const App = () => {
  return <div className="bg-white">
      <Header/>
      <Suspense fallback={<div className="font-text font-semibold text-stone-900 w-full h-screen flex justify-center items-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/:userName" element={ <Profile />} />
          <Route path="/:userName/timeline" element={ <div>timeline</div>} />
          <Route path="/:userName/editprofile" element={<Editeprofile/>} />
          <Route path="/:userName/createblogpost" element={<Creatablogpost/>} />
          <Route path="/:userName/:blogpostSlug/editblogpost" element={<Editblogpost/>} />
          <Route path="/:userName/searchresult" element={<Searchresult />} />
          <Route path="/:authorUserName/:blogpostSlug" element={<Singleblogpost />} />
          <Route path="*" element={<div className="font-text font-semibold text-stone-900 w-full h-screen flex justify-center items-center"> 404, page not found</div>} />
        </Routes>
      </Suspense>
  </div>
}

export default App
