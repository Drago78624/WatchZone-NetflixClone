import Navbar from "@/components/Navbar";
import Providers from "./providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div style={{ minHeight: "100vh" ,backgroundImage: "linear-gradient(to bottom right, #0C1012, #44337A)"}}>
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
