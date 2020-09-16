"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const FAQ = use("App/Models/FAQ")

class FAQController {

    async getAllFAQs({ request, auth, response, params }) {
        const faq = await FAQ.all();
        console.log(faq)
        return response.status(200).json(faq);

    }
    async getFAQBasedOnId({ request, auth, response, params }) {
        //console.log(params.FAQId)
        const faq = await FAQ.find(params.FAQId);
        //console.log(FAQ)
        return response.status(200).json(faq);
    }

    async createFAQ({ request, auth, response, params }) {
        let FAQInput = request.all();
        console.log(FAQInput)
        const faq = await FAQ.findOrCreate(FAQInput);
        return response.status(200).json(faq);
    }

    async updateFAQ({ request, auth, response, params }) {
        let FAQInput = request.all();
        console.log(FAQInput)
        let faq = await FAQ.find(params.id);
        faq = _.merge(faq, FAQInput);
        await faq.save();
        return response.status(200).json(faq);
    }
    async deleteFAQ({ request, auth, response, params }) {

        const faq = await FAQ.find(params.id);
        await faq.delete();
        return response.status(200).json(faq);
    }



}
module.exports = FAQController;
