"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface BentoGridProps {
    children: React.ReactNode
    className?: string
}

export interface BentoCardProps {
    id?: string
    children: React.ReactNode
    className?: string
}

export interface BentoFeature {
    id: string
    title?: string
    description?: string
    content: React.ReactNode
    className?: string
}

export interface BentoGridWithFeaturesProps {
    features: BentoFeature[]
    className?: string
}

// Main Bento Grid Container
export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-0 rounded-3xl border border-white/10 dark:border-neutral-800 bg-white/5 backdrop-blur-md overflow-hidden", className)}>
            {children}
        </div>
    )
}

// Individual Bento Card
export const BentoCard = ({ id, children, className }: BentoCardProps) => {
    return (
        <div
            id={id}
            className={cn("relative p-6 sm:p-8 hover:bg-white/5 transition-colors duration-300", className)}
        >
            {children}
        </div>
    )
}

// Full Grid with Features Implementation
export const BentoGridWithFeatures = ({ features, className }: BentoGridWithFeaturesProps) => {
    return (
        <BentoGrid className={className}>
            {features.map((feature) => (
                <BentoCard key={feature.id} id={feature.id} className={feature.className}>
                    <div className="flex flex-col h-full gap-6">
                        <div className="flex-1 w-full min-h-[200px] bg-black/40 rounded-2xl overflow-hidden border border-white/5 relative flex items-center justify-center p-4">
                            {feature.content}
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                </BentoCard>
            ))}
        </BentoGrid>
    )
}
