import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 shadow">
            {/* Logo only */}
            <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Converso Logo" width={40} height={40} />
            </Link>

            {/* Navigation links */}
            <nav className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/companions">Companions</Link>
                <Link href="/journey">My Journey</Link>
                <Link href="/signin">Sign In</Link>
            </nav>
        </header>
    );
};

export default Navbar;
