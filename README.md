# MAST5112-POE-Phase2

# Christoffel Private Chef -(MAST5112)

## Project Overview
This repository contains the source code for a cross-platform mobile application developed using **React Native** and **TypeScript** for Christoffel, a private chef renowned for personalized culinary experiences. The app functions as a digital menu management system, allowing the chef to efficiently add dishes, categorize them by course, view average pricing, and enable guests to filter items.



## Final PoE Features Implemented
* **Dynamic Menu Management:** Allows the chef to input dish names, descriptions, courses, and prices.
* **Separate Add/Remove Screen:** The dish-entry feature has been moved from the home page to a dedicated separate screen, complete with item deletion capabilities.
* **Home Screen Dashboard:** Displays the complete menu list, total item count, and average price breakdowns calculated per course.
* **Course Filtering Page:** A dedicated view enabling guests to filter and display menu items by specific courses (Starters, Mains, Dessert).
* **Array State Storage:** Efficiently stores and manages menu items using TypeScript arrays.


## Change Log (Updates Since Part 2)

### 1. Lecturer Feedback Adjustments
* Implemented all recommended updates and corrections based on the formative feedback provided for Part 2.
* Refined form validation and error handling to ensure seamless user input.

### 2. UI/UX & Feature Enhancements
* **Dedicated Add Item Screen:** Migrated the form components away from the homepage into a separate navigation tab, decluttering the main dashboard.
* **Item Deletion:** Added functionality allowing items to be removed directly from both the home screen and management screens.
* **Average Price Analytics:** Integrated calculated metrics on the home screen to display the average price breakdown for Starters, Mains, and Desserts.
* **Course Filtering:** Added a separate filter page to improve user experience for guests browsing individual courses.

### 3. Code Refactoring & Architecture
* Refactored code structure using modular file organization and clean TypeScript functions to improve maintainability, reduce redundancy, and follow coding standards.
* Implemented React Navigation bottom tabs to handle seamless routing between the Home Screen, Add Menu Screen, and Filter Screen.
