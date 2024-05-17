const OfferService = require('../services/offerService');

const offerController = {

    addOffer: async (req, res, next) => {
        const { tenderId } = req.params;
        try {
            const r = await OfferService.checkIfOffersTenderIsActive(tenderId);
            if (r != 200) {
                res.render('error', { error: { status: "404" }, message: "Not Found" });
                return res.status(404);
            }
            const tender = await OfferService.getOffersTenderById(tenderId);
            res.render('addOffer', { tender: tender });
        } catch (error) {
            next(error);
        }
    },

    addedOffer: async (req, res, next) => {
        const { tenderId } = req.params;
        const { name, value } = req.body;
        try {
            const r = await OfferService.checkIfOffersTenderIsActive(tenderId);
            if (r != 200) {
                res.render('error', { error: { status: "404" }, message: "Not Found" });
                return res.status(404);
            }
            const tender = await OfferService.getOffersTenderById(tenderId);
            await OfferService.createOffer(tenderId, name, value);
            res.render('addedOffer', { tender: tender });
        } catch (error) {
            next(error);
        }
    },

};

module.exports = offerController;
