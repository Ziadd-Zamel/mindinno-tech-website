# TechVision Landing Page

A modern, responsive landing page built with Next.js 15, featuring internationalization, smooth animations, and a clean architecture. This project showcases a professional tech company's services, projects, and contact form with a focus on performance, accessibility, and user experience.

## 🚀 Tech Stack

### Core Framework

- **Next.js 15.4.5** - React framework with App Router for server-side rendering and optimal performance
- **React 19.1.0** - Latest React version with improved concurrent features
- **TypeScript 5** - Type safety and enhanced developer experience

### Internationalization

- **next-intl 4.3.4** - Seamless i18n support for English and Arabic with RTL support

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautiful, accessible component library built on Radix UI
- **Framer Motion 12.23.12** - Production-ready motion library for smooth animations
- **Lucide React 0.539.0** - Beautiful icon library
- **next-themes 0.4.6** - Dark mode support with system preference detection

### Form Management & Validation

- **React Hook Form 7.62.0** - Performant form library with minimal re-renders
- **Zod 4.0.14** - TypeScript-first schema validation
- **@hookform/resolvers 5.2.1** - Validation resolver for React Hook Form

### State Management & Data Fetching

- **@tanstack/react-query 5.84.1** - Powerful data synchronization for React (prepared for future API integration)
- **Sonner 2.0.7** - Beautiful toast notifications

### Utilities

- **class-variance-authority 0.7.1** - Component variant management
- **clsx 2.1.1** - Conditional class names
- **tailwind-merge 3.3.1** - Merge Tailwind classes intelligently

## 📁 Project Structure

```
landing-page-task/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [locale]/                 # Internationalization route group
│   │   │   ├── (homePage)/          # Homepage route group
│   │   │   │   ├── _components/     # Page-specific components
│   │   │   │   │   ├── hero.tsx     # Hero section
│   │   │   │   │   ├── services.tsx # Services section
│   │   │   │   │   ├── projects.tsx # Projects showcase
│   │   │   │   │   └── contact.tsx  # Contact form
│   │   │   │   ├── layout.tsx       # Homepage layout
│   │   │   │   └── page.tsx         # Homepage entry point
│   │   │   ├── layout.tsx           # Locale-specific layout
│   │   │   ├── error.tsx            # Error boundary
│   │   │   └── not-found.tsx        # 404 page
│   │   └── layout.tsx               # Root layout
│   ├── components/                   # Reusable components
│   │   ├── common/                  # Common shared components
│   │   │   └── logo.tsx            # Logo component
│   │   ├── layout/                  # Layout components
│   │   │   ├── header/             # Header/Navbar
│   │   │   │   ├── _components/    # Header sub-components
│   │   │   │   │   ├── navbar.tsx
│   │   │   │   │   ├── mobile-menu.tsx
│   │   │   │   │   ├── theme-switcher.tsx
│   │   │   │   │   └── switch-lang.tsx
│   │   │   │   └── index.tsx
│   │   │   └── footer/             # Footer component
│   │   │       ├── components/
│   │   │       │   └── footer.tsx
│   │   │       └── index.tsx
│   │   ├── providers/               # Context providers
│   │   │   ├── components/
│   │   │   │   └── react-query.provider.tsx
│   │   │   └── index.tsx
│   │   └── ui/                      # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       └── ...                  # Other UI primitives
│   ├── i18n/                        # Internationalization
│   │   ├── messages/                # Translation files
│   │   │   ├── en.json             # English translations
│   │   │   └── ar.json             # Arabic translations
│   │   ├── navigation.ts            # Navigation utilities
│   │   ├── request.ts               # i18n request handler
│   │   └── routing.ts               # Routing configuration
│   ├── lib/                         # Utilities and configurations
│   │   ├── constants/               # App constants
│   │   │   ├── footer.constant.ts
│   │   │   ├── header.constant.ts
│   │   │   ├── projects.constant.ts
│   │   │   └── services.constant.ts
│   │   ├── schemas/                 # Zod validation schemas
│   │   │   └── contact.schema.ts
│   │   └── utils/                   # Utility functions
│   │       ├── tailwind-merge.ts
│   │       └── utils.ts
│   └── middleware.ts                # Next.js middleware for i18n
├── public/                          # Static assets
│   └── assets/                     # Images, icons, etc.
└── package.json
```

