



# Dynamic Hotel Listing Website

This project is a dynamic hotel listing web application built using Next.js App Router, Tailwind CSS, and TypeScript. The website allows users to explore a list of hotels, change locations, and view detailed information about each hotel. It leverages the modern Next.js App Router for routing and data fetching.  


## Features

### Dynamic Location Change: Users can select or change their location to filter the hotels based on their preference.
### Hotel Listing: A list of hotels dynamically populated based on the selected location.
### Hotel Details Page: Clicking on a hotel from the list redirects the user to the detailed page of that hotel, displaying:
### Hotel name
### Address
### Description
### Pricing details
### Images, etc.
### Server-side Rendering (SSR): Ensures optimized SEO and faster load times for all pages using the Next.js App Router features.
### Responsive Design: The website is fully responsive and works seamlessly across all devices (desktop, tablet, and mobile).

## Technologies Used

### Frontend Framework: Next.js (App Router) - for routing, layouts, and SSR/SSG functionality.
### Styling: Tailwind CSS - for utility-first and responsive design.
### Programming Language: TypeScript - for static typing and better code quality.
### Routing: Next.js App Router for dynamic and nested routing.

## Project Structure
📁 hotel-app-2 
├── 📁 app  
│   ├── 📁 hotel-details
│   │   ├── 📁 [slug]/[hotelId]  
│   │   │   ├── 📄 page.tsx    
│   │   ├── 📄 page.tsx        
│   ├── 📄 layout.tsx          
│   ├── 📄 page.tsx            
├── 📁 components  
│   ├── 📄 AboutProperty.tsx       
│   ├── 📄 Header.tsx          
│   ├── 📄 Ameneties.tsx  
    |...        
├── 📁 styles  
│   ├── 📄 globals.css         
├── 📁 public                  
├── 📄 tailwind.config.js      
├── 📄 tsconfig.json        
├── 📄 package.json            



## Getting Started

Follow the steps below to set up and run the project locally:  

### Prerequisites
Node.js installed (v18+ recommended)  
Package manager: npm 


### 1st go to the following link and download and  run the follwing project first then proceed from the the installation


```
https://github.com/uzzalcse/hotel-management-api.git

```


### Installation

#### 1. Clone the git repository 

```
git clone https://github.com/uzzalcse/hotel-app-2.git
cd hotel-app-2

```

#### 2. Install dependencies:

```
npm install

```
#### 3. Run the development server:

```
npm run dev

```

#### 4. Open your browser and visit:
http://localhost:3000


### Scripts 

npm run dev: Start the development server.  
npm run build: Build the project for production.  
npm run start: Start the production server.  
npm run lint: Run ESLint to analyze code for errors and enforce consistent style.  

### Key app features

Layouts: Centralized layout configuration in app/layout.tsx for consistency across pages.  
Dynamic Routes: Handles dynamic paths like /hotel-details/[slug]/[hotelId] for rendering hotel-specific details.  
Data Fetching: Supports Server Components and React Hooks for server-side and client-side data fetching.   
Built-in SEO: Easily add metadata like titles and descriptions for every page.  

### Future improvements

Add user authentication and account management.  
Integrate a third-party API for real-time hotel data or booking functionality.  
Include user reviews and ratings for each hotel.  
Add filters for price range, amenities, and star ratings.  


### Contributing 

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.


### Contact
If you have any questions or suggestions, feel free to reach out:  
Uzzal Mia - uzzalmia227@gmail.com



