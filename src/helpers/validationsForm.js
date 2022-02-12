export const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El Nombre es requerido';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El Nombre solo acepta letras y espacios en blanco';
  }

  if (!form.email.trim()) {
    errors.email = 'El Email es requerido';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El Email es incorrecto';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El Asunto a tratar es requerido';
  }

  if (!form.comments.trim()) {
    errors.comments = 'El Comentario es requerido';
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = 'El Comentario no debe exceder los 255 caracteres';
  }

  return errors;
};
