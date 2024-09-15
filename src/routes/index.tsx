import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Protected from '../components/Protected'

// import route pages here
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { RequireAuth } from './RequireAuth'

const RouteStack: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* example of route that requires authentication */}
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <Protected />
            </RequireAuth>
          }
        />

        {/* not found routes will hit here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteStack
