"use client";

import Link from "next/link";
import { use } from "react"

export default function ArticleDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "th" | "jp" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>Article Detail Page</h1>
      <p>This is the detail page for a specific article in {lang}.</p>

      <ul>
        <li><Link href={`/articles/${articleId}?lang=en`}>Related Article EN</Link></li>
        <li><Link href={`/articles/${articleId}?lang=th`}>Related Article TH</Link></li>
        <li><Link href={`/articles/${articleId}?lang=jp`}>Related Article JP</Link></li>
      </ul>
    </div>
  )
}