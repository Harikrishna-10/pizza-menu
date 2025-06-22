import React from "react";

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  let packedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent == 100
          ? "You got everything ready to go "
          : `😉 You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percent}%)`}
      </em>
    </footer>
  );
}
