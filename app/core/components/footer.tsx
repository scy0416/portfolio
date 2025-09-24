/**
 * Footer Component
 *
 * A responsive footer that displays copyright information and legal links.
 * This component appears at the bottom of every page in the application and
 * provides essential legal information and copyright notice.
 *
 * Features:
 * - Responsive design that adapts to different screen sizes
 * - Dynamic copyright year that automatically updates
 * - Links to legal pages (Privacy Policy, Terms of Service)
 * - View transitions for smooth navigation to legal pages
 */
import { Link } from "react-router";

/**
 * Footer component for displaying copyright information and legal links
 *
 * This component renders a responsive footer that adapts to different screen sizes.
 * On mobile, it displays the legal links above the copyright notice, while on desktop,
 * it displays them side by side with the copyright on the left and links on the right.
 *
 * @returns A footer component with copyright information and legal links
 */
export default function Footer() {
  return (
    <footer className="bg-background/60 mt-auto border-t backdrop-blur-md">
      <div className="text-muted-foreground mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm md:flex-row">
        <div className="order-2 md:order-none">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {import.meta.env.VITE_APP_NAME ?? "Portfolio"}. All rights reserved.
          </p>
        </div>

        <nav className="order-1 flex items-center gap-6 md:order-none">
          <Link
            to="https://blog.naver.com/support0616"
            target="_blank"
            viewTransition
            className="hover:text-foreground underline-offset-8 transition-colors hover:underline"
          >
            Blog
          </Link>
          <Link
            to="https://github.com/scy0416"
            target="_blank"
            viewTransition
            className="hover:text-foreground underline-offset-8 transition-colors hover:underline"
          >
            Github
          </Link>
          <Link
            to="mailto:scy0416@gmail.com"
            target="_blank"
            viewTransition
            className="hover:text-foreground underline-offset-8 transition-colors hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
