"use client";


export default function PrivacyPage() {

    return (
        <section className="max-w-3xl mx-auto px-6 py-24 text-[#0f3443]">

<button
        onClick={() => window.history.back()}
        className="ml-0 mt-2 mb-20 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition">

          Back to Home

        </button>

            <h1 className="text-3xl font-bold mb-10">
                Privacy Policy
            </h1>
            
            <p className="mb-6">
                This Privacy Policy describes how we handle your personal information when you use our website. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner.
                </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                Information We Collect
            </h2>

            <p className="mb-6">
                When you submit a message through our contact form, we may collect your name, email address, and any information you provide in your message. This information is used solely for the purpose of responding to your inquiry and providing you with the information or assistance you requested.
                </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                How We Use Your Information
                </h2>

            <p className="mb-6">
                We use the information you provide to respond to your inquiries, provide customer support, and improve our services. We do not share your personal information with third parties for marketing purposes or any other reason.
                </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                Data Security
                </h2>

            <p className="mb-6">
                Your personal information is kept confidential and will not be sold, rented, or shared with third parties without your consent, except as required by law. We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
                </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                Contact 
                </h2>

            <p className="mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, please{" "}
                <a href="mailto:contact.frontcraft.dev@gmail.com?subject=Privacy Policy Question"
                    className="text-blue-600 hover:underline">
                    contact us
                </a>
                .
            </p>
        </section>
    );
}