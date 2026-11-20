import React from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <NavBar />

      <main className="w-screen overflow-hidden pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
