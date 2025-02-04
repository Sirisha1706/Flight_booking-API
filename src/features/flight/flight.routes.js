import express from 'express';
import { allBookings, bookFlight, searchFlights } from './flight.controller.js';
import { auth } from '../../middlewares/jwt.auth.js';

const router = express.Router();

router.route('/search-flights').post(auth, searchFlights);
router.route('/book-flight').post(auth, bookFlight);
router.route('/bookings/:id').get(auth, allBookings);

export default router;