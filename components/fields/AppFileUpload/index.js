import { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Controller, useFieldArray } from 'react-hook-form';
const style = {
  boxSizing: 'border-box',
  height: '155px',
  background: '#FAFAFA',
  border: '1px dashed #BDCEDD',
  borderRadius: '8px',
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      console.log('FILE UPLOAD:', error);
      reject(error);
    };
  });

export default function AppFileUpload(props) {
  const { label, register, name, error, isRequired, control } = props;

  const onDrop = async (item) => {
    console.log('dropped', item);

    for (let index = 0; index < item.files.length; index++) {
      const element = item.files[index];
      // const base64 = await toBase64(element);
      // if (base64) {
      append({ name: element.name, data: element });
      // }
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        if (onDrop) {
          onDrop(item);
        }
      },
      canDrop(item) {
        console.log('canDrop', item.files, item.items);
        return true;
      },
      hover(item) {
        console.log('hover', item.files, item.items);
      },
      collect: (monitor) => {
        const item = monitor.getItem();
        if (item) {
          console.log('collect', item.files, item.items);
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [props]
  );

  useEffect(
    (_) => {
      console.log(fields);
    },
    [fields]
  );
  const isActive = canDrop && isOver;
  return (
    <>
      <div ref={drop} style={style}>
        {isActive ? 'Release to drop' : 'Drag file here'}
      </div>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              key={item.id} // important to include key with field's id
              {...register(`${name}.${index}.file`)}
              hidden
            />
            <Controller
              render={({ field: { value } }) => (
                <>
                  <p>{value}</p>
                </>
              )}
              name={`${name}.${index}.name`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={() => append(['a', 'b'])}>
        append
      </button>
    </>
  );
}
