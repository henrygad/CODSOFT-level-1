import { Routes, Route, Navigate } from "react-router-dom"
import { Home, About, Contact, Search, Profile, Editeprofile, Creatablogpost, Singleblogpostpage, Editblogpost, Page404, Settings, Timeline, Notification, Messages } from './pages'
import { Suspense, useEffect } from "react"
import { Botttomnav, Header } from './components'
import { useContextAuthentication } from "./hooks"

const App = () => {
  const { isLogin, loginUser } = useContextAuthentication()

  useEffect(() => {
    if (isLogin) localStorage.setItem('userLogined', loginUser)
  }, [isLogin])

  return <div className="bg-white text-stone-800 dark:bg-stone-900 dark:text-white min-h-screen">
    <Header />
    <Suspense fallback={<div className="font-text font-semibold text-stone-900 w-full h-screen flex justify-center items-center">Loading...</div>}>
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:authorUserName/:slug/post" element={<Singleblogpostpage />} />
        <Route path="/" element={isLogin ? <Navigate to={`/${loginUser}`} /> : <Home />} />
        <Route path="/:userName" element={isLogin ? <Profile /> : <Navigate to={'/'} />} />
        <Route path="/timeline" element={isLogin ? <Timeline /> : <Navigate to={'/'} />} />
        <Route path="/createblogpost" element={isLogin ? <Creatablogpost /> : <Navigate to={'/'} />} />
        <Route path="/notification" element={isLogin ? <Notification /> : <Navigate to={'/'} />} />
        <Route path="/editprofile" element={isLogin ? <Editeprofile /> : <Navigate to={'/'} />} />
        <Route path="/:slug/editblogpost" element={isLogin ? <Editblogpost /> : <Navigate to={'/'} />} />
        <Route path="/Search" element={isLogin ? <Search /> : <Navigate to={'/'} />} />
        <Route path="/settings" element={isLogin ? <Settings /> : <Navigate to={'/'} />} />
        <Route path="/messages" element={isLogin ? <Messages/> : <Navigate to={'/'} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
    {isLogin && <Botttomnav />}
  </div>
}

export default App
