import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../routes/Auth";
import { Home } from "../routes/Home";

export const AppRouter = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
