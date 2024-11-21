
# React Native Application

This React Native application showcases UI implementation, modern design practices, and smooth gesture-based navigation. Below is a brief overview of the key features, design choices, and implementation strategies.

---

## Key Features

1. **Home Screen Implementation:**
   - Designed and implemented the Home Screen to match the provided UI precisely.
   - Integrated a swipeable button using an external library to achieve a smooth sliding effect as per the given requirements.

2. **Trade History Screen:**
   - Redesigned the Trade History Screen with a modern, minimal design.
   - Enhanced usability with a clean layout, concise typography, and responsive styles.

3. **Swipe Gesture Navigation:**
   - Added a left swipe gesture on the Trade History Screen to navigate back to the Home Screen seamlessly.

4. **Responsive Design:**
   - Leveraged the **react-native-responsive-screen** library to ensure consistent layouts across different device sizes.

5. **Navigation:**
   - Utilized **React Navigation** for smooth and intuitive screen transitions and gesture-based navigation.   
   - Separated different stack navigators and implemented a central tab navigator to manage the app flow

6. **Code Quality:**
   - Followed best practices such as **separation of concerns** and modular code organization.
   - Maintained a clean and scalable folder structure.

---

## Folder Structure

```
app/
│
├── assets/                     # Static assets like images, icons, etc.
│   └── icons/
│       ├── thunder.png
│
├── components/                 # Reusable UI components
│
├── screens/                    # Screens of the application
│   ├── HomeScreen.js           # Home Screen implementation
│   ├── HistoryScreen.js        # Redesigned Trade History Screen
│
├── navigation/
│   └── HomeNavigator.js        # Home stack navigator 
│   └── AppNavigator.js         # Root navigator with bottom tabs
│
├── utils/                      # Utility functions and helpers
│   └── responsive.js           # Responsive scaling utilities
│
├── config/                     # App configuration and constants
│   └── colors.js               # Theme colors
│
└── App.js                      # Root component
```

---

## Technologies and Libraries

- **React Native:** Core framework for building the application.
- **React Navigation:** Enabled smooth navigation between screens with gestures.
- **React Native Responsive Screen:** Ensured layouts are device-independent.
- **rn-swipe-button:** Used for swipeable button implementation.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npx expo start
   ```

---

## Summary

This project demonstrates:
- Precision in implementing provided designs (Home Screen).
- Creativity in modernizing designs (Trade History Screen).
- Clean coding practices with modular components, reusable utilities, and a scalable folder structure.
- Advanced gestures and responsiveness for a seamless user experience.

This application serves as a testament to strong UI development, effective use of libraries, and adherence to industry best practices.
