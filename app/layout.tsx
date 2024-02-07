import { Be_Vietnam_Pro as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next.js and Supabase Starter Kit",
	description: "The fastest way to build apps with Next.js and Supabase",
	openGraph: {
		title: "Next.js and Supabase Starter Kit",
		description: "The fastest way to build apps with Next.js and Supabase",
		url: `${defaultUrl}`,
		siteName: "Next.js and Supabase Starter Kit",
		type: "website",
		images: [
			{
				width: 1200,
				height: 600,
				alt: "Preview image for Next.js and Supabase",
			},
		],
	},
};

export const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className={cn("min-h-dvh h-dvh bg-background text-foreground font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
					<Toaster
						closeButton
						position='top-right'
						expand={false}
					/>
				</ThemeProvider>
			</body>
		</html>
	);
}
