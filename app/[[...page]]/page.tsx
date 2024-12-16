import React from "react";
import { builder } from "@builder.io/sdk";
import { Metadata } from "next";
import { RenderBuilderContent } from "@/components/builder";

// Initialize Builder.io with your Public API Key
builder.init("706c4001d29248a197cd4cb1e707e1f2");

// Define the structure of `params`
export interface PageParams {
  page?: string[];
}

// Metadata API for setting head elements
export const generateMetadata = async ({ params }: { params: PageParams }): Promise<Metadata> => {
  const urlPath = "/" + (params.page?.join("/") || "");
  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
      prerender: false,
    })
    .toPromise();

  return {
    title: content?.data?.title || "Default Title",
  };
};

// Page Component
export default async function Page({ params }: { params: PageParams }) {
  const urlPath = "/" + (params.page?.join("/") || "");

  // Fetch content from Builder.io
  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
      prerender: false,
    })
    .toPromise();

  return (
    <div>
      <RenderBuilderContent content={content} model="page" />
    </div>
  );
}
