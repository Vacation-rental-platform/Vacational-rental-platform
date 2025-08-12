"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-8 bg-muted rounded-lg w-64 mb-2 animate-pulse" />
            <div className="h-5 bg-muted rounded-lg w-48 animate-pulse" />
          </div>
          <div className="h-10 bg-muted rounded-lg w-32 animate-pulse" />
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-24 animate-pulse" />
                      <div className="h-8 bg-muted rounded w-20 animate-pulse" />
                      <div className="h-4 bg-muted rounded w-16 animate-pulse" />
                    </div>
                    <div className="h-12 w-12 bg-muted rounded-lg animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Skeleton */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="h-6 bg-muted rounded w-48 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                  <div className="h-12 w-12 bg-muted rounded animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                    <div className="h-3 bg-muted rounded w-1/2 animate-pulse" />
                  </div>
                  <div className="h-8 bg-muted rounded w-20 animate-pulse" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
