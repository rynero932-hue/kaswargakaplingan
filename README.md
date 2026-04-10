<div align="center">
  <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 40px; border-radius: 20px; display: inline-block;">
    <h1 style="color: white; margin: 0; font-size: 3em;">Kas Group Manager</h1>
    <p style="color: rgba(255,255,255,0.8); font-size: 1.2em; margin-top: 10px;">A modern and robust application for managing community payments.</p>
  </div>
</div>

# Kas Group Manager

Kas Group Manager is a responsive, single-page professional web application designed to help communities, groups, and organizations manage their recurring group cash collections (Iuran Kas) effortlessly. Built with React, Tailwind CSS, and Vite.

## Features

- **Dashboard Analytics**: Beautiful charts and cards representing the statistics of collected vs pending payments.
- **Member Management**: Easily add and remove community members.
- **Payment Periods**: Create monthly payment periods to track community dues.
- **Payment Status Tracking**: Toggle between `Paid`, `Unpaid`, and `Exempt` statuses with one click.
- **Admin Authentication**: Built-in Admin mode to restrict who can edit or manage the financial records.
- **Data Export & Import**: Allows backing up your local data to JSON and restoring it.
- **Local Storage Driven**: Simple by default, meaning no heavy backend is required, and your data remains private natively in your browser.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` (or the port specified by Vite) in your browser.

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Recharts](https://recharts.org/) - Data visualization

## License

This project is licensed under the Apache 2.0 License.
