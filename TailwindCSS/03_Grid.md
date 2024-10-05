## **3. Grid**

### **Grid Template Columns**

- **`grid-cols-1`, `grid-cols-2`, ..., `grid-cols-12`**: Defines the number of columns in a grid layout. For example, `grid-cols-3` creates three equal-width columns.

---

### **Grid Template Rows**

- **`grid-rows-1`, `grid-rows-2`, ..., `grid-rows-12`**: Defines the number of rows in a grid layout. For example, `grid-rows-3` creates three rows of equal height.

---

### **Gap**

- **`gap-0`, `gap-1`, ..., `gap-24`**: Defines the space between grid items, both horizontally and vertically. The higher the number, the larger the space between items.
- **`gap-x-0`, `gap-x-1`, ..., `gap-x-24`**: Controls the horizontal spacing between grid items.
- **`gap-y-0`, `gap-y-1`, ..., `gap-y-24`**: Controls the vertical spacing between grid items.

---

### **Grid Auto Flow**

- **`grid-flow-row`**: Places grid items in rows by default (standard flow).
- **`grid-flow-col`**: Places grid items in columns by default.
- **`grid-flow-row-dense`**: Fills rows as densely as possible, trying to fill empty spaces.
- **`grid-flow-col-dense`**: Fills columns as densely as possible, trying to fill empty spaces.

---

### **Additional Grid Properties**

1. **Grid Column Start / End**

   - **`col-start-1`, `col-end-3`, etc.`**: Specifies where a grid item starts or ends in a column. For example, `col-start-2` starts an item in the second column.
   - **`col-span-1`, `col-span-2`, etc.`**: Allows an item to span across multiple columns. For example, `col-span-2` makes an item span across two columns.

2. **Grid Row Start / End**

   - **`row-start-1`, `row-end-3`, etc.`**: Specifies where a grid item starts or ends in a row.
   - **`row-span-1`, `row-span-2`, etc.`**: Allows an item to span across multiple rows.

3. **Auto Rows / Auto Columns**

   - **`auto-rows-auto`, `auto-rows-min`, `auto-rows-max`, `auto-rows-fr`**: Controls the size of automatically created rows. For example, `auto-rows-min` creates rows as small as the content needs, while `auto-rows-fr` divides the available space.
   - **`auto-cols-auto`, `auto-cols-min`, `auto-cols-max`, `auto-cols-fr`**: Similar to `auto-rows`, but controls columns.

4. **Justify / Align Content in Grid**

   - **`justify-items-start`, `justify-items-center`, `justify-items-end`**: Controls horizontal alignment of grid items within their respective grid areas.
   - **`align-items-start`, `align-items-center`, `align-items-end`**: Controls vertical alignment of grid items within their grid areas.

5. **Justify / Align Self**
   - **`justify-self-start`, `justify-self-center`, `justify-self-end`**: Controls the horizontal alignment of individual grid items.
   - **`align-self-start`, `align-self-center`, `align-self-end`**: Controls the vertical alignment of individual grid items.

---

These properties give you control over the size, position, and alignment of grid items, making it easier to create complex layouts in a responsive and organized manner.
