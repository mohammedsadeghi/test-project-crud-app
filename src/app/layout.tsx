import { AddPersonSection } from "@/components/dashboard/add-person/addPersonSection";
import MainAppBar from "@/components/dashboard/header/header";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import config from "@/lib/config";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function WeatherLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <MainAppBar />
        <section>
          <AddPersonSection />
        </section>
        <section>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {children}
          </Box>
        </section>
      </body>
    </html>
  );
}
