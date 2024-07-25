# restaurantr-redux

Yelp meets instagram with the power of LLMs. Find out what your friends
REALLY think of the restaurants in your town!

## Project Structure

- `api/`: Ruby on Rails API
- `restaurantr/`: React Native mobile application

## API (Ruby on Rails)

### Prerequisites

- Ruby (version 2.7.0 or later recommended)
- Rails (version 6.0.0 or later recommended)
- Bundler

### Setup and Installation

1. Navigate to the API directory:
cd api

2. Install dependencies:
bundle install

3. Set up the database:
rails db:create db:migrate

4. (Optional) Seed the database:
rails db:seed

### Running the API

To start the Rails server:

rails server
clean

By default, the server will run on `http://localhost:3000`.

## Mobile App (React Native with Expo)

### Prerequisites

- Node.js (version 12 or later)
- npm or yarn
- Expo CLI

### Setup and Installation

1. Navigate to the React Native project directory:
cd restaurantr

1. Install dependencies:
npx expo install

### Running the Mobile App

1. Start the Expo development server:
npx expo start

1. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal, or run on an emulator by pressing 'a' for Android or 'i' for iOS.

## Development

When developing, make sure both the Rails API and the Expo development server are running simultaneously.