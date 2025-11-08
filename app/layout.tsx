"use client"; // Required for pathname hook

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const pathname = usePathname();
  const router = useRouter();
  const [childName, setChildName] = useState<string | null>(null);

  // Reset childName when navigating to a new top-level page
  useEffect(() => {
    setChildName(null);
  }, [pathname]);

  // Force a re-render on browser back/forward navigation
  useEffect(() => {
    router.refresh();
  }, [pathname, router]);

  const navLinks = [
    { href: "/projects/freelance", label: "Freelance" },
    { href: "/projects/arvrmr", label: "AR/VR/MR" },
  ];

  const currentAccentColor = 'blue'; // Default accent color

  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: "100vh", display: 'flex' }}>
          {/* Sidebar */}
          <div style={{ height: "100%", display: 'flex', flexDirection: 'column', padding: '1rem', borderRight: '1px solid #eee' }}>
            <div style={{ flexGrow: 1 }}>
              <nav>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {navLinks.map((link) => {
                    // Highlight parent nav link on child pages
                    const isActive = pathname.startsWith(link.href);

                    const truncatedChildName = childName && childName.length > 8
                      ? `${childName.substring(0, 8)}…`
                      : childName;
                    const displayLabel = isActive && truncatedChildName && pathname !== link.href
                      ? `${link.label} > ${truncatedChildName}`
                      : link.label;

                    return (
                      <li key={link.href}>
                        <Link href={link.href}>
                          {displayLabel}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>

          {/* Main content area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* Page content */}
            <div style={{ flexGrow: 1, padding: '1rem 2rem', paddingTop: '4rem' }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