## 🎯 Implementation Approach & Design Decisions

### Why This Structure?

#### 1. **App Router with Locale Grouping (`[locale]`)**

- **Reason**: Next.js 15 App Router provides better performance with React Server Components
- **Benefit**: Automatic code splitting, optimized bundle sizes, and server-side rendering
- **Locale grouping**: All routes are wrapped in `[locale]` to support i18n seamlessly
- **Route groups `(homePage)`**: Organize routes without affecting URL structure

#### 2. **Component Organization Strategy**

- **`_components/` prefix**: Indicates page-specific components that aren't meant to be reused elsewhere
- **Separation of concerns**:
  - `components/ui/` - Reusable UI primitives (shadcn/ui)
  - `components/layout/` - Layout-specific components (Header, Footer)
  - `components/common/` - Shared business components
  - `app/[locale]/(homePage)/_components/` - Page-specific components

#### 3. **Constants & Schemas Separation**

- **Why separate constants?**:
  - Easy to maintain and update content
  - Type-safe with TypeScript
  - Can be easily moved to CMS or API later
- **Schema-based validation**: Using Zod ensures type safety and runtime validation
- **Translation keys in constants**: Services and projects use translation keys, making i18n seamless

#### 4. **Internationalization Architecture**

- **next-intl integration**: Chosen for its excellent Next.js 15 App Router support
- **RTL support**: Automatic direction switching for Arabic (`dir="rtl"`)
- **Static generation**: `generateStaticParams()` pre-renders all locales at build time
- **Translation files**: JSON-based translations for easy maintenance

#### 5. **Form Handling Pattern**

- **React Hook Form + Zod**:
  - Minimal re-renders (performance)
  - Type-safe validation
  - Easy error handling
- **Schema hook pattern**: `useContactSchema()` allows translations in validation messages

#### 6. **Animation Strategy**

- **Framer Motion**:
  - Smooth, performant animations
  - Scroll-triggered animations with `whileInView`
  - Stagger animations for lists (services)
- **CSS transitions**: Used for hover effects and micro-interactions

#### 7. **Styling Approach**

- **Tailwind CSS 4**: Utility-first for rapid development
- **shadcn/ui**: Accessible, customizable components
- **Dark mode**: System preference detection with manual toggle
- **Responsive design**: Mobile-first approach with breakpoint utilities

### Development Workflow

The project was built incrementally following this commit history:

1. **Initial Setup** (`65211e9`)
   - Project structure with Next.js 15
   - Core dependencies installation
   - TypeScript configuration
   - Tailwind CSS setup

2. **Layouts** (`643ae6f`)
   - Navbar with navigation, theme switcher, and language switcher
   - Footer with company links and information
   - Responsive mobile menu

3. **Hero Section** (`3c9c548`)
   - Animated hero with gradient background
   - Call-to-action buttons
   - Smooth entrance animations

4. **Projects Section** (`7b40d57`)
   - Project showcase cards
   - Technology tags
   - Hover effects and animations

5. **Contact Section** (`66fc96d`)
   - Contact form with validation
   - Form state management
   - Toast notifications

## ✨ Features

### 🎨 User Interface

- **Modern Design**: Clean, professional design with smooth animations
- **Dark Mode**: System preference detection with manual toggle
- **Responsive**: Fully responsive design for all screen sizes
- **Accessible**: Built with accessibility in mind using Radix UI primitives

### 🌐 Internationalization

- **Multi-language**: English and Arabic support
- **RTL Support**: Automatic right-to-left layout for Arabic
- **SEO-friendly**: Locale-based routing for better SEO

### 🎭 Animations

- **Scroll-triggered**: Elements animate on scroll into view
- **Stagger effects**: Sequential animations for lists
- **Hover interactions**: Smooth hover effects on interactive elements
- **Page transitions**: Smooth entrance animations

### 📝 Forms

- **Validation**: Real-time form validation with Zod
- **Type-safe**: Full TypeScript support
- **User feedback**: Clear error messages and success notifications
- **Loading states**: Visual feedback during form submission

### 🏗️ Architecture

- **Server Components**: Optimal performance with React Server Components
- **Code splitting**: Automatic code splitting by Next.js
- **Type safety**: End-to-end TypeScript
- **Scalable**: Easy to extend with new sections or features

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:

```bash
git clone <repository-url>
cd landing-page-task
```

2. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
