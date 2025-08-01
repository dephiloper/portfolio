import React, { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

const RouteStack: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* not found routes will hit here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default RouteStack
