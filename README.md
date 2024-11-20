# Dynamic Form Generator

A **dynamic form generator** built with React, TypeScript, and Tailwind CSS. This application allows you to generate forms dynamically from a JSON schema, with real-time validation and a live preview.

[Click here for the Live Demo](https://dynamic-form-generator-eqewh37cx-mukesh-rajs-projects.vercel.app/).

---

## Features

- Real-time JSON schema validation and form generation.
- Support for multiple input types (text, email, password, select, radio, checkbox, textarea).
- Responsive design with Tailwind CSS.
- Error boundaries for stability.
- Dark mode support (bonus feature if implemented).
- Example JSON schemas to test functionality.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **npm** or **yarn**
- **Git**

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Mukeshraj12/dynamic-form-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dynamic-form-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Example JSON Schemas

Here’s a sample JSON schema to test the form generator:

### Example 1: User Registration Form

```json
{
  "formTitle": "User Registration",
  "formDescription": "Please fill out the form to register.",
  "fields": [
    {
      "id": "username",
      "type": "text",
      "label": "Username",
      "required": true,
      "placeholder": "Enter your username"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "password",
      "type": "password",
      "label": "Password",
      "required": true,
      "placeholder": "Enter your password",
      "validation": {
        "minLength": 6,
        "message": "Password must be at least 6 characters long"
      }
    }
  ]
}
```

You can copy and paste this schema into the JSON editor in the app to see the generated form.

---

## Local Development Guide

### Project Structure

```
dynamic-form-generator/
├── src/
│   ├── components/          # React components
│   │   ├── Editor.tsx       # JSON editor
│   │   ├── FormGenerator.tsx # Form generation logic
│   │   ├── ErrorBoundary.tsx # Error boundary component
│   ├── utils/               # Utility functions (e.g., schema validation)
│   ├── App.tsx              # Main application
│   └── index.tsx            # Entry point
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
├── README.md                # Documentation
```

### Scripts

- **`npm start`**: Start the development server.
- **`npm test`**: Run tests using Jest and Playwright.
- **`npm run build`**: Build the app for production.
- **`npm run lint`**: Run ESLint to check for coding issues.

### Development Notes

- **JSON Schema Updates:** Edit the JSON schema in the left panel of the app to see real-time form updates on the right.
- **Responsive Design:** The layout adjusts for mobile devices. On smaller screens, the JSON editor and preview stack vertically.
- **Testing:** Write tests in the `__tests__` folder for both unit and end-to-end testing.

---

## Contribution Guide

1. Fork the repository and clone it locally.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or suggestions, feel free to open an issue or contact the repository owner.

---

You can modify this README as needed to suit your project requirements. Let me know if you need additional help! 😊
