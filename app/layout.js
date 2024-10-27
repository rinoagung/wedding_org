"use client"
// import { Provider } from "@/components/ui/provider";
import { Providers } from './providers'


export default function RootLayout(props) {
    const { children } = props;


    return (
        <html suppressHydrationWarning>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
