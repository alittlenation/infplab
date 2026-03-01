"use client"

import Image from "next/image"
import { Globe, Workflow, Code2, TrendingUp } from "lucide-react"
import {
    BentoGridWithFeatures,
    type BentoFeature,
} from "@/components/ui/bento-grid"

export default function WorkspacePage() {
    const features: BentoFeature[] = [
        {
            id: "1",
            title: "RIVA.kr 플랫폼 구축",
            description: "AI 도구, 뉴스, 커뮤니티 지식이 결합된 데이터 기반 AI 플랫폼 (Next.js + Supabase + n8n)",
            content: (
                <div className="w-full h-full relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#171717] flex items-center justify-center">
                        <Globe className="w-16 h-16 text-blue-400 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute bottom-4 left-4 text-xs font-mono text-white/40">Next.js • Supabase • n8n</div>
                    </div>
                </div>
            ),
            // Item 1 takes 4 columns out of 6, dominating the top row
            className: "col-span-1 md:col-span-6 lg:col-span-4 border-b lg:border-r border-white/10",
        },
        {
            id: "2",
            title: "n8n 자동화 파이프라인",
            description: "어도비스톡 업로드 및 어필리에이트 수익화 자동화 시스템 구축",
            content: (
                <div className="w-full h-full relative group">
                    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#171717] flex flex-col items-center justify-center gap-4">
                        <Workflow className="w-12 h-12 text-green-400 opacity-80 group-hover:rotate-12 transition-transform duration-500" />
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75" />
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
                        </div>
                    </div>
                </div>
            ),
            // Item 2 takes the remaining 2 columns on the top row
            className: "col-span-1 md:col-span-6 lg:col-span-2 border-b border-white/10",
        },
        {
            id: "3",
            title: "바이브코딩",
            description: "AI를 활용한 빠른 개발과 상상 실현의 기록들",
            content: (
                <div className="w-full h-full relative group">
                    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#171717] flex items-center justify-center overflow-hidden">
                        <Code2 className="w-14 h-14 text-pink-400 opacity-80 z-10 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute w-[200%] h-12 bg-pink-500/10 -rotate-45 group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                </div>
            ),
            // Item 3 takes 3 columns on the bottom row
            className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-b-0 md:border-r border-white/10",
        },
        {
            id: "4",
            title: "브랜드커넥트",
            description: "다양한 브랜드 협업 및 수익화 파이프라인 실험",
            content: (
                <div className="w-full h-full relative group">
                    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#171717] flex items-center justify-center">
                        <TrendingUp className="w-14 h-14 text-yellow-400 opacity-80 group-hover:-translate-y-2 group-hover:text-yellow-300 transition-all duration-500" />
                    </div>
                </div>
            ),
            // Item 4 takes the final 3 columns on the bottom row
            className: "col-span-1 md:col-span-3 lg:col-span-3 border-white/10",
        },
    ]

    return (
        <div className="min-h-screen bg-[#171717] p-8 md:p-12 text-white/90 font-sans selection:bg-white/20">
            <div className="max-w-6xl mx-auto mt-20 md:mt-24 mb-32">
                <div className="mb-12">
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Workspace
                    </h1>
                    <p className="text-lg text-white/50 max-w-xl">
                        개인 프로젝트, 플랫폼 구축 및 자동화 파이프라인 실험의 기록들을 공유합니다.
                    </p>
                </div>

                {/* Render the Bento Grid Layout */}
                <BentoGridWithFeatures features={features} />
            </div>
        </div>
    )
}
