# Cebu Trip Booklet Requirements

## Goal
- Create a polished static travel booklet for the Cebu trip that works well on both phone and desktop.
- Make the itinerary easy to scan at a glance while still feeling special enough to share with friends.

## Scope For V1
- Single-page offline HTML booklet.
- Japanese-first UI with English place names shown where useful.
- Hero section with trip identity, travel window, and quick stats.
- Day-by-day itinerary cards for April 2 to April 5.
- Each event shows time, title, location, cost, booking status, and short detail.
- Summary panels for transport, budget feel, and packing / prep reminders.
- Responsive layout and print-friendly styling.

## Design Direction
- Visual theme: tropical sunset, ocean breeze, city-night energy.
- Tone: premium but playful, not corporate.
- Prioritize readability over decoration when showing schedules.

## Data Structure
- Trip metadata
- Quick facts
- Highlight spots
- Daily itinerary array
- Optional notes and reminders

## Known Data Notes
- The provided text says `4月2日 (水)` through `4月5日 (土)`.
- If the intended year is 2026, the actual weekdays are:
  - 2026-04-02 = Thursday
  - 2026-04-03 = Friday
  - 2026-04-04 = Saturday
  - 2026-04-05 = Sunday
- V1 will display the trip dates prominently and avoid hard-coding conflicting weekday labels in the main UI.

## Next Iterations
- Add map links and deeper spot descriptions
- Add share / print cover mode
- Add editable JSON or CSV import path
- Add image gallery or photo placeholders
