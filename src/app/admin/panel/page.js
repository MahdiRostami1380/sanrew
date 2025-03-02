"use client";

import AddProduct from "@/components/AddProduct";
import PanelSidebar from "@/components/PanelSidebar";
import React, { useState } from "react";

const AdminPanelPage = () => {
  const [activeSection, setActiveSection] = useState("add");
  return (
    <main>
      {/* <PanelSidebar setActiveSection={setActiveSection} /> */}
      {activeSection === "add" && <AddProduct />}
    </main>
  );
};

export default AdminPanelPage;
