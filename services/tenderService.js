const Tender = require('../models/tenderModel');
const Offer = require('../models/offerModel');

const tenderService = {

    getAllActiveTenders: async () => {
        const tenders = await Tender.getAllActive();
        return tenders;
    },

    getAllCompletedTenders: async () => {
        const tenders = await Tender.getAllCompleted();
        return tenders;
    },

    getTenderById: async (tenderId) => {
        const tender = await Tender.getById(tenderId);
        return tender;
    },

    checkIfTenderIsActive: async (tenderId) => {
        const tender = await Tender.getById(tenderId);
        const currentDate = new Date();
        const completed = tender.endDate < currentDate;
        return completed;
    },

    getAllSuitableWithTenderId: async (tenderId) => {
        const offers = Offer.getAllSuitableWithTenderId(tenderId);
        return offers;
    },

    createTender: async (title, institution, description, startDate, endDate, budget) => {
        const tender = Tender.create(title, institution, description, startDate, endDate, budget);
        return tender;
    }

};

module.exports = tenderService;