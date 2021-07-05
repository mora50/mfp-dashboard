import React from "react";
import { SideBar } from "./molecules/SideBar";

const breadcrumbDefault = {
  "/inbox": "Inbox",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

export default function BreadCrumbs({ breadcrumbNameMap = breadcrumbDefault }) {
  return <SideBar breadcrumbNameMap={breadcrumbNameMap} />;
}
