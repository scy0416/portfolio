/**
 * Navigation Bar Component
 *
 * A responsive navigation header that adapts to different screen sizes and user authentication states.
 * This component provides the main navigation interface for the application, including:
 *
 * - Responsive design with desktop and mobile layouts
 * - User authentication state awareness (logged in vs. logged out)
 * - User profile menu with avatar and dropdown options
 * - Theme switching functionality
 * - Language switching functionality
 * - Mobile-friendly navigation drawer
 *
 * The component handles different states:
 * - Loading state with skeleton placeholders
 * - Authenticated state with user profile information
 * - Unauthenticated state with sign in/sign up buttons
 */
import { MenuIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import LangSwitcher from "./lang-switcher";
import ThemeSwitcher from "./theme-switcher";
// Simplified: remove dropdowns/buttons for a cleaner nav
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

/**
 * UserMenu Component
 *
 * Displays the authenticated user's profile menu with avatar and dropdown options.
 * This component is shown in the navigation bar when a user is logged in and provides
 * quick access to user-specific actions and information.
 *
 * Features:
 * - Avatar display with image or fallback initials
 * - User name and email display
 * - Quick navigation to dashboard
 * - Logout functionality
 *
 * @param name - The user's display name
 * @param email - The user's email address (optional)
 * @param avatarUrl - URL to the user's avatar image (optional)
 * @returns A dropdown menu component with user information and actions
 */
// No user menu (authentication removed)

/**
 * AuthButtons Component
 *
 * Displays authentication buttons (Sign in and Sign up) for unauthenticated users.
 * This component is shown in the navigation bar when no user is logged in and provides
 * quick access to authentication screens.
 *
 * Features:
 * - Sign in button with ghost styling (less prominent)
 * - Sign up button with default styling (more prominent)
 * - View transitions for smooth navigation to auth screens
 * - Compatible with mobile navigation drawer (SheetClose integration)
 *
 * @returns Fragment containing sign in and sign up buttons
 */
// No auth buttons (authentication removed)

/**
 * Actions Component
 *
 * Displays utility actions and settings in the navigation bar, including:
 * - Debug/settings dropdown menu with links to monitoring tools
 * - Theme switcher for toggling between light and dark mode
 * - Language switcher for changing the application language
 *
 * This component is shown in the navigation bar for all users regardless of
 * authentication state and provides access to application-wide settings and tools.
 *
 * @returns Fragment containing settings dropdown, theme switcher, and language switcher
 */
function Actions() {
  return (
    <>
      {/* Theme switcher component (light/dark mode) */}
      <ThemeSwitcher />

      {/* Language switcher component */}
      <LangSwitcher />
    </>
  );
}

/**
 * NavigationBar Component
 *
 * The main navigation header for the application that adapts to different screen sizes
 * and user authentication states. This component serves as the primary navigation
 * interface and combines several sub-components to create a complete navigation experience.
 *
 * Features:
 * - Responsive design with desktop navigation and mobile drawer
 * - Application branding with localized title
 * - Main navigation links (Blog, Contact, Payments)
 * - User authentication state handling (loading, authenticated, unauthenticated)
 * - User profile menu with avatar for authenticated users
 * - Sign in/sign up buttons for unauthenticated users
 * - Theme and language switching options
 *
 * @param name - The authenticated user's name (if available)
 * @param email - The authenticated user's email (if available)
 * @param avatarUrl - The authenticated user's avatar URL (if available)
 * @param loading - Boolean indicating if the auth state is still loading
 * @returns The complete navigation bar component
 */
export function NavigationBar({ loading }: { loading: boolean }) {
  // Get translation function for internationalization
  const { t } = useTranslation();

  return (
    <nav
      className={
        "bg-background/60 sticky top-0 z-50 mx-auto flex h-14 w-full items-center justify-between border-b px-5 backdrop-blur-md transition-colors md:h-16 md:px-10"
      }
    >
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between">
        {/* Application logo/title with link to home */}
        <Link to="/">
          <h1 className="from-primary/90 bg-gradient-to-r via-fuchsia-500/80 to-violet-500/80 bg-clip-text text-base font-semibold tracking-tight text-transparent md:text-lg">
            {t("home.title")}
          </h1>
        </Link>

        {/* Desktop navigation menu (hidden on mobile) */}
        <div className="hidden h-full items-center gap-6 md:flex">
          {/* Main navigation links */}
          <Link
            to="https://blog.naver.com/support0616"
            viewTransition
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-8 transition-colors hover:underline"
            target="_blank"
          >
            Blog
          </Link>
          <Link
            to="https://github.com/scy0416"
            viewTransition
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-8 transition-colors hover:underline"
            target="_blank"
          >
            Github
          </Link>
          <Link
            to="mailto:scy0416@gmail.com"
            viewTransition
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-8 transition-colors hover:underline"
          >
            Contact
          </Link>

          <div className="ml-2 flex items-center gap-3 border-l pl-4">
            <Actions />
          </div>
        </div>

        {/* Mobile menu trigger (hidden on desktop) */}
        <SheetTrigger className="bg size-6 md:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetClose asChild>
              <Link to="https://blog.naver.com/support0616" target="_blank">
                Blog
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="https://github.com/scy0416" target="_blank">
                Github
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="mailto:scy0416@gmail.com" target="_blank">
                Contact
              </Link>
            </SheetClose>
          </SheetHeader>
          <div className="mt-4 flex items-center gap-3">
            <Actions />
          </div>
        </SheetContent>
      </div>
    </nav>
  );
}
