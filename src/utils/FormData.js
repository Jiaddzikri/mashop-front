export const formData = (objects) => {
  const form = new FormData();

  for (const key in objects) {
    if (!Array.isArray(objects[key])) {
      form.append(key, objects[key]);
    } else {
      objects[key].forEach((object,index) => {
        for (const subkey in object) {
          form.append(`${key}[${index}][${subkey}]`, object[subkey]);
        }
      });
    }
  }

  return form;
};
