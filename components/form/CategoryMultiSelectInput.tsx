"use client";

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";

import { Category } from "@/lib/api/types/itemTypes/category";
import { useState } from "react";

interface MultiSelectProps {
  categories: Category[];
  defaultSelected?: Category[];
}

export function CategoryMultiSelectInput({
  categories,
  defaultSelected = [],
}: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>(
    defaultSelected.map((cat) => String(cat.id))
  );

  return (
    <>
      <MultiSelect values={selected} onValuesChange={setSelected}>
        <MultiSelectTrigger className="w-full max-w-[400px]">
          <MultiSelectValue placeholder="Select item category..." />
        </MultiSelectTrigger>
        <MultiSelectContent>
          <MultiSelectGroup>
            {categories.map((cat) => {
              return (
                <MultiSelectItem
                  key={cat.id}
                  value={String(cat.id)}
                  data-search={cat.name.toLowerCase()}
                >
                  {cat.name}
                </MultiSelectItem>
              );
            })}
          </MultiSelectGroup>
        </MultiSelectContent>
      </MultiSelect>

      {/* hidden inputs for FormData */}
      {selected.map((val) => (
        <input key={val} type="hidden" name="categories[]" value={val} />
      ))}
    </>
  );
}
