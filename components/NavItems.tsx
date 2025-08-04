'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
    { label: 'Sign In', href: '/sign-in' },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    key={label}
                    href={href}
                    className={cn(
                        pathname === href ? "text-primary" : "text-muted-foreground",
                        "text-sm font-semibold transition-colors hover:text-primary"
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;
