## **2. Flexbox**

### **Flex Direction**

- **`flex-row`**: Lays out flex items horizontally (default).
- **`flex-row-reverse`**: Lays out flex items horizontally in reverse order.
- **`flex-col`**: Lays out flex items vertically (one item per row).
- **`flex-col-reverse`**: Lays out flex items vertically in reverse order.

---

### **Flex Wrap**

- **`flex-wrap`**: Allows flex items to wrap onto multiple lines if needed.
- **`flex-wrap-reverse`**: Wraps flex items onto multiple lines in reverse order.
- **`flex-no-wrap`**: Prevents flex items from wrapping onto multiple lines (all items remain in one line).

---

### **Flex**

- **`flex-1`**: Grows flex items to take up the available space equally.
- **`flex-auto`**: Automatically adjusts item size based on its content, with flexibility to grow or shrink.
- **`flex-initial`**: Sets item size to its initial size, allowing shrinking but not growing.
- **`flex-none`**: Prevents flex item from growing or shrinking, fixing it to its original size.

---

### **Align Items** (Vertical alignment within the flex container)

- **`items-start`**: Aligns flex items to the top/start of the container.
- **`items-end`**: Aligns flex items to the bottom/end of the container.
- **`items-center`**: Vertically centers flex items within the container.
- **`items-baseline`**: Aligns flex items along their text baseline (useful for text alignment).
- **`items-stretch`**: Stretches flex items to fill the container's height.

---

### **Align Content** (Alignment of multiple lines within the flex container)

- **`content-start`**: Aligns flex lines at the top/start of the container.
- **`content-end`**: Aligns flex lines at the bottom/end of the container.
- **`content-center`**: Centers flex lines within the container.
- **`content-between`**: Distributes flex lines with space between them.
- **`content-around`**: Distributes flex lines with space around them (equal space before and after each line).
- **`content-evenly`**: Distributes flex lines with equal space between them.

---

### **Justify Content** (Horizontal alignment of flex items within the container)

- **`justify-start`**: Aligns flex items at the left/start of the container.
- **`justify-end`**: Aligns flex items at the right/end of the container.
- **`justify-center`**: Centers flex items horizontally within the container.
- **`justify-between`**: Distributes flex items with space between them.
- **`justify-around`**: Distributes flex items with space around them (equal space before and after each item).
- **`justify-evenly`**: Distributes flex items with equal space between each item.

---

### **Gap**

- **`gap-0`, `gap-1`, ..., `gap-24`**: Sets uniform spacing between flex items (the higher the number, the greater the space).
- **`gap-x-0`, `gap-x-1`, ..., `gap-x-24`**: Sets horizontal spacing between flex items.
- **`gap-y-0`, `gap-y-1`, ..., `gap-y-24`**: Sets vertical spacing between flex items.

---

### **Additional Flexbox Properties**

1. **Order**

   - **`order-1`, `order-2`, ..., `order-last`**: Changes the order of flex items (e.g., `order-1` makes the item display first).

2. **Grow**

   - **`grow-0`**, **`grow`**: Controls how much an item should grow to fill available space. `grow-0` prevents growth, while `grow` allows it.

3. **Shrink**
   - **`shrink-0`**, **`shrink`**: Controls how much an item should shrink when necessary. `shrink-0` prevents shrinking, while `shrink` allows it.

---

These properties provide full control over the layout, alignment, and spacing of flex items, making it easier to create responsive and flexible designs in Tailwind CSS.
