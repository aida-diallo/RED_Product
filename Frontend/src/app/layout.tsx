'use client';
import React from 'react';
import MyProvider from '../app/Components/MyProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <MyProvider>
                    {children}
                </MyProvider>
            </body>
        </html>
    );
};

export default RootLayout;