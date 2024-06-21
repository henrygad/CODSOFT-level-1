import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BlogpostData, UserAuthentication, UserData, CommentData, PageTitleUpdater, LoginDialog } from './contexts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthentication Children={
        <UserData Children={
          <BlogpostData Children={
            <CommentData Children={
              <PageTitleUpdater Children={<LoginDialog Children={<App />} />} />} />}
          />} />}
      />
    </BrowserRouter>
  </React.StrictMode>
)
