import React from 'react';
import { FaGripVertical } from 'react-icons/fa';
import { DndContext,closestCenter, useSensor, useSensors, PointerSensor} from '@dnd-kit/core';
import {arrayMove, SortableContext, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, field, renderInputField }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners} className='text-2xl
    cursor-move flex justify-between gap-10 items-center flex-row border border-cyan-700 rounded-md p-3'>
      <div className='flex flex-row gap-5 items-center'><FaGripVertical /> {field.name}</div>
      <div className='flex flex-row gap-5'>
     
      </div>
    </li>
  );
};

const LayoutSection = ({ fields, setFields }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFields((items) => {
        const oldIndex = items.findIndex((item) => item.name === active.id);
        const newIndex = items.findIndex((item) => item.name === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const renderInputField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'date':
      case 'url':
      case 'tel':
      case 'range':
      case 'search':
      case 'datetime-local':
      case 'datetime':
      case 'time':
        return <input type={field.type} name={field.name} className='cursor-pointer
      text-black text-xl bg-slate-50 border b-t-1 rounded-md p-2' />;
      case 'checkbox':
        return <input type='checkbox' name={field.name} className='cursor-pointer' />;
      case 'radio':
        return <input type='radio' name={field.name} className='cursor-pointer' />;
      default:
        return <input type='text' name={field.name} className='cursor-pointer
      text-black text-xl bg-slate-50 border b-t-1 rounded-md p-2' />;
    }
  };
   
  return (
    <div>
      <p className='text-lg p-2'><span className=' md:border b-t-1 rounded-full px-2 text-base'>!
      </span> You can start adding fields with Input Creator.</p>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={fields.map((field) => field.name)} strategy={verticalListSortingStrategy}>
          <ul className='flex flex-col gap-3'>
            {fields.map((field, index) => (
              <SortableItem key={field.name} id={field.name} field={field} renderInputField={renderInputField} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default LayoutSection;