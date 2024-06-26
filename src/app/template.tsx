import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
