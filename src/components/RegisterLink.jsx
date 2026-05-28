// import React from 'react';

// const RegisterLink = ({ children, className, ...props }) => {
//     return (
//         <a
//             href="https://luma.com/u82wf6na"
//             className={className}
//             target="_blank"
//             rel="noopener noreferrer"
//             {...props}
//         >
//             {children}
//         </a>
//     );   
// };

// export default RegisterLink;

import React from 'react';
import META from '@adkit.so/meta-pixel';

const RegisterLink = ({ children, className, ...props }) => {
    const handleTracking = (e) => {
        // Check if the native Meta/Facebook pixel script is fully initialized on the window
        const isPixelLoaded = typeof window !== 'undefined' && !!window.fbq;

        if (isPixelLoaded) {
            // Safe to track!
            META.track('CompleteRegistration', {
                content_name: 'Luma Event Registration',
            });
            console.log("Meta Pixel event fired successfully: CompleteRegistration");
        } else {
            // Fallback log if the script hasn't loaded from the network yet
            console.warn("Meta Pixel script not fully loaded yet. Proceeding with redirect without event tracking.");
        }

        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <a
            href="https://luma.com/u82wf6na"
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
            onClick={handleTracking}
        >
            {children}
        </a>
    );
};

export default RegisterLink;