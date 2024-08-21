# File and Folder Naming Conventions for React Project Alumni-Meet.

## Introduction

In React projects, organizing files and folders with a consistent naming convention is crucial for maintaining clarity, scalability, and ease of navigation. Adhering to these conventions helps improve code readability, simplifies collaboration, and ensures that the project remains manageable as it grows.

## Conventions

### 1. Folder Names

**Lowercase**: Use lowercase letters for all folder names. This convention avoids issues with case sensitivity across different operating systems.

**Example**: `components`, `assets`, `utils`

### 2. Component Files

**CamelCase**: Use CamelCase (PascalCase) for component file names to distinguish them easily from other files and to align with React’s component naming style.

**Example**: `Button.js`, `AppHeader.js`

### 3. Function Files

**CamelCase**: Use CamelCase for utility function files, ensuring consistency with component naming.

**Example**: `fetchData.js`, `calculateSum.js`

### 4. CSS Files

**Component-Specific Naming**: Name CSS files to match the component they style, using the `.module.css` extension for CSS Modules to scope styles locally.

**Example**: 
- Component File: `Button.js`
- CSS File: `Button.module.css`

**Note**: For global styles or non-component-specific CSS, use a `.css` extension without the `module` suffix.

### 5. Directory Structure

Maintain a clear and organized directory structure to keep related files together and facilitate easy navigation.

```plaintext
/src
  /assets
    /images
      logo.png
  /components
    /Button
      Button.js
      Button.module.css
    /AppHeader
      AppHeader.js
      AppHeader.module.css
  /utils
    fetchData.js
    calculateSum.js
  App.js
  index.js
  styles.css
