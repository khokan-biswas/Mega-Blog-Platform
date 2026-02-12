import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({ children, authentication = true }) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    // Select auth status from the `auth` slice
    const isAuthenticated = useSelector((state) => state.auth?.status);

    useEffect(() => {
        // Wait a tick to allow any async auth initialization elsewhere to run
        // then decide where to redirect (if needed).
        const t = setTimeout(() => {
            if (authentication) {
                // Require authentication: if not authenticated, redirect to login
                if (!isAuthenticated) {
                    navigate('/login');
                    return;
                }
            } else {
                // Public route: if already authenticated, redirect to home
                if (isAuthenticated) {
                    navigate('/');
                    return;
                }
            }

            // No redirect required — stop loading and render children
            setLoading(false);
        }, 0);

        return () => clearTimeout(t);
    }, [isAuthenticated, navigate, authentication]);

    return loading ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout
