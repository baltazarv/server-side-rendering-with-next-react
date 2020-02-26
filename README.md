# server-side-rendering-with-next-react

Following [Udemy Server side rendering with Next + React](https://www.udemy.com/course/server-side-rendering-with-next-react/) course for LGBT Bar NY website.

# Architecture
Created `components/layouts/ <MainLayout>` for all pages.

Using `next/head <Head>` component to add CSS links and HTML title. Added `<Head>` to `<MainLayout>`.

Added `<Header>` inside `/inclues`.

# Styles

## Syled (JSX) Components
Next configured by default with styled components. Used on `/pages/index.js`.

## CSS
* CSS already configured.
* Add static CSS stylesheet in `/public`.
* Added link to `CSS` in `<Head>` component of `<MainLayout>` to become global stylesheet.

## SCSS
* Installed `@zeit/next-sass` and `node-sass`.
* Configured `next.config.js` for SCSS.
* `.scss` stylesheet imported by any `.js` file.
Examples:
* Imported a stylesheet  on `MainLayout.js` from a SCSS file inside `.scss`.
* Using `Header.module.scss` for `<Header>`.

## CSS Modules
* Must configure CSS Modules on `next.config.js`.
* Example: `Header.module.scss` for `<Header>`.

# SSR
## getInitialProps
Used to make AJAX call and load data on server (using `axios`). Available both on server and front-end. Data can be saved to state or props.

# Routing
SPA routing using `next/link <Link>`.

Using query string to create dynamic content. Links from `/pages/index.js` pass data to create dynamic pages with `pages/users/profile.js`.
