const Offer = require('../models/offerModel');
const Tender = require('../models/tenderModel');

const offerService = {

    checkIfOffersTenderIsActive: async (tenderId) => {
        const tender = await Tender.getById(tenderId);
        if (!tender) {
            return 404;
        }
        const currentDate = new Date();
        const completed = tender.endDate < currentDate;
        if (completed) {
            return 404;
        }
        return 200;
    },

    getOffersTenderById: async (tenderId) => {
        const tender = await Tender.getById(tenderId);
        return tender;
    },

    createOffer: async (tenderId, name, value) => {
        const offer = await Offer.create(tenderId, name, value);
        return offer;
    }

};

module.exports = offerService;