import React from 'react';

import { AuthProvider } from './auth';

interface Props {
    children: React.ReactNode
}

export function AppProvider({ children }: Props) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}