
import React from "react"; // Import React
import { cn } from "@/lib/utils"

// Use JSDoc to simulate typing (optional, for better editor support)
 /**
  * @typedef {Object} InputProps
  * @extends React.InputHTMLAttributes<HTMLInputElement>
  * @property {string} [className]
  * @property {string} [type]
  */

/**
 * Input component with forwardRef.
 *
 * @param {InputProps} props
 * @param {React.Ref<HTMLInputElement>} ref
 * @returns {JSX.Element}
 */
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

// Set display name for the component (helps for debugging)
Input.displayName = "Input";

// Export the Input component
export { Input };