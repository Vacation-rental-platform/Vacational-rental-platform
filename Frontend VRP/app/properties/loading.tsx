"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 bg-muted rounded-lg w-64 mb-4 animate-pulse" />
          <div className="h-6 bg-muted rounded-lg w-96 animate-pulse" />
        </div>

        {/* Filters Skeleton */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="h-12 bg-muted rounded-lg flex-1 animate-pulse" />
            <div className="h-12 bg-muted rounded-lg w-48 animate-pulse" />
            <div className="h-12 bg-muted rounded-lg w-48 animate-pulse" />
            <div className="h-12 bg-muted rounded-lg w-48 animate-pulse" />
          </div>
        </div>

        {/* Properties Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border overflow-hidden">
                <div className="h-64 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="h-6 bg-muted rounded animate-pulse" />
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                    <div className="flex gap-2">
                      <div className="h-6 bg-muted rounded-full w-16 animate-pulse" />
                      <div className="h-6 bg-muted rounded-full w-20 animate-pulse" />
                      <div className="h-6 bg-muted rounded-full w-14 animate-pulse" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
