## **1. Layout**

### **Container**

- **`container`**: Centers content horizontally based on the screen size and adds responsive padding.

---

### **Display**

- **`block`**: Displays an element as a block (takes full width).
- **`inline-block`**: Displays as an inline block (allows width and height settings while flowing inline).
- **`inline`**: Displays an element inline (like text, no width or height adjustment).
- **`flex`**: Enables Flexbox layout for flexible and responsive layout control.
- **`inline-flex`**: Flexbox but behaves like an inline element.
- **`grid`**: Applies CSS grid layout for two-dimensional layout.
- **`inline-grid`**: Similar to grid, but behaves like an inline element.
- **`table`**: Renders the element as a table.
- **`hidden`**: Hides an element.

---

### **Box Sizing**

- **`box-border`**: Includes borders and padding in the element's total width and height.
- **`box-content`**: Excludes borders and padding from the element's width and height.

---

### **Float**

- **`float-right`**: Floats an element to the right.
- **`float-left`**: Floats an element to the left.
- **`float-none`**: Removes float from an element.

---

### **Clear**

- **`clear-left`**: Stops floating elements on the left from affecting the current element.
- **`clear-right`**: Stops floating elements on the right from affecting the current element.
- **`clear-both`**: Stops floating elements on both sides.
- **`clear-none`**: Disables clearing.

---

### **Object Fit**

- **`object-contain`**: Resizes content to fit within its container while maintaining aspect ratio.
- **`object-cover`**: Resizes content to cover its container while maintaining aspect ratio.
- **`object-fill`**: Resizes content to completely fill its container.
- **`object-none`**: Keeps original dimensions without resizing.
- **`object-scale-down`**: Scales the content down to fit if necessary but doesn’t scale up.

---

### **Object Position**

- **`object-bottom`**: Aligns content to the bottom of its container.
- **`object-center`**: Centers content within its container.
- **`object-left`**: Aligns content to the left.
- **`object-left-bottom`**: Aligns content to the bottom left.
- **`object-left-top`**: Aligns content to the top left.
- **`object-right`**: Aligns content to the right.
- **`object-right-bottom`**: Aligns content to the bottom right.
- **`object-right-top`**: Aligns content to the top right.
- **`object-top`**: Aligns content to the top.

---

### **Overflow**

- **`overflow-auto`**: Adds scrollbars only when needed (based on content).
- **`overflow-hidden`**: Hides overflowing content.
- **`overflow-visible`**: Keeps content visible even when it overflows.
- **`overflow-scroll`**: Always shows scrollbars, even if content fits.
- **`overflow-x-auto`**: Adds horizontal scrollbars when necessary.
- **`overflow-y-auto`**: Adds vertical scrollbars when necessary.

---

### **Position**

- **`static`**: Default positioning, elements flow naturally in the layout.
- **`fixed`**: Positions an element relative to the browser window.
- **`absolute`**: Positions an element relative to its nearest positioned ancestor.
- **`relative`**: Positions an element relative to its normal position.
- **`sticky`**: An element stays in view as the user scrolls until a specified point.

---

### **Top/Right/Bottom/Left**

- **`top-0`**, **`right-0`**, **`bottom-0`**, **`left-0`**: Positions elements 0 units from the respective sides.
- **`top-1`**, **`right-1`**, **`bottom-1`**, **`left-1`**: Moves elements 1 unit away from the respective sides (values increase for other numbers).

---

### **Z-Index**

- **`z-0`**, **`z-10`**, **`z-20`**, **`z-30`**, **`z-40`**, **`z-50`**: Controls the stacking order of elements (higher values bring elements in front of others).
- **`z-auto`**: Removes explicit z-index, allowing the default stack order.

---

These properties give you full control over the layout structure and visual flow of elements, helping you to manage positioning, sizing, and element relationships effectively in Tailwind CSS.
