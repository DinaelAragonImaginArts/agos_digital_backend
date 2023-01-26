import { envio } from '../utils/email.js';

export const emailSender = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    const datos = req.body;
    envio(datos);
}