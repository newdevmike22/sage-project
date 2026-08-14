# The Sister Sage Files

A fictional intelligence database created and maintained by Sister Sage from *The Boys*, containing detailed profiles and analysis of key members of The Boys, various Supes, and Vought.

**Live Site:** [The Sister Sage Files](https://sister-sage-files.netlify.app/?utm_source=chatgpt.com)
**GitHub Repository:** [sage-project](https://github.com/newdevmike22/sage-project?utm_source=chatgpt.com)

## About the Project

The Sister Sage Files is an independently designed and developed Next.js project built around a fictional database of characters from *The Boys* universe.

The project was created as my third independent Next.js application and was primarily focused on taking concepts learned through my Next.js course and applying them independently to a larger, more complex application.

The central technical goal was to build a database-driven application using **dynamic routing**, allowing a single reusable profile page to display different characters based on their dynamic URL rather than creating a separate page for every character.

All profile information was written from scratch, while the project also includes original artwork created specifically for the application along with an original site logo and interface design.

## Key Features

* Dynamic character profiles using Next.js dynamic routing
* Reusable profile page powered by a centralized data file
* Search functionality integrated into the navigation
* Character navigation organized by category
* Responsive design for desktop, tablet, and mobile
* Custom CSS animation for the site header
* Original character profile artwork
* Original site logo and visual design
* Google Fonts integration using Inter and Orbitron
* Combination of Tailwind CSS and custom CSS
* Next.js `Image` and `Link` components
* TypeScript throughout the application

## Technical Highlights

### Dynamic Routing

The primary focus of the project was learning how to build dynamic routes in Next.js.

Character profiles are handled through a dynamic `[id]` route rather than individual pages for each character. The profile page retrieves the appropriate character from the application's data and renders the corresponding information.

This introduced several concepts that were new to me in the context of Next.js and TypeScript, including:

* `params`
* `async` / `await`
* `Promise`
* `find()`
* Dynamic route segments
* Data-driven page rendering

This approach makes the application considerably more scalable because adding another character does not require creating another page component.

### Component Structure

The application uses reusable components to keep the interface organized and maintainable.

The `components` directory contains:

* Navbar
* Footer
* Header
* Introduction
* Search functionality

The application also contains a dedicated data directory containing the profile information used throughout the site.

### Search & Navigation

The navigation system provides categorized access to the character profiles as well as a search field.

The search functionality uses the application's profile data to locate characters and link users directly to their corresponding dynamic profile route.

This project also introduced me to using React's `useState` hook within a Next.js application, along with the `"use client"` directive required for client-side interactive functionality.

## Project Structure

```text
src/
├── app/
│   ├── characters/
│   │   └── [id]/
│   │       └── page.tsx
│   └── ...
│
├── components/
│   ├── Footer/
│   ├── Header/
│   ├── Introduction/
│   ├── Navbar/
│   └── search/
│       └── data.ts
│
└── data/
    └── data.ts
```

The `[id]/page.tsx` file is the core of the dynamic routing system. It receives the character identifier from the URL, locates the corresponding profile in the data set, and renders the appropriate profile page.

## Built With

* **Next.js**
* **TypeScript**
* **React**
* **Tailwind CSS**
* **CSS**
* **Google Fonts**
* **Git & GitHub**
* **Netlify**

## What I Learned

This project gave me the opportunity to move beyond smaller Next.js exercises and build an application around a more substantial data-driven concept.

The primary learning objectives were:

* Building dynamic routes in Next.js
* Working with dynamic route parameters
* Using asynchronous functions and `Promise`-based operations
* Working with TypeScript in a Next.js application
* Managing client-side state with `useState`
* Understanding when and why to use `"use client"`
* Creating reusable React components
* Working with centralized application data
* Using Next.js `Image` and `Link`
* Combining Tailwind CSS with traditional CSS
* Implementing CSS animation
* Deploying a Next.js application through GitHub to Netlify

One of the more practical challenges came during deployment. This was my first time deploying a Next.js application directly from my GitHub repository to Netlify. After researching the deployment process and resolving the issues I encountered, the application was successfully deployed.

## Deployment

The application is deployed on Netlify and is available here:

[https://sister-sage-files.netlify.app/](https://sister-sage-files.netlify.app/?utm_source=chatgpt.com)

## Disclaimer

*The Sister Sage Files* is an unofficial fan-made project inspired by *The Boys*. The underlying characters and fictional universe belong to their respective copyright and trademark holders.

The application's original code, written profile content, artwork, logo, interface design, and implementation were created for this independent practice project.

---

**Designed & Built by Michael Dodson of SONICPRESS — 2026**

