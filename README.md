# medical care healthy client

medical care healthy is a web application designed to manage appointments and bookings for a medical clinic. It provides features for users to schedule appointments with doctors, administrators to manage doctors and appointments, and a payment system for booking confirmations.

## Technologies Used

- React
- React Router DOM
- React Hook Form
- Firebase Authentication
- JSON API
- React Toastify

## Features

- **User Authentication**: Users can register, login, and obtain JSON Web Tokens (JWT) for authentication.
- **Appointment Scheduling**: Users can view available appointment options, book appointments, and receive confirmation emails.
- **Administrator Dashboard**: Administrators can manage doctors, view bookings, and grant administrative privileges.
- **Stripe Integration**: Integration with Stripe for processing payments for bookings.
- **MongoDB Database**: Data is stored in a MongoDB database for persistence.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Rahulfordev/medical-care-healthy-client.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   VITE_API_KEY =
   VITE_DOMAIN =
   VITE_PROJECT_ID =
   VITE_STORAGE_BUCKET=
   VITE_MSG_SENDER_ID=
   VITE_APP_ID=
   VITE_STRIPE_PK=
   VITE_IMGBB_KEY=
   ```

4. Run the application:

   ```
   npm run dev
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
