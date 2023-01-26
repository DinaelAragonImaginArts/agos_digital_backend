import sgMail from '@sendgrid/mail';

export const envio = async (datos) => {
  const { nombre, correo, telefono, detalles } = datos;
  const info = {
    from: 'info@agos.mx',
    to: 'info@agos.mx',
    subject: `Nombre: ${nombre}`,
    text: `Correo: ${correo}`,
    html: `
    <p>Nombre: ${nombre}</p>
    <p>CORREO: ${correo}</p>
    <p>TELÉFONO: ${telefono}</p>
    <p>CUÉNTANOS TU VISIÓN: ${detalles}</p>
    `
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgMail
    .send(info)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};

