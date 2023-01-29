import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "100% 100vh",
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          listStyle: "none",
          color: "#6a6a6a",
          caretColor: "#e6e6e6",
        }}
      >
        {children}
      </body>
    </html>
  );
}
