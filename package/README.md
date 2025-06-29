# Gatherly NextJS

A modern event booking and community platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Event Booking System
- **Interactive Booking Modal**: Users can book events directly from event cards or event detail pages
- **Form Validation**: Comprehensive validation for name, email, phone, and ticket quantity
- **Real-time Price Calculation**: Dynamic total price calculation based on ticket quantity
- **Confetti Celebration**: Canvas-confetti animation plays after successful booking
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Booking Flow
1. Click "Book" or "Book Now" button on any event
2. Fill out the booking form with personal details
3. Select number of tickets (limited by available tickets)
4. Review total price and submit
5. Experience confetti celebration upon successful booking
6. Receive confirmation with booking ID

### Technical Implementation
- **Modal Component**: `src/components/Events/BookingModal/index.tsx`
- **Confetti Library**: `canvas-confetti` for celebration effects
- **State Management**: React hooks for form state and modal visibility
- **TypeScript**: Fully typed components and interfaces
- **Dark Mode Support**: Consistent theming across all components

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Dependencies

- `canvas-confetti`: For celebration animations
- `@types/canvas-confetti`: TypeScript definitions for canvas-confetti
- All other existing dependencies remain unchanged

## Project Structure

```
src/
├── components/
│   └── Events/
│       ├── BookingModal/
│       │   └── index.tsx          # Booking modal component
│       └── EventCard/
│           └── EventCard.tsx      # Updated with booking functionality
├── app/
│   └── (site)/
│       └── events/
│           └── [slug]/
│               └── page.tsx       # Updated with booking modal
└── types/
    └── events.ts                  # Event type definitions
```

## Usage

The booking functionality is automatically available on:
- Event detail pages (`/events/[slug]`)
- Event cards on the main events page (`/events`)
- Event cards on the home page

Users can click the "Book" or "Book Now" buttons to open the booking modal and complete their purchase with a delightful confetti celebration upon success.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
