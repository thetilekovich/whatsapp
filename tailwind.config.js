/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "content": "var(--content-bg)",
        "body": "var(--body-bg)",
        "content-body": "var(--content-body-bg)",
        "secondary-content": "var(--secondary-content-bg)",
        "outgoing-message": "var(--outgoing-message-bg)",
        "income-message": "var(--income-message-bg)",
        "primary": "var(--primary-text)",
        "secondary": "var(--secondary-text)",
      },
    },
  },
  plugins: [],
}
