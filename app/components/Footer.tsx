
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white text-black mt-20 py-8">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <p className="mb-3">
                    &copy; {new Date().getFullYear()} FrontCraftDev. All rights reserved.
                </p>
                        <Link href="/privacy"
                         className="hover:underline text-black">
                         
                            Privacy Policy
                        </Link>

                        
         </div>

        </footer>
    );
}