import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BlogpostData, UserAuthentication, UserData, CommentData, PageTitleUpdater, LoginDialog, Creatablogpost } from './contexts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
      <UserAuthentication Children={
        <UserData Children={
          <BlogpostData Children={
            <CommentData Children={
              <PageTitleUpdater Children={
                <LoginDialog Children={<Creatablogpost Children={<App />} />} />} />} />}
          />} />}
      />
    </BrowserRouter>
 
)
