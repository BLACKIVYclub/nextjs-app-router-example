import React from "react";
import { builder } from "@builder.io/sdk";

// Replace with your Public API Key
builder.init("706c4001d29248a197cd4cb1e707e1f2");

export default async function DataExample() {
  const menus = await builder.getAll("nav-menus", {
    prerender: false,
  });

  return (
    <>
      <header>
        <nav>
          {menus.map((menu, index) => (
            <>
              <div style={{ marginTop: 20 }}>{menu.data?.name}</div>
              {menu.data?.submenus?.map((submenu) =>
                submenu.menuItems.map((menuItem, index) => (
                  <a
                    key={index}
                    href={menuItem.itemLink}
                    style={{ margin: 10 }}
                  >
                    {menuItem.itemName}
                  </a>
                ))
              )}
            </>
          ))}
        </nav>
      </header>
      <div
        style={{
          padding: 20,
          textAlign: "center",
          background: "cyan",
          fontSize: 24,
          minHeight: 300,
          marginTop: 50,
        }}
      >
        Your site content
      </div>
    </>
  );
}
