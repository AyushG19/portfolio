"use client"

import { motion, useMotionValue, useSpring } from "motion/react"

const VIEWBOX_WIDTH = 1410
const DEFAULT_GRADIENT_X = 705

export function SiteFooterInteractiveLogotype() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1408.688 213.438"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="svgGroup" fillRule="evenodd">
              <path
                fill="url(#paint0_linear_1145_73)"
                strokeWidth={2}
                className="stroke-foreground/10"
                stroke="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 1408.688 213.438 L 1366 213.438 L 1366 170.75 L 1366 128.063 L 1323.313 128.063 L 1280.625 128.063 L 1237.938 128.063 L 1237.938 170.75 L 1237.938 213.438 L 1195.25 213.438 L 1195.25 170.75 L 1195.25 128.063 L 1195.25 85.375 L 1195.25 42.688 L 1195.25 0 L 1237.938 0 L 1237.938 42.688 L 1237.938 85.375 L 1280.625 85.375 L 1323.313 85.375 L 1366 85.375 L 1366 42.688 L 1366 0 L 1408.688 0 L 1408.688 42.688 L 1408.688 85.375 L 1408.688 128.063 L 1408.688 170.75 L 1408.688 213.438 Z M 213.438 213.438 L 170.75 213.438 L 170.75 170.75 L 170.75 128.063 L 128.063 128.063 L 85.375 128.063 L 42.688 128.063 L 42.688 170.75 L 42.688 213.438 L 0 213.438 L 0 170.75 L 0 128.063 L 0 85.375 L 0 42.688 L 42.688 42.688 L 42.688 85.375 L 85.375 85.375 L 128.063 85.375 L 170.75 85.375 L 170.75 42.688 L 213.438 42.688 L 213.438 85.375 L 213.438 128.063 L 213.438 170.75 L 213.438 213.438 Z M 768.375 170.75 L 768.375 128.063 L 768.375 85.375 L 768.375 42.688 L 768.375 0 L 811.063 0 L 811.063 42.688 L 811.063 85.375 L 811.063 128.063 L 811.063 170.75 L 768.375 170.75 Z M 640.313 170.75 L 597.625 170.75 L 597.625 128.063 L 597.625 85.375 L 597.625 42.688 L 597.625 0 L 640.313 0 L 640.313 42.688 L 640.313 85.375 L 640.313 128.063 L 640.313 170.75 Z M 981.813 170.75 L 1024.5 170.75 L 1067.188 170.75 L 1067.188 213.438 L 1024.5 213.438 L 981.813 213.438 L 939.125 213.438 L 896.438 213.438 L 896.438 170.75 L 939.125 170.75 L 981.813 170.75 Z M 939.125 42.688 L 939.125 0 L 981.813 0 L 1024.5 0 L 1067.188 0 L 1109.875 0 L 1109.875 42.688 L 1067.188 42.688 L 1024.5 42.688 L 981.813 42.688 L 939.125 42.688 Z M 42.688 42.688 L 42.688 0 L 85.375 0 L 128.063 0 L 170.75 0 L 170.75 42.688 L 128.063 42.688 L 85.375 42.688 L 42.688 42.688 Z M 426.875 213.438 L 384.188 213.438 L 384.188 170.75 L 384.188 128.063 L 384.188 85.375 L 426.875 85.375 L 426.875 128.063 L 426.875 170.75 L 426.875 213.438 Z M 683 170.75 L 725.688 170.75 L 768.375 170.75 L 768.375 213.438 L 725.688 213.438 L 683 213.438 L 640.313 213.438 L 640.313 170.75 L 683 170.75 Z M 1067.188 128.063 L 1024.5 128.063 L 981.813 128.063 L 939.125 128.063 L 939.125 85.375 L 981.813 85.375 L 1024.5 85.375 L 1067.188 85.375 L 1067.188 128.063 Z M 384.188 85.375 L 341.5 85.375 L 341.5 42.688 L 384.188 42.688 L 384.188 85.375 Z M 426.875 85.375 L 426.875 42.688 L 469.563 42.688 L 469.563 85.375 L 426.875 85.375 Z M 469.563 42.688 L 469.563 0 L 512.25 0 L 512.25 42.688 L 469.563 42.688 Z M 341.5 42.688 L 298.813 42.688 L 298.813 0 L 341.5 0 L 341.5 42.688 Z M 1067.188 170.75 L 1067.188 128.063 L 1109.875 128.063 L 1109.875 170.75 L 1067.188 170.75 Z M 939.125 85.375 L 896.438 85.375 L 896.438 42.688 L 939.125 42.688 L 939.125 85.375 Z"
                vectorEffect="non-scaling-stroke"
              />
            </g>
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="705"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
