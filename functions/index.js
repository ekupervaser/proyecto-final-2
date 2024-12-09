const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { MercadoPagoConfig, Payment } = require('mercadopago');
const cors = require('cors')({ origin: true });

admin.initializeApp();

const client = new MercadoPagoConfig({
  accessToken: 'TEST-3263095268487559-110212-704d0616029b022da7e5d4fdb3d73602-32392927'
});

// Función para crear la preferencia de pago
exports.createPaymentPreference = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { title, description, quantity, price } = req.body;

    const preference = {
      items: [{
        title,
        description,
        quantity,
        currency_id: 'ARS',
        unit_price: price
      }],
      back_urls: {
        success: 'https://tu-proyecto.com/success',
        failure: 'https://tu-proyecto.com/failure',
        pending: 'https://tu-proyecto.com/pending'
      },
      auto_return: 'approved',
      notification_url: 'https://tu-servidor.com/notification'
    };

    try {
      const payment = new Payment(client);
      const response = await payment.create({ body: preference });
      res.status(200).send({ preferenceId: response.body.id });
    } catch (error) {
      console.error("Error al crear la preferencia de pago:", error);
      res.status(500).send({ error: "Error al crear la preferencia de pago", details: error.message });
    }
  });
});

// Función para procesar el pago
exports.processPayment = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const paymentData = req.body;

    try {
      const payment = new Payment(client);
      const paymentResponse = await payment.create({ body: paymentData });
      res.status(200).send(paymentResponse.body);
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      res.status(500).send({ error: "Error al procesar el pago", details: error.message });
    }
  });
});