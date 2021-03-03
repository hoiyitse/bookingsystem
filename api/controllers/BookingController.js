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

    // // action - list
    // list: async function (req, res) {

    //     var everyones = await Booking.find();

    //     return res.view('booking/list', { bookings: everyones });
    // },

    // // action - read
    // read: async function (req, res) {

    //     var thatBooking = await Booking.findOne(req.params.id);

    //     if (!thatBooking) return res.notFound();

    //     return res.view('booking/read', { booking: thatBooking });
    // },

    // // action - delete 
    // delete: async function (req, res) {

    //     var deletedBooking = await Booking.destroyOne(req.params.id);

    //     if (!deletedBooking) return res.notFound();

    //     return res.ok();
    // },

    // // action - update
    // update: async function (req, res) {

    //     if (req.method == "GET") {

    //         var thatBooking = await Booking.findOne(req.params.id);

    //         if (!thatBooking) return res.notFound();

    //         return res.view('booking/update', { booking: thatBooking });

    //     } else {

    //         var updatedBooking = await Booking.updateOne(req.params.id).set(req.body);

    //         if (!updatedBooking) return res.notFound();

    //         return res.ok();
    //     }
    // },

    // // search function
    // search: async function (req, res) {

    //     var whereClause = {};

    //     if (req.query.bookingID) whereClause.bookingID = { contains: req.query.bookingID };

    //     // var parsedStudtName = parseInt(req.query.studtName);
    //     // if (!isNaN(parsedStudtName)) whereClause.studtName = parsedStudtName;

    //     var thoseBookings = await Booking.find({
    //         where: whereClause,
    //         sort: 'name'
    //     });

    //     return res.view('booking/list', { bookings: thoseBookings });
    // },

    // // action - paginate
    // paginate: async function (req, res) {

    //     var limit = Math.max(req.query.limit, 2) || 2;
    //     var offset = Math.max(req.query.offset, 0) || 0;

    //     var someBookings = await Booking.find({
    //         limit: limit,
    //         skip: offset
    //     });

    //     var count = await Booking.count();

    //     return res.view('booking/paginate', { bookings: someBookings, numOfRecords: count });
    // },
};

