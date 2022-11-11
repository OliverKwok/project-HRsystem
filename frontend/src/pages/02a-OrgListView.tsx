import { useState } from "react";
import { DragAndDrop, Drag, Drop } from "./drag-and-drop/Index";
import { reorder } from "./drag-and-drop/helpers";
import "./styles/02a-OrgListView.css";

export default function NestedList() {
  const [categories, setCategories] = useState([
    {
      id: "q101",
      name: "Category 1",
      items: [
        { id: "abc", name: "First" },
        { id: "def", name: "Second" },
      ],
    },
    {
      id: "wkqx",
      name: "Category 2",
      items: [
        { id: "ghi", name: "Third" },
        { id: "jkl", name: "Fourth" },
      ],
    },
  ]);

  const handleDragEnd = (result: any) => {
    const { type, source, destination } = result;
    if (!destination) return;

    const sourceCategoryId = source.droppableId;
    const destinationCategoryId = destination.droppableId;

    // Reordering items
    if (type === "droppable-item") {
      // If drag and dropping within the same category
      if (sourceCategoryId === destinationCategoryId) {
        const updatedOrder = reorder(
          (categories as any).find(
            (category: any) => category.id === sourceCategoryId
          ).items,
          source.index,
          destination.index
        );
        const updatedCategories = categories.map((category) =>
          category.id !== sourceCategoryId
            ? category
            : { ...category, items: updatedOrder }
        );

        setCategories(updatedCategories as any);
      } else {
        const sourceOrder = (categories as any).find(
          (category: any) => category.id === sourceCategoryId
        ).items;
        const destinationOrder = (categories as any).find(
          (category: any) => category.id === destinationCategoryId
        ).items;

        const [removed] = sourceOrder.splice(source.index, 1);
        destinationOrder.splice(destination.index, 0, removed);

        destinationOrder[removed] = sourceOrder[removed];
        delete sourceOrder[removed];

        const updatedCategories = categories.map((category) =>
          category.id === sourceCategoryId
            ? { ...category, items: sourceOrder }
            : category.id === destinationCategoryId
            ? { ...category, items: destinationOrder }
            : category
        );

        setCategories(updatedCategories);
      }
    }

    // Reordering categories
    if (type === "droppable-category") {
      const updatedCategories = reorder(
        categories,
        source.index,
        destination.index
      );

      setCategories(updatedCategories as any);
    }
  };

  return (
    <DragAndDrop onDragEnd={handleDragEnd}>
      <Drop id="droppable" type="droppable-category">
        {categories.map((category, categoryIndex) => {
          return (
            <Drag
              className="draggable-category"
              key={category.id}
              id={category.id}
              index={categoryIndex}
            >
              <div className="category-container">
                <h2 className="item">{category.name}</h2>

                <Drop key={category.id} id={category.id} type="droppable-item">
                  {category.items.map((item, index) => {
                    return (
                      <Drag
                        className="draggable"
                        key={item.id}
                        id={item.id}
                        index={index}
                      >
                        <div className="item">{item.name}</div>
                      </Drag>
                    );
                  })}
                </Drop>
              </div>
            </Drag>
          );
        })}
      </Drop>
    </DragAndDrop>
  );
}
