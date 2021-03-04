/**
 * BookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {

        if (req.method == "GET") return res.view('booking/create');

        var booking = await Booking.create(req.body).fetch();

        console.log(booking);

        return res.status(201).json({ id: booking.id });
    },

    json: async function (req, res) {

        var everyones = await Booking.find();

        return res.json(everyones);
    },

};

