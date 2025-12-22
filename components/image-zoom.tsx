"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"

interface ImageZoomProps {
  src: string
  alt: string
  className?: string
}

export function ImageZoom({ src, alt, className = "" }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <img src={src || "/placeholder.svg"} alt={alt} className={className} />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white rounded-full p-3">
            <ZoomIn className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl">
          <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </>
  )
}
