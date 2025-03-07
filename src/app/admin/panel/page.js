"use client";

import AddProduct from "@/components/AddProduct";
import PanelSidebar from "@/components/PanelSidebar";
import SeeProducts from "@/components/SeeProducts";
import React, { useState } from "react";

const AdminPanelPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <main>
      <PanelSidebar setActiveSection={setActiveSection} />
      {activeSection === "add" && <AddProduct />}
      {activeSection === "products" && <SeeProducts />}
    </main>
  );
};

export default AdminPanelPage;
