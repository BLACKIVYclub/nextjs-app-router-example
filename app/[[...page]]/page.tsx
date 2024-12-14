import React from "react";
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";

// Initialize Builder.io with your Public API Key
builder.init("706c4001d29248a197cd4cb1e707e1f2");

// Define the structure of `params`
interface PageProps {
  params: {
    page?: string[];
  };
}

// Function to fetch content from Builder.io
async function fetchContent(params: PageProps["params"]) {
  const urlPath = "/" + (params?.page?.join("/") || "");

  try {
    const content = await builder
      .get("page", {
        userAttributes: {
          urlPath,
        },
        prerender: false,
      })
      .toPromise();

    return content;
  } catch (error) {
    console.error("Error fetching content from Builder.io:", error);
    return null;
  }
}

// Main page component
const Page = async ({ params }: PageProps) => {
  console.log("Params:", params);

  const content = await fetchContent(params);

  return (
    <>
      <Head>
        <title>{content?.data?.title || "Default Title"}</title>
      </Head>
      {/* Render the Builder content */}
      <RenderBuilderContent content={content} model="page" />
    </>
  );
};

export default Page;
