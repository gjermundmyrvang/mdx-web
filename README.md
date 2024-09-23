## mdx-web

Website template where you can write in markdown and combine with jsx components aka mdx.

## How to use

**Add your .mdx file in the app/markdown folder _(example: about.mdx)_**

**Write whatever you want with markdown syntax**
```md
/* about.mdx */
## About me
- Point 1
- Point 2

/* Add jsx components if you want */
<MyComponent />

**Bold**
_italic_

/* Remember to add this at the bottom of every .mdx file to apply tailwindcss/typography styling */
export default ({ children }) => <div className="prose">{children}</div> 
```

**Add a folder in contents and add a page.tsx file _(example: contents/about/page.tsx)_**
**Import and refer to your .mdx file:**
  ```tsx
  import About from "@/app/markdown/about.mdx";
  export default function Home() {
  return (
    <main className="flex justify-center items-center my-5">
      <div className="relative flex flex-col max-w-7xl w-full justify-center items-center sm:p-5">
        <About />
      </div>
    </main>
  );
  }
```

**Inside markdown/contents.mdx: link to your new page**
```tsx
import Link from "next/link";

## Content

- <Link href="./contents/about" target="_blank" 
      rel="noopener noreferrer">**About me page**</Link>

export default ({ children }) => <div className="prose">{children}</div>
```

## installed

- @next/mdx
- @mdx-js/loader
- @mdx-js/react
- @types/mdx
- @tailwindcss/typography
