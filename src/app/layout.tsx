import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FanXin 个人博客知识库",
  description: "把经验写成知识，让思考持续生长。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
