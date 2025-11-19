# 🌍 Country Flags Explorer

A simple and interactive *React* application that displays country flags using the *REST Countries API*. Users can search for any country, view its flag and name, and click on a country card to open a detailed page showing additional information such as capital, region, and population.  

## ✨ Features  

 - 🔍 **Search Functionality** — Quickly find countries by name  
 - 🏳️ **Flag Display** — Shows a grid of country flags with names  
 - 👉 **Clickable Cards** — Clicking a flag opens a detailed view  
 - 📄 **Detail Page** — Displays flag, country name, capital, region, and population  
 - 🌐 **REST Countries API** — Fetches real-time country data  
 - ⚛️ **Built with React** — Fast and component-based UI  

## 🚀 Tech Stack  

 - React  
 - React Router  
 - REST Countries API  
 - Tailwind CSS  

## 🛠️ Usage  

 1. Home page loads all countries with flags.  
 2. Use the search bar to filter countries by name.  
 3. Click a country card to open the details page.  
 4. View details like:  
    - Country name  
    - Capital  
    - Region  
    - Population  
    - Flag  

## 📁 Folder Structure  

 ├── 📁 src/  
 │   ├── 📁 Pages/  
 │   │   ├── 📄 CountryDetails.jsx  
 │   │   ├── 📄 CountryList.jsx  
 │   │   └── 📄 Loding.jsx  
 │   ├── 🎨 App.css  
 │   ├── 📄 App.jsx  
 │   ├── 🎨 index.css  
 │   └── 📄 main.jsx  
 ├── ⚙️ .gitignore  
 ├── 📝 README.md  
 ├── 📄 eslint.config.js  
 ├── 🌐 index.html  
 ├── ⚙️ package-lock.json  
 ├── ⚙️ package.json  
 ├── 📄 postcss.config.js  
 ├── 📄 tailwind.config.js  
 └── 📄 vite.config.js  

## 🌐 API Used

 ### REST Countries V3 API
   ```base
   https://restcountries.com/v3.1/all
   ```