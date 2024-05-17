const TenderService = require('../services/tenderService');

const tenderController = {

    getAllActiveTenders: async (req, res, next) => {
        try {
            const tenders = await TenderService.getAllActiveTenders();
            res.render('tendersList', { tenders });
        } catch (error) {
            next(error);
        }
    },

    getAllCompletedTenders: async (req, res, next) => {
        try {
            const tenders = await TenderService.getAllCompletedTenders();
            res.render('completedTendersList', { tenders });
        } catch (error) {
            next(error);
        }
    },

    getTenderById: async (req, res, next) => {
        const { id } = req.params;
        try {
            const tender = await TenderService.getTenderById(id);
            if (tender) {
                const completed = await TenderService.checkIfTenderIsActive(id);
                if (completed) {
                    const offers = await TenderService.getAllSuitableWithTenderId(id);
                    res.render('completedTenderInfo', { tender: tender, offers: offers });
                } else {
                    res.render('tenderInfo', { tender: tender });
                }

            } else {
                res.render('error', { error: { status: "404" }, message: "Not Found" });
                return res.status(404);
            }
        } catch (error) {
            next(error);
        }
    },

    addTender: async (req, res, next) => {
        try {
            res.render('addTender');
        } catch (error) {
            next(error);
        }
    },

    addedTender: async (req, res, next) => {
        const { title, institution, description, startDate, endDate, budget } = req.body;
        try {
            await TenderService.createTender(title, institution, description, startDate, endDate, budget);
            res.render('addedTender');
        } catch (error) {
            next(error);
        }
    },

};

module.exports = tenderController;
