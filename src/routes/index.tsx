import React, { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'


const RouteStack: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* not found routes will hit here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default RouteStack
