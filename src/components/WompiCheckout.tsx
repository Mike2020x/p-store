import { useEffect, useRef } from "react";

interface WompiCheckoutProps {
    amountInCents: number;
    reference: string;
    currency?: "COP";
    redirectUrl?: string; // URL to redirect after payment
    publicKey?: string;   // Optional, defaults to env var
}

export function WompiCheckout({
    amountInCents,
    reference,
    currency = "COP",
    redirectUrl,
    publicKey,
}: WompiCheckoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent duplicate scripts if component re-renders
        if (containerRef.current?.querySelector("script")) {
            return; // Already injected
        }

        const script = document.createElement("script");
        script.src = "https://checkout.wompi.co/widget.js";
        script.setAttribute("data-render", "button");
        script.setAttribute(
            "data-public-key",
            publicKey || import.meta.env.NEXT_PUBLIC_WOMPI_PUB_KEY || "pub_test_XXXXXX"
        );
        script.setAttribute("data-currency", currency);
        script.setAttribute("data-amount-in-cents", amountInCents.toString());
        script.setAttribute("data-reference", reference);

        // Optional redirect URL
        if (redirectUrl) {
            script.setAttribute("data-redirect-url", redirectUrl);
        }

        // Append to container
        containerRef.current?.appendChild(script);

        // Cleanup not strictly necessary for the widget script, 
        // but good practice if we were mounting/unmounting rapidly.
        // However, Wompi widget replaces the container content usually.
    }, [amountInCents, reference, currency, redirectUrl, publicKey]);

    return <div ref={containerRef} className="wompi-container" />;
}
