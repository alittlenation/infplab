"use client"

import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero"

export default function Home() {
  const demoImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1684369176170-463e84248b70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Mountain landscape",
      rotation: -15,
    },
    {
      id: "2",
      src: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Abstract art",
      rotation: -8,
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1524673360092-e07b7ae58845?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "City skyline",
      rotation: 5,
    },
    {
      id: "4",
      src: "https://plus.unsplash.com/premium_photo-1680610653084-6e4886519caf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Nature photography",
      rotation: 12,
    },
    {
      id: "5",
      src: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Digital art",
      rotation: -12,
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Tropical leaves",
      rotation: 8,
    },
    {
      id: "7",
      src: "https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Tropical leaves",
      rotation: 8,
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1664448003794-2d446c53dcae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      alt: "Tropical leaves",
      rotation: 8,
    },
  ]

  const demoFeatures = [
    {
      title: "Realistic Results",
      description: "Realistic Results Photos that look professionally crafted",
    },
    {
      title: "Fast Generation",
      description: "Turn ideas into images in seconds.",
    },
    {
      title: "Diverse Styles",
      description: "Choose from a wide range of artistic options.",
    },
  ]

  return (
    <ImageCarouselHero
      title="INFP의 상상은 현실이 된다"
      subtitle="AI Photo Generation"
      description="AI 자동화, 수익화, 그리고 다양한 개인 프로젝트 기록"
      ctaText="프로젝트 구경하기"
      onCtaClick={() => console.log("CTA clicked!")}
      images={demoImages}
      features={demoFeatures}
    />
  )
}
