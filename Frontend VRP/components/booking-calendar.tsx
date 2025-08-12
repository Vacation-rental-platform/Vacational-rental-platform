"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BookingCalendar() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  // Mock unavailable dates
  const unavailableDates = [
    new Date(2024, 11, 15),
    new Date(2024, 11, 16),
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2025, 0, 1),
    new Date(2025, 0, 2),
  ]

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some((unavailableDate) => date.toDateString() === unavailableDate.toDateString())
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg">Availability Calendar</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Calendar
          mode="multiple"
          selected={selectedDates}
          onSelect={(dates) => setSelectedDates(dates || [])}
          disabled={isDateUnavailable}
          className="rounded-md border-0 bg-transparent"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-muted rounded",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-red-600 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-muted rounded-md transition-colors",
            day_selected: "bg-red-600 text-white hover:bg-red-700 hover:text-white focus:bg-red-600 focus:text-white",
            day_today: "bg-muted font-semibold",
            day_outside: "text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50 line-through cursor-not-allowed",
            day_range_middle: "aria-selected:bg-red-600 aria-selected:text-white",
            day_hidden: "invisible",
          }}
        />
        <div className="mt-6 space-y-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded"></div>
            <span className="text-muted-foreground">Selected dates</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-muted rounded"></div>
            <span className="text-muted-foreground">Today</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-muted-foreground rounded opacity-50"></div>
            <span className="text-muted-foreground">Unavailable</span>
          </div>
        </div>

        {selectedDates.length > 0 && (
          <div className="mt-4 p-3 bg-red-600/10 border border-red-600/20 rounded-lg">
            <h4 className="font-semibold mb-2">Selected Dates</h4>
            <div className="flex flex-wrap gap-1">
              {selectedDates.map((date, index) => (
                <Badge key={index} variant="secondary" className="bg-red-600 text-white">
                  {date.toLocaleDateString()}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
