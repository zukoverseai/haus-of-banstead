"use client";
import dynamic from "next/dynamic";

const InlineWidget = dynamic(
    () => import("react-calendly").then((mod) => mod.InlineWidget),
    { ssr: false }
);

export function CalendlyInline({ url }: { url: string }) {
    return (
        <div className="w-full h-[500px] md:h-[700px]">
            <InlineWidget
                url={url}
                pageSettings={{
                    backgroundColor: "ffffff",
                    hideLandingPageDetails: true,
                    primaryColor: "3ecef7",
                    textColor: "000000",
                }}
            />
        </div>
    );
} 