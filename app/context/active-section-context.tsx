'use client'
import React, { createContext, useContext, useState } from 'react'
import type { SectionName } from '@/lib/types'

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)


const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)


    return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
}


const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error(
            'useActiveSectionContext must be used within a ActiveSectionContextProvider'
        )
    }

    return context
}


export { useActiveSectionContext }
export default ActiveSectionContextProvider
