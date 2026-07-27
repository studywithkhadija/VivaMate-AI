import "./globals.css";

export const metadata = {
  title: "VivaMate AI",
  description: "Your AI-powered study companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
