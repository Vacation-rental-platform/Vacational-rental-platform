"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    new Date(2025, 7, 5), // August 5, 2025
    new Date(2025, 7, 6), // August 6, 2025
    new Date(2025, 7, 20), // August 20, 2025
    new Date(2025, 7, 21), // August 21, 2025
  ]

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some((unavailableDate) => date.toDateString() === unavailableDate.toDateString())
  }

  const clearSelection = () => {
    setSelectedDates([])
  }

  const selectToday = () => {
    const today = new Date()
    if (!isDateUnavailable(today)) {
      setSelectedDates([today])
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white pb-4">
          <CardTitle className="text-xl font-semibold text-center">Availability Calendar</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={(dates) => setSelectedDates(dates || [])}
              disabled={isDateUnavailable}
              className="w-full mx-auto bg-white rounded-xl"
              classNames={{
                months: "flex flex-col space-y-4 w-full",
                month: "space-y-4 w-full",
                caption: "flex justify-center pt-2 pb-4 relative items-center",
                caption_label: "text-lg font-semibold text-gray-800",
                nav: "space-x-1 flex items-center",
                nav_button:
                  "h-8 w-8 bg-gray-100 hover:bg-red-100 p-0 opacity-70 hover:opacity-100 rounded-full transition-all duration-200 flex items-center justify-center",
                nav_button_previous: "absolute left-2",
                nav_button_next: "absolute right-2",
                table: "w-full border-collapse space-y-1",
                head_row: "flex w-full",
                head_cell: "text-gray-500 rounded-md w-full font-medium text-sm text-center py-2",
                row: "flex w-full mt-1",
                cell: "text-center text-sm p-1 relative flex-1 [&:has([aria-selected])]:bg-red-50 first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg focus-within:relative focus-within:z-20",
                day: "h-10 w-full p-0 font-medium aria-selected:opacity-100 hover:bg-red-50 rounded-lg transition-all duration-200 flex items-center justify-center",
                day_selected:
                  "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 hover:text-white focus:from-red-500 focus:to-pink-500 focus:text-white shadow-md",
                day_today: "bg-blue-100 text-blue-800 font-bold border-2 border-blue-300",
                day_outside: "text-gray-300 opacity-50",
                day_disabled: "text-gray-300 opacity-30 line-through cursor-not-allowed hover:bg-transparent",
                day_range_middle: "aria-selected:bg-red-100 aria-selected:text-red-800",
                day_hidden: "invisible",
              }}
              components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
              }}
            />

            {/* Action Buttons */}
            <div className="flex justify-between pt-4 border-t border-gray-100">
              <Button
                variant="outline"
                size="sm"
                onClick={clearSelection}
                className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
              >
                Clear
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={selectToday}
                className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
              >
                Today
              </Button>
            </div>

            {/* Legend */}
            <div className="space-y-3 text-sm pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-600 font-medium">Selected dates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-300 rounded-full"></div>
                  <span className="text-gray-600 font-medium">Today</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full opacity-50"></div>
                <span className="text-gray-500">Unavailable</span>
              </div>
            </div>

            {/* Selected Dates Display */}
            {selectedDates.length > 0 && (
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-100 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Selected Dates ({selectedDates.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDates.map((date, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      {date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  Total nights: <span className="font-semibold text-red-600">{selectedDates.length}</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
