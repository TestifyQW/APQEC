import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Returns a click handler for nav links.
 * - Plain routes (e.g. /partners)  → navigate normally.
 * - Hash links (e.g. /#speakers)   → if already on /, scroll immediately;
 *                                     otherwise navigate to / and pass the
 *                                     target hash via router state so the home
 *                                     page can scroll after it mounts.
 */
export function useHashNav(onAfterNav) {
    const navigate = useNavigate();
    const location = useLocation();

    return (e, href) => {
        if (!href.includes('#')) return; // let browser handle plain routes

        e.preventDefault();

        const hashIndex = href.indexOf('#');
        const path = href.slice(0, hashIndex) || '/';
        const hash = href.slice(hashIndex + 1); // e.g. "speakers"

        const scrollToHash = () => {
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        if (location.pathname === path || (path === '/' && location.pathname === '/')) {
            // Already on the right page — scroll directly
            scrollToHash();
        } else {
            // Navigate and pass the target hash as router state.
            // The destination page reads this state in a useEffect and scrolls
            // after the DOM has fully mounted — no brittle timeouts needed.
            navigate(path, { state: { scrollTo: hash } });
        }

        onAfterNav?.();
    };
}
